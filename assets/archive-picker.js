/* Turns the semester anchor list into a filter.
 *
 * Progressive enhancement: with JS off, every semester is already rendered and
 * the links are ordinary in-page anchors. This only narrows what is shown.
 */
(function () {
  "use strict";

  var picker = document.getElementById("semester-picker");
  var list = document.getElementById("semester-list");
  if (!picker || !list) return;

  var links = Array.prototype.slice.call(picker.querySelectorAll("a[data-sem]"));
  var blocks = Array.prototype.slice.call(list.querySelectorAll(".semester-block[data-sem]"));
  if (!links.length || !blocks.length) return;

  function show(id, focus) {
    blocks.forEach(function (b) { b.hidden = b.dataset.sem !== id; });
    links.forEach(function (a) {
      var on = a.dataset.sem === id;
      a.classList.toggle("is-active", on);
      a.setAttribute("aria-current", on ? "true" : "false");
    });
    if (history.replaceState) history.replaceState(null, "", "#" + id);
    if (focus) {
      var h = list.querySelector('.semester-block[data-sem="' + id + '"] h2');
      if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    }
  }

  // Deep links (/archive/#2023-fall) must still land on the right semester.
  var initial = decodeURIComponent((location.hash || "").replace(/^#/, ""));
  var valid = blocks.some(function (b) { return b.dataset.sem === initial; });
  show(valid ? initial : blocks[0].dataset.sem, false);

  picker.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a[data-sem]") : null;
    if (!a) return;
    e.preventDefault();
    show(a.dataset.sem, true);
  });

  window.addEventListener("hashchange", function () {
    var id = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    if (blocks.some(function (b) { return b.dataset.sem === id; })) show(id, true);
  });
})();
