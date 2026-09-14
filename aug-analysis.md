# Betting Audit — Goal Digger (Blogabet) — 27 Jul 2026 to 28 Aug 2026

**Auditor's note on scope:** the brief assumes a January–July record. The only
file provided is `aug.json`, which covers a **single 33-day window**
(27-07-2026 → 28-08-2026, 192 settled/near-settled bets). Every conclusion
below is therefore about *this one month*, not a season. Anywhere a
conclusion would require data this file doesn't have, that is stated
explicitly rather than guessed — see the **Data Limitations** box before
section 1.

### Data limitations (read this first)

- **No timestamps per bet.** The JSON has no kickoff time, publish time, or
  day-of-week for individual picks. I cannot verify weekend-only betting,
  time-of-day patterns, or "betting because a match is televised." A rough
  chronological split (5 equal-sized chunks, ordered by pick ID) is used
  below to show trend direction — it is **not** real calendar weeks.
- **No bankroll baseline.** There's no starting bankroll figure, so I can't
  say what % of bankroll a 10-unit stake represents, or whether the 162.62u
  drawdown found below was survivable or catastrophic for this specific
  bettor. All figures are in **flat stake-units**, not currency or % of
  bankroll.
- **One stake size, all month.** Every bet is "10/10" — there is no
  stake-variation to analyze for bet-sizing discipline directly (this is
  itself a finding, see Strengths).
- **No closing line data.** Closing Line Value/Efficiency cannot be computed
  — the file only has the bettor's own listed odds, never the closing odds.
  This whole angle is skipped rather than faked.
- **Small samples are everywhere.** With only 192 bets spread across 33
  leagues and ~9 market types, most individual cells have n < 10. Every
  number below is reported with its sample size; treat anything under ~15
  bets as a directional hint, not a proven edge.

---

## 1. Overall Performance

| Metric | Value |
|---|---|
| Total bets | 192 (146 singles + 46 combos) |
| Won / Lost / Void | 81 / 107 / 4 |
| Win rate (settled) | 43.09% |
| Profit | **+5.04 units** |
| ROI (profit ÷ settled stake) | **+0.27%** |
| Yield (profit ÷ all stake incl. void) | +0.26% |
| Average odds (all bets) | 2.73 |
| Average stake | 10.0 units (flat, no variation) |
| Std. dev. of profit per bet | 12.12u (mean per bet: 0.03u) |
| Longest winning streak | 6 bets |
| Longest losing streak | 9 bets |
| Peak-to-trough drawdown | **162.62 units** |
| Closing line efficiency | Not computable — no closing-odds data in file |

**What this actually means:** the month closed almost exactly flat. +5.04
units of profit on 1,920 units of total action is statistically
indistinguishable from zero — this is a bettor with **no measurable edge
this month**, not a winning one. The standard deviation of profit per bet
(12.12u) versus the mean (0.03u) gives a signal-to-noise ratio close to
zero: the month's result is well within the range you'd expect from pure
variance around a coin-flip-adjusted-for-vig strategy.

The more important number is the **drawdown**: at the worst point in the
month the running total was **-162.62 units** below its peak, before
recovering all the way back to +5.04 by the end. That means this bettor
tolerated (or survived) a swing of over 160 units — 16x an average day's
total action — to break even. A professional risk manager does not care
that the month ended near zero; they care that the *path* to zero required
absorbing a 9-bet losing streak and a 162-unit hole. **This is a high-risk,
zero-edge month, not a low-risk, zero-edge month.**

### The headline split the summary numbers hide

| Segment | Bets | Profit | ROI |
|---|---|---|---|
| **Singles** (146 bets) | 146 | **-75.59u** | **-5.32%** |
| **Combos/parlays** (46 bets) | 46 | **+80.63u** | **+17.53%** |
| Total | 192 | +5.04u | +0.27% |

This is the single most important fact in the whole file: **the entire
month's positive result is manufactured by 46 parlay bets, while the 146
single-market bets — the bulk of the volume, and the blog's stated core
product ("Market: Over/Under goals mostly... 4-5 picks per day") — lost
5.32% of everything staked on them.** Without the combos, this was a
-75.59u month. The combos are not a side-bet; they are propping up the
entire operation.

---

## 2. Market Analysis

