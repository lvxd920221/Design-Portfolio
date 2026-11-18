/* ============================================================
   Hero 3D · 机器人分身
   - model-viewer 延迟加载（不阻塞首屏）
   - 加载失败 / 无 WebGL 时保留原静态图
   - 拖拽旋转 / 滚轮缩放 / 双指缩放 / 自动旋转
   ============================================================ */
(function () {
  // 基准屏（?tpl=1）保持逐像素纯净，不加载任何 3D 资源
  if (new URLSearchParams(location.search).get("tpl") === "1") return;

  var stage = document.getElementById("portraitStage");
  var mv = document.getElementById("hero3d");
  if (!stage || !mv) return;

  // 自托管 model-viewer 4.4.0（BSD-3-Clause, Google LLC），避免跨境 CDN 抖动
  var LIB = "assets/vendor/model-viewer.min.js";
  var isReady = false;

  function ready() {
    isReady = true;
    stage.classList.remove("is-fallback");
    stage.classList.add("is-ready");
  }
  function fail() {
    if (isReady) return;
    stage.classList.add("is-fallback");
  }

  mv.addEventListener("load", ready);
  mv.addEventListener("error", fail);

  // 尊重「减少动态效果」偏好：不自动旋转、不自动播放
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    mv.removeAttribute("auto-rotate");
    mv.removeAttribute("autoplay");
    mv.removeAttribute("animation-name");
  }

  function loadViewer() {
    if (window.customElements && customElements.get("model-viewer")) return;
    var s = document.createElement("script");
    s.type = "module";
    s.crossOrigin = "anonymous";
    s.src = LIB;
    s.onerror = fail;
    document.head.appendChild(s);
    // 兜底：15 秒仍未就绪则定格静态图（若之后加载成功仍会切换）
    setTimeout(fail, 15000);
  }

  // 页面 load 后再启动，既不抢首屏 LCP，也不受后台标签页 idle 节流影响
  if (document.readyState === "complete") {
    setTimeout(loadViewer, 300);
  } else {
    addEventListener("load", function () { setTimeout(loadViewer, 300); }, { once: true });
  }

  // 首次交互后淡出提示文案
  ["pointerdown", "wheel", "touchstart"].forEach(function (t) {
    stage.addEventListener(t, function () {
      stage.classList.add("is-touched");
    }, { passive: true, once: true });
  });
})();
