# AETHERFORGE — one prompt, one card game

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/badboy0771/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/badboy0771/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

Entry for the make.fun bounty
[post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709):
a short video about an AI coding agent building a tiny browser game from one
prompt while its owner watches.

## The video

One prompt — "Build the best card game: a tactical duel, player vs AI" —
goes in, and out comes **AETHERFORGE**, a playable card battler. The clip
shows the prompt, the agent's real working code, and then the finished game
running for real: cards played, the AI opponent Vex taking its turn, all
recorded live from the game itself. It ends with make.fun's official
referral end card carrying referral code `k699ajzx`.

The video is 24.5 seconds, 1280×720, H.264, and was posted natively on X
from the public account [@pejuangwor22](https://x.com/pejuangwor22) on
23 November 2026:

https://x.com/pejuangwor22/status/2124850032881086943

## This repository

- `main.ts` — the entry program. It reads `POST.json` from the repository,
  checks that its URL really is an X post address, and copies it unchanged
  into the output directory the grader points at.
- `POST.json` — the address of the X post above.
- `AGENT.md` — the task in one page.

## Run it the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It exits 0 and writes `out/POST.json`, byte for byte the same as the
repository's `POST.json`.

## License

MIT — see `LICENSE`.
