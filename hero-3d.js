/* ============================================================
   Hero 3D · 机器人分身
   - model-viewer 延迟加载（不阻塞首屏）
   - 加载中出现空白，不预置任何静态图；仅在失败时按需注入兜底图
   - 拖拽旋转 / 滚轮缩放 / 双指缩放 / 轻微自动摆动
   - 画布 130% + 相机半径同步放大：放大后仍可完整查看，不被容器裁切
   ============================================================ */
(function () {
  // 基准屏（?tpl=1）保持逐像素纯净，不加载任何 3D 资源
  if (new URLSearchParams(location.search).get("tpl") === "1") return;

  var stage = document.getElementById("portraitStage");
  var mv = document.getElementById("hero3d");
  if (!stage || !mv) return;

  // 自托管 model-viewer 4.4.0（Apache-2.0, Google LLC），避免跨境 CDN 抖动
  var LIB = "assets/vendor/model-viewer.min.js";
  var FALLBACK_SRC = "assets/avatar-300.png";
  var isReady = false;
  var fallbackEl = null;

  // 只在真正失败时才把静态图插进来，避免"加载前先闪一下旧图"
  function showFallback() {
    if (isReady) return;
    if (!fallbackEl) {
      fallbackEl = document.createElement("img");
      fallbackEl.className = "portrait-fallback";
      fallbackEl.alt = "吕孝冬";
      fallbackEl.decoding = "async";
      fallbackEl.src = FALLBACK_SRC;
      stage.insertBefore(fallbackEl, stage.firstChild);
    }
    stage.classList.add("is-fallback");
  }

  // 轻微左右摆动：始终展示正脸，又能读出体积感；用户一上手即停
  var swayStopped = false, swayOn = false, baseR = 0;   // baseR：显式半径，摆动时保持不变
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
      mv.cameraOrbit = (Math.sin(t * 0.33) * 11).toFixed(2) + "deg 80deg " + baseR.toFixed(3) + "m";
      requestAnimationFrame(tick);
    })();
  }

  // auto 半径只取决于模型本身（不随画布尺寸变化，实测 10.164m）；
  // 画布放大到 130% 后，把它同步 ×1.3 才能保持原有观感。
  // 百分比上下限在本版本实测不生效，统一换算成米写入。
  //
  // 放大上限：滚轮放大在本版本先缩半径、触底后再缩 fov（二次放大），
  // 若把下限写成初始半径，放大即被钳死（实测滚轮 6 次半径/fov 全无变化）；
  // 若放开下限又留 min-field-of-view=22deg，半径到 11.198 时 fov 掉到 22°，
  // 合成投影 537×749 顶满画布并四周溢出 40–86px。故：半径留小余量 + 锁死 fov。
  // 逐档实测（1440 视口，stage 432×576，投影随半径近似线性）：
  //   1.22× → 383×547 贴框；1.28× → 底部溢出 4px；
  //   1.18× 十角度回归最小余量仅 2px；取 1.10× 后最小余量 ≈20px。
  var ZOOM_IN = 1.10;
  var fitR = 0;
  function applyFraming() {
    var fit = fitR || mv.getCameraOrbit().radius;
    if (!isFinite(fit) || fit <= 0) return;
    fitR = fit;
    baseR = fit * 1.3;   // 画布 130% 时保持原有观感的半径
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
    if (fallbackEl) { fallbackEl.remove(); fallbackEl = null; }
    stage.classList.remove("is-fallback");

    stage.classList.add("is-ready");
    // load 事件里读到的是解算前的旧半径（10.164），auto 真实值要过几帧才出现；
    // 且百分比下限实测不生效（4.685 vs 期望 10.5），故采样 600ms 内的最大半径换算成米写入。
    requestAnimationFrame(function () {
      applyFraming();
      if (!matchMedia("(prefers-reduced-motion: reduce)").matches) startSway();
    });
  }

  mv.addEventListener("load", ready);
  mv.addEventListener("error", showFallback);

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
    s.onerror = showFallback;
    document.head.appendChild(s);
    // 兜底：15 秒仍未就绪则显示静态图（若之后加载成功仍会切换成 3D）
    setTimeout(showFallback, 15000);
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