Markets are grouped by the bet type embedded in each pick's market string
(combo legs are excluded from this table since a combo has one combined
price, not an isolated per-leg P/L — see the separate leg breakdown below).

| Market | Bets | ROI | Win rate | Avg odds | Confidence |
|---|---|---|---|---|---|
| Half Time Result (1H Winner) | 2 | +96.5% | 100% | 1.97 | **None** — n=2 |
| 1st Half Handicap | 2 | +95.5% | 100% | 1.96 | **None** — n=2 |
| Match Winner (FT, alt. label) | 1 | +91.6% | 100% | 1.92 | **None** — n=1 |
| Both Teams To Score (pure) | 3 | +30.3% | 66.7% | 1.95 | **None** — n=3 |
| **Combo / Parlay** | **46** | **+17.5%** | 37.0% | 3.93 | **Moderate** — real sample |
| O/U + BTTS combined market | 6 | +5.8% | 50% | 1.99 | Low — n=6 |
| **Match Winner (Full Time Result)** | **46** | **+5.2%** | 47.8% | 2.66 | **Moderate** |
| **Over/Under Goals** | **63** | **-16.0%** | 40.0% | 2.07 | **Highest** — largest sample in the file |
| **Asian Handicap** | **21** | **-21.9%** | 40.0% | 1.92 | Moderate |
| Corners | 2 | -100% | 0% | 11.5 | **None** — n=2, but see note |

**Ranking, best to worst, weighted by how much you should actually trust
each number:**

1. Combos (n=46) — real, positive, worth building around.
2. Match Winner / Full Time Result (n=46) — real, mildly positive.
3. Over/Under Goals (n=63) — real, **and the biggest leak in the account.**
4. Asian Handicap (n=21) — real, a clear loser.
5. Everything with n≤6 — not evidence of anything, good or bad.

**The uncomfortable finding:** the blog's own "About" text says *"I
specialize in goals betting... Market: Over/Under goals mostly."* That
market — Over/Under Goals — is the single largest bucket in the data (63
bets, 33% of all singles) **and it lost 16% of everything staked on it.**
The stated specialty is the biggest leak. Meanwhile Match Winner bets,
which the blog doesn't claim to specialize in, quietly ran a small profit
on an equal-sized sample (46 bets each). That is a direct contradiction
between the stated edge and the actual edge.

### Over/Under threshold breakdown (why "Over/Under Goals" nets negative)

| Line | Bets | ROI | Win rate | Avg odds |
|---|---|---|---|---|
| **Over 3.5** | **16** | **+38.6%** | **68.75%** | 2.24 |
| Over 2.0 | 3 | -0.7% | 33.3% | 1.92 |
| Under 4.0 | 2 | -50.0% | 0% | 1.92 |
| Under 3.5 | 2 | -75.0% | 0% | 1.89 |
| Over 4.5 | 1 | -100% | 0% | 5.00 |
| Under 2.5 | 1 | -100% | 0% | 2.20 |
| **Over 3.0** | **12** | **-34.4%** | **30.0%** | 1.89 |
| **Over 2.5** | **23** | **-27.2%** | **34.8%** | 2.00 |

Over/Under isn't uniformly bad — it's bimodal. **Over 2.5 is the single
worst high-volume line in the entire file** (23 bets, -27.2% ROI, 34.8%
win rate — the market with the shortest odds should be winning close to
its implied ~50%, not 35%). **Over 3.5, on the same underlying market
family, is the best-performing line with a real sample** (16 bets, +38.6%
ROI, 68.75% win rate). This isn't "Over/Under doesn't work for you" — it's
"you are picking the wrong threshold most of the time." Over 3.0 (mixing
"Over 3.0" and "3.00,3.50" goal-line variants) is also a clear loser (12
bets, -34.4%).

---

## 3. League Analysis

146 single bets are spread across **33 different leagues** — an average of
4.4 bets per league. Only a handful have enough volume to say anything
real; the rest is scattershot.

