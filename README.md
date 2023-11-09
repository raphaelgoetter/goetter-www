# Page web <www.goetter.fr>

## Démarrer

- `git clone` ce repo
<!-- - `cd bretzel` car on travaille dans un sous-dossier -->
- `pnpm install`

## Développer

<!-- - `cd bretzel` car on travaille dans un sous-dossier -->
- `pnpm dev` pour lancer un watcher + serveur local et développer/consulter

## Publier

- `pnpm build` pour compiler vers `dist/`
- `pnpm s3` : mise en prod automatique du répertoire `dist/` sur le bucket S3
