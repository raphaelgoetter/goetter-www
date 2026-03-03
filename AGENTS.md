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

## Conventions critiques spécifiques au projet

- **Organisation** : Les composants réutilisables résident dans `assets/partials/`.
- **Déploiement** : Automatisé via GitHub Actions lors d'un `git push`.

## Conventions critiques générales

- **CSS** : Jamais de styles inline (bloqués par CSP). Utiliser uniquement du CSS natif (pas de Tailwind/Bootstrap).
- **Custom Properties** : Utiliser les custom properties définies dans le fichier `assets/css/theme.css`. Préférer les variables CSS sémantiques (`tokens`) plutôt que les primitives.
- **Layouts** : Système **Bretzel** via attributs `data-layout` (`duo`, `boxed`, `stack`, `cluster`, `stack`, `autogrid`, etc.). Préférer ces attributs aux classes utilitaires et aux styles custom (ex: `flex`, `grid`, etc.)
- **Syntaxe Media Queries** : Utiliser exclusivement les Custom Media et les Breakpoints listés dans `assets/css/theme.css` (ex: `@media (--md)`, `@media (--lg)`, etc.).
- **Commits** : Conventional Commits, type en anglais, description en français — ex. : `feat(contact): ajoute captcha`
- **Commentaires** : en français
