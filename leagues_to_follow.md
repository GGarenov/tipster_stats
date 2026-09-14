# League Specialisation Report — as of 29 August 2026

**Method note:** this report is built from live web research (search + page
fetches) done today across 20 competitions, not from training-data memory
(which predates the actual 2026/27 season). Every claim is labeled:

- **FACT** — has a cited source (Wikipedia season page, FBref, FootyStats,
  OddsPortal, official league site, etc.)
- **INTERPRETATION** — a reasoned conclusion drawn from FACTs above it
- **ESTIMATE** — a best guess where no hard source was retrievable, always
  flagged as such rather than presented as certain

Where research could not find a number (e.g. league-wide Over 2.5%/BTTS% for
most second/third-tier leagues — these are frequently paywalled on
FootyStats), that is stated as **"not found"**, not invented.

---

## 1. Current Football Landscape

**Playing right now, several rounds in (autumn-spring, early season):**
England (Championship/L1/L2), Germany (2. Bundesliga, 3. Liga), Austria,
Switzerland, France (Ligue 2), Belgium, Netherlands, Italy (Serie A/B),
Spain (La Liga/Segunda), Denmark, Poland, Czech Republic, Romania, Portugal,
Turkey, Scotland. All of these started between mid-July and late-August
2026 and are roughly **2-6 matchdays in** as of today (FACT, per-league
detail in section 3).

**Mid-season, NOT early season:** Sweden (Allsvenskan) and Norway
(Eliteserien) run a **spring-autumn calendar-year season** (FACT) — Sweden
started 5 Apr 2026 and is at **round 18 of 30**; Norway started 14 Mar 2026
and is at **~round 17 of 30**. Both are 55-60% complete, with settled
squads and large samples, but both **end in November/December 2026** — a
short remaining runway for a specialisation started today.

**Not yet a major fixture cluster / excluded from further detail:** nothing
in the requested list has "not started" — every named competition is live.

---

## 2. Football Calendar — Midweek vs Weekend Clusters

| Day pattern | Leagues (FACT/INTERPRETATION, see per-league notes in §3) |
|---|---|
| **Weekend-only (Fri-Mon), no confirmed midweek round in next 4-8 weeks** | Segunda División, Serie A/La Liga (context), Austria, Denmark, Sweden, Norway, Poland, Romania |
| **Weekend + occasional Tue/Wed rounds (dates confirmed)** | Championship/League One/League Two (periodic Tue rounds, exact Sept dates not confirmed), **Serie B — 4 confirmed Tuesday midweek rounds: 27 Oct, 24 Nov, 8 Dec 2026, 2 Mar 2027** |
| **Multi-day spread (Thu-Sun), broadcast-driven** | Eredivisie (Thu/Fri/Sat/Sun), Belgian Pro League (Fri/Sat/Sun), Ligue 2 (Fri/Sun + some Wed) |
| **European-competition midweek overlay (affects specific top clubs only, not the whole league)** | Belgium (Club Brugge, Union SG), Portugal (Sporting, Porto, Benfica, Braga), Turkey (Fenerbahçe, Galatasaray, Beşiktaş, Trabzonspor), Scotland (Celtic, Hearts) — these clubs get Tue-Thu European fixtures that can affect their following weekend league form/rotation. This is a genuine planning factor if you're modelling those specific teams. |

**Where the clusters are:** Serie B is the only league in this set with a
**confirmed, published** recurring midweek round — useful for planning a
"midweek analysis day" around it. Everything else's midweek pattern is
either irregular (tied to cup rounds) or unconfirmed by search — treat
weekend rounds as the reliable baseline for all leagues.

---

## 3. Season Timing — Opportunity vs Uncertainty

