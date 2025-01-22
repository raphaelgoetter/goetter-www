# Page web <www.goetter.fr>

## Stack

- **pnpm** : gestionnaire de paquets
- **Vite** : gestion du build, compilation
- **Handlebars** : templates HTML
- <del>UnoCSS</del> **Tailwind 4** : gestion des styles CSS (CSS vanilla, mais classes utilitaires disponibles au cas où)

Annexes :

- **Prettier** : formatage du code
- `prettier-plugin-css-order` : pour réordonner les propriétés CSS

## Tâches

- Développement local : `pnpm dev`
- Compilation et mise en prod `git push` (Github Actions déploie et publie le site sur Google Pages)

## Installation / configuration

1. Suivre pas à pas les étapes de la [Routine d'initialisation de projet](https://github.com/alsacreations/kiwipedia/blob/main/starters/project-init.md) d'Alsacréations.
2. Installer [vite-plugin-handlebars](https://www.npmjs.com/package/vite-plugin-handlebars)

## Github Pages

Site hébergé, compilé et déployé sous [Github Pages](https://pages.github.com/).

- Configuration générale dans [Settings > Pages](https://github.com/raphaelgoetter/goetter-www/settings/pages)
- "Build and deployment" via [Github Actions](https://github.com/raphaelgoetter/goetter-www/actions)
- Fichier de tâches de déploiement : [`static.yml`](https://github.com/raphaelgoetter/goetter-www/blob/main/.github/workflows/static.yml)
- Domaine personnalisé dans [Settings > Pages](https://github.com/raphaelgoetter/goetter-www/settings/pages)

## Styles CSS

**[UnoCSS](https://unocss.dev/)** est notre générateur principal de classes utilitaires et de custom properties CSS.

- **CSS Vanilla :** Nous écrivons les règles CSS dans les feuilles de styles et nous n'utilisons pas de classes utilitaires, sauf exceptions.
- **Base et Reset :** Le fichier `uno-bretzel.ts` contient le Reset CSS Alsacréations ainsi que diverses classes "layouts" spécifiques à nos projets (`visually-hidden`, `liquid/splash`, `l-autogrid`, `l-repel`, `l-media`, etc.)
- **Variables CSS :** Le plugin `unocss-custom-properties` transforme toutes les valeurs de thème du fichier `uno.config.ts` en custom properties (ex. `font-weight: var(--font-weight-400)`) et génère un fichier `vars.css` qui les contient.
- **Qualité du code :** Prettier formatte le CSS, `prettier-plugin-css-order` réordonner les propriétés CSS.
