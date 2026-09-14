# NYU Macro Reading Group website

Live at **https://nyu-macro-rg.github.io**

---

## How to add a session

You do not need to install anything, use the command line, or know git. Everything
happens in the browser, and it takes about two minutes.

1. Open **[`_data/sessions.yml`](../../edit/main/_data/sessions.yml)**. (That link opens it
   ready to edit. If you get a "fork this repository" message, you are not yet a member of
   the organization: ask the previous organizer to add you.)
2. Find the semester you want, near the top of the file. The current semester is the one
   marked `current: true`.
3. Find the date you are filling in. Most future dates are already there, like this:

   ```yaml
         - date: 2026-09-23
           status: tbd
   ```

4. Replace that block with the real session. **Delete the `status: tbd` line** — that line is
   what makes it show as "To be announced":

   ```yaml
         - date: 2026-09-23
           presenter: "Jane Doe"
           authors: "Smith, Wang"
           title: "A Paper About Something"
           paper_url: "https://www.nber.org/papers/w12345"
   ```

5. Scroll down, click **Commit changes**, and confirm.

The site rebuilds itself. Give it a minute, then reload the page. That's it.

### Indentation matters

YAML cares about spaces. The safest method is to **copy an existing session block and change
the words**, rather than typing a new one. Every session starts with `- date:` at the same
indentation as the one above it. Never use tab characters.

If you break the *formatting*, the site keeps showing the last good version and GitHub emails
you that the build failed. Undo by opening the file's **History** and reverting your change.

Be aware of the one mistake that does **not** announce itself: `current: true` must appear on
exactly one semester. That is valid YAML either way, so the build succeeds and no email is
sent. If two semesters are flagged, the front page shows one of them and the site quietly
behaves as though you meant it. Whenever you start a new semester, load the front page **and**
the Past sessions page and check that every semester appears on exactly one of them.

---

## How to add slides

Two steps, both in the browser.

1. Go to **[`files/slides/`](../../tree/main/files/slides)**, open the folder for the current
   semester (create one named like `2027-spring` if it does not exist yet), click
   **Add file → Upload files**, and drop the PDF in.

   Name it `YYYY-MM-DD-lastname.pdf`, matching the session date. For example
   `2026-09-23-doe.pdf`.

2. Edit `_data/sessions.yml` and add **one line** to that session:

   ```yaml
         - date: 2026-09-23
           presenter: "Jane Doe"
           authors: "Smith, Wang"
           title: "A Paper About Something"
           paper_url: "https://www.nber.org/papers/w12345"
           slides: "/files/slides/2026-fall/2026-09-23-doe.pdf"
   ```

Note the leading `/` and that the path has no `https://` in front of it.

**Ask before posting.** Slides belong to the person who made them. The standing arrangement
is that presenters are told slides go on the site and can opt out. If someone has not been
told, ask them first.

---

## Other things you might need

### Start a new semester

Copy the whole `- id: 2026-fall` block, paste it above the old one, and:

- change `id` and `label` (for example `2027-spring` / `"Spring 2027"`),
- move `current: true` to the new block and **delete it from the old one**, exactly one
  semester is ever current,
- set `time:` to the meeting time for that semester (it has changed before),
- replace the sessions with the term's Wednesdays, each as `status: tbd`,
- set `location:` if the room changed (it has, several times),
- leave `archived:` and `source_url:` out. Those two belong only to the semesters imported
  from the old Google Site.

Then check the front page and Past sessions, per the warning above.

### Cancel a session or mark a break

```yaml
      - date: 2026-11-25
        status: break
        note: "Thanksgiving break"
```

Use `status: break` for a planned non-meeting and `status: cancelled` for one called off.
The `note` is optional.

### Change the organizer, room, or time

Top of `_data/sessions.yml`, under `meta:` (room, organizer) or on the semester (time).

### Hand the site to the next organizer

Go to the organization's **People** page, add them, and set their role to **Owner**. Do this
*before* you lose access to your NYU account.

Keep at least three owners, and make sure **at least one of them is not a graduating student**
(a faculty member is ideal). This is the whole reason the site was rebuilt: the previous one
was owned by a student who graduated, and once he left, nobody could edit it. Two student
owners only delays that by a year. Check the People page now and fix it if it is short.

---

## For anyone who wants to work on it locally

Not required for normal upkeep.

```bash
git clone git@github.com:nyu-macro-rg/nyu-macro-rg.github.io.git
cd nyu-macro-rg.github.io
bundle install
bundle exec jekyll serve      # http://localhost:4000
```

### How it is put together

Plain Jekyll, built by GitHub Pages itself. There is no CI pipeline, no build script, and no
JavaScript framework, deliberately: this site has to survive being handed to a new person
every year, and every moving part is something that can break while nobody is watching.

| Path | What it is |
|---|---|
| `_data/sessions.yml` | All the content. The only file most people ever touch. |
| `_layouts/default.html` | Page shell, header, nav, footer. |
| `_includes/session.html` | Renders one row of the schedule. |
| `_includes/semester.html` | Renders a semester heading plus its sessions, sorted by date. |
| `_includes/current.html` | Works out which semester is "current", defensively. |
| `404.html` | Shown for a mistyped URL. |
| `index.html` | Current semester and the "next session" panel. |
| `archive.html` | Every past semester. |
| `resources.html` | Guidance for presenters. |
| `assets/style.css` | All styling. |
| `assets/next-session.js` | ~70 lines. Recomputes which session is next using the visitor's clock, so the front page stays correct even if nobody pushes for months. |
| `files/` | Slide PDFs and the presentation-tips handout. |
| `quality_reports/provenance.md` | Where every listed session came from, three places the historical record was wrong, and which entries are less reliable. |

Papers are linked, never hosted. Slides are hosted, with the presenter's agreement.


---

## Things that will break eventually

Written down because the person who hits them will not be the person who built this.

**The old Google Site will die.** Everything before Fall 2025 on the Past sessions page links
to `sites.google.com/nyu.edu/bggmrg` for its papers and slides. That site is orphaned: owned by
a student who graduated, storage full, uneditable by anyone still here. We copied the
*schedules* across so the record survives, but not the files. When those links start 404ing,
the fix is to delete the "Papers and slides for this semester are on the previous site" line
by removing `source_url` from those semesters. The session listings themselves will be fine.

**Archived sessions are less reliable than recent ones.** The pre-2025 entries were scraped
from that site and never verified. They record what was *scheduled*, which is not always what
was presented. If someone tells you their entry is wrong, believe them and fix it.

**Nobody is checking the paper links.** They were all live at launch. Working-paper URLs move.
If you have a spare ten minutes at the start of a term, clicking through the current semester
is worth it.

**GitHub will change its interface.** The click-by-click instructions above will drift.
The underlying idea will not: edit one YAML file in the browser, commit, wait a minute.
