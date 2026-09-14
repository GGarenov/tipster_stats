---
name: blogabet-stats
description: Extract Goal Digger's (redcardrisk.blogabet.com) picks archive for a given date range via Chrome DevTools and write it into a dated JSON file in this project, matching the schema of july.json/aug.json etc. Use whenever the user asks to "изкарай статистика за даден период" / pull tipster stats for a period.
---

# Blogabet picks-archive extractor

Reproduces the exact workflow used to build `july.json` / `aug.json` in this
project. When the user asks for stats for a period, do this end-to-end without
asking for confirmation on each step — just report the final numbers.

## Inputs to resolve before starting

- **Date range**: the user gives it in `dd-mm-yyyy` (e.g. "27-07-2026 -
  28-08-2026"). If they only name a month, use the 1st to the last day of
  that month.
- **Output file**: default to `<month-lowercase>.json` in the project root
  (e.g. `august.json`/`aug.json` — check existing filenames in the repo root
  for the naming pattern already in use, e.g. `july.json`, `march.json`, and
  follow it). If a file for that period already exists, confirm with the user
  before overwriting (this is a destructive, hard-to-reverse action).
- **Source blog**: default to `https://redcardrisk.blogabet.com/` (tipster
  "Goal Digger") unless the user names a different Blogabet tipster URL.

## Step-by-step

1. **Open the page** with `mcp__chrome-devtools__new_page` on the source URL.
2. **Open Picks Archive**: take a snapshot, click "BLOG MENU", take a
   snapshot, click "PICKS ARCHIVE (<n>)".
3. **Set the date range**: take a snapshot, click the "From" textbox inside
   the "Choose range" form. A date-picker calendar may pop up — ignore it and
   instead just re-check the snapshot; the two textboxes ("From"/"To") accept
   the range once both are filled. Use `mcp__chrome-devtools__fill` on the
   "From" uid with the start date (`dd-mm-yyyy`) and on the "To" uid with the
   end date. After filling both, take a snapshot again — the page
   auto-reloads the filtered stats (summary counts, stakes, bookmakers,
   sports, leagues, months tables) and the picks feed once the range is
   applied. If `fill` times out on the first try (the calendar widget can
   intercept the click), just retry the snapshot — the value often already
   registered.
4. **Load every pick in range** via `mcp__chrome-devtools__evaluate_script`.
   The site exposes a global `load_more_picks(page, 'picks')` function that
   AJAX-appends more `<li class="feed-pick">` items. Call it in a loop with a
   short wait between calls, checking `document.querySelectorAll('li.feed-pick').length`
   after each batch, e.g.:

   ```js
   async () => {
     for (let p = 2; p <= 30; p++) {
       window.load_more_picks(p, 'picks');
       await new Promise(r => setTimeout(r, 1200));
     }
     const lis = document.querySelectorAll('li.feed-pick');
     const last = lis[lis.length - 1];
     return { count: lis.length, lastDate: last.querySelector('.bet-age').textContent.trim() };
   }
   ```

   Keep raising the page ceiling until `count` stops growing AND matches the
   filtered "picks" total shown in the stats panel (parsed from the snapshot,
   e.g. heading like "192 PICKS" or the "Stakes" table total), and until
   `lastDate` reaches the "From" boundary date. The list is already filtered
   server-side to the chosen range, so you never need to keep loading past
   that boundary or manually discard out-of-range picks.

5. **Extract structured picks** with one more `evaluate_script` call (use
   `filePath` to dump to a scratch file if the result is large — anything
   over ~150 picks will exceed the inline tool-result size). Parse each
   `li.feed-pick`:

   - `id` = the `li` id with `media-` stripped.
   - `event` / `url` = text/href of `.feed-pick-title h3 a`.
   - `market` / `odd` = text of `.pick-line` with the `.feed-odd` span's text
     removed and `@` stripped (null for combo picks, which have no
     `.pick-line` market text); `odd` is `.feed-odd`'s parsed float.
   - `stake` = text of `.labels .label-default`.
   - `result` / `profit`: find the direct `<span>` child of `.labels` that
     carries `data-original-title` in `WIN|LOST|VOID|PENDING|PUSH`. Map
     `WIN→won`, `LOST→lost`, `VOID|PUSH→void`, `PENDING→pending`. `profit` is
     that span's text parsed as a float (strip everything but digits/./+/-).
   - `league` = from `.sport-line small`'s text, regex
     `/^Football \/\s*(.*?)\s*\/\s*Kick off:/` on the whitespace-collapsed
     text; null when there's no `.sport-line` (combo picks).
   - `legs` (combo picks only, i.e. when `table.combo-table` exists): for
     each non-header row, `event`/`selection` = 2nd/3rd `<td>` text,
     `odd` = parsed float of the 4th `<td>`, and from the 5th `<td>`'s
     `<i data-original-title>` icon apply the same result mapping as above;
     `score` = the 5th `<td>`'s remaining text (nbsp-stripped), or null if
     empty (pending legs have no score yet).

   Also read off the filtered aggregate tables from the snapshot text
   directly (Stakes / Bookmakers / Sport / Leagues / Month sections in the
   "Choose range" form) rather than recomputing them — they're already
   server-computed for the exact range.

6. **Assemble the final JSON** in this shape (mirrors `july.json`):

   ```json
   {
     "source": "<blog url>",
     "tipster": "<tipster name>",
     "platform": "Blogabet",
     "country": "<country>",
     "verified": false,
     "extractedAt": "<today, YYYY-MM-DD>",
     "filter": {
       "section": "Picks Archive",
       "dateFrom": "dd-mm-yyyy",
       "dateTo": "dd-mm-yyyy",
       "dateFormat": "dd-mm-yyyy"
     },
     "summary": {
       "picks": <n>, "profit": <n>, "yieldPercent": <n>, "followers": <n>,
       "won": <n>, "lost": <n>, "void": <n>,
       "profitSumFromPicks": <sum of every pick's profit, rounded to 2dp>
     },
     "stakes": [...], "bookmakers": [...], "sports": [...],
     "leagues": [...], "months": [...],
     "picks": [ { "id", "event", "market", "odd", "stake", "profit",
                  "result", "league", "url", "legs"? }, ... ]
   }
   ```

   Compute `won`/`lost`/`void`/`profitSumFromPicks` by summing over the
   extracted picks array (don't hand-copy from the UI) — do this in a small
   Node script (`node -e "..."` or a scratch `.js` file) rather than by hand,
   since these lists run into the hundreds of entries.

7. **Sanity-check before writing**: the summed league picks/profit for each
   sport should equal that sport's own picks/profit row (e.g. all
   non-combo-pick league rows sum to the "Football" sport row); the computed
   won+lost+void should equal total picks; the last loaded pick's date
   should equal the requested `dateFrom`. Report any mismatch instead of
   silently writing a bad file.

8. **Write the output file** at the project root, then clean up any scratch
   files used along the way.
