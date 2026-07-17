import type { Section } from "../types";

export const ELEVAGE: Section = {
  id: "elevage",
  title: "La reproduction",
  subtitle:
    "Le coeur du endgame. Un Pal avec de bons passifs contre un Pal sans, c'est le jour et la nuit. Le 1.0 a tout changé : nouvelles combinaisons, nouveaux gâteaux, système de mutation.",
  group: "Systèmes",
  icon: "egg",
  accent: "violet",
  blocks: [
    {
      kind: "callout",
      tone: "warn",
      label: "Important",
      text: "Les combinaisons de reproduction ont été modifiées avec la 1.0. Ce qui donnait Anubis avant ne marche plus. **Utilisez toujours un calculateur de reproduction** (voir section Sites) pour trouver les combos actuels.",
    },
    { kind: "sub", title: "Le matériel de base" },
    {
      kind: "steps",
      items: [
        "**Enclos (ranch)** au niveau 5.",
        "**Feu de camp** ou tout ce qui cuit.",
        "**Incubateur d'oeuf** au niveau 10.",
        "**Ferme d'élevage** au niveau 19. C'est le plus tôt possible pour reproduire.",
      ],
    },
    {
      kind: "callout",
      tone: "warn",
      label: "Où la trouver",
      text: "La Ferme d'élevage est un déblocage du **menu Technologie** (pas directement le menu construction). Il faut **deux conditions** : être **niveau 19** ET avoir **battu le boss de la 2e tour** (l'Alliance Pal Libre, Lily et Lyleen). Descendez ensuite au palier niveau 19, dépensez **2 points de technologie**, et construisez-la avec 100 bois, 20 pierre, 50 fibre. Si vous ne la voyez pas alors que vous êtes niveau 19+, c'est presque sûrement que la 2e tour n'est pas encore battue.",
    },
    {
      kind: "p",
      muted: true,
      text: "Assignez un mâle et une femelle à la ferme, placez un gâteau, récupérez l'oeuf, incubez. Astuce : un gâteau posé dans la boîte de la ferme ne se périme pas (contrairement à l'inventaire). Il vous faut aussi un moulin pour transformer le blé en farine.",
    },
    { kind: "sub", title: "Les 5 gâteaux, chacun sa spécialité" },
    {
      kind: "table",
      head: ["Gâteau", "Niveau", "Effet"],
      rows: [
        ["Gâteau de base", "`début`", "Reproduction standard, un oeuf par gâteau."],
        [
          "Gâteau aux champignons",
          "`30`",
          "Le gâteau à IV : les bébés héritent mieux des taux de croissance (talents). Setup : {{Shroomer}} à l'enclos pour champignons et champignons de caverne.",
        ],
        [
          "Gâteau aux légumes",
          "`47`",
          "**Deux oeufs** à la fois (se cumule avec Grintale pour jusqu'à 4). Le gâteau de volume. Setup : ajoutez tomate et laitue.",
        ],
        [
          "Gâteau légumes raffiné",
          "`60`",
          "Deux oeufs + **plus de mutations** + meilleurs talents. Le **dernier gâteau** de la chaîne (pour la mutation parfaite). Setup : {{Woolipop}} pour la barbe à papa.",
        ],
        [
          "Gâteau spécial",
          "`74`",
          "Transmission des passifs bien meilleure, et permet d'hériter jusqu'à **6 attaques** combinées des parents. Avec l'écloserie antique = transmission garantie à ~100%.",
        ],
      ],
    },
    {
      kind: "callout",
      tone: "combo",
      label: "Nouveau : passer les attaques (moves)",
      text: "La reproduction ne transmet pas que les passifs, elle transmet aussi les **attaques actives**. Vous pouvez donner à n'importe quel Pal les attaques puissantes d'un Pal de haut niveau, et mixer les attaques de plusieurs parents. Le gâteau spécial permet d'en cumuler jusqu'à 6. C'est aussi important que les passifs pour un bon build.",
    },
    {
      kind: "p",
      muted: true,
      text: "Ingrédients de base des gâteaux : farine (blé au moulin), baies rouges, lait ({{Mozzarina}}), oeufs ({{Chikipi}}), miel ({{Beegarde}}). Mettez ces Pals à l'enclos et vous produisez les gâteaux en continu.",
    },
    { kind: "sub", title: "Comment les passifs se transmettent" },
    {
      kind: "p",
      text: "Quand vous reproduisez deux Pals, le bébé pioche ses passifs dans le **pool combiné des deux parents**. Chaque passif des parents a une chance d'être hérité (le bébé peut en recevoir de 0 à 4), et il y a en plus une petite chance qu'un passif **totalement aléatoire** apparaisse. Plus vos deux parents portent les bons passifs, plus le bébé a de chances de les avoir. Deux parents pourris donnent un bébé pourri.",
    },
    {
      kind: "steps",
      items: [
        "**Récupérez des parents avec les bons passifs** (capture en masse, oeufs sauvages, Pals chanceux, ou méthode Yakumo ci-dessous).",
        "**Reproduisez et triez** : gardez les bébés qui ont un ou plusieurs passifs voulus, condensez les ratés (ils servent à étoiler vos bons Pals).",
        "**Cumulez** : un Pal avec Féroce et un autre avec Muscle Head, croisés ensemble, peuvent réunir les deux sur un bébé.",
        "**Virez les négatifs** : re-breedez jusqu'à ce que le passif rouge disparaisse.",
        "**Stabilisez** : une fois deux Pals (un mâle, une femelle) avec les mêmes 2 ou 3 bons passifs, croisez-les pour sortir ce combo de façon fiable, avec un 4e slot qui peut rouler un passif aléatoire.",
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      label: "Les raccourcis",
      text: "Le **gâteau spécial** booste énormément la transmission, et avec l'**écloserie antique** (niveau 76) elle devient garantie à 100%. La **table d'opération** (niveau 38) permet d'**implanter** un passif directement (50 000 or, réutilisable) ou d'en remplacer un mauvais : breedez jusqu'à 3 bons passifs, puis implantez le 4e. Recettes d'implants à l'arène ((626, 16)) contre des tickets. Deux super Pals du même sexe ? Un Pal Reverser (7 preuves de victoire) change le genre.",
    },
    { kind: "sub", title: "La stratégie Yakumo : imprimer vos passifs" },
    {
      kind: "p",
      text: "Le problème : vous ne pouvez pas copier-coller un passif d'un Pal à un autre directement, il faut passer par la reproduction. Yakumo court-circuite ça et c'est la technique la plus puissante du jeu pour fabriquer des Pals parfaits.",
    },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "violet",
          title: "Le principe (mécanique exacte)",
          pal: "Yakumo",
          body: "Yakumo doit être **activement sorti** au moment de la capture. Le jeu génère d'abord les passifs naturels du Pal, puis, **seulement s'il reste des slots vides**, chaque slot vide tente de recevoir un passif de votre Yakumo. Le tirage se fait **slot par slot** (probabilité composée).",
        },
        {
          accent: "violet",
          title: "La règle qui change tout",
          body: "Mettez seulement **1 ou 2 passifs** sur votre Yakumo, jamais 4. Comme chaque slot est tiré séparément, la chance de transférer les 4 d'un coup est **inférieure à 1%**. Avec 1 ou 2 passifs ciblés, le taux de transfert est bien meilleur. Vous complétez le reste par reproduction ensuite.",
        },
      ],
    },
    {
      kind: "steps",
      items: [
        "**Fabriquez un Yakumo** avec 1 ou 2 des passifs voulus (ex : le +65% attaque de votre Galeclaw chanceux), via reproduction.",
        "**Gardez-le dans l'équipe** et sortez-le **au lancer de la sphère** (pas besoin pendant le combat).",
        "**Capturez les vrais cogneurs** ({{Jormuntide Ignis}}, {{Nokklem}}, {{Hangler}}...) : ils héritent des passifs sur leurs slots vides.",
        "Capturez-en plusieurs, gardez-en deux avec des bouts du combo, **reproduisez-les ensemble** pour tout réunir sur un seul.",
      ],
    },
    {
      kind: "callout",
      tone: "combo",
      label: "Astuce Yakumo",
      text: "Pas besoin de selle, il agit juste en étant présent. Faites plusieurs Yakumo spécialisés : un \"attaque\", un \"vitesse de déplacement\", un \"vitesse de travail\", pour cibler chaque type de build. Où le trouver : sauvage niveau 54 à Sakurajima (trop haut pour l'instant), ou breedez-le tôt via **Incineram + Foxparks** (Incineram niveau 10 sous la tour de guet de l'île Windswept, Foxparks partout dans la zone de départ). Les combos ayant changé en 1.0, vérifiez sur un calculateur.",
    },
    { kind: "sub", title: "Passifs spéciaux à connaître : Généreux et Grand Prince" },
    {
      kind: "p",
      text: "C'est le même passif à deux niveaux : il augmente les objets et matériaux qu'un Pal lâche **quand il est vaincu ou dépecé**.",
    },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "violet",
          title: "Généreux",
          body: "La version normale, environ +50% de drops de ce Pal au dépeçage.",
        },
        {
          accent: "violet",
          title: "Grand Prince (arc-en-ciel)",
          glow: true,
          body: "La version max : objets obtenus **+100%**. Double les matériaux lâchés.",
        },
      ],
    },
    {
      kind: "callout",
      tone: "warn",
      label: "Le piège",
      text: "Ces passifs ne font **rien** sur un Pal que vous gardez vivant (combat, base, monture) : c'est un slot gaspillé. Ils ne servent que sur les Pals que vous **breedez pour les dépecer en masse** ({{Mammorest}} pour la viande, alphas pour les pièces de civilisation ancienne). Collez Grand Prince sur une telle ferme à dépeçage et vous doublez le loot à chaque fois.",
    },
    { kind: "sub", title: "Les mutations, comment ça marche" },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "violet",
          title: "Ce que ça donne",
          glow: true,
          list: [
            "Chance de base 0,5 à 1% d'oeuf muté. Avec le gâteau légumes raffiné, ça monte à environ 3%.",
            "Un Pal muté a **2 passifs arc-en-ciel garantis**, est toujours **alpha**, arrive **condensé 2 étoiles**, a des **IV entre 90 et 100** et une **attaque forte** non héritée.",
            "La mutation donne un Pal d'un rang supérieur à ce que la reproduction normale donnerait. C'est parfois le seul moyen d'obtenir certains Pals (ex : {{Orserk}} ne se breed qu'avec lui-même).",
          ],
        },
        {
          accent: "violet",
          title: "Les IV et les lunettes",
          list: [
            "Les IV vont de 1 à 100 et déterminent le potentiel max de PV, attaque et défense.",
            "Débloquez les **lunettes de compétence** au niveau 34 (arbre de techno ancienne) et équipez-les pour voir les IV.",
            "Sans gâteau à IV : 30% de chance d'hériter l'IV du père, 30% de la mère, 40% de valeur aléatoire, pour chaque IV.",
          ],
        },
      ],
    },
    { kind: "sub", title: "La chaîne de reproduction, étape par étape" },
    {
      kind: "p",
      text: "N'utilisez pas les gâteaux comme une progression linéaire : ils s'enchaînent selon une méthode. La règle d'or : au moment de stabiliser, faites en sorte que les deux parents aient **exactement 4** des passifs voulus, pas plus (au-delà, vous rajoutez du hasard).",
    },
    {
      kind: "steps",
      items: [
        "**Phase volume** (gâteau aux légumes + Grintale) : produisez jusqu'à 4 oeufs par cycle. On se fiche des stats, on brute-force le hasard pour **fusionner les bons passifs** sur des parents \"à moitié parfaits\".",
        "**Phase verrouillage** (gâteau spécial, niveau 74) : réduit le hasard et force l'héritage propre de plusieurs passifs voulus. Visez des bébés avec 3 à 4 bons passifs.",
        "**Phase perfection** (gâteau légumes raffiné, le **dernier**) : full hasard pour décrocher une **mutation** qui donne IV parfaits, 2 étoiles et des passifs arc-en-ciel en bonus.",
        "**Écloserie antique** (niveau 76) : à utiliser **seulement à la fin** (jamais en phase volume, car les bonus d'équipe ne s'activent qu'au ramassage manuel). Combinée au gâteau spécial, l'héritage grimpe à ~100%.",
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      label: "Réglage pratique",
      text: "Dans les réglages du monde, le paramètre **\"temps d'incubation d'un oeuf massif\"** contrôle le temps d'incubation de TOUS les oeufs. Mettez-le à **0** pour une éclosion instantanée pendant vos gros projets de reproduction, puis remettez-le comme vous voulez.",
    },
    { kind: "sub", title: "Les Pals qui transforment l'élevage" },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "violet",
          badge: { label: "clé", tone: "breed" },
          title: "Yakumo",
          pal: "Yakumo",
          body: "La pièce maîtresse : sa compétence \"Oiseaux de plume\" imprime ses passifs sur les Pals que vous capturez (voir la stratégie Yakumo détaillée plus haut). L'outil n°1 pour fabriquer des Pals parfaits.",
          kv: ["Sauvage : **Sakurajima (lv.54)**", "Ou breed via Foxparks + Lovander"],
        },
        {
          accent: "violet",
          badge: { label: "alphas", tone: "breed" },
          title: "Broncherry + Broncherry Aqua",
          pal: "Broncherry",
          body: "Ensemble dans l'équipe, chaque oeuf ramassé a une chance d'être remplacé par un oeuf de Pal alpha. Condensés au max, ça monte jusqu'à 100% d'alpha garanti. Les alphas donnent des schémas légendaires quand on les broie.",
        },
        {
          accent: "violet",
          badge: { label: "plus d'oeufs", tone: "breed" },
          title: "Grintale",
          pal: "Grintale",
          body: "Dans l'équipe, 50% de chance de recevoir un oeuf supplémentaire. Se cumule avec le gâteau légumes. Combo : gâteau légumes + Grintale condensé = jusqu'à 4 oeufs d'un coup (à ramasser à la main sur la ferme, pas la machine).",
        },
        {
          accent: "violet",
          badge: { label: "vitesse", tone: "breed" },
          title: "Breloha, Relaxaurus, Dynamov",
          pal: "Relaxaurus",
          body: "**Breloha** condensé à la base : +50% de vitesse de reproduction (jusqu'à ~80% avec ses buffs). **Relaxaurus** (niveau 49, île Oasis à l'est du désert) accélère aussi la repro. **Dynamov** réduit le temps d'**incubation** de 20%. Passif **Babysitter** : +30% repro ET +30% incubation. Passif **Philanthrope** (sur les parents) : +100% vitesse, cumulable si les deux l'ont.",
        },
      ],
    },
    { kind: "sub", title: "Ajouter les passifs manquants" },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          title: "Table d'opération (niveau 38)",
          body: "Implantez un passif directement (50 000 or, réutilisable), ou changez le sexe d'un Pal. Les implants et le change de sexe s'échangent contre des **preuves de victoire** (bounty tokens) auprès des officiers dans les villages. Vous en gagnez en tuant les boss humains.",
        },
        {
          title: "L'arène ((626, 16))",
          body: "Combats PVE, gagnez des tickets de combat, échangez-les contre des **implants** (serenity, infinite stamina, noble, reload master, etc). Utilisation infinie. Montez en rang (platine, diamant) pour plus de tickets par combat.",
        },
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      label: "Machines endgame",
      text: "Incubateur géant (niveau 48) pour éclore plein d'oeufs d'un coup, +50% vitesse. Écloserie antique (niveau 76) qui automatise tout le processus de reproduction, d'éclosion et maximise les passifs.",
    },
  ],
};
