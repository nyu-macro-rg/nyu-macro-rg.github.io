# Session data provenance

Sessions fall into **two tiers of evidence**, and the difference matters.

**Fall 2025 onward (22 sessions): primary sources.** Every one traces to a dated announcement
email. **Announcement emails are authoritative**: they were sent one to two days before each
session and reflect what actually happened. The planning workbook and the hand-written context
file record what was *intended*, and in three cases the two disagree.

**Fall 2019 through Spring 2025 (160 sessions): scraped, unverified.** See "The archived years"
at the end of this file. These were recovered from the group's previous website and have not
been checked against any independent source.

Confidence key:
- **A** = confirmed by that session's own announcement email (presenter + paper + date).
- **B** = confirmed by a schedule table inside an adjacent announcement email, and the
  session's own subject line matches the planned paper. Validated as reliable by spot-checking
  Oct 15 and Dec 10, both of which matched.

## Corrections to previously held records

Three cases where the site deliberately departs from the workbook / context `.md`:

| Date | Recorded in workbook + context.md | What actually happened | Evidence |
|---|---|---|---|
| 2025-09-24 | Arnav Deshpande presents Manisheva, Mestieri, Schauer, *End of Apartheid* | Arnav Deshpande presented **his own work in progress, "The Aggregate Effects of Workfare Programs"** | Thread `199716a225b8afd8` (2025-09-22): "Presenter: Arnav Deshpande (presenting his own work)". Context: nobody volunteered for the slot; Rafael asked both Arnav (`1994f0e0091d41e5`) and Kerry Neitzel (`19953e61ff9a9e7b`) on Sep 15-16. |
| 2025-12-03 | Olalekan Bello presents Adao, Fernandes, Hsieh, Quintero | Olalekan Bello presented **Aghion, Boppart, Peters, Schwartzman, Zilibotti, *A Theory of Endogenous Degrowth*** | Thread `19ada42df0e31e2f`. Already noted in context `.md`. |
| 2026-04-29 | Nicolò Ceneri presents Adhami, *Quantifying Knowledge Spillovers* | **Elena Casanovas** (UCL visitor) presented **her own paper, *Multi-Market Firms and the Extensive Margin of Firm Growth*** | Thread `19dcf9da42aef190`. Casanovas was added to the list on 2026-03-09 (`19cd2adbd440d6f7`). |

**Consequences.** Manisheva/Mestieri/Schauer *End of Apartheid* and Adao et al. *Trade Shocks
in Distorted Economies* were never presented and do not appear on the site. Neither does
Adhami, *Quantifying Knowledge Spillovers*, despite `Ceneri_Adhami_Knowledge_Spillovers.pdf`
sitting in the Spring 2026 Papers folder. **The papers folder is not a session index**: it
holds papers for planned sessions that did not occur, and lacks the paper for Apr 29, which
did.

## Meeting time is not constant

| Period | Time | Source |
|---|---|---|
| Fall 2025, all sessions | 12:15–1:15 p.m. | every Fall 2025 announcement |
| Spring 2026, Feb 11 only | 12:15–1:15 p.m. | `19c436b11c0b3abf` |
| Spring 2026, Feb 18 onward | **12:30–1:30 p.m.** | Virgiliu Midrigan, 2026-02-11: "we're meeting from 12:30 to 1:30 this semester, not 12:15, as one of us is teaching" |
| Fall 2026 | 12:15–1:15 p.m. as announced | Ariana Gamero, `1a0a07d560559e95` |

Time is therefore stored **per semester**, not globally. **Open question for Ariana:** Fall
2026 was announced at 12:15, reverting the Spring change. Confirm this is intended and not a
reused template before the site hardcodes it.

## Fall 2025

