# Page web <www.goetter.fr>

## Stack

- **pnpm** : gestionnaire de paquets
- **Vite** : gestion du build, compilation
- **Handlebars** : templates HTML
- CSS vanilla

Annexes :

- **Stylelint** : bonnes pratiques CSS
- **Prettier** : formatage du code
- `prettier-plugin-css-order` : pour réordonner les propriétés CSS

## Tâches

- Développement local : `pnpm dev`
- Compilation et mise en prod `git push` (Github Actions déploie et publie le site sur Google Pages)

## Installation / configuration

1. Suivre pas à pas les étapes de la [Routine d'initialisation de projet](https://github.com/alsacreations/kiwipedia/blob/main/starters/project-init.md) d'Alsacréations.
2. Installer [vite-plugin-handlebars](https://www.npmjs.com/package/vite-plugin-handlebars)

## Note : Ajout et configuration de Stylelint

`pnpm install --save-dev stylelint stylelint-config-standard stylelint-config-html stylelint-order stylelint-config-property-sort-order-smacss`

Dans `stylelint.config.js` :

```js
/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html",
    "stylelint-config-property-sort-order-smacss",
  ],
  plugins: ["stylelint-order"],
}
```

Dans VS Code : installer l'extension [stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) et modifier les settings :

```json
{
  "stylelint.validate": [
      ...,
      // ↓ Add "html" language.
      "html",
      // ↓ Add "vue" language.
      "vue"
  ]
```

**Redémarrer VS Code.**

## Github Pages

Site hébergé, compilé et déployé sous [Github Pages](https://pages.github.com/).

- Configuration générale dans [Settings > Pages](https://github.com/raphaelgoetter/goetter-www/settings/pages)
- "Build and deployment" via [Github Actions](https://github.com/raphaelgoetter/goetter-www/actions)
- Fichier de tâches de déploiement : [`static.yml`](https://github.com/raphaelgoetter/goetter-www/blob/main/.github/workflows/static.yml)
- Domaine personnalisé dans [Settings > Pages](https://github.com/raphaelgoetter/goetter-www/settings/pages)

## Styles CSS

- **CSS Vanilla :** Nous écrivons les règles CSS dans les feuilles de styles et nous n'utilisons pas de classes utilitaires, sauf exceptions.
- **Base et Reset :** Les fichier `bretzel-*.css` contiennent le Reset CSS Alsacréations ainsi que diverses classes "layouts" spécifiques à nos projets (`visually-hidden`, `liquid/splash`, `autogrid`, `repel`, `switcher`, etc.)
- **Qualité du code :** Prettier formatte le CSS, `prettier-plugin-css-order` réordonner les propriétés CSS.

## CSS Custom Media (media queries personnalisées)

Cette base utilise les CSS Custom Media pour écrire des media queries lisibles et cohérentes à l’échelle du projet, grâce au plugin PostCSS `postcss-custom-media`.

### Installation

Le plugin est déjà présent dans `package.json`.

```json
{
  "devDependencies": {
    "postcss-custom-media": "^11.0.6"
  }
}
```

Si nécessaire:

```bash
pnpm add -D postcss-custom-media
```

### Configuration

La configuration PostCSS active le plugin (fichier `postcss.config.mjs`). Aucun réglage spécifique n’est requis par défaut.

```js
export default {
  plugins: {
    "postcss-custom-media": {
      /* plugin options */
    },
  },
}
```

### Déclaration des breakpoints

Les breakpoints du projet sont déclarés dans `assets/css/theme.css` via `@custom-media`.

```css
/* assets/css/theme.css */
@custom-media --sm (width >= 40rem); /* 640px */
@custom-media --lg (width >= 64rem); /* 1024px */
@custom-media --xl (width >= 80rem); /* 1280px */
```

Ces alias deviennent utilisables dans toutes les feuilles CSS importées par `assets/css/app.css`.

### Usage

Référencer les custom media par leur nom dans les règles, en profitant de la syntaxe moderne des plages:

```css
.card {
  gap: var(--spacing-16);

  @media (--sm) {
    gap: var(--spacing-24);
  }

  @media (--lg) {
    gap: var(--spacing-36);
  }
}
```

Autre exemple issu du projet (extrait adapté):

```css
.toc {
  padding: var(--spacing-s);
  border-radius: var(--radius-md);

  @media (--lg) {
    position: fixed;
    top: var(--spacing-m);
    left: var(--spacing-s);
    width: 16rem;
  }
}
```

### Ce que fait le plugin au build

`postcss-custom-media` remplace automatiquement les références `@media (--sm)` par la requête sous-jacente. Par exemple:

```css
@media (--sm) {
  /* … */
}
```

devient à la compilation:

```css
@media (width >= 40rem) {
  /* … */
}
```

Avantages:

- Centralisation des seuils: changer la valeur d’un breakpoint se fait dans un seul fichier (`theme.css`).
- Lisibilité: des noms explicites (`--sm`, `--lg`, `--xl`).
- Cohérence: mêmes breakpoints partout dans le projet.

### Conseils d’usage

- Privilégier une approche mobile-first: styles par défaut, puis élargir avec `@media (--sm)`, `@media (--lg)`, etc.
- Utiliser la syntaxe moderne des ranges `(width >= …)` plutôt que `min-width`/`max-width`.
- Définir les custom media une seule fois dans `theme.css` et les consommer ailleurs (ne pas redéclarer localement).
- Documenter les choix de seuils en commentaires (déjà en place dans `theme.css`).

### Dépannage rapide

- Si une `@media (--sm)` ne s’applique pas, vérifier:
  - que `theme.css` est bien importé dans `assets/css/app.css` via un `@import` en couche `config`;
  - que la chaîne `--sm` est correctement orthographiée côté usage et déclaration;
  - que PostCSS est exécuté (via Vite) et que vous n’éditez pas un CSS livré non transformé dans `public/`.
