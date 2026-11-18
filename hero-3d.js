/* ============================================================
   Hero 3D · 机器人分身
   - model-viewer 延迟加载（不阻塞首屏）
   - 加载失败 / 无 WebGL 时保留原静态图
   - 拖拽旋转 / 滚轮缩放 / 双指缩放 / 轻微自动摆动
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

  // 轻微左右摆动：始终展示正脸，又能读出体积感；用户一上手即停
  var swayStopped = false, swayOn = false;
  function stopSway() { swayStopped = true; }
  function startSway() {
    if (swayOn) return;
    swayOn = true;
    // pointerdown 若发生在 shadow tree 内会重定向到宿主，故舞台与宿主都监听
    [stage, mv].forEach(function (t) {
      t.addEventListener("pointerdown", stopSway, { once: true, passive: true });
      t.addEventListener("wheel", stopSway, { once: true, passive: true });
      t.addEventListener("touchstart", stopSway, { once: true, passive: true });
    });
    (function tick() {
      if (swayStopped) return;
      var t = performance.now() / 1000;
      mv.cameraOrbit = (Math.sin(t * 0.33) * 11).toFixed(2) + "deg 80deg auto";
      requestAnimationFrame(tick);
    })();
  }

  function ready() {
    isReady = true;
    stage.classList.remove("is-fallback");
    stage.classList.add("is-ready");
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) startSway();
  }
  function fail() {
    if (isReady) return;
    stage.classList.add("is-fallback");
  }

  mv.addEventListener("load", ready);
  mv.addEventListener("error", fail);

  // 尊重「减少动态效果」偏好：不自动旋转、不自动播放
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
    s.onerror = fail;
    document.head.appendChild(s);
    // 兜底：15 秒仍未就绪则定格静态图（若之后加载成功仍会切换）
    setTimeout(fail, 15000);
  }

  // DOM 就绪即启动：不等图片 load（实测线上 load 可晚到 17s，机器人会迟到十几秒）；
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