| League | Matchday now (29 Aug) | Rounds left | Squad/manager volatility | Read |
|---|---|---|---|---|
| Championship | ~MD4 of 46 | ~42 | 3 relegated ex-PL clubs (West Ham, Burnley, Wolves) | ⚠ Elevated uncertainty short-term, huge runway |
| League One | ~MD3-4 of 46 | ~42 | 7/24 clubs new to level, incl. 3 relegated Championship sides | ⚠ High volatility, long runway |
| League Two | ~MD3-4 of 46 | ~42 | Standard EFL churn | ⚠ Moderate |
| 2. Bundesliga | ~MD3-4 of 34 | ~30 | 3 relegated ex-Bundesliga clubs (Wolfsburg, Heidenheim, St Pauli) | ⚠ Elevated uncertainty, good runway |
| 3. Liga | ~MD2-3 of 38 | ~35 | Heavy churn (1860 Munich, ex-2.Bundesliga sides dropping in) | ⚠ High volatility |
| Austria Bundesliga | ~MD5 of 22 (pre-split) | ~17 pre-split + 10 split | **Format change**: full points now carry into the split (first time since 2018-19) | ⚠ Structural discontinuity — historic comparisons need adjusting |
| Switzerland Super League | ~MD4-5 of 33 (triple round-robin phase) | ~28 + 10 split | Only 1 up/1 down — low churn | ✅ Opportunity — stable squads, long runway |
| Ligue 2 | ~MD4 of 34 | ~30 | Normal churn (4 clubs in/out) | ⚠ Typical Ligue 2 caution |
| Belgian Pro League | ~MD4-5 of 34 | ~29-30 | **Structural change**: dropped 17-year-old playoff system entirely, now straight round-robin, 18 teams | ⚠ Historical models/bookmaker calibration may not transfer cleanly — see §7 |
| Eredivisie | ~MD4 of 34 | ~30 | 3 promoted, no unusual manager churn found | ✅ Moderate opportunity |
| Serie B | ~MD2 of 38 | ~36 | 7/20 clubs new to level (typical for this division) | ⚠ Standard Serie B caution |
| Segunda División | ~MD3 of 42 | ~39 | 7/22 new, incl. a reserve team (Celta Fortuna) | ⚠ Elevated — reserve-team squad rotation adds noise |
| Denmark Superliga | ~MD5 of 11 (pre-split) | ~6 pre-split + full 2nd phase to May | Notable managerial churn (3 clubs changed manager pre/early season) | ⚠ Elevated near-term, long runway |
| **Sweden Allsvenskan** | **Round 18 of 30** | ~12, ends Nov 2026 | Low — season largely settled | ✅ Opportunity NOW, but short remaining runway |
| **Norway Eliteserien** | **~Round 17 of 30** | ~13, ends Dec 2026 | Low — settled | ✅ Opportunity NOW, but short remaining runway |
| Poland Ekstraklasa | ~MD4-5 of 34 | ~29-30 | 3 promoted + several early managerial changes | ⚠ High volatility |
| Czech Chance Liga | ~MD4-5 of 18 (H1) | ~13 + H2 from Jan | Irregular: one promoted club entered after a rival was administratively relegated for match-fixing; one manager already sacked (23 Aug) | ⚠ Unusually volatile even for this tier |
| Romania Liga I | ~MD6 of 30 (pre-split) | ~24 pre-split + playoff/playout | New split-format (points halved and carried) + 3 promoted | ⚠ High structural + squad uncertainty |
| Portugal Primeira Liga | ~MD4 of 34 | ~30 | 2 promoted, one (Marítimo) already 3rd on a tiny sample | ⚠ Moderate, small-sample noise from promoted side |
| Turkey Süper Lig | ~MD2 of 34 (~6% played) | ~32 | **Severe**: documented ~140-day average manager tenure league-wide in 2025/26, 2 first-ever-promoted clubs | ❌ High uncertainty, weak modelling environment |
| Scotland Premiership | ~MD3 of 33 (~7-8%) | ~35 (pre-split) | Lowest of all 20: only 1 up/1 down | ✅ Opportunity — most stable early-season league found |

