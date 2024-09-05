# Page web <www.goetter.fr>

## Stack

- **pnpm** : gestionnaire de paquets
- **Prettier** : pour formater le code
- **Uno CSS** : pour la génération de classes utilitaires, des variables CSS et gestion des valeurs du "thème"
- **Vite** : gestion du build

## Démarrer

- `git clone` ce repo
- `pnpm install`

## Développer

- `pnpm dev` pour lancer un watcher + serveur local et développer/consulter

## Publier

- `pnpm build` pour compiler vers `dist/`
- `pnpm s3` : mise en prod automatique du répertoire `dist/` sur le bucket S3

## Configuration UnoCSS

[UnoCSS](https://unocss.dev/) est notre générateur principal de classes utilitaires et de custom properties CSS.

### Dans un projet Vite

- Dans `vite.config.js` : `import UnoCSS from 'unocss/vite'`
- Dans `vite.config.js` : `plugins: [ UnoCSS(), ],`

### Reset CSS

Le fichier `uno-alsa-preset.ts` contient le Reset CSS Alsacréations ainsi que diverses classes "layouts" spécifiques à nos projets (`visually-hidden`, `liquid/splash`, `l-autogrid`, `l-repel`, `l-media`, etc.)

- Placer le fichier `uno-alsa-preset.ts` à la racine du projet
- Dans `uno.config.css` ajouter la ligne `import alsaPreset from "./uno-alsa-preset"`
- C'est tout. Les styles seront automatiquement appliquées. Il n'est pas nécessaire d'ajouter un fichier reset complémentaire.

### Si intégration en "CSS natif"

En CSS natif (ou vanilla), nous écrivons les règles CSS dans les feuilles de styles et nous n'utilisons pas de classes utilitaires, sauf exceptions.

Toutes les valeurs des propriétés CSS sont renseignées au sein d'un fichier de configuration (via le plugin `unocss-custom-properties`) et appliquées sous forme de custom properties (ex. `font-weight: var(--font-weight-400)`).

- Dans `uno.config.ts` : `import customProperties from 'unocss-custom-properties'`
- Dans `uno.config.ts` : `import { resolve } from "node:path"`
- Dans `uno.config.ts` : `presets: [ customProperties({ writeFile: true, filePath: resolve(__dirname, "vars.css"), }), ],`

### Si intégration en "CSS utilitaire"

En CSS utilitaire, nous écrivons les styles CSS dans le fichier HTML de chaque composant, sous forme de classes utilitaires. Nous n'écrivons pas de règles au sein d'un fichier CSS, sauf exceptions.

- Dans `uno.config.ts` : `import { presetMini } from 'unocss'`
- Dans `uno.config.ts` : `presets: [ presetMini() ]`
