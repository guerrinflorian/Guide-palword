import type { Section } from "../types";

export const MONTURES: Section = {
  id: "montures",
  title: "Montures et déplacement",
  subtitle:
    "La différence entre subir la carte et la survoler. Les passifs de vitesse comptent souvent plus que la stat de base : Coursier +20%, Swift +30%, Infinite Stamina +50% endurance, Eternal Engine +75%.",
  group: "Les Pals",
  icon: "wind",
  accent: "teal",
  blocks: [
    { kind: "sub", title: "Progression de montures" },
    {
      kind: "table",
      head: ["Pal", "Selle", "Usage"],
      rows: [
        ["{{Rushoar}}", "`6`", "Boost de minage + accès très tôt à Faybreak (nage puis recharge d'endurance)."],
        ["{{Direhowl}}", "`9`", "Monture terrestre de début."],
        ["{{Chillet}}", "`11`", "Rapide au sol ET 2e meilleure nage, mais se noie une fois l'endurance vide. Convertit vos dégâts en dragon."],
        ["{{Nitewing}}", "`15`", "Le plus tôt volant. Débloque énormément de mobilité."],
        ["{{Serpent}}", "`16`", "Vraie monture aquatique, ne consomme pas d'endurance dans l'eau."],
        ["{{Relaxaurus}}", "`20`", "Grappin intégré à longue portée, très fun pour grimper."],
        ["{{Beacon}}", "`29`", "Volant rapide, obtenable via reproduction. Favori jusqu'aux dragons."],
        ["{{Quivern}} / {{Shadowbeak}} / {{Hydrolon}}", "`40+`", "Volants très rapides. Hydrolon est ridiculement véloce."],
        ["{{Jetragon}}", "`endgame`", "La monture la plus rapide du jeu."],
      ],
    },
    { kind: "sub", title: "Tech de déplacement" },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "teal",
          title: "Grappin + planeur",
          body: "Débloquez le grappin le plus tôt possible et combinez-le avec le planeur. Grappinez en regardant vers le bas, prenez de l'élan, appuyez sur espace et vous traversez la carte. Surveillez l'endurance ou vous chutez. Désactivez puis réactivez le planeur pour éviter les dégâts de chute.",
        },
        {
          accent: "teal",
          title: "Igu / Agu, le lift",
          pal: "Igu",
          body: "Igu vous fait monter vers le haut avec le planeur (plus il est condensé, plus c'est rapide et haut). Combiné au grappin, il permet d'atteindre des vitesses folles et de traverser la carte super loin dès la zone de départ.",
        },
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      label: "Astuces mineures qui changent tout",
      text: "**Réinitialiser le grappin** : dans l'inventaire, retirez et remettez le grappin pour reset son cooldown. **Monter vite** : maintenez la touche d'interaction (F) avant d'invoquer la monture pour monter dessus instantanément, et enchaînez entre deux montures pour utiliser leurs compétences à la suite.",
    },
  ],
};
