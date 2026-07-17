import type { Section } from "../types";

export const SECRETS: Section = {
  id: "secrets",
  title: "Astuces cachées et endroits secrets",
  subtitle: "Les vrais raccourcis et petits abus que les guides oublient de mentionner. De l'or.",
  group: "Le reste",
  icon: "sparkles",
  accent: "amber",
  blocks: [
    { kind: "sub", title: "Départs et abus" },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "amber",
          title: "Le run d'oeufs de Faybreak (tôt)",
          body: "Dès que vous avez une monture nage ou vol (ou la selle Rushoar niveau 6), filez à Faybreak et ramassez tous les oeufs. Vous récupérez des Pals de haut tier avec d'excellentes aptitudes : {{Splatterina}} (Fabrication 4), {{Faleris Aqua}} (Eau 4, Transport 3), et les oeufs Rocky donnent Minage 3.",
        },
        {
          accent: "amber",
          title: "Le multijoueur hors-ligne pour du loot cassé",
          body: "Passez la sauvegarde en multijoueur : à la mort, vous pouvez réapparaître sur l'Île des Murmures, nager jusqu'à Sakurajima, fouiller les junkyards pour des **sphères ultra et légendaires**, et capturer des alphas dès le début (un {{Mammorest}} niveau 38 donne une tonne d'XP). Risqué mais énorme démarrage.",
        },
        {
          accent: "amber",
          title: "Le double loot au dépeçage",
          body: "Capturez un Pal puis utilisez un couteau de boucher dessus : vous récupérez les récompenses **deux fois** pour le même Pal. Pour farmer une ressource, trouvez un Pal qui la lâche dans la Palpédia et spammez capture + dépeçage.",
        },
        {
          accent: "amber",
          title: "Les schémas, ne les vendez jamais",
          body: "Gardez les schémas bas tier et combinez-les à la table à dessin (niveau 45) pour de meilleurs. Un schéma looté est supérieur à la version de techno et se craft directement. Ne mettez pas vos points de tech dans les armes, trouvez les schémas en donjon.",
        },
      ],
    },
    { kind: "sub", title: "PNJ qui donnent des récompenses" },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          title: "Les critiques de Pal",
          body: "Un PNJ veut voir un Pal précis (parfois plusieurs à la suite) : sortez-le, parlez-lui, récompense. Certains sont très rentables : {{Flopie}} donne 2 potions de vie, {{Broncherry}} 4 potions d'endurance. Repérez-les sur la carte.",
        },
        {
          title: "Enregistrement d'espèces",
          body: "Plus vous capturez d'espèces, plus les PNJ dédiés (village en zone jaune, chasseur de Pal vétéran) vous donnent des récompenses, à 80, 90, 100 espèces, etc. Revenez leur parler régulièrement.",
        },
        {
          title: "Capturez les marchands",
          body: "Avec l'Anneau de Pitié, capturez un marchand et placez-le à la base : boutique sans voyager. Assignez-le à des sacs de sable pour qu'il reste en place.",
        },
        {
          title: "Emplacements d'accessoires",
          body: "Des pièces canines se trouvent dans les ruines du désert. Échangez-les au marchand de l'église désaffectée (zone rouge) contre des emplacements d'accessoires (50 et 300 pièces).",
        },
      ],
    },
    { kind: "sub", title: "Équipement et réglages de farm" },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          title: "Résistances chaud et froid",
          body: "Sous-vêtement toute saison (chaud + froid) : recette dans une mini-tour du désert, à côté de la tour niveau 40 (nécessite du polymère, niveau 33). Sinon les deux T-shirts séparés se trouvent très tôt (île tout au nord pour le froid, juste en dessous pour le chaud). Encore mieux : l'amulette d'avant-garde sur l'île de Freak donne chaud + froid + PV niveau 4.",
        },
        {
          title: "Réglages de spawn utiles",
          body: "Taux d'apparition des Pals à **exactement 1,9** : plein de spawns bonus sans doubler les boss (à 2, ça double aussi les boss). Taux de météores à 1 : une météorite par minute pour farmer le palladium. Poids des objets réductible ou désactivable.",
        },
      ],
    },
    {
      kind: "callout",
      tone: "combo",
      label: "Collier d'attaque",
      text: "Sous le boss Tetroyce sur l'île de Freak, un collier augmente votre attaque de niveau 3. À aller chercher.",
    },
  ],
};
