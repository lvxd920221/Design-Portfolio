/* ============================================================
   Hero 3D · 整屏星群（图层在标题之下，可拖拽旋转）
   - 35 颗星球同处一个 glTF 场景：前后遮挡由深度缓冲处理，不靠 CSS z-index
   - 每颗星球各自缓慢自转（GLB 内置 spin 通道，90s 一圈）
   - 画布铺满首屏、固定 45° fov；相机 10m（窄屏 14m），星球更大
   - 鼠标拖拽可绕场景旋转；disable-pan / disable-zoom 关掉平移与缩放，页面滚动照常
   - 加载期只有一枚细环；失败即留白，不注入任何静态图
   ============================================================ */
(function () {
  // 基准屏（?tpl=1）保持逐像素纯净，不加载任何 3D 资源
  if (new URLSearchParams(location.search).get("tpl") === "1") return;

  var stage = document.getElementById("portraitStage");
  var mv = document.getElementById("hero3d");
  if (!stage || !mv) return;

  // 自托管 model-viewer 4.4.0（Apache-2.0, Google LLC）
  var LIB = "assets/vendor/model-viewer.min.js";
  var isReady = false;

  // 窄屏视野更窄，相机后退一点，保证主星球与两侧星球都进画
  if (innerWidth < 700) mv.setAttribute("camera-orbit", "0deg 90deg 14m");

  function markFailed() {
    if (isReady) return;
    stage.classList.add("is-failed");   // 只收起加载环，留白，不补图
  }

  function ready() {
    if (isReady) return;
    isReady = true;
    stage.classList.remove("is-failed");
    stage.classList.add("is-ready");

    // 画布正中心的 8×8 default-pan-target 会吞掉圆心上的按下事件 —— 关掉它的命中
    var pt = mv.shadowRoot && mv.shadowRoot.querySelector("#default-pan-target, .default-pan-target");
    if (pt) pt.style.pointerEvents = "none";

    // 显式启动内置 spin 动画（autoplay/animation-name 在部分 CDN 抖动场景未生效）
    try {
      if (mv.availableAnimations && mv.availableAnimations.length && !mv.currentAnimation) {
        var anim = mv.availableAnimations.filter(function (a) { return a && a.name === "spin"; })[0]
          || mv.availableAnimations[0];
        if (anim) { anim.play(); mv.timeScale = 1; }
      }
    } catch (err) {}
  }

  mv.addEventListener("load", ready);
  mv.addEventListener("error", markFailed);

  // 尊重「减少动态效果」偏好：星球不自转（场景本身仍在）
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    mv.removeAttribute("autoplay");
    mv.removeAttribute("animation-name");
  }

  // 静态 module 已在 HTML 中引入；这里只做「注册成功」轮询 + 有限重试。
  // 大文件（1MB）在 CDN 可能被截断：HTTP 200 不代表模块已执行，必须以 customElements 注册为准。
  var tries = 0, MAX_TRIES = 3;
  function registered() { return !!(window.customElements && customElements.get("model-viewer")); }
  function retryLoad() {
    if (registered() || isReady || tries >= MAX_TRIES) return;
    tries++;
    var s = document.createElement("script");
    s.type = "module";
    s.crossOrigin = "anonymous";
    s.src = LIB + "?retry=" + tries;
    document.head.appendChild(s);   // 静态引入失败时的兜底重试，破缓存
  }
  function loadViewer() {
    if (registered()) { ready(); return; }
    // 首次主动注入（基准屏已在文件顶部 return，不会走到这里）
    retryLoad();
    // 轮询注册：每 400ms 检查一次，最多 ~8s；期间不标记 is-failed
    var waited = 0;
    var timer = setInterval(function () {
      if (registered()) { clearInterval(timer); ready(); return; }
      waited += 400;
      if (waited === 2000 || waited === 5000) retryLoad();
      if (waited >= 8000) { clearInterval(timer); markFailed(); }
    }, 400);
  }

  // DOM 就绪即启动：不等图片 load，脚本 defer，1MB 依赖不抢 LCP
  if (document.readyState === "loading") {
    addEventListener("DOMContentLoaded", loadViewer, { once: true });
  } else {
    loadViewer();
  }

  // 首次拖拽后淡出提示文案
  ["pointerdown", "touchstart"].forEach(function (t) {
    stage.addEventListener(t, function () {
      stage.classList.add("is-touched");
    }, { passive: true, once: true });
  });
})();

/* 可访问性/健壮性补强（追加）：3D 长时间未就绪则标记失败；减少动态效果下停自动旋转 */
(function () {
  var mv = document.getElementById("hero3d");
  var stage = document.getElementById("portraitStage");
  if (!mv || !stage) return;
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) {
    mv.removeAttribute("auto-rotate");
    mv.setAttribute("auto-rotate-delay", "0");
  }
})();