| Date | Presenter | Paper | Conf | Source thread |
|---|---|---|---|---|
| 2025-09-17 | Mary Zhang | Bianchi, McKay, Mehrotra, *How Should Monetary Policy Respond to Housing Inflation?* | A | `1994af5fe7f15cb2` |
| 2025-09-24 | Arnav Deshpande | *The Aggregate Effects of Workfare Programs* (own work, WIP) | A | `199716a225b8afd8` |
| 2025-10-01 | Rafael Lincoln | Beaudry, Collard, Fève, Guay, Portier, *Dynamic Identification in VARs* | A | `1999582a1b14b437` (announced as Sep 24, corrected to Oct 1 in-thread) |
| 2025-10-08 | Joon Sup Park | Engbom, Malmberg, Porzio, Rossi, Schoellman, *Economic Development According to Chandler* | A | `199b6b270c27ef96` |
| 2025-10-15 | Thomás Gleizer | Elenev, Landvoigt, Van Nieuwerburgh, *The Austerity Threshold* | A | `199e306c91623b41` |
| 2025-10-22 | Robin Li | Dao, Gourinchas, Itskhoki, *Breaking Parity* | B | `199e306c91623b41` table + subject of `19a02418446805e5` |
| 2025-10-29 | Giacomo Chignoli and Giovanni Brocca | Guntin, Kochen, *The Origins of Top Firms* | B | `199e306c91623b41` table + subject of `19a25b60663b1e33` |
| 2025-11-05 | Kerry Neitzel | Jarosch, Pilossoph, Swaminathan, *Should Friday be the New Saturday?* | B | `199e306c91623b41` table + subject of `19a47d3ba67042ee` |
| 2025-11-12 | Sam Jordan-Wood | Bhandari, Martellini, McGrattan, *Capital Reallocation and Private Firm Dynamics* | B | `199e306c91623b41` table + subject of `19a6df08ca96a065` |
| 2025-11-19 | Francisco Terfi | Werning, Lorenzoni, Guerrieri, *Tariffs and Cost-Push Shocks* | B | `199e306c91623b41` table + subject of `19a921f464585a3a` |
| 2025-11-26 | (no meeting) | Thanksgiving break | A | `19ab60647a373e9d` |
| 2025-12-03 | Olalekan Bello | Aghion, Boppart, Peters, Schwartzman, Zilibotti, *A Theory of Endogenous Degrowth* | A | `19ada42df0e31e2f` |
| 2025-12-10 | Isaac Leeson | Jones, *How Much Should We Spend to Reduce AI's Existential Risk?* | A | `19afe6c752d901fb` |

## Spring 2026

| Date | Presenter | Paper | Conf | Source thread |
|---|---|---|---|---|
| 2026-02-11 | Rafael Lincoln | Bellifemine, Couturier, Tozzo, *The Sentiment Channel of Fiscal Policy* | A | `19c436b11c0b3abf` |
| 2026-02-18 | Isaac Leeson | Ghassibe, Nakov, *Business Cycles with Pricing Cascades* | A | `19c669a312db4ff9` |
| 2026-02-25 | Itamar Bellaïche | Amador, Bianchi, *Bank Runs, Fragility and Regulation* | A | `19c8afed17df8c93` |
| 2026-03-04 | Thomás Gleizer | Hampole, Papanikolaou, Schmidt, Seegmiller, *Artificial Intelligence and the Labor Market* | A | `19cab64256b05d14` |
| 2026-03-11 | (cancelled) | was Joon Sup Park, Hubmer and Nord | A | announced `19cd2adbd440d6f7`, cancelled `19cd832ad1549174`. Not rescheduled: absent from every later schedule table. |
| 2026-03-18 | (no meeting) | spring break | B | no session listed; Mar 23 email says "hope everyone had a restful spring break" |
| 2026-03-25 | Mahdi Ebsim | Fan, *The Labor Market Incidence of New Technologies* | A | `19d1b53c68250250` |
| 2026-04-01 | Sam Jordan-Wood | Fonseca, Liu, Mabille, *Unlocking Mortgage Lock-In* | A | `19d3ed987b9a653e` |
| 2026-04-08 | Giacomo Chignoli | Boppart, Klenow, Laski, Li, *Idea Rents and Firm Growth* | A | `19d62ea248e4f283` |
| 2026-04-15 | Ali Bagherzadeh | Baqaee, Burstein, *Aggregate Efficiency with Heterogeneous Agents* | A | `19d882aa3f5d7bb6`. Moved up from the planned Apr 22; Giovanni Brocca's "to be decided" Apr 15 slot was dropped. |
| 2026-04-22 | (no meeting) | announced in `19d882aa3f5d7bb6` and `19dab76a0d59cde0` | A | |
| 2026-04-29 | Elena Casanovas | Casanovas, *Multi-Market Firms and the Extensive Margin of Firm Growth* (own work) | A | `19dcf9da42aef190` |

## Fall 2026

| Date | Presenter | Paper | Conf | Source thread |
|---|---|---|---|---|
| 2026-09-16 | Giacomo Chignoli | Li, Lian, Ma, Martell, *Borrowing Constraints, Markups, and Misallocation* | A | `1a0a07d560559e95` (Ariana Gamero) |
| later Wednesdays | TBA | sign-up in progress | n/a | `1a09107c64d689a2` |

## Slide consent status

