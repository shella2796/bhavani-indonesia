# Bhavani Indonesia

Production website for Bhavani Indonesia, built with Next.js and an embedded Sanity Studio.

## CMS content

- Website settings and contact details
- Articles with rich text and image uploads
- Programs and featured activities
- Team profiles

## Local setup

1. Create a Sanity project and copy `.env.example` to `.env.local`.
2. Fill in `NEXT_PUBLIC_SANITY_PROJECT_ID`.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the website at `http://localhost:3000`.
6. Open the editor at `http://localhost:3000/studio`.

Without Sanity environment variables, public pages use the included Bhavani fallback content.

## Vercel

Import the GitHub repository into Vercel and add the three values from `.env.example` to the project environment variables. Sanity Studio is deployed with the website at `/studio`.
