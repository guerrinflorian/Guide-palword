import type { Section } from "../types";

export const BASES: Section = {
  id: "bases",
  title: "Bases et emplacements",
  subtitle:
    "En 1.0, la plupart des ressources tardives (charbon, soufre, quartz) se minent via des structures placées à la base. Vous n'avez donc plus à construire à côté des gisements, ce qui ouvre plein d'emplacements.",
  group: "Systèmes",
  icon: "home",
  accent: "amber",
  blocks: [
    { kind: "sub", title: "Principes de construction" },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "amber",
          title: "Priorités actuelles",
          list: [
            "**Sol plat** pour éviter les galères. Palbox sur 4 fondations : une fois posée, on ne peut plus la déplacer sans tout détruire.",
            "Construisez **en hauteur avec double escalier** pour que les gros Pals atteignent leurs postes.",
            "Coffres **près de la production** : la vitesse de portage des Pals est lente. Vous pouvez construire directement depuis les coffres.",
            "Un lit par Pal, une source chaude pour 5 Pals environ (santé mentale). Un setup de bouffe complet.",
          ],
        },
        {
          accent: "amber",
          title: "À ne pas oublier",
          list: [
            "**Pas de structures en bois** après le tout début : ça brûle lors des raids ou avec les Pals feu. Passez à la pierre puis au métal.",
            "**Bases spécialisées** : une pour la production, une pour le farm/ranch, une pour l'élevage, une pour le minage. Vous êtes limité en Pals par base, donc hyper-spécialiser = efficacité max.",
            "Verrouillez des coffres hors de portée des Pals : les objets s'y téléportent (ramassé puis poof).",
            "Empilez les plantations avec des établis en bois pour gagner de la place.",
          ],
        },
      ],
    },
    {
      kind: "callout",
      tone: "warn",
      label: "Piège : le farm passif",
      text: "Une base ne produit vraiment que si un joueur est à portée de rendu. Loin d'elle, la production s'arrête mais la faim et la santé mentale des Pals continuent de baisser. En co-op, l'un peut rester près de la base de farm pendant que l'autre explore : dès qu'un joueur est à portée, les Pals se remettent à bosser.",
    },
    { kind: "sub", title: "Meilleurs emplacements (coordonnées)" },
    {
      kind: "table",
      head: ["Coord", "Pourquoi", "Type"],
      rows: [
        [
          "((34, -49))",
          "Le meilleur emplacement de départ selon beaucoup. Centralisé, minerai, quartz, proche de tous les biomes et d'un arbre à compétences.",
          "Départ polyvalent",
        ],
        [
          "((-479, -80))",
          "Mur naturel tout autour : base non raidable. Plat, très joli, au bord de l'océan avec vue volcan.",
          "Principale sécurisée",
        ],
        [
          "((194, -41))",
          "Haut d'une montagne, non raidable, 3 à 4 gisements de fer et plusieurs de charbon. Idéale pour une base de minage.",
          "Minage",
        ],
        [
          "((255, 50))",
          "Îles de murmures. Défenses naturelles (mur, eau), assez grand pour deux bases côte à côte.",
          "Double base",
        ],
        [
          "((403, 469))",
          "Sunlit isle, proche du spawn. Votre petite île privée avec plusieurs puits de pétrole.",
          "Pétrole (tôt)",
        ],
        [
          "((647, 273))",
          "Tour Moonflower, nord-ouest. Deux puits de pétrole + soufre, plat, cerisiers et triple cascade. Splendide (plus tardif).",
          "Pétrole + soufre",
        ],
        [
          "((35, -51))",
          "Minerai, quartz pur, charbon ET soufre au même endroit. Base ressources complète.",
          "Minage complet",
        ],
        [
          "((-169, -221))",
          "Charbon et beaucoup de minerai, entouré d'un mur, zone plate. Pure base de minage.",
          "Charbon + minerai",
        ],
      ],
    },
    { kind: "locations", slugs: ["windswept-hills", "volcan", "desert", "montagnes-enneigees", "sakurajima", "feybreak", "sanctuaire", "oasis"] },
    { kind: "sub", title: "Où miner quoi (stations de base par niveau)" },
    {
      kind: "table",
      head: ["Station", "Niveau", "Note"],
      rows: [
        ["Site de bûcheronnage (bois)", "`7`", "Bois auto avec Pals bûcherons."],
        ["Carrière de pierre", "`7`", "Pierre auto avec Pals mineurs."],
        ["Broyeur", "`8`", "Pierre en palladium (5:1), bois en fibre (1 bois = 2 fibre)."],
        ["Site de minerai", "`24`", "Minerai auto sans gisement. Site n°2 au niveau 39."],
        ["Carrière de charbon", "`37`", "Charbon auto."],
        ["Bûcheronnage n°2 (bois dur)", "`43`", "Station différente pour le bois dur."],
        ["Carrière de soufre", "`46`", "Soufre auto (clé pour les munitions)."],
        ["Carrière de quartz", "`52`", "Quartz pur auto."],
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      label: "Astuce transfert de base",
      text: "Pour ramener des ressources en masse d'un gisement dense : gardez une place de Palbox libre, emportez de quoi poser une Palbox, posez-la sur place, minez à fond, téléportez-vous à votre vraie base, puis rangement rapide (touche R) dans le coffre qui a déjà ce minerai. Ça contourne la limite de poids. Le **coffre de guilde** (niveau 41) partage aussi ses ressources entre toutes vos bases.",
    },
  ],
};
