(function () {
  var el = null, tween = null, lastStep = 0;
  var LABELS = {
    es: ["Leonardo Trejos", "Sobre mí", "Stack", "Proyectos", "3D", "Certificados", "Experiencia", "Educación", "Contacto"],
    en: ["Leonardo Trejos", "About", "Stack", "Work", "3D", "Certifications", "Experience", "Education", "Contact"]
  };

  function lang() {
    return document.documentElement.getAttribute("data-lang") === "en" ? "en" : "es";
  }

  function tweenTo(target) {
    if (tween) clearInterval(tween);
    var from = el.scrollLeft, dist = target - from;
    if (Math.abs(dist) < 2) return;
    var t0 = Date.now(), dur = 620;
    tween = setInterval(function () {
      var p = Math.min(1, (Date.now() - t0) / dur);
      el.scrollLeft = from + dist * (1 - Math.pow(1 - p, 3));
      sync();
      if (p >= 1) { clearInterval(tween); tween = null; }
    }, 16);
  }

  function step(dir) {
    pulse();
    var w = el.clientWidth;
    var cur = Math.round(el.scrollLeft / w);
    var next = Math.max(0, Math.min(8, cur + dir));
    tweenTo(Math.min(el.scrollWidth - w, next * w));
  }

  window.leoStep = step;
  window.leoGoTo = function (id) {
    var sec = document.getElementById(id);
    if (sec && el) { tweenTo(Math.min(el.scrollWidth - el.clientWidth, sec.offsetLeft)); pulse(); }
  };

  var burst = null, burstEnd = 0;
  function pulse() {
    burstEnd = Date.now() + 1400;
    if (burst) return;
    burst = setInterval(function () {
      sync();
      if (Date.now() > burstEnd) { clearInterval(burst); burst = null; }
    }, 80);
  }

  function sync() {
    var w = el.clientWidth, max = el.scrollWidth - w;
    var prog = max > 0 ? el.scrollLeft / max : 0;
    var idx = Math.min(8, Math.round(el.scrollLeft / w));
    var rail = document.getElementById("leo-rail");
    if (rail) rail.style.width = (prog * 100).toFixed(2) + "%";
    var num = document.getElementById("leo-num");
    if (num) num.textContent = String(idx + 1).replace(/^(\d)$/, "0$1");
    var lbl = document.getElementById("leo-label");
    if (lbl) lbl.textContent = LABELS[lang()][idx] || "";
  }

  function onWheel(e) {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    var panel = e.target && e.target.closest ? e.target.closest("[data-scroll] > section") : null;
    if (panel && panel.scrollHeight - panel.clientHeight > 40) {
      var atTop = panel.scrollTop <= 0;
      var atEnd = panel.scrollTop >= panel.scrollHeight - panel.clientHeight - 1;
      if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atTop)) return;
    }
    e.preventDefault();
    var now = Date.now();
    if (now - lastStep < 460) return;
    lastStep = now;
    step(e.deltaY > 0 ? 1 : -1);
    pulse();
  }

  function onKey(e) {
    if (!el) return;
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  }

  var find = setInterval(function () {
    var found = document.querySelector("[data-scroll]");
    if (!found || found === el) return;
    el = found;
    window.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("scroll", function () { sync(); pulse(); }, { passive: true });
    el.addEventListener("touchmove", pulse, { passive: true });
    window.addEventListener("resize", pulse);
    setInterval(sync, 90);
    sync();
  }, 120);
  setTimeout(function () { clearInterval(find); }, 15000);
  window.addEventListener("keydown", onKey);
})();