| League | Bets | Profit | ROI | Win rate | Avg odds | Verdict |
|---|---|---|---|---|---|---|
| Spa. Primera | 9 | +52.1 | +57.9% | 55.6% | 2.54 | ⚠ Promising, watch — n=9 |
| Bulgaria | 10 | +27.4 | +30.4% | 66.7% | 2.00 | ⚠ Promising, watch — n=10 |
| Japan | 5 | +15.9 | +31.8% | 60.0% | 2.01 | ⚠ Too small — n=5 |
| S. Korea | 3 | +18.5 | +61.7% | 66.7% | 2.05 | ⚠ Too small — n=3 |
| Greece / China / Ita. Serie A | 2 each | +18–20 | ~90–100% | 100% | ~1.9–2.0 | **None** — n=2 each |
| **Australia** | **44** | **-12.3** | **-2.9%** | 47.6% | 2.28 | ⚠ Neutral, but see note below |
| Denmark | 11 | -7.35 | -6.7% | 45.5% | 2.22 | ⚠ Neutral — n=11 |
| Champions L | 5 | -6.2 | -12.4% | 40.0% | 4.45 | Too small — n=5 |
| Europa Conf. League | 3 | -9.7 | -32.3% | 33.3% | 1.95 | Too small — n=3 |
| **Romania** | **5** | **-32.7** | **-65.4%** | 20.0% | 3.73 | ❌ Avoid |
| Asia (region) | 4 | -19.5 | -48.75% | 25.0% | 1.92 | ❌ Avoid, small n |
| Eng. League Cup / League One / Ita. Coppa Italia | 2 each | -20 each | -100% each | 0% | ~1.9–2.6 | ❌ 0-for-2 each, small n |
| **9 one-off leagues** (Poland, Scotland, Austria, Sweden, Belgium, France, India, Spa. Segunda, Saudi Arabia) | 1 each | -10 each | -100% each | 0% | mixed | ❌ **Avoid entirely** |

**No sample is large enough here to call anything a proven "strong" league
with statistical confidence** — even the best performer, Spa. Primera, is 9
bets. What the league table *does* prove:

- **The single largest league by volume (Australia, 44 bets — 30% of all
  singles) is roughly break-even-to-slightly-negative (-2.9% ROI).** That's
  a lot of exposure for no edge. Breaking Australia down by market shows
  *why*: Match Winner there is +6.3 (12 bets, near break-even), Over/Under
  is -1.2 (22 bets, dead flat), but **Asian Handicap in Australia alone is
  -27 units on just 7 bets (2W-5L)** — nearly two-thirds of the entire
  file-wide Asian Handicap loss (-43.85u) comes from this one league/market
  combination. Australia isn't a bad league across the board; Australian
  Asian Handicap specifically is a leak.
- **9 different one-off "let's try this league" bets this month, and 9 of
  the 10 lost** (the lone winner, "International," was also a single bet).
  That's -90 units, or **18x the entire month's net profit**, spent
  sampling leagues with no track record and no repeat business. Even at a
  fair 43% average win rate, expected losers out of 10 coin-flip-ish bets
  would be ~5.7, not 9. Small sample, but a consistent enough pattern to
  flag as impulse betting rather than a strategy.

---

## 4. Odds Analysis

