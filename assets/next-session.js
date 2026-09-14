/* Keeps the page honest between builds.
 *
 * Jekyll renders "next session" at build time. If nobody pushes for a month,
 * that would silently go stale. This re-evaluates against the visitor's own
 * clock on every load, so the site stays correct with no rebuild.
 *
 * Progressive enhancement: with JS off the full schedule still renders, and
 * the hero just shows whatever was current at the last build.
 */
(function () {
  "use strict";

  // Parse YYYY-MM-DD as a LOCAL date. new Date("2026-09-16") is UTC midnight,
  // which reads as the 15th anywhere west of Greenwich.
  function localDate(iso) {
    var p = iso.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  function startOfToday() {
    var n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), n.getDate());
  }

  var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var MONTHS = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];

  var today = startOfToday();
  var rows = Array.prototype.slice.call(document.querySelectorAll(".session[data-date]"));

  // 1. Re-apply the past/upcoming styling against the real clock.
  rows.forEach(function (row) {
    row.classList.toggle("is-past", localDate(row.dataset.date) < today);
  });

  // 2. Rebuild the hero from the first upcoming real session on this page.
  var hero = document.getElementById("next-session");
  if (!hero) return;

  var next = null;
  for (var i = 0; i < rows.length; i++) {
    if (!rows[i].dataset.status && localDate(rows[i].dataset.date) >= today) {
      next = rows[i];
      break;
    }
  }

  if (!next) { hero.hidden = true; return; }
  hero.hidden = false;

  var d = localDate(next.dataset.date);
  var when = hero.querySelector('[data-field="when"]');
  if (when) {
    var time = hero.dataset.time ? " · " + hero.dataset.time : "";
    when.textContent = DAYS[d.getDay()] + ", " + MONTHS[d.getMonth()] + " " + d.getDate() + time;
  }

  // Mirror the row's own markup so the hero can never disagree with the list.
  [["title", ".title"], ["authors", ".authors"], ["who", ".who"], ["links", ".links"]]
    .forEach(function (pair) {
      var target = hero.querySelector('[data-field="' + pair[0] + '"]');
      var source = next.querySelector(pair[1]);
      if (!target) return;
      if (source) {
        target.innerHTML = source.innerHTML;
        target.hidden = false;
      } else {
        target.hidden = true;
      }
    });
})();
