import type { Section } from "../types";

export const XP: Section = {
  id: "xp",
  title: "Monter de niveau vite",
  subtitle:
    "Le 1.0 a rendu le leveling bien plus rapide. Voici les meilleures méthodes de la plus rentable à la plus passive, plus le fameux bonus permanent d'XP.",
  group: "L'essentiel",
  icon: "trending-up",
  accent: "amber",
  blocks: [
    {
      kind: "callout",
      tone: "combo",
      label: "Le combo gagnant en co-op",
      text: "Capture-chaining en équipe + boucle de boss toutes les heures + une ligne de flèches ou du feu à la base + restez collés pour l'XP partagé. Le joueur le moins avancé rattrape très vite les autres.",
    },
    { kind: "sub", title: "Les 4 effigies Relaxaurus, +50% XP permanent" },
    {
      kind: "p",
      text: "Le meilleur boost du jeu. Récupérez les 4 effigies, puis rendez-les à une **Statue du Pouvoir** pour valider le bonus. À faire dès que vous avez une monture volante.",
    },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "amber",
          title: "1. Zone du volcan (ouest)",
          body: "À côté du point de téléportation avec la **statue géante d'Anubis**. Il faut un peu de résistance à la chaleur, mais en difficulté normale vous avez le temps de choper l'effigie avant que la chaleur ne fasse mal. Parfois un Bushi traîne, facile à survivre.",
        },
        {
          accent: "amber",
          title: "2. Île de Sakurajima (la plus pénible)",
          body: "Près du boss de tour, mais **NE vous téléportez PAS à la tour** ou toute la zone vous aggro (et le Bushi Noct vous traque à travers la carte). Téléportez-vous à la **statue du grand aigle au sud de la tour**, puis contournez par l'arrière sans rien aggro.",
        },
        {
          accent: "amber",
          title: "3. Désert (nord-est)",
          body: "Téléportez-vous à la **tour**, puis volez vers l'ouest. Il faut descendre de la crête et regarder derrière vous pour la trouver. Elle est à découvert et peu dangereuse.",
        },
        {
          accent: "amber",
          title: "4. Montagnes enneigées (nord)",
          body: "Téléportez-vous à la **tour du boss** et volez plein nord jusqu'à une **tour en ruine**. Pas dangereux, mais il faut une résistance au froid.",
        },
      ],
    },
    {
      kind: "callout",
      tone: "warn",
      label: "À retenir",
      text: "Une fois les 4 en poche, direction une Statue du Pouvoir pour l'upgrade. Résultat : x1,5 XP pour le reste de la partie.",
    },
    { kind: "sub", title: "Le capture-chaining, la méthode n°1" },
    {
      kind: "list",
      items: [
        "**Capturez 5 de chaque espèce** (et non 12, c'était l'ancien système). Ça donne un gros bonus d'XP de première capture, une effigie Mimog (vitesse de déplacement), et une condensation automatique gratuite.",
        "**Capturer donne presque le double d'XP que tuer.** Ne tuez que pour les ressources.",
        "Le bonus s'applique quel que soit le niveau du Pal et scale avec VOTRE niveau, donc catch des Pals bas niveau ({{Lamball}}, {{Cattiva}}) reste rentable même à 40+. Emportez 100+ sphères.",
        "Achetez des sphères en masse tôt : au tout début, ouvrez les coffres pour l'or, faites la quête de la fermière inquiète (livrer de la nourriture au village), puis achetez plein de sphères et spammez les captures.",
      ],
    },
    { kind: "sub", title: "Les autres grosses sources d'XP" },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          title: "Restez ensemble (co-op)",
          body: "Tous les joueurs à proximité récupèrent 100% de l'XP d'une capture ou d'un kill, ce n'est pas divisé. Chaque capture compte double en pratique.",
        },
        {
          title: "Les missions (nouveau en 1.0)",
          body: "Le système de quêtes est devenu une vraie source d'XP au lieu d'un décor. Suivez la quête principale, elle vous mène de tour en tour (10, 20, 30) et fait progresser votre puissance.",
        },
        {
          title: "Boucle de boss (Alphas)",
          body: "Les Alphas réapparaissent toutes les 60 min et donnent énormément d'XP, des Points de Technologie Ancienne et des recettes. Capturez-les au lieu de les tuer. Les combats de tour sont limités à 5 min désormais.",
        },
        {
          title: "Donjons",
          body: "Nettoyez mobs + boss, sortez, attendez le reset de l'instance (5 à 10 min), recommencez. Vous gagnez aussi de l'XP d'exploration et récupérez de l'or, des schémas et des potions de stats.",
        },
      ],
    },
    { kind: "sub", title: "XP passif à la base" },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "amber",
          title: "Ligne de flèches",
          body: "Un Pal avec Fabrication sur un Établi Haute Qualité produit des flèches en continu (2 bois + 2 pierre pour 10 flèches), ce qui donne de l'XP au joueur et aux Pals. Laissez tourner.",
        },
        {
          accent: "amber",
          title: "Cuisson de baies rouges",
          body: "Produire des baies rouges est très cheap. Les cuire au feu de camp ou four (avec un Pal de type Feu / Allumage) fait monter les Pals de l'équipe très vite. Et la nourriture sur le feu ne périme pas.",
        },
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      label: "Astuce Pal XP",
      text: "{{Umbraskull}} (aussi appelé Mascal selon la trad) donne +40% d'XP à toute l'équipe juste en étant dans le groupe, sans selle. Parfait pour faire monter un Pal fraîchement éclos ou capturé bas niveau. Condensez-le pour un bonus encore plus élevé.",
    },
    {
      kind: "callout",
      tone: "stale",
      label: "Périmé",
      text: "Les vieux guides disent \"catch 12 de chaque Pal\". C'est passé à 5 en 1.0. Et l'ancienne technique de burn Jetragon pour des tonnes d'XP a été retirée.",
    },
  ],
};