*(singles only — combos have their own compound-odds table below, mixing
them would blur what's actually being priced)*

| Odds range | Bets | ROI | Win rate | Avg odds |
|---|---|---|---|---|
| 1.20–1.40 | 1 | +33.0% | 100% | 1.33 | *n=1, ignore* |
| 1.41–1.60 | 0 | — | — | — | *no bets here* |
| 1.61–1.80 | 22 | **-22.4%** | 42.9% | 1.75 |
| **1.81–2.00** | **75** | **-9.6%** | 45.8% | 1.92 |
| **2.01–2.30** | **21** | **+11.2%** | 52.4% | 2.15 |
| **2.31+** | **27** | **+5.2%** | 37.0% | 4.26 |

The blog's own stated odds range is **1.50–2.50**. The data shows that
**the single biggest bucket by far — 75 of 146 singles, over half the
single-bet volume, sitting at ~1.92 average odds — is the leak** (-9.6%
ROI). The two zones that are actually profitable (2.01–2.30 and 2.31+) sit
mostly *outside* the stated comfort zone, and together they're only 48
bets — less than the 1.81–2.00 bucket alone.

**Direct answer to "am I betting at odds too high or too low":** you are
over-concentrated at odds too *low* (~1.90, priced to win ~53% of the time
but actually winning 45.8%) and under-exposed at odds where the edge
actually shows up (2.00–2.30). This isn't about avoiding short odds
altogether — it's that the crowded 1.81–2.00 zone is where the wrong
selections are being made, while the same underlying skill applied at
slightly longer odds (2.01–2.30) works.

### Combo (parlay) odds — a much sharper signal

| Combo odds | Bets | ROI | Win rate |
|---|---|---|---|
| ≤3.0 | 14 | +8.6% | 42.9% |
| **3.01–5.0** | **25** | **+55.4%** | 44.0% |
| 5.01–10.0 | 5 | **-100%** | 0% |
| 10.01+ | 2 | **-100%** | 0% |

Almost every unit of the month's combo profit (and then some) came from
the 3.01–5.0 bucket (+138.58u out of the segment's +80.63u total — the
other buckets net negative against it). **Every combo priced above 5.0 this
month lost — 0 wins from 7 attempts.** Seven is a small sample, but it's a
*clean* one: not "mostly losing," but *zero* winners. Combined with 40 of
the 46 combos being simple 2-leg doubles (5 trebles, 1 four-leg), the
actionable read is: the 2-leg double in the 3–5 odds range is a real,
working shape; reaching for bigger accumulators (5+ combined odds) has no
supporting evidence of working at all this month.

---

## 5. Behavioral Analysis

Only patterns the data actually supports are listed. Anything requiring
timestamps or bankroll data is marked not assessable.

- **Not assessable from this file:** weekend-only betting, time-of-day
  patterns, betting because a match is televised, betting favorite *teams*
  specifically (as opposed to favorite *prices*) — none of these have
  supporting fields in `aug.json`.
- **Stake escalation after losses: not present, and that's worth noting
  as a genuine positive** — every single bet in the file is staked 10/10.
  There is no "went bigger to chase a loss" pattern because stake size
  literally never changes. Whatever else is wrong with this month, panic
  bet-sizing is not one of them, at least not through stake size.
- **Odds escalation after losses — a real signal.** Ordering bets
  chronologically by pick ID: the average odds taken on the bet
  *immediately following a loss* is **2.94** (n=106), versus **2.51**
  immediately following a win (n=81). That's a ~17% jump in average price
  taken right after a loss. This is a classic loss-chasing signature —
  reaching for a bigger, lower-probability price to make the previous loss
  back faster — showing up through *odds selection* even though stake size
  stays flat. It's a correlation from one month of sequential data, not
  proof of intent, but it's consistent with what shows up in the
  chronological trend below.
- **Bet volume roughly matches the stated plan.** 192 bets over 33 days =
  **5.82 bets/day**, close to the blog's own stated target of "4-5 picks
  per day (usually around 5)" — if anything running slightly above plan.
  Volume discipline itself isn't the problem here.
- **One-off league sampling reads as impulse betting.** See section 3 — 10
  leagues bet exactly once each, 9 of them losers. Repeatedly testing
  single bets in leagues with zero track record, rather than building
  volume in leagues already shown to work (Bulgaria, Spa. Primera), is a
  discipline gap, not a strategy.

---

## 6. Risk Analysis

- **Stake sizing:** flat 10 units on every single bet, singles and combos
  alike, all month. Mechanically disciplined — no sign of stake escalation,
  no visible attempt to "get back to even" by betting bigger. **A
  syndicate would approve of the stake-sizing mechanism itself.**
- **Bankroll management:** cannot be fully assessed — there's no bankroll
  baseline in this file, so we don't know what 10 units represents as a %
  of bankroll. What we *can* say: a 162.62-unit peak-to-trough swing
  happened within one month, on flat 10u stakes. If bankroll sizing assumes
  something like a standard 1-3% per-bet risk model (i.e., a bankroll of
  ~330-1000 units), a 162-unit drawdown is a **16-49% bankroll swing in a
  single month** for a strategy that nets +0.27% ROI. That ratio of
  drawdown-to-edge is the real problem, independent of exact bankroll size.
- **Risk exposure / variance:** combos (24% of bets by count) carry
  average odds of 3.93 versus 2.35 for singles — meaningfully higher
  variance per bet, and combos are also the only profitable segment. That's
  a genuine tension: the profitable part of the operation is also the
  highest-variance part.
- **Volatility vs. edge:** std. dev. per bet (12.12u) is roughly **400x**
  the mean per-bet profit (0.03u). A professional risk desk sizes stakes
  relative to edge; when volatility this thoroughly dwarfs the edge, flat
  staking at a size big enough to produce a 162u swing is not something a
  syndicate would sign off on without a demonstrated, larger-sample edge to
  justify the swings.

**Would a syndicate approve this staking strategy?** The mechanism (flat
stakes, no chasing via size) — yes. The **size** relative to the
demonstrated edge this month — no. Flat staking is right; flat staking at
this magnitude, against a near-zero measured edge, is not.

---

## 7. Hidden Patterns

- **Home bias in Match Winner singles is the cleanest signal in the whole
  file.** Restricting to "Full Time Result" single bets where the backed
  team is identifiable against the fixture (n=47, 1 unresolved due to a
  name-format mismatch): backing the **home** team went 16W-11L for
  **+60.3u (+22.3% ROI, 59.3% win rate)**; backing the **away** team went
  6W-13L for **-36.2u (-19.1% ROI, 31.6% win rate)**. That's a 41-point
  swing in win rate and an ~41-point swing in ROI between backing the home
  side and the away side on the same market type. n=27 vs n=19 is a decent
  sample for one month — not proof, but the strongest, most consistent
  split anywhere in this data.
- **Combo legs outperform the same market types as standalone singles.**
  Individual leg hit-rates inside combos: Over/Under legs won 60.3% (45 of
  75 settled legs), Match Winner legs won 76.9% (13 of 17 settled legs).
  Compare that to the *standalone single-bet* win rates for the same
  markets: Over/Under Goals singles won only 40%, Match Winner singles
  47.8%. The selections chosen as combo legs are hitting far more often
  than the equivalent standalone picks — suggesting more selective/
  conservative picking when building a parlay leg than when firing off a
  single. (22 of 99 legs are still marked "pending" in the source data even
  though every parent combo here is fully settled — a data-completeness
  quirk of the site, not a live-exposure issue; it slightly limits how far
  this leg-level read can be pushed.)
- **The month has a clear collapse-and-partial-recovery shape.** Splitting
  the 192 bets into 5 equal chronological chunks (not calendar weeks — no
  per-bet dates exist):

  | Chunk | Bets | Profit | ROI | Win rate | Avg odds |
  |---|---|---|---|---|---|
  | 1 (earliest) | 39 | +28.35 | +8.1% | 51.4% | 2.14 |
  | 2 | 39 | +43.53 | +11.2% | 51.3% | 2.19 |
  | 3 | 39 | **-91.62** | **-23.5%** | **30.8%** | 2.85 |
  | 4 | 39 | +6.86 | +1.8% | 43.6% | 2.79 |
  | 5 (latest) | 36 | +17.92 | +5.0% | 38.9% | 3.78 |

  Chunk 3 is where the 9-bet losing streak and most of the 162.62u
  drawdown live — win rate craters to 30.8%, the worst of any chunk by a
  wide margin. Chunks 4-5 recover to profit, but **win rate never returns
  to chunks 1-2 levels** (43.6%, then 38.9%) — the recovery is being funded
  by taking bigger average odds (2.79, then 3.78) rather than by hitting
  more bets. That matches the odds-after-a-loss finding in Section 5: the
  month's second half leans on bigger prices to stay in the black, not on
  picking better.
- **The stated "goals specialist" identity doesn't match the profit
  source.** As shown in Sections 1-2, Over/Under Goals (the stated
  specialty) is the biggest loser by both volume and ROI, while Match
  Winner and parlays — not the stated focus — are what actually made money.

---

## 8. Strengths — keep doing this

1. **Flat staking, no exceptions.** Every bet, win or lose, single or
   combo, is 10/10. No stake escalation after losses was found anywhere in
   106 post-loss bets. This is genuinely disciplined and should not change.
2. **2-leg doubles priced 3.01-5.0 combined odds.** 25 bets, +55.4% ROI.
   This is the best-evidenced, repeatable shape in the entire file and
   should be the anchor of the strategy, not a side activity.
3. **Over 3.5 goals.** 16 bets, +38.6% ROI, 68.75% win rate — the best
   evidenced single-market line in the file.
4. **Backing the home side in match-winner bets.** +22.3% ROI on 27 bets
   vs. -19.1% on 19 away bets — keep the home lean, at minimum stop taking
   away-side match-winner bets at the current rate.
5. **Bulgaria and Spain (La Liga) as home-market/watched leagues.** 10 and
   9 bets respectively, both comfortably profitable (+30.4%, +57.9% ROI).
   Small samples, but the only two leagues with double-digit ROI *and* a
   real bet count behind them.
6. **Bet volume discipline.** 5.82 bets/day against a stated target of ~5 —
   volume itself isn't the leak.

---

## 9. Weaknesses — stop doing this

1. **Betting Over 2.5 and Over/Under Goals generally.** 63 bets at -16%
   ROI is the single largest source of loss in the file. Over 2.5 alone
   (23 bets, -27.2% ROI, 34.8% win rate) is the worst high-volume line
   anywhere in the data — at these odds (avg 2.00) this line should be
   winning close to 50%, not 35%.
2. **Asian Handicap, especially in Australia.** 21 bets, -21.9% ROI
   overall; -27u of that on just 7 Australian AH bets (2W-5L). This market
   is not working and is disproportionately concentrated in one league.
3. **Sitting at ~1.90 average odds on over half of all single bets** (75
   of 146). This is the single biggest odds bucket and it's a -9.6% ROI
   leak, while the smaller 2.01-2.30 and 2.31+ buckets are profitable.
4. **One-off league excursions.** 10 leagues bet exactly once, 9 losers,
   -90u total (18x the entire month's net profit). No repeat data, no
   edge, no reason to keep sampling new leagues at this rate.
5. **Reaching for bigger combo odds.** Every combo priced above 5.0
   combined odds lost this month (0-for-7). Combos above 5.0 have zero
   supporting evidence and materially higher variance for no shown payoff.
6. **Taking bigger odds right after a loss.** 2.94 average odds after a
   loss vs. 2.51 after a win — a real, if moderate, chasing signature that
   coincides with the month's worst chronological stretch (chunk 3) being
   followed by rising average odds rather than recovered win rate.

---

## 10. Recommendations

- **Markets to focus on:** Match Winner (Full Time Result) as a standalone
  market; 2-leg doubles in the 3.01-5.0 combined-odds range; Over 3.5
  goals specifically (not Over/Under goals broadly).
- **Markets to avoid/cut immediately:** Over 2.5 and Over 3.0 goals lines;
  Asian Handicap, especially in Australia; single corners bets at odds
  above ~5 (0-for-2 this month at 11.5 avg odds, extreme variance for an
  unproven edge).
- **Leagues to specialize in:** Bulgaria (home-market knowledge edge is
  plausible and shows up in the numbers) and Spain La Liga. Both need more
  volume before calling them a proven edge, but both currently justify
  more attention, not less.
- **Leagues to remove completely:** stop taking single "one-off" bets in
  leagues with no track record (this month: Poland, Scotland, Austria,
  Sweden, Belgium, France, India, Spanish Segunda, Saudi Arabia). If a new
  league is worth trying, test it at reduced stake, not full 10/10.
- **Ideal odds range:** 2.00-2.30 for singles (the only single-bet odds
  zone that was clearly profitable with a real sample this month); 3.0-5.0
  combined odds for combos. Reduce volume at ~1.80-2.00, which is both the
  most heavily used zone and a clear loser.
- **Maximum bets per day:** current ~5.8/day pace is fine volume-wise; the
  fix is *which* 5-6 bets, not fewer or more of them.
- **Bankroll strategy:** because bankroll size isn't in this data, get an
  explicit bankroll figure on record and size the 10-unit stake as a fixed
  %, not a fixed number — so a future 160+ unit swing is a known,
  pre-approved % drawdown rather than an unmeasured one.
- **Stake sizing:** keep flat staking as the mechanism; consider a modest
  reduction in stake for markets/leagues without a demonstrated edge
  (Section 9) rather than staking every bet identically regardless of
  confidence.
- **Record keeping improvements:** capture kickoff timestamp and day of
  week per pick (currently absent) to finally test the weekend/time-of-day
  questions this review couldn't answer; capture closing odds at kickoff
  to enable real CLE tracking, which is the single best predictor of
  long-run edge for a bettor at this volume.

---

## 11. Professional Action Plan (next 6 months)

**Daily routine**
- Log kickoff time and day of week for every pick going forward (fixes the
  biggest blind spot in this audit).
- Before placing, check: is this a one-off league with no track record? If
  yes, either skip it or stake it at reduced size, not full 10/10.
- Before placing an Over/Under goals bet, default to Over 3.5-style lines
  over Over 2.5/3.0-style lines unless there's a specific, written reason
  for the exception.

**Weekly routine**
- Recompute rolling ROI split by singles vs. combos. If singles are still
  net negative after 4-6 weeks of the changes above, that's the signal to
  cut single-market volume further, not just tweak it.
- Review any losing streak of 4+ bets specifically for whether the odds
  taken on the next bet crept up versus the weeks' baseline average
  (this month's chasing signal) — a deliberate check-in against the
  pattern found in Section 5/7.

**Data to collect (not currently in the file)**
- Kickoff timestamp, day of week.
- Closing odds at kickoff (enables CLE, the strongest long-run predictor
  available to a professional operation).
- Starting bankroll and running bankroll balance, so stake size can be
  expressed and tracked as % of bankroll.

**Metrics to monitor monthly**
- ROI split singles vs. combos (do not let combos keep masking single-bet
  losses without addressing the singles directly).
- ROI by odds bucket (watch specifically whether the 1.80-2.00 zone
  improves after volume is deliberately shifted toward 2.00-2.30).
- Max drawdown vs. realized profit ratio — this month it was roughly
  32:1 (162.62u drawdown vs 5.04u profit); a healthy target is closer to
  single digits.

**Mistakes to eliminate**
- One-off, no-track-record league bets at full stake.
- Over 2.5/Over 3.0 goals lines as a default; Asian Handicap in Australia.
- Combos priced above 5.0 combined odds until a larger sample shows they
  work.

**New experiments worth testing**
- Deliberately increase volume in the 2.00-2.30 single-bet odds zone,
  holding everything else constant, and re-measure after ~150-200 bets.
- Track home vs. away split prospectively (not retrospectively) for Match
  Winner bets to see if the home edge found here holds up.
- Test whether capping combos at 2 legs / ≤5.0 combined odds, with no
  exceptions, changes combo ROI over the next quarter.

**Markets worth exploring further**
- Match Winner (Full Time Result), especially home-side.
- 2-leg doubles at 3.0-5.0 combined odds.

**Markets to stop betting immediately**
- Over 2.5 / Over 3.0 goals lines as currently used.
- Asian Handicap in Australia specifically.
- Combos above 5.0 combined odds.

---

## 12. Brutally Honest Verdict

**Would I keep this bettor on a professional syndicate roster? Not at
current stakes, and not without changes.**

The month is a wash — +0.27% ROI is statistical noise, not skill. That
alone wouldn't be disqualifying; every bettor has flat months. What would
worry a syndicate manager is *how* the flat result was produced:

- The entire positive result is carried by a smaller, higher-variance
  slice of the book (46 combos) while the stated core product (single
  Over/Under goals bets, the largest slice of volume) lost money outright.
  A syndicate pays for a demonstrated edge in the *stated* specialty — this
  data shows the opposite of that.
- A 162.62-unit drawdown was absorbed to net +5.04 units. That risk-to-
  reward ratio (roughly 32:1) is not something a risk desk signs off on
  repeatedly, regardless of how the month happens to end.
- There's a visible, if moderate, tell of chasing losses through odds
  selection (bigger prices right after a loss), concentrated in exactly
  the stretch of the month that went worst.
- Nearly a fifth of the month's net profit-equivalent (-90 of the eventual
  +5.04) was given back testing one-off leagues with no track record and
  no repeat volume.

**Verdict: retrain, don't reject, and don't scale up.** There is real,
usable signal in this data — the home-side Match Winner split, the 2-leg
3-5 odds combo shape, Over 3.5 goals, Bulgaria and La Liga — that's more
edge-shaped evidence than most one-month samples produce. But it's sitting
underneath a losing core product (Over/Under goals broadly, Asian
Handicap, one-off leagues) that is currently cancelling it out almost
exactly. If this bettor cut the Section 9 list and concentrated stake on
the Section 8 list for the next 3-6 months with proper timestamp/closing-
line logging in place, there'd be enough data to make a real keep/reject
call. Today, on this one month alone: **not fundable at current size, worth
a supervised retrain.**
