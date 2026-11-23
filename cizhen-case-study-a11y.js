/* 磁振案例页 · 无障碍增强
   放在原页面现有 <script> 之后、</body> 之前。
   不替换原有筛选、灯箱切换和双通道演示逻辑。 */
(() => {
  const lightbox = document.getElementById('lightbox');
  const closeButton = document.getElementById('close');
  const filters = document.getElementById('filters');
  const search = document.getElementById('search');
  if (!lightbox) return;

  // 为原有灯箱补充对话框语义与焦点管理。
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', '界面大图预览');
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.setAttribute('tabindex', '-1');

  let previousFocus = null;
  let wasOpen = false;

  const syncLightbox = () => {
    const isOpen = lightbox.classList.contains('open');
    if (isOpen && !wasOpen) {
      previousFocus = document.activeElement;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.dataset.caseScrollLock = document.body.style.overflow || '';
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => (closeButton || lightbox).focus());
    } else if (!isOpen && wasOpen) {
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = document.body.dataset.caseScrollLock || '';
      delete document.body.dataset.caseScrollLock;
      if (previousFocus && typeof previousFocus.focus === 'function') {
        previousFocus.focus();
      }
    }
    wasOpen = isOpen;
  };

  new MutationObserver(syncLightbox).observe(lightbox, {
    attributes: true,
    attributeFilter: ['class']
  });

  // 原图库由 JS 动态生成；为每张可点击缩略图补上键盘操作。
  const makeGalleryItemsAccessible = () => {
    document.querySelectorAll('#galleryGrid .shot').forEach((item) => {
      if (item.dataset.keyboardReady) return;
      item.dataset.keyboardReady = 'true';
      item.tabIndex = 0;
      item.setAttribute('role', 'button');
      const title = item.querySelector('figcaption b')?.textContent || '界面预览';
      item.setAttribute('aria-label', `放大查看：${title}`);
      item.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          item.click();
        }
      });
    });
  };

  const grid = document.getElementById('galleryGrid');
  if (grid) {
    makeGalleryItemsAccessible();
    new MutationObserver(makeGalleryItemsAccessible).observe(grid, {
      childList: true
    });
  }

  // 筛选按钮状态可被读屏软件识别。
  if (filters) {
    const syncFilters = () => {
      filters.querySelectorAll('button[data-group]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.classList.contains('active')));
      });
    };
    syncFilters();
    filters.addEventListener('click', syncFilters);
  }

  if (search) {
    search.setAttribute('aria-label', '搜索界面名称');
  }

  // 灯箱开启时限制 Tab 焦点在对话框内部。
  lightbox.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab' || !lightbox.classList.contains('open')) return;
    const focusables = [...lightbox.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')]
      .filter((el) => el.offsetParent !== null);
    if (!focusables.length) {
      event.preventDefault();
      lightbox.focus();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
