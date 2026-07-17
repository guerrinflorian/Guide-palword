import type { Section } from "../types";

export const COMBAT: Section = {
  id: "combat",
  title: "Pals de combat",
  subtitle:
    "Les meilleurs cogneurs, plus les passifs d'attaque à empiler. Rappel : Féroce +20%, Colère divine +30%, Muscle Head +30%, Serenity +10% et cooldown réduit.",
  group: "Les Pals",
  icon: "swords",
  accent: "coral",
  blocks: [
    { kind: "sub", title: "Top dégâts" },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "coral",
          badge: { label: "légendaire", tone: "combat" },
          title: "Necromus / Bellanoir",
          pal: "Necromus",
          glow: true,
          body: "Les plus grosses stats d'attaque du jeu. Dans les tests à passifs égaux, Necromus tape le plus fort de tous.",
        },
        {
          accent: "coral",
          badge: { label: "rare cassé", tone: "combat" },
          title: "Bushinoc (Buchinok)",
          pal: "Bushinoc",
          body: "Le seul Pal rare qui rivalise avec les épiques. Tape aussi fort qu'un Blazamut. Si vous en avez, ne le négligez surtout pas.",
        },
        {
          accent: "coral",
          badge: { label: "eau, tôt", tone: "combat" },
          title: "Hangler",
          pal: "Hangler",
          body: "Un des 30 plus gros DPS du jeu, obtenable tôt par reproduction. Dégâts énormes mais survie faible. Idéal pour one-shot.",
        },
        {
          accent: "coral",
          badge: { label: "glace", tone: "combat" },
          title: "Moll Drawn Crest (Meldrin Cryst)",
          pal: "Moll Drawn Crest",
          body: "Laser de glace et crachat de glace, uniques à lui. Gèle les ennemis en chaîne. Avec plusieurs en rotation, vous gardez un boss de raid gelé tout le combat.",
        },
        {
          accent: "coral",
          badge: { label: "tank offensif", tone: "combat" },
          title: "Nokklem Ignis",
          pal: "Nokklem Ignis",
          body: "Compétence Gardien de Fer : quand il enrage, +210% attaque et +210% défense pour très longtemps. Difficile à tuer pendant ce temps.",
        },
        {
          accent: "coral",
          badge: { label: "polyvalent", tone: "combat" },
          title: "Jormuntide Ignis",
          pal: "Jormuntide Ignis",
          body: "Parmi les meilleures stats, plus une des meilleures stats d'Allumage pour la base. Ultra utile aussi dans plein de chaînes de reproduction.",
        },
      ],
    },
    { kind: "sub", title: "Support d'équipe (dégâts pour toute l'équipe)" },
    {
      kind: "cards",
      cols: 3,
      items: [
        {
          accent: "coral",
          badge: { label: "incontournable", tone: "combat" },
          title: "Azark / Astegon",
          pal: "Astegon",
          body: "Compétence \"Dragon Tonnerre Féroce\" (retravaillée). Chaque projectile qui touche (balle, ou même l'épée Terra) donne à votre Pal +5% attaque ET +5% défense pendant 5 s, cumulable 30 fois : soit jusqu'à **+150% attaque et défense**. Tant que vous tirez, le buff se maintient. Quasi obligatoire. Se trouve à l'Arbre-Monde (Remnant Riverside).",
        },
        {
          accent: "coral",
          badge: { label: "self-buff", tone: "combat" },
          title: "Celaray",
          pal: "Celaray",
          body: "Pendant le combat, vous perdez lentement de la vie contre **+40% attaque (jusqu'à +80%)**. Excellent si vous jouez le perso qui tape. Boss de l'Arbre-Monde.",
        },
        {
          accent: "coral",
          title: "Gobfin",
          pal: "Gobfin",
          body: "+10% d'attaque, et ça se cumule contrairement à la plupart des passifs. Empilez plusieurs Gobfins. Se condense.",
        },
        {
          accent: "coral",
          title: "Solenni / Saline",
          pal: "Solenni",
          body: "+30% (jusqu'à +80%) d'attaque si tous les Pals de l'équipe sont d'espèces différentes. Pas de selle. Se condense.",
        },
        {
          accent: "coral",
          title: "Lyleen",
          pal: "Lyleen",
          body: "Une des plus fortes attaquantes grass, et sa compétence soigne toute l'équipe de 80%. Précieuse pour les boss et raids.",
        },
        {
          accent: "coral",
          title: "Penking Lux / version feu",
          pal: "Penking Lux",
          body: "Augmente vos dégâts sur les **points faibles** de +25% (jusqu'à +40%), en eau ou en feu selon la version. À combiner avec des tirs à la tête.",
        },
      ],
    },
    {
      kind: "callout",
      tone: "combo",
      label: "Combo statut boueux",
      text: "{{Surfent Terra}} inflige \"boueux\" avec vos attaques, et {{Pyradeon}} augmente vos dégâts de +50% sur les ennemis boueux (sans être sorti). Les deux dans l'équipe = +50% de dégâts sur tout ce que vous touchez.",
    },
    { kind: "sub", title: "Les équipes à synergie élémentaire (nouveau 1.0)" },
    {
      kind: "p",
      text: "Le vrai truc cassé du endgame contre les boss et raids : un Pal applique une altération, un autre en profite. Comme votre équipe reste d'espèces différentes, vous gardez aussi les bonus type Solina et un Suzaku (qui donne presque autant d'attaque qu'une équipe entière de Gobfins).",
    },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "coral",
          title: "Trempé + Gel (le favori)",
          glow: true,
          body: "Un Pal rend vos attaques \"trempé\", **Orserk** ajoute +65% de dégâts sur les cibles trempées, et un autre Pal déclenche un **gel automatique** à chaque seuil de trempé. Avec une arme à cadence rapide, vous stun-lock le boss en boucle.",
        },
        {
          accent: "coral",
          title: "Électrifié",
          body: "Même principe, mais l'électrification a une **zone d'effet** : touche aussi les ennemis autour.",
        },
        {
          accent: "coral",
          title: "Feu",
          body: "Fait apparaître des explosions et des **tornades de feu** autour de vous.",
        },
        {
          accent: "coral",
          title: "Poison",
          body: "Augmente vos dégâts ET réduit ceux de la cible jusqu'à **-60%**. Énorme contre les boss de raid.",
        },
      ],
    },
  ],
};
