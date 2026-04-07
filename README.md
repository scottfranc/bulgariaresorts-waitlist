# Bulgaria Resorts Waitlist Platform

Standalone coming-soon/waitlist platform with:
- premium landing page (`/`)
- platform vision page (`/what-to-expect`)
- Supabase-backed waitlist collection
- Vercel Analytics enabled

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Copy env template:

```bash
cp .env.example .env.local
```

3. Fill `.env.local` values:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

4. Create the Supabase table:

```sql
create extension if not exists pgcrypto;

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  first_name text null,
  source text not null default 'coming-soon',
  created_at timestamptz not null default now()
);
```

5. Start dev server:

```bash
npm run dev
```

## API

- `POST /api/waitlist`
  - body: `{ email, firstName?, source?, website? }`
  - email validated server-side
  - duplicate emails handled via unique constraint
  - simple in-memory rate limit + honeypot field

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import repo into Vercel.
3. Set environment variables from `.env.example`.
4. Enable Vercel Analytics in Project Settings.
5. Redeploy and test submission end-to-end.
