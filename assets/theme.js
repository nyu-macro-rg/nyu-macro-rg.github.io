/* Dark-mode toggle.
 *
 * The stored choice is applied by a tiny inline script in <head> so the page
 * paints in the right theme immediately; this file only wires up the button.
 * With no JavaScript the button stays hidden and the site follows the OS, which
 * is the behaviour it had before.
 */
(function () {
  "use strict";

  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;
  btn.hidden = false;                        // only useful once JS is running

  function stored() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }

  function effective() {
    var t = root.getAttribute("data-theme");
    if (t === "dark" || t === "light") return t;
    return window.matchMedia &&
           window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function relabel() {
    var next = effective() === "dark" ? "light" : "dark";
    var text = "Switch to " + next + " theme";
    btn.setAttribute("aria-label", text);
    btn.setAttribute("title", text);
  }

  relabel();

  btn.addEventListener("click", function () {
    var next = effective() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    relabel();
  });

  // Keep following the OS for anyone who has not made a choice.
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onChange = function () { if (!stored()) relabel(); };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }
})();
