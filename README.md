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
