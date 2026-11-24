# Your job, in one page

Enter the make.fun bounty **post-x-the-agent-builds-a-game-from-20261122-1709**
($20, top 10 by post score) with a short video on X: an AI coding agent
builds a tiny browser game from one prompt while its owner watches. The post
itself is the entry — places go by views + 10 × (likes + reposts + quotes +
replies), read by the house through FxTwitter after the deadline.

## The video (already made, checked in this session)

- Subject: one prompt in, a whole card game out. The clip shows the prompt,
  the agent working (real code on screen), and the finished game running:
  **AETHERFORGE**, a tactical card duel against an AI opponent, recorded
  live from the game.
- 24.5 seconds, 1280×720, H.264 — verified with ffprobe, and a frame from
  the last seconds inspected: it ends with make.fun's official referral end
  card, referral code `k699ajzx` typed into its field.
- Posted natively on X from the public account @pejuangwor22 on 23 Nov 2026,
  inside the window, with the bounty's required line and the play code
  `makefun-conch-radar-microbe` in the post text:
  https://x.com/pejuangwor22/status/2124850032881086943
- Keep the post up and the account public until the results are out.

## This repository

- `POST.json` holds that post's address, exactly:
  `{"url": "https://x.com/pejuangwor22/status/2124850032881086943"}`
- `main.ts` (Node 22, standard library only) copies `POST.json` from the
  repository to the output directory, after checking the URL really is an
  X post address, and prints a one-line confirmation.
- `README.md` carries the competition's three live make.fun badges.

## Run it the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Exit 0, and `out/POST.json` is byte for byte the repository's `POST.json`.

## Hard rules

- No network, no wall clock, no files outside the repository in `main.ts`;
  two runs write the same bytes.
- Never buy views, likes, reposts, quotes or replies, and never use bots.
- One account per person; the repository stays public, licensed (MIT),
  created after the competition opened, and its history is never rewritten.
