import type { Section } from "../types";

export const PECHE: Section = {
  id: "peche",
  title: "La pêche",
  subtitle:
    "Sous-estimée et pourtant énorme en 1.0. Vous pouvez pêcher partout, à n'importe quel niveau, et pull des Pals très puissants, des schémas et des ressources rares.",
  group: "Systèmes",
  icon: "fish",
  accent: "teal",
  blocks: [
    { kind: "sub", title: "Pourquoi la pêche est cassée" },
    {
      kind: "list",
      items: [
        "Chaque poisson attrapé fait rouler une **table de loot de coffre**. Vous pouvez même pêcher dans les donjons pour du loot de coffre de donjon.",
        "Vous pouvez capturer des **Pals de très haut niveau dès le niveau 15** (un Pal niveau 56 se pêche à bas niveau). Le seul obstacle est le mini-jeu.",
        "Coincé quelque part ? Allez pêcher dans une zone de niveau supérieur pour accélérer vos schémas et votre équipement.",
        "Un **schéma trouvé** permet de crafter l'arme directement sans débloquer la techno, et il est meilleur que la version par défaut.",
      ],
    },
    { kind: "sub", title: "L'équipe de pêche parfaite (début)" },
    {
      kind: "table",
      head: ["Pal", "Rôle", "Où"],
      rows: [
        ["Monture aquatique", "Ne consomme pas d'endurance dans l'eau. Serpent dès la selle niveau 16.", "Le long des côtes"],
        [
          "{{Gloopy}}",
          "La jauge de capture décroît 12% plus lentement quand les barres ne se chevauchent pas. Indispensable pour les poissons durs.",
          "Suivez la côte vers le nord-est",
        ],
        ["{{Jellyette}} / Gelat", "+55% d'objets obtenus à la pêche. Deux exemplaires = double loot garanti.", "Se pêche le jour, petites ombres"],
        ["{{Jelroy}}", "+55% d'objets obtenus au récupérage (salvage).", "Se pêche la nuit"],
      ],
    },
    { kind: "sub", title: "Les spots rares, le vrai jackpot" },
    {
      kind: "p",
      muted: true,
      text: "Repérez les ombres qui brillent. Plus la couleur est rare, plus le mini-jeu est dur, mais plus la récompense est folle.",
    },
    {
      kind: "cards",
      cols: 3,
      items: [
        {
          accent: "violet",
          title: "Violet",
          body: "Alpha Pal garanti, souvent avec un passif doré. Plus du loot d'alpha (pièces de civilisation ancienne, plumes, clés).",
        },
        {
          accent: "violet",
          title: "Vert",
          body: "Passif arc-en-ciel garanti (aléatoire). Parfait pour la reproduction, on transfère ensuite le passif.",
        },
        {
          accent: "violet",
          title: "Violet avec faisceau",
          glow: true,
          body: "Le plus dur. Donne le passif **Lunker** : +20% dégâts eau, +20% dégâts glace, +20% défense. À breed sur d'autres Pals.",
        },
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      label: "Astuce spots",
      text: "Baissez la caméra pour créer une ligne d'horizon : les ombres brillantes qui la cassent sont plus faciles à repérer. Attention à ne pas lancer une attaque par erreur près des ombres, ça les fait fuir.",
    },
    { kind: "sub", title: "Cannes, appâts et automatisation" },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          title: "Cannes et appâts",
          list: [
            "Cannes : débutant (niveau 15), intermédiaire (29), avancée (45). Plus la canne est haute, plus la barre verte est grande. Il existe des cannes de schéma en plus (Gumas nécessite du coralum).",
            "Appâts : simple, haute qualité, deluxe, alluring. En vrai la différence ne se sent qu'à partir du deluxe. L'appât simple suffit souvent, ne gaspillez pas de ressources.",
            "Appâts simples désormais dans les coffres, haute qualité en boutique et coffres. Gardez-les lors de vos runs de coffres.",
          ],
        },
        {
          title: "Bassin de pêche (base)",
          list: [
            "Placez un bassin de pêche à la base pour pêcher **en passif** : un Pal avec Fabrication va pêcher tout seul (environ 15 min par prise).",
            "Utilisez l'appât simple et haute qualité, puis le deluxe pour le grand bassin (grandes ombres).",
            "Le **récupérage** (salvage) avec une monture aquatique et un aimant de pêche donne du **coralum** et des schémas. Cherchez les petits spots de salvage le long de Faybreak.",
          ],
        },
      ],
    },
    {
      kind: "callout",
      tone: "combo",
      label: "Nouveau 1.0",
      text: "{{Samora}} est un nouveau Pal qui facilite la pêche de Pals talentueux quand il est dans l'équipe. Et la table à dessin (drafting table) pour combiner les schémas est passée au niveau 45.",
    },
  ],
};
