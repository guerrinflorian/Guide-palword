import type { Section } from "../types";

export const CAPTURE: Section = {
  id: "capture",
  title: "Capturer efficacement",
  subtitle:
    "Maximiser vos chances de capture, c'est moins de sphères gaspillées et des Pals plus forts plus tôt.",
  group: "L'essentiel",
  icon: "target",
  accent: "teal",
  blocks: [
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "teal",
          title: "Les fondamentaux",
          list: [
            "**Baissez les PV au minimum** avant de lancer la sphère.",
            "**Coup critique = bonus de capture.** Lancez la sphère en pleine face OU dans le dos du Pal, les deux comptent comme critiques.",
            "Sphères de meilleure qualité = plus de puissance de capture. Débloquez et ramassez toutes les sphères que vous croisez au sol.",
            "Dans d'autres régions, il y a des **sphères gratuites par terre** : allez en ramasser sans même combattre, puis revenez.",
          ],
        },
        {
          accent: "teal",
          title: "Les outils de triche légale",
          list: [
            "**Anneau de Pitié** (niveau 18) : vos attaques ne peuvent plus tuer un Pal. Marche aussi en monture. Il faut 30 lingots.",
            "**Daydream** : ces Pals n'apparaissent que la nuit près de la zone de départ. En équipe, ils tirent tout seuls sur les ennemis et ne peuvent pas descendre un Pal sous 1 PV. Idéal pour amener une cible pile à 1 PV.",
            "**Statue du Pouvoir** (niveau 9) : rendez-y les effigies vertes et violettes de la carte pour booster votre puissance de capture et la résistance aux altérations.",
            "**Wispaur** (nouveau Pal 1.0) : dans l'équipe et condensé à fond, il augmente votre chance de capture d'environ **+18%** (effet multiplicatif, donc encore plus fort si votre taux de base est élevé). Presque comme avoir une sphère d'un tier au-dessus.",
          ],
        },
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      label: "Astuce sanctuaires",
      text: "Faites les sanctuaires (zones protégées) la nuit : gardes ET Pals endormis, capture et loot des coffres bien plus faciles.",
    },
    {
      kind: "callout",
      tone: "combo",
      label: "Combo mont + Anneau de Pitié",
      text: "Avec un {{Direhowl}} bien monté et l'Anneau de Pitié, montez, tapez avec une attaque puissante ou le pistolet, le Pal reste à 1 PV, capture instantanée. Fonctionne même sur des Pals bien plus forts.",
    },
    { kind: "sub", title: "Les Pals chanceux (Lucky Pals)" },
    {
      kind: "p",
      text: "Si vous entendez un **petit bruit spécial** et voyez un Pal entouré de **particules dorées**, foncez : c'est un **Pal chanceux**, la version rare et brillante de l'espèce (l'équivalent d'un shiny). Ils sont plus **gros**, arrivent à un **niveau plus élevé**, ont de **meilleures stats de base** et surtout souvent des **passifs bien meilleurs** que la normale.",
    },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "amber",
          title: "Pourquoi les capturer absolument",
          glow: true,
          list: [
            "Le vrai trésor, ce sont leurs **passifs**. Un Pal chanceux peut sortir avec un combo d'attaque monstrueux (par exemple +65% attaque) que vous pourrez ensuite transférer sur un meilleur Pal via Yakumo.",
            "Ils ne fuient pas comme les alphas, mais ne traînez pas trop, ils peuvent disparaître.",
            "À ne pas confondre avec un **Alpha** (le gros boss nommé d'une zone) : le chanceux, c'est la version dorée et brillante d'un Pal normal.",
          ],
        },
        {
          accent: "amber",
          title: "Attention au piège",
          body: "De bons passifs ne rendent pas un Pal faible fort pour autant. Un {{Galeclaw}} chanceux reste un Pal à faibles stats de base : parfait comme monture et cogneur de transition, mais son plafond en combat reste bas même poussé à fond. Gardez-le, mais visez surtout à **récupérer ses passifs** pour les mettre sur un Pal au potentiel plus élevé (voir la stratégie Yakumo).",
        },
      ],
    },
  ],
};
