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

## Styles CSS

- `uno.config.ts` : Contient toutes les valeurs employées dans le projet sous forme de "design tokens". _Note : nous n'utilisons pas de classes utilitaires._

Des variables CSS sont automatiquement générées dans `vars.css` à partir du fichier de config grâce à Uno CSS via le plugin `unocss-custom-properties`.

Ces variables sont ajoutées à `:root` et sont donc globales au document HTML.

**Ne jamais inventer / ajouter des variables qui ne figurent pas dans le fichier de config `uno.config.ts`.**
