# School Management System — Homepage Template

A modern, responsive, accessible static homepage template for a school management system.

## Features

- Clean, responsive layout with accessible navigation
- Sections for hero, announcements, features, calendar/events, admissions, and contact
- Dynamic population of announcements and events from JSON (with graceful fallback)
- Newsletter form with basic client-side validation
- PWA metadata (manifest) and optional service worker registration

## File structure

```
school-homepage-template/
├─ index.html
├─ styles.css
├─ script.js
├─ manifest.webmanifest
├─ sw.js
├─ assets/
│  ├─ favicon.svg
│  ├─ logo.svg
│  ├─ hero-illustration.svg
│  ├─ icon-students.svg
│  ├─ icon-parents.svg
│  ├─ icon-teachers.svg
│  └─ data/
│     ├─ announcements.json
│     └─ events.json
```

## Customize

Search/replace the following placeholders in `index.html` and `manifest.webmanifest`:

- `{{SCHOOL_NAME}}`
- `{{SCHOOL_SHORT}}`
- `{{SCHOOL_TAGLINE}}`
- `{{SCHOOL_ADDRESS_LINE1}}`
- `{{SCHOOL_ADDRESS_LINE2}}`

Replace icons in `assets/` with your branding. For best PWA support, include PNG icons (192x192, 512x512) in the manifest.

## Data

- `assets/data/announcements.json` and `assets/data/events.json` power the homepage lists. If these are unavailable, built-in sample data is used.
- Shape:
  - Announcements: `{ title, body, date (YYYY-MM-DD), type? (info|alert|success) }`
  - Events: `{ date (ISO), title, location? }`

## Development

- Serve locally: any static server will work.

```bash
python3 -m http.server -d . 5173
# then open http://localhost:5173
```

No build step required.

## Accessibility

- Keyboard-friendly, visible focus, skip link, proper roles/labels
- Respects `prefers-reduced-motion` and `prefers-color-scheme`

## License

MIT — use freely in your school projects.