Rafael's Fall 2025 and Spring 2026 announcements repeatedly stated that slides would be
uploaded to the group website ("I also kindly ask those who have already presented to send me
their slides so we can upload them to the site", e.g. `199b6b270c27ef96`, `19c8afed17df8c93`).
Presenters who sent slides did so on that stated basis, which is a documented opt-out notice.
Slides are nonetheless published only where the presenter sent them to Rafael for that purpose.

| Deck file | Session | Status |
|---|---|---|
| `MRG_presentation_01_oct.pdf` | 2025-10-01, Rafael Lincoln | own deck, cleared |
| `DGI_breaking_parity_updated.pdf` | 2025-10-22, Robin Li (to confirm) | sent for upload |
| `BMM_slides_final.pdf` | 2025-11-12, Sam Jordan-Wood (to confirm) | sent for upload |
| `BGGMP_slides_Kerry.pdf` | 2025-11-05, Kerry Neitzel | sent for upload |
| `Spring 2026/.../main.pdf` | 2026-02-11, Rafael Lincoln | own deck, cleared |

Deck-to-session mapping above is inferred from filenames and **must be confirmed by opening
each title slide** before publishing.

## Papers retitled after they were presented

Two papers were renamed by their authors after the session. The site shows the title **as
presented** (that is the historical record of what the group discussed) and links to the
current canonical version. Do not "correct" these to match the destination page.

| Session | Title as presented | Current title at the link |
|---|---|---|
| 2026-04-01, Sam Jordan-Wood | Unlocking Mortgage Lock-In: Evidence from a Spatial Housing Ladder Model | Unlocking Mortgage Lock-In: **Equilibrium Effects** in a Spatial Housing Ladder Model (NBER w35237) |
| 2026-04-15, Ali Bagherzadeh | Aggregate **Efficiency** with Heterogeneous Agents | Aggregate **Productivity** with Heterogeneous Agents (NBER w34176) |

## Links that intentionally point at an author's homepage

Two sessions were unpublished student work in progress with no public paper. These link to
the author's page rather than a PDF, and an automated title check will always flag them.

- 2025-09-24, Arnav Deshpande, *The Aggregate Effects of Workfare Programs* → `deshpande-arnav.github.io`
- 2026-04-29, Elena Casanovas, *Multi-Market Firms and the Extensive Margin of Firm Growth* → `elenacasanovas.com`


---

# The archived years (Fall 2019 through Spring 2025)

**Source.** All 160 sessions were scraped on **2026-09-14** from the twelve semester pages of
`https://sites.google.com/nyu.edu/bggmrg/`, one page per semester (`/fall-2019` through
`/spring-2025`). Each archived semester on the new site links back to the exact page it came
from via its `source_url`.

**Why they were copied at all.** That site is orphaned. It is owned by Fernando Cirelli, who
graduated and is now at Columbia; its storage is full; and as of 2025-09-11 neither the
then-organizer nor his successor could edit it even after being granted access. If the account
is ever purged, the record of what this group read for six years disappears. Copying the
schedule metadata is cheap insurance against that.

**Confidence: LOWER than the Fall 2025 onward entries. Treat with appropriate caution.**

- Not verified against announcement emails, departmental calendars, or any second source.
- Transcribed from rendered HTML, so author lists and paper titles carry whatever errors the
  original site had, plus any introduced in transcription. Obvious typos in the source were
  silently corrected where the intended name was unambiguous (for example "Monosopy" to
  "Monopsony", "Gennaiolo" to "Gennaioli", "Ottonelo" to "Ottonello", "Zambranco" to
  "Zambrano", "Dreschel" to "Drechsel"). This is a judgement call and some corrections may be
  wrong.
- The old site recorded **what was scheduled**, not necessarily what was presented. Fall 2025
  taught us these differ: three of twenty-two sessions that year departed from the plan. The
  same slippage rate almost certainly applies to the archived years, and nothing here would
  detect it.
- Only date, presenter, authors and title were taken. **No paper or slide links were copied**,
  so every archived session still depends on the old site for its artifacts.

**What is deliberately absent.** Fall 2021 and Spring 2022 have no `location` because the old
site did not state one. The template leaves the room blank rather than inheriting today's
Room 736, which would assert a fact not in evidence.

**Meeting day and room moved repeatedly** across these years, so both are recorded per
semester rather than globally: Wednesdays in 2019, Tuesdays in Spring 2020 and Spring 2021,
back to Wednesdays in Fall 2021, Tuesdays again through 2024, Wednesdays from Spring 2025.
Fall 2020 and Spring 2021 met on Zoom. Spring 2024 met in Room 624, Spring 2020 in Room 831.

**If you are correcting one of these entries,** an announcement email from that semester or the
presenter's own memory both outrank what is written here.
