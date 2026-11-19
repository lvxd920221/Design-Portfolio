/* ============================================================
   Hero 3D · 整屏星群（图层在标题之下）
   - 18 颗星球同处一个 glTF 场景：前后遮挡由深度缓冲处理，不靠 CSS z-index
   - 每颗星球各自缓慢自转（GLB 内置 spin 通道，90s 一圈）
   - 画布铺满首屏、固定 45° fov；相机在 14m（窄屏 18m），可拖拽/滚轮
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
  if (innerWidth < 700) {
    mv.setAttribute("camera-orbit", "0deg 90deg 18m");
    mv.setAttribute("max-camera-orbit", "auto 125deg 30m");
  }

  function markFailed() {
    if (isReady) return;
    stage.classList.add("is-failed");   // 只收起加载环，留白，不补图
  }

  function ready() {
    if (isReady) return;
    isReady = true;
    stage.classList.remove("is-failed");
    stage.classList.add("is-ready");

    // model-viewer 画布正中心有一个 8×8 的 default-pan-target（平移提示点），
    // pointer-events 是 auto，会吞掉正好落在圆心上的按下/滚轮事件。装饰元素，关掉命中。
    var pt = mv.shadowRoot && mv.shadowRoot.querySelector("#default-pan-target, .default-pan-target");
    if (pt) pt.style.pointerEvents = "none";
  }

  mv.addEventListener("load", ready);
  mv.addEventListener("error", markFailed);

  // 尊重「减少动态效果」偏好：星球不自转（场景本身仍在）
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    mv.removeAttribute("autoplay");
    mv.removeAttribute("animation-name");
  }

  function loadViewer() {
    if (window.customElements && customElements.get("model-viewer")) return;
    var s = document.createElement("script");
    s.type = "module";
    s.crossOrigin = "anonymous";
    s.src = LIB;
    s.onerror = markFailed;
    document.head.appendChild(s);
  }

  // DOM 就绪即启动：不等图片 load，脚本 defer，1MB 依赖不抢 LCP
  if (document.readyState === "loading") {
    addEventListener("DOMContentLoaded", function () { setTimeout(loadViewer, 250); }, { once: true });
  } else {
    setTimeout(loadViewer, 250);
  }

  // 首次交互后淡出提示文案
  ["pointerdown", "wheel", "touchstart"].forEach(function (t) {
    stage.addEventListener(t, function () {
      stage.classList.add("is-touched");
    }, { passive: true, once: true });
  });
})();
