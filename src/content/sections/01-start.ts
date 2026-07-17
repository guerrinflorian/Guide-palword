import type { Section } from "../types";

export const START: Section = {
  id: "start",
  title: "Démarrage express",
  subtitle:
    "Les réglages et gestes de base à mettre en place tout de suite. Ça fait gagner des heures et rend le jeu beaucoup plus confortable.",
  group: "L'essentiel",
  icon: "rocket",
  accent: "teal",
  blocks: [
    { kind: "sub", title: "Réglages à changer jour 1" },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "teal",
          title: "Options → Paramètres de jeu → Clavier / Manette",
          list: [
            "**Appuyer une fois pour maintenir** sur ON. Fini de garder le bouton enfoncé pour fabriquer, cuisiner ou construire : une pression suffit.",
            "**Bascule pour changer de mode construction** sur ON.",
            "**Désactiver l'inversion d'axe du wingpack** (planeur). Ça évite un gros mal de crâne quand vous débloquez les ailes.",
          ],
        },
        {
          accent: "teal",
          title: "Confort de jeu",
          list: [
            "**Course automatique** : touche X (clavier) ou moins (manette). Marche aussi en vol. Pratique pour les longs trajets.",
            "**Rangement rapide** : dans l'inventaire, touche R pour tout stocker d'un coup dans les coffres qui contiennent déjà l'objet (dans le rayon de la base). Ou touche C près d'un coffre.",
            "Réglez la **partie privée** (taux d'XP, poids des objets, temps d'éclosion) à votre sauce : personne ne juge.",
          ],
        },
      ],
    },
    { kind: "sub", title: "Répartition des points de statistiques" },
    { kind: "p", muted: true, text: "Vous avez au total 50 points bonus à placer. Ne les gaspillez pas." },
    {
      kind: "cards",
      cols: 3,
      items: [
        {
          accent: "amber",
          title: "1. Le poids",
          body: "La stat la plus importante de loin. Montez-la en priorité vers 600. Tout dans ce jeu tourne autour de porter vos ressources.",
        },
        {
          accent: "amber",
          title: "2. Endurance puis vie",
          body: "Endurance vers 200 pour arrêter de vous essouffler sans cesse, puis la vie pour survivre plus facilement.",
        },
        {
          title: "À éviter tôt",
          body: "La **vitesse de travail** ne sert quasiment à rien (vos Pals bossent pour vous). L'**attaque** scale mal, à garder pour plus tard sauf build arme pure.",
        },
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      label: "Astuce",
      text: "Les donjons lâchent des potions qui augmentent vos stats de façon permanente (poids, vitesse de travail, etc). Faites-les pour ça, et gardez les fleurs de lotus qui servent à en fabriquer d'autres. Vous pouvez ainsi finir de compléter vos stats sans dépenser de points.",
    },
    { kind: "sub", title: "Le sac à nourriture (niveau 9)" },
    {
      kind: "p",
      text: "Débloquez et fabriquez le sac à nourriture le plus tôt possible. Il se met dans les objets clés et nourrit automatiquement votre perso ET tous les Pals de l'équipe tant qu'il y a de la bouffe dedans. Vous n'avez plus jamais à penser à les nourrir en exploration.",
    },
  ],
};