**Does early season = value? No — explicitly not automatic (per your
instruction).** The honest read: early season creates *opportunity* only
where squad/manager churn is low enough that small samples are still
informative (Scotland, Switzerland, Eredivisie, Ligue 2 all qualify).
Where churn is high (Turkey, Czech, Romania, League One, Poland,
Championship/Bundesliga2's relegated-giant effect), the same "small
sample" is actually a **liability** — you'd be modelling noise, not signal,
for the first several weeks. Sweden/Norway sit in the opposite trap: great
signal *right now*, but a closing window (season ends within ~3 months) —
good for immediate tactical use, poor for a "specialise long-term"
commitment made today.

---

## 4. Market Efficiency

| League | Classification | Reasoning |
|---|---|---|
| Championship | **A** | Confirmed deep Bet365/AH coverage, Sky Sports broadcasts 1,000+ EFL games/season (FACT), best data infra of any non-Big-5 league here — but *because* of this attention, it's also the hardest to find mispricing in (see §13 tension). |
| Eredivisie | **B+** | Confirmed dedicated Bet365 hub, strong secondary coverage, several continentally-relevant clubs (Ajax/PSV/Feyenoord/AZ) keep it watched. |
| League One | **B** | Standard EFL coverage, clearly a notch below Championship in liquidity. |
| 2. Bundesliga, 3. Liga, Austria, Switzerland | **B / C** | Bet365 AH markets confirmed for Austria & Switzerland (£100k max payout, moderate-confidence source); Bundesliga2/3.Liga liquidity not independently confirmed — treat 3. Liga specifically as **C**, thinner and less certain. |
| Ligue 2, Belgian Pro League | **B** | Opta-backed data, OddsPortal 20+ year archives, standard-but-not-elite liquidity. |
| Serie B, Segunda División | **B / B-C** | Reasonably followed, but liquidity below their top-flight siblings; Segunda downgraded slightly for the reserve-team noise factor. |
| Denmark, Sweden, Norway, Poland | **B** | All actively quoted on OddsPortal/Oddschecker, moderate Nordic/Central-European betting-culture liquidity, clearly below Western Europe. |
| Czech Republic | **C** | Weakest confirmed market evidence of the Central/Northern European set — flagged for a follow-up check before committing. |
| Portugal, Turkey, Scotland | **B** (Turkey downgraded to **C in practice**) | All confirmed on OddsPortal with real liquidity; Turkey downgraded because the documented managerial chaos undermines any model built on top of that liquidity. |
| Romania | **D** | No confirming evidence of deep Pinnacle-grade liquidity found — odds exist and are trackable, but likely shallow/wide margins. |

---

## 5. Over/Under Goals Potential

The only reliably-sourced, comparable number across all leagues is
**goals/match for the completed 2025/26 (or 2025 calendar) season.**
Over 2.5%/BTTS% were **not findable** league-wide for most second/third-tier
competitions (FootyStats gates them behind a paywall) — reported only where
a real source was found.

| League | Goals/match (last full season, FACT) | Over 2.5% | BTTS% |
|---|---|---|---|
| Switzerland Super League | **3.34** | not found | not found |
| 3. Liga (Germany) | **3.21** | not found | not found |
| Eredivisie | **3.18** | not found | not found |
| Norway Eliteserien | 3.18 | not found | 54% (123-match sample) |
| Denmark Superliga | ~3.10-3.14 | not found | not found |
| 2. Bundesliga | 2.93 | **57%** | not found |
| Sweden Allsvenskan | 2.85 | 56% (partial sample) | 63% (81-match sample) |
| Scotland Premiership | 2.78 (early '26/27: 2.77, 46%/46%) | 46% (small sample) | 46% (small sample) |
| Poland Ekstraklasa | 2.75 | not found | not found |
| Portugal Primeira Liga | 2.68 (early '26/27: 2.84, small sample) | 48% (small sample) | 40% (small sample) |
| Belgian Pro League | 2.68 (old playoff format — **not comparable** to new 34-round structure) | not found | not found |
| Czech Chance Liga | 2.66 (2024/25) | 53% (2024/25) | not found |
| Turkey Süper Lig | 2.65 (early '26/27: 2.47, small sample) | 37% (small sample) | 42% (small sample) |
| Segunda División | 2.62 | not found | not found |
| Championship | 2.61 | not found | ~72% (partial sample — caution) |
| League One | 2.60 | not found | not found |
| Serie B | 2.56 | not found | not found |
| Romania Liga I | 2.55 (early '26/27: 2.41) | not found | not found |
| League Two | 2.54 | not found | not found |
| Ligue 2 | 2.49 | not found | not found |

**Reading this correctly (per your instruction — high goals ≠ value):**
Switzerland, 3. Liga, Eredivisie, Norway, and Denmark form a genuine
high-goal cluster, but they're not equally *investigable* — 3. Liga pairs
its high goals with the weakest data/market confidence in the set (§4, §8),
which is a real execution problem, not a reason to avoid the market
insight itself. The real question this section can't answer alone is
**"is the goal rate stable and is the market pricing it efficiently?"** —
that needs match-level modelling this report can't do, only point you
toward the leagues where doing that modelling is *feasible* (data-rich
enough) and *worthwhile* (market not already hyper-efficient).

---

## 6. Other Market Opportunities

| Market | Data availability | Efficiency/difficulty | Suitability |
|---|---|---|---|
| **Asian Handicap** | Confirmed offered on every league researched (Bet365/Pinnacle-style); depth/limits vary a lot by tier — confirmed strongest in Championship, Austria, Switzerland. | Medium difficulty — requires a reasonably accurate goal-difference model, which is exactly what an O/U-goals specialist is already building. Natural second market. | High — build this off the same underlying model as O/U. |
| **BTTS** | League-wide % rarely published for non-top-5 leagues (see §5) — you'd likely have to build this yourself from match logs. | Medium-low difficulty once you have team-level attack/defence data (which O/U modelling requires anyway). | High, cheap add-on once O/U infrastructure exists. |
| **Draw No Bet** | Same infra as Match Result. | Simplifies variance vs straight 1X2 but reduces edge if your actual edge is in *goal totals*, not *result probability* — the two skills aren't the same model. | Medium — don't assume O/U skill transfers directly. |
| **Corners** | Confirmed dedicated corner-stat coverage found for **Scotland (TotalCorner)** specifically; not independently confirmed for most other leagues in this pass (a real gap in this research, worth a targeted follow-up per league before committing). | Corners markets are known industry-wide to be thinner/less efficiently modelled by the public (fewer public xG-for-corners models exist) — theoretically higher edge potential, but you're also flying blinder on public reference data. | Medium — worth testing in Scotland first given confirmed data support, expand cautiously elsewhere. |
| **Cards** | No dedicated per-league card-stat source was confirmed beyond general aggregator claims. | Cards are heavily referee-dependent — a genuinely different skill (modelling officials, not teams) from goals-based analysis. | Low-medium — a plausible Phase 2 project, not a starting point; don't spread into this until the O/U core is validated. |
| **First/Second Half Goals** | No dedicated split-goals data source confirmed for any researched league. | Requires minute-by-minute goal data most free sources don't expose league-wide. | Low for now — data gap, not a strategy gap. |

**Where a market looks specifically attractive:** Asian Handicap in a
high-goal, decent-liquidity league (Bundesliga 2, Eredivisie, Switzerland)
is the most natural extension of an O/U-goals edge, because both markets
are ultimately priced off the same "how many goals will each side score"
question.

---

## 7. League-Specific Characteristics Worth Noting

- **Belgian Pro League — situational opportunity.** The league dropped its
  17-year-old playoff format entirely this season (FACT) — straight
  double round-robin, 18 teams, no championship/relegation split. Every
  historical model (and quite possibly some bookmaker pricing models)
  built on the old format needs re-calibration. This kind of structural
  regime change is exactly the sort of temporary information gap an
  independent analyst can sometimes exploit before the market catches up
  — **but it cuts both ways**: your own historical comparisons are
  compromised too unless you explicitly adjust for the format change.
  Flagging as INTERPRETATION, not a proven edge.
- **Austria Bundesliga — smaller version of the same effect.** First
  season since 2018-19 with full (not halved) points carrying into the
  championship/relegation split (FACT). Same logic applies at smaller
  scale.
- **Switzerland Super League — unusual triple round-robin.** Teams play
  each other three times before the split (FACT) — more head-to-head
  data per pairing than almost any other league here, which is genuinely
  useful for model calibration, but also compresses "true strength"
  signal differently than a standard double round-robin (INTERPRETATION).
- **Scotland — most stable early-season read found in this entire
  research pass.** Early 2026/27 goals/match (2.77) is nearly identical to
  the full 2025/26 season average (2.78), and squad churn is the lowest of
  all 20 leagues (1 up, 1 down). That combination — small sample that
  already looks like the stable long-run number — is a genuinely good sign
  for a bettor who wants believable data early in a season.
- **Segunda División — reserve-team wrinkle.** Celta Fortuna (Celta Vigo's
  reserve side) is playing in the second tier for the first time (FACT).
  Reserve teams rotate with the first team unpredictably and can't be
  modelled like a normal club — a genuine, specific data-quality risk
  unique to this league among those researched.
- **Turkey — structurally hostile to modelling.** ~140-day average
  manager tenure league-wide in 2025/26 (FACT, cited tracker) plus two
  first-ever-promoted clubs. This isn't "early season noise that settles"
  — it's a standing, multi-season pattern. Treat any Turkish Süper Lig
  edge claim with real suspicion regardless of sample size.
- **Czech Republic — one-off irregularity.** A club (Artis Brno) entered
  the top flight because a rival was administratively relegated for
  match-fixing, not through normal promotion (FACT). Not itself
  disqualifying, but a sign this league's normal patterns don't fully
  apply this season.

---

## 8. Data Quality Scores (1-10)

| League | Score | Why |
|---|---|---|
| Championship | **8** | FBref + FootyStats + deep OddsPortal archive; no Understat. |
| Eredivisie | **8** | Broadest secondary coverage confirmed (FBref, FootyStats xG page, WhoScored, Sofascore); no Understat. |
| Scotland Premiership | **7** | Sofascore/WhoScored/**TotalCorner** all confirmed — best corners-specific coverage found anywhere in this research. |
| Portugal Primeira Liga | **7** | Solid mainstream aggregator coverage across the board. |
| Ligue 2, Belgian Pro League | **7** | Opta-backed via FBref, long OddsPortal/football-data.co.uk archives. |
| League One, 2. Bundesliga, Austria, Switzerland, Segunda División, Serie B, Denmark, Sweden, Norway, Poland | **6** | Solid FootyStats/Sofascore/WhoScored-tier coverage, no Understat, generally reliable but not elite. |
| 3. Liga, League Two | **5** | Coverage exists (FootyStats, FBref) but thinner, less independently confirmed, lower-profile. |
| Czech Chance Liga | **5** | Coverage exists but was the least independently confirmed of the Nordic/Central-European set. |
| Romania Liga I | **4** | Weakest footprint found — FBref page exists but couldn't be verified in depth (fetch blocked), no Understat, thin advanced-stat trail. |

**Important:** none of the 20 leagues researched are covered by **Understat**
— its public xG coverage is limited to the "big 5" leagues + Russia. If
match-level xG is central to your modelling approach, every league here
requires either a paid data source (Opta via FBref licensing, Sportmonks,
StatsBomb, etc.) or building your own shot-based proxy — this is a
structural limitation of specialising outside the top 5, not a
league-specific weakness.

---

## 9. Your Shortlist — Bundesliga 2, 3. Liga, Championship, League One, Ligue 2, Serie B

| | Bundesliga 2 | 3. Liga | Championship | League One | Ligue 2 | Serie B |
|---|---|---|---|---|---|---|
| Season stage | MD3-4/34 | MD2-3/38 | MD4/46 | MD3-4/46 | MD4/34 | MD2/38 |
| Matches remaining | ~30 | ~35 | ~42 | ~42 | ~30 | ~36 |
| Goal profile | **2.93 g/m, Over2.5 57%** (best-evidenced O/U number in this whole report) | **3.21 g/m** (highest German figure) | 2.61 g/m, BTTS ~72%* | 2.60 g/m | 2.49 g/m (weakest of the six) | 2.56 g/m |
| Data quality | 6/10 | 5/10 | **8/10 (best)** | 6/10 | 7/10 | 6/10 |
| Market liquidity | B (unconfirmed depth) | **C (weakest)** | **A (best)** | B | B | B |
| O/U opportunity | **Strong** — high goals + real Over2.5 data point | Strong on paper, weak on execution confidence | Moderate — goals lower, but best infra to build a real model | Moderate | Weakest fit of the six for a goals focus | Moderate, aided by known fixed midweek schedule |
| Handicap opportunity | Moderate | Weak (data too thin to trust) | **Strong** — deepest AH market of the six | Moderate | Moderate | Moderate (Italian AH culture generally deep) |
| Corners/cards opportunity | Not confirmed | Not confirmed | Best-positioned to add later (deepest data infra) | Not confirmed | Not confirmed | Not confirmed |
| **Overall rating** | **1st — best balance** | 4th (highest ceiling, weakest floor) | 2nd (best infrastructure, hardest to out-price) | 3rd | 6th (weak fit for a goals-first strategy) | 3rd (tie) |

*Championship BTTS 72% figure is from a partial team-level sample, flagged
low-confidence in the source research — treat as directional, not exact.

**Ranking: Bundesliga 2 > Championship > League One ≈ Serie B > 3. Liga >
Ligue 2.** 3. Liga has the best raw goal-market theory but the weakest
confirmed market/data floor of the six — it's a "high ceiling, low floor"
pick, better suited to monitoring than immediate full commitment. Ligue 2
has perfectly good data infrastructure but the lowest goal rate of the six,
which works against a goals-first specialisation specifically (it might
still suit an Asian Handicap or Match Result specialist better).

---

## 10. The Sweet Spot — Recommended Combination

Not following the example structure literally — built from what the
research actually supports:

**Eredivisie + 2. Bundesliga + Championship** as the core three, because
together they cover: the best-evidenced goal environment outside a small
12-team league (Eredivisie), the single best-sourced O/U data point in this
whole report — 57% Over 2.5 — with a genuinely high goal rate (2. Bundesliga),
and the best data/market infrastructure to build a repeatable process on
even though its own goal environment is more modest (Championship).

**+ Switzerland Super League and Scotland Premiership** as secondary —
Switzerland for the single highest goal rate found anywhere (3.34) with
low squad volatility; Scotland for the most stable, believable early-season
numbers found in this entire research pass, plus the only confirmed
corners-data infrastructure (useful if/when you expand beyond goals).

**+ Serie B** from your own shortlist as the sixth — reasonable balance,
and its confirmed fixed midweek schedule (4 known Tuesday rounds) is
genuinely useful for planning a research routine around.

**Leagues NOT worth your specialisation time right now:**
- **Turkey** — documented structural managerial chaos makes any model
  unreliable regardless of liquidity.
- **Romania** — weakest data (4/10) and weakest market (D) combination
  in the whole set.
- **Czech Republic** — weakest confirmed data among comparable leagues,
  plus a one-off irregular promotion situation this season.
- **League Two** — the weakest of the three English tiers on both data
  (5/10) and market grounds (C); if you want a fourth English tier,
  League One is the better use of the same effort.
- **Sweden & Norway, specifically as new specialisations started today** —
  not because the leagues are bad (quite the opposite — richest current
  samples of anything researched), but because both end within ~3 months
  and then go dark until March 2027. Good for immediate tactical use with
  the large sample already available; poor foundation for a "specialise
  for the long term" commitment made in late August.

---

## 11. Weekly Research Calendar

**MONDAY** — Review the weekend's results across your Tier 1/2 leagues.
Update your own results/goals database. Flag any surprising results (big
favourite loss, unexpected BTTS/no-BTTS) for a closer look.

**TUESDAY** — Serie B's confirmed midweek round days (27 Oct, 24 Nov,
8 Dec, 2 Mar) live here when active; otherwise, deep-dive one Tier 1
league's upcoming weekend fixtures — build/update your goal-expectation
model for that league specifically.

**WEDNESDAY** — Second Tier 1 league deep-dive (rotate: Eredivisie one
week, Bundesliga 2 the next). Cross-check any Asian Handicap lines against
your own goal-difference expectations.

**THURSDAY** — Tier 2 leagues (Switzerland, Scotland) — lighter-touch
review given smaller weekly volume; this is also the day to check Eredivisie
Thursday-slot fixtures if applicable that week.

**FRIDAY** — Finalise your shortlist of matches for the weekend across all
active leagues (target: the "20 high-quality matches" from §12, not
hundreds). Note current market odds for later closing-line comparison.

**SATURDAY** — Primary betting day — most leagues' heaviest fixture
cluster. Execute only the shortlisted matches from Friday.

**SUNDAY** — Second betting day (Eredivisie, Championship, Belgian Pro
League, Segunda all typically have Sunday fixtures). Log results as they
land, even same-day, so Monday's review is just synthesis, not data entry.

---

## 12. Match Volume Estimate

| League | Matches/week (typical) | Suitable for your markets | Realistic to analyse | Expected bets/week |
|---|---|---|---|---|
| Championship (46 rounds/24 teams) | ~12 | ~10-12 | 6-8 | 2-4 |
| 2. Bundesliga (34/18) | ~9 | ~8-9 | 5-6 | 2-3 |
| Eredivisie (34/18) | ~9 | ~8-9 | 5-6 | 2-3 |
| Switzerland (12 teams) | ~6 | ~5-6 | 4-5 | 1-2 |
| Scotland (12 teams) | ~6 | ~5-6 | 4-5 | 1-2 |
| Serie B (38/20) | ~10 | ~9-10 | 5-6 | 2-3 |
| **Combined, all 6** | **~52/week** | **~45-48/week** | **~30-36/week (your realistic ceiling)** | **~10-17/week** |

This lands close to your own stated preference — "20 high-quality matches"
per short cycle is realistic across a 4-6 day analysis window if you're
covering roughly 5 of these 6 leagues in a given week, not all 6 every
single week. Rotating full attention across leagues (per §11) rather than
shallow-covering all six simultaneously is the more realistic operating
model.

---

## 13. Edge Score (0-100)

Weights as given: Data Quality 20%, Market Inefficiency Potential 20%,
O/U Suitability 20%, Match Volume 15%, Market Availability 10%, Season
Timing 10%, Information Availability 5%. **Market Inefficiency Potential**
is scored as the *inverse* of how sharply-watched a market is — a highly
liquid, heavily-traded league (Championship) scores lower here even though
it scores highest on raw "Market Availability," because heavy attention
means less room for an independent analyst to out-price the book. This is
a deliberate, important distinction — see the note below the table.

| League | Data Quality | Mkt Inefficiency | O/U Suit. | Volume | Mkt Availability | Season Timing | Info Avail. | **Score /100** |
|---|---|---|---|---|---|---|---|---|
| **Eredivisie** | 8 | 6 | 9 | 8 | 7 | 7 | 8 | **76.0** |
| **2. Bundesliga** | 6 | 7 | 9 | 9 | 6 | 7 | 6 | **73.5** |
| Switzerland | 6 | 7 | 10 | 6 | 6 | 8 | 6 | 72.0 |
| 3. Liga | 5 | 8 | 10 | 9 | 4 | 5 | 5 | 71.0 |
| **Championship** | 8 | 4 | 6 | 10 | 9 | 6 | 8 | **70.0** |
| Denmark | 6 | 7 | 9 | 6 | 6 | 5 | 6 | 67.0 |
| Scotland | 7 | 6 | 6 | 6 | 6 | 9 | 7 | 65.5 |
| League One | 6 | 7 | 6 | 9 | 6 | 5 | 6 | 65.5 |
| Belgian Pro League | 7 | 8 | 6 | 7 | 6 | 4 | 6 | 65.5 |
| Serie B | 6 | 6 | 6 | 9 | 6 | 6 | 6 | 64.5 |
| Portugal | 7 | 5 | 6 | 8 | 6 | 6 | 7 | 63.5 |
| Ligue 2 | 7 | 6 | 4 | 8 | 6 | 7 | 7 | 62.5 |

**Read this carefully — the score alone would put 3. Liga 4th, ahead of
Championship.** That's real (its O/U theory is excellent), but its low
Data Quality (5) and Market Availability (4) scores mean you'd be trading
on a genuinely unconfirmed liquidity/data floor. A syndicate would treat a
high score built on weak execution-confidence inputs very differently from
the same score built on strong ones — which is exactly why 3. Liga sits in
Tier 3 (experimental) rather than Tier 1 in the final recommendation below,
despite outscoring Championship here.

---

## 14. Final Recommendation

### Tier 1 — Specialise (max 3, ~60-70% of research time)
1. **2. Bundesliga (Germany)** — best combination of confirmed high goals
   (2.93/match) *and* a real, sourced Over 2.5% figure (57%) *and*
   reasonable data support. The clearest, most defensible O/U-goals pick
   in this entire report.
2. **Eredivisie (Netherlands)** — highest Edge Score (76.0), best data
   infrastructure outside England (8/10), strong confirmed market
   presence (dedicated Bet365 hub), high and reliable goal environment
   (3.18/match).
3. **Championship (England)** — the "major league" anchor: best data and
   market infrastructure of anything in this tier of football, huge match
   volume (46 rounds) to build and test a process on, even though its own
   goal environment is more modest and it's the hardest market here to
   out-price.

### Tier 2 — Secondary (max 3, ~20-30% of research time)
4. **Switzerland Super League** — highest goal rate found anywhere (3.34),
   low squad volatility, but a smaller 12-team league — good complement,
   not a primary.
5. **Scotland Premiership** — most stable/believable early-season numbers
   found in this whole research pass, lowest squad churn of all 20
   leagues, and the only confirmed dedicated corners-data source
   (TotalCorner) if you want to expand markets later.
6. **Serie B (Italy)** — from your own shortlist; balanced profile, and
   the only league here with a fully confirmed, fixed midweek schedule to
   plan around.

### Tier 3 — Experimental / monitor occasionally (~10% of research time)
- **3. Liga (Germany)** — highest theoretical O/U ceiling in the report,
  but weakest confirmed data/market floor; watch before committing volume.
- **Denmark Superliga** — high goals, long runway (full season ahead), but
  currently elevated managerial churn; revisit once it settles.
- **Belgian Pro League** — the dropped-playoff-format situation is a
  genuinely interesting, time-limited situational opportunity (§7); worth
  tracking specifically for pricing behaviour this season, not a
  standing pick.
- **League One (England)** and **Ligue 2 (France)** — from your own
  shortlist; both are solid, competent leagues but didn't clear the bar
  against the Tier 1/2 leagues above on this specific goals-focused
  criteria set. Keep on the radar, not the priority list.

### Avoid (does not currently justify your time)
- **Turkey Süper Lig** — structurally hostile to modelling (documented
  managerial chaos, not just early-season noise).
- **Romania Liga I** — weakest data (4/10) and market (D) combination
  found.
- **Czech Chance Liga** — weakest confirmed data among comparable leagues
  plus a one-off irregular promotion situation.
- **League Two (England)** — weakest of the three English tiers on both
  data and market grounds.
- **Segunda División (Spain)** — crowded out by stronger alternatives, and
  the Celta Fortuna reserve-team wrinkle adds avoidable noise.
- **Sweden Allsvenskan / Norway Eliteserien** — not "avoid" as leagues,
  but avoid as a *new specialisation started today* specifically, given
  the season ends within ~3 months. Reasonable for short-term tactical
  betting on the large sample already available; poor fit for a long-term
  build.

---

## 15. The Most Important Question

**"If starting a football betting operation today, 29 August 2026, aiming
for a long-term Over/Under Goals edge — which 3-5 leagues?"**

**2. Bundesliga, Eredivisie, Switzerland Super League, Championship, and
Scotland Premiership.**

Not chosen because they're the biggest names — Championship is the only
"famous" league on this list, and it's there for infrastructure, not goal
rate. The other four are chosen because, combined, they're the leagues
where the actual criteria that matter — statistical predictability
(Scotland's early numbers already matching its full-season baseline;
Switzerland's low squad churn), data availability (Eredivisie and
Championship's 8/10 scores, the best outside the top 5), market liquidity
(all five confirmed on OddsPortal/Bet365 with real trading activity), and
genuine goal-market theory (2. Bundesliga's sourced 57% Over 2.5 figure;
Switzerland's 3.34 goals/match) — line up together, rather than any one
factor alone. 3. Liga was deliberately left out of this final five despite
scoring higher on raw goal theory, because a long-term edge needs a data
and market floor solid enough to actually trust the read — and that's the
one thing 3. Liga couldn't confirm in this research pass.

---

## Addendum — Your Final Chosen Five (personal override, noted 29 Aug 2026)

After reviewing this report, you chose to specialise in **2. Bundesliga,
3. Liga, Eredivisie, Championship, and Denmark Superliga** — swapping out
this report's Tier 2 picks (Switzerland, Scotland, Serie B) for 3. Liga and
Denmark, both of which this report placed in **Tier 3 (experimental/monitor
only)**, not full specialisation. Recorded here consciously, not by
mistake — a quick reminder of exactly what that trade-off is:

- **3. Liga**: highest goal ceiling in the whole report (3.21 g/m), but
  the weakest confirmed data floor (5/10) and market liquidity (class C)
  of anything in Tier 1/2 — the Over 2.5% figure was never found for this
  league specifically (don't confuse it with 2. Bundesliga's sourced 57%).
  Treat any edge found here with extra scepticism until liquidity/limits
  are confirmed in practice.
- **Denmark Superliga**: genuinely good long-term goal profile
  (~3.10-3.14 g/m across two full seasons), but currently in an
  elevated-churn window (3 managerial changes pre/early season) — the
  caution here is about *timing*, not the league's long-run quality. Worth
  re-checking squad/manager stability again in a few weeks before trusting
  early-season numbers fully.

Net effect: this five-league portfolio has a higher ceiling but a lower
data/market floor than the report's own Tier 1+2 recommendation — worth
tracking results separately per league so it's clear, after a few months,
whether 3. Liga/Denmark are pulling their weight versus what Switzerland/
Scotland/Serie B would likely have delivered.
