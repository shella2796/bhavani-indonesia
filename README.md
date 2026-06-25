# Bhavani Indonesia

Official Bhavani Indonesia website, built with Next.js and an embedded Sanity Studio.

## Where to edit content

Use Sanity Studio at `/studio` for:

- Articles, cover images, and article body content
- Program records and highlights
- Team profiles
- Website settings and contact details

Edit `lib/content.ts` for the fixed organization-profile sections:

- Challenges
- Program pillars
- Organization strengths
- Mission structure
- Default leadership structure

Edit `lib/fallback.ts` for the content shown when Sanity is unavailable or a collection is empty.

## Local workflow

```powershell
git pull
npm.cmd install
npm.cmd run dev
```

Open:

- Website: `http://localhost:3000`
- Studio: `http://localhost:3000/studio`

Before publishing:

```powershell
npm.cmd run build
git status
git add .
git commit -m "Update Bhavani website"
git push
```

Vercel deploys the `main` branch automatically. Sanity content is stored remotely, so Studio edits do not require `git pull`; only source-code changes do.

## Environment

Copy `.env.example` to `.env.local` and keep the real values out of Git. The current project uses Sanity project `peewnyge` and dataset `production`.
