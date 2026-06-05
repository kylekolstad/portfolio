# Kyle Kolstad Portfolio

A Next.js App Router portfolio focused on backend engineering, integrations, and applied AI work.

## Stack

- Next.js (App Router)
- React
- Tailwind CSS v4
- Motion
- next-themes
- Lucide React
- React Icons

## Project Structure

```text
app/
	layout.tsx
	page.tsx
	global.css
	robots.ts
	sitemap.ts

components/
	navigation.tsx
	hero-section.tsx
	about-section.tsx
	projects-section.tsx
	skills-section.tsx
	experience-section.tsx
	contact-section.tsx
	footer.tsx
	theme-provider.tsx
	icons/
	ui/

lib/
	motion.ts
	utils.ts
```

## Development

```bash
pnpm install
pnpm dev
```

## Quality Checks

```bash
pnpm typecheck
```

## Notes

- Section components live in `components/` (relocated from `app/components/`).
- The app is a single-page portfolio with SEO metadata, sitemap, and robots support.
