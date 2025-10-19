Nogales Lodge #11 website

Stack
- React 18 + Vite 5
- Tailwind CSS
- React Router, i18next, react-helmet-async

Develop
- Install pnpm (or use npm/yarn but CI uses pnpm)
- pnpm install
- pnpm dev

Content editing
- JSON files in `src/content` control officers, events, gallery, links, FAQs.
- Translations in `src/i18n/locales/{en,es}/common.json`.

Deploy
- Push to main; GitHub Actions builds and deploys to Pages at:
	https://saithv.github.io/nogaleslodge.github.io/
