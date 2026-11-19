/* ============================================================
   Hero 3D · 月球（标题下方，缓慢自转）
   - model-viewer 延迟加载，不阻塞首屏
   - 加载期只有一枚细环占位；失败即留白 —— 不再注入任何静态兜底图
   - 自转由 GLB 内置 spin 动画驱动（90s 一圈）：球体法线自转不变，
     明暗构图恒定，只有月面在明暗交界线上缓慢滑过
   - 拖拽旋转 / 滚轮缩放 / 双指缩放；画布 130% + 相机半径同步放大，
     放大后仍可完整查看，不被容器裁切
   ============================================================ */
(function () {
  // 基准屏（?tpl=1）保持逐像素纯净，不加载任何 3D 资源
  if (new URLSearchParams(location.search).get("tpl") === "1") return;

  var stage = document.getElementById("portraitStage");
  var mv = document.getElementById("hero3d");
  if (!stage || !mv) return;

  // 自托管 model-viewer 4.4.0（Apache-2.0, Google LLC），避免跨境 CDN 抖动
  var LIB = "assets/vendor/model-viewer.min.js";
  var isReady = false;

  // 失败只收起加载环，留白；不再插静态头像顶层图
  function markFailed() {
    if (isReady) return;
    stage.classList.add("is-failed");
  }

  // auto 半径只取决于模型本身；画布放大到 130% 后，把它同步 ×1.3 才能保持原有观感。
  // 百分比上下限在本版本实测不生效，统一换算成米写入。
  //
  // 放大上限：滚轮放大在本版本先缩半径、触底后再缩 fov（二次放大）。
  // 若把下限写成初始半径，放大即被钳死；若放开下限又不锁 fov，
  // 半径触底后 fov 会继续缩小，形成二次放大并溢出画布。
  // 故：半径留余量 + 把 min-field-of-view 锁成解算值，放大只由半径一档决定。
  //
  // 月球取 1.18×：球体投影与旋转无关，可由相机数学精确解算，无需多角度回归。
  // 圆盘直径 D = canvasH · tan(asin(1/z)) / tan(fov/2)，z 为相机半径（单位：球半径）。
  var ZOOM_IN = 1.18;
  var fitR = 0;
  function applyFraming() {
    var fit = fitR || mv.getCameraOrbit().radius;
    if (!isFinite(fit) || fit <= 0) return;
    fitR = fit;
    var baseR = fit * 1.3;   // 画布 130% 时保持原有观感的半径
    // 先写上下限再写取景：顺序反过来时实测 camera-orbit 会被夹到下限值
    mv.setAttribute("min-camera-orbit", "auto 50deg " + (baseR / ZOOM_IN).toFixed(3) + "m");
    mv.setAttribute("max-camera-orbit", "auto 108deg " + (fit * 2.6).toFixed(3) + "m");
    // fov 锁定在解算值：不让它成为第二次放大，放大只由半径一档决定
    var fov = mv.getFieldOfView();
    if (isFinite(fov) && fov > 0) mv.setAttribute("min-field-of-view", fov.toFixed(2) + "deg");
    mv.setAttribute("camera-orbit", "0deg 80deg " + baseR.toFixed(3) + "m");
  }

  var rt = 0;
  addEventListener("resize", function () {
    if (!isReady) return;
    clearTimeout(rt);
    rt = setTimeout(applyFraming, 200);
  });

  function ready() {
    if (isReady) return;
    isReady = true;
    stage.classList.remove("is-failed");
    stage.classList.add("is-ready");

    // model-viewer 在画布正中心留了一个 8×8 的 default-pan-target（平移提示点），
    // pointer-events 是 auto，会吞掉正好落在圆心上的按下/滚轮事件
    // （实测 1440 视口拖拽与缩放中心点无反应，偏 30% 处正常）。装饰元素，关掉命中。
    var pt = mv.shadowRoot && mv.shadowRoot.querySelector("#default-pan-target, .default-pan-target");
    if (pt) pt.style.pointerEvents = "none";

    // load 事件里读到的是解算前的旧半径，auto 真实值要过几帧才出现；
    // 且百分比下限实测不生效，故采样真实半径换算成米写入。
    // load 那一帧半径可能还没解算（读出来是 0/NaN），applyFraming 会直接返回；
    // 原先只试一次，偶发取景不生效（同一页面两次刷新 radius 4.06 / 5.27 不一致）。
    // 改为按帧重试，最多 40 帧（≈1.2s），成功即停。
    var tries = 0;
    (function framingRetry() {
      var r = mv.getCameraOrbit().radius;
      if (isFinite(r) && r > 0) { applyFraming(); }
      else if (++tries < 40) { requestAnimationFrame(framingRetry); }
    })();
  }

  mv.addEventListener("load", ready);
  mv.addEventListener("error", markFailed);

  // 尊重「减少动态效果」偏好：不自动播放
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

  // DOM 就绪即启动：不等图片 load（实测线上 load 可晚到 17s）；
  // 脚本本身 defer，此时仅剩首屏文字与样式在跑，1MB 依赖不抢 LCP。
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
