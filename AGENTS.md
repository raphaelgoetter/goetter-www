# AGENTS.md

## Présentation du projet

Site personnel et portfolio de Raphaël Goetter (goetter.fr), vitrine technique axée sur le CSS moderne et l'accessibilité.

## Stack technique

- **Build/Dev** : Vite, pnpm
- **Templating** : Handlebars (`vite-plugin-handlebars`)
- **Styles** : CSS Vanilla, PostCSS (`postcss-custom-media`)
- **Images** : Sharp (`vite-plugin-vsharp`)
- **Qualité** : Stylelint, Prettier

## Commandes essentielles

- `pnpm dev` : Démarrer le serveur de développement local.
- `pnpm build` : Générer le site statique dans le dossier `dist/`.
- `pnpm lint:css` : Vérifier et valider le formatage du CSS.

## Conventions critiques

- **Style CSS** : Utilisation stricte de CSS natif (pas de Tailwind/Bootstrap) ; custom properties référencées dans le fichier `assets/css/theme.css`
- **Responsive** : Approche **mobile-first** obligatoire pour tout nouveau style.
- **Breakpoints** : Utiliser exclusivement les Custom Media de `theme.css` (`--sm`, `--lg`, `--xl`).
- **Syntaxe Media Queries** : Utiliser les opérateurs modernes (ex: `@media (--sm)` ou `width >= 40rem`).
- **Organisation** : Les composants réutilisables résident dans `assets/partials/`.
- **Déploiement** : Automatisé via GitHub Actions lors d'un `git push`.
- **Commits** : Conventional Commits, type en anglais, description en français — ex. : `feat(contact): ajoute captcha`
- **Commentaires** : en français
