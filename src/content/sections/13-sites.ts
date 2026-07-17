import type { Section } from "../types";

export const SITES: Section = {
  id: "sites",
  title: "Sites et outils",
  subtitle: "Les ressources externes à garder ouvertes. Ce sont celles citées et utilisées dans les guides.",
  group: "Le reste",
  icon: "globe",
  accent: "teal",
  blocks: [
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          accent: "teal",
          title: "[paldb.cc](https://paldb.cc/en/)",
          body: "La bible. À peu près toute l'info du jeu : aptitudes de travail (filtre Transporting, etc), **combinaisons de reproduction**, montures triées par vitesse, **quels schémas droppent sur quel Pal**, et les **spots de pêche rares** sur carte interactive avec cooldown. À mettre en favori.",
        },
        {
          accent: "teal",
          title: "Calculateur de reproduction",
          body: "Indispensable en 1.0 puisque les combos ont changé. paldb.cc en propose un. Entrez ce que vous voulez obtenir, il vous donne les parents. Utile aussi pour cibler un Pal repéré mais trop haut niveau à capturer.",
        },
        {
          accent: "teal",
          title: "Carte interactive",
          body: "Type op.gg ou carte interactive Palworld : localisez gisements, oeufs, sphères au sol, effigies, spawns de Pals et de boss. Prenez des captures d'écran des zones de spawn.",
        },
        {
          accent: "teal",
          title: "Wiki",
          body: "palworld.wiki.gg et game8.co pour les recettes exactes, niveaux de déblocage et détails d'objets quand un chiffre vous manque en jeu (vérifiez toujours la valeur affichée en jeu, la 1.0 a rééquilibré beaucoup de recettes).",
        },
      ],
    },
    {
      kind: "callout",
      tone: "warn",
      label: "Rappel général",
      text: "La 1.0 a rééquilibré énormément de recettes et de niveaux. Un chiffre sur un vieux guide (surtout \"12 captures\", les recettes d'armes, les anciens combos de reproduction) peut être périmé. En cas de doute, l'établi ou le calculateur en jeu affiche la valeur actuelle.",
    },
  ],
};
