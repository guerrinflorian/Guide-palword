# Palworld 1.0 : Guide de Terrain Co-op

Site guide complet pour Palworld 1.0, construit comme un carnet de terrain croisé avec un HUD de jeu. Contenu en français, 13 sections, recherche Cmd+K, sidebar avec scroll-spy, puces de coordonnées copiables, tout est statique (SSG) et prêt pour Vercel.

Guide de fan privé, usage personnel. Palworld est une marque de Pocketpair, Inc.

## Stack

- Next.js 16 (App Router, TypeScript, SSG)
- Tailwind CSS 4 (tokens dans `src/app/globals.css`)
- `next/font` (Chakra Petch, Inter, JetBrains Mono, Press Start 2P)
- `lucide-react` pour les icônes, `framer-motion` pour les animations (respecte `prefers-reduced-motion`)

## Commandes

```bash
npm install        # dépendances
npm run dev        # serveur de dev sur http://localhost:3000
npm run build      # build de production (doit passer avant déploiement)
npm run start      # sert le build de production
npx eslint src     # lint
```

## Structure

```
src/
  app/              layout (polices, métadonnées), page, globals.css, icon.svg (favicon)
  components/
    layout/         Header, Sidebar (scroll-spy), Hero, Footer, BackToTop
    search/         CommandPalette (Cmd+K / Ctrl+K)
    ui/             Section, Card, Callout, Badge, Waypoint, DataTable, Steps, ...
    brand/          Logo et monogramme SVG originaux, motif topographique
    blocks/         BlockRenderer (rend le contenu typé)
  content/
    sections/       TOUT le contenu du guide, un fichier par section
    types.ts        modèle de contenu typé
    hero.ts         hero, chips, texte du footer
    pal-list.json   liste des Pals et lieux pour le téléchargement d'images
    image-manifest.json  généré par le script d'images, ne pas éditer à la main
scripts/
  fetch-images.mjs  téléchargement local des images de jeu
public/images/      pals/, brand/, locations/ + SOURCES.md (provenance)
```

Le contenu utilise un mini-markup dans les chaînes : `**gras**`, `{{NomDePal}}` (icône locale si dispo), `((x, y))` (puce de coordonnées copiable), `[label](url)`, `` `donnée` `` (style mono teal).

## Images

Aucun hotlink : toutes les images sont servies depuis `public/images/`. Le script de téléchargement est relançable à volonté, il garde ce qui existe et régénère le manifest :

```bash
node scripts/fetch-images.mjs
```

- Sources tentées dans l'ordre : dépôts GitHub communautaires, palworld.wiki.gg, paldb.cc. La provenance de chaque fichier est tracée dans `public/images/SOURCES.md`.
- Si une image manque, le site affiche un placeholder SVG élégant : rien ne casse jamais.

### Déposer ses propres images

1. Pals : `public/images/pals/<slug>.png` avec le slug en minuscules, sans accents, espaces remplacés par des tirets. Exemples : `anubis.png`, `broncherry-aqua.png`, `frostallion-noct.png`, `dumud-guild.png`.
2. Lieux : `public/images/locations/<slug>.png` parmi : `sakurajima`, `feybreak`, `volcan`, `desert`, `montagnes-enneigees`, `windswept-hills`, `arbre-monde`, `sun-reach-isles`, `sanctuaire`, `oasis`.
3. Logo : `public/images/brand/palworld-logo.png` (affiché dans le hero).
4. Relancer `node scripts/fetch-images.mjs` pour régénérer `src/content/image-manifest.json`, puis rebuild.

Les formats .png, .webp et .jpg sont acceptés.

## Déploiement Vercel

Aucune variable d'environnement, aucune config serveur. Vérifier d'abord que le build passe :

```bash
npm run build
```

Puis pousser sur GitHub (le repo est déjà un dépôt git) :

```bash
git add .
git commit -m "Palworld 1.0 field guide"
git push -u origin main
```

### Option A (recommandée) : via vercel.com

1. Sur [vercel.com](https://vercel.com), cliquer sur "Add New Project".
2. Importer le repo GitHub.
3. Le framework Next.js est auto-détecté, ne rien changer.
4. Cliquer sur "Deploy". C'est tout.

### Option B : via la CLI

```bash
npm i -g vercel
vercel        # à la racine du projet, suivre les invites
```

## Raccourcis du site

- `Cmd+K` ou `Ctrl+K` : recherche sur tout le contenu, saut vers la section.
- Clic sur une puce de coordonnées : copie dans le presse-papier.
- `Échap` : ferme la recherche.
