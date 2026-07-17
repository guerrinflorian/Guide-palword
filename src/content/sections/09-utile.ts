import type { Section } from "../types";

export const UTILE: Section = {
  id: "utile",
  title: "Pals utilitaires indispensables",
  subtitle:
    "Ces Pals ne combattent pas forcément mais rendent la vie tellement plus simple. Beaucoup agissent juste en étant dans l'équipe.",
  group: "Les Pals",
  icon: "wrench",
  accent: "teal",
  blocks: [
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          badge: { label: "XP", tone: "base" },
          title: "Umbraskull / Mascal",
          pal: "Umbraskull",
          body: "+40% XP à toute l'équipe, sans selle. Le meilleur pour faire monter un Pal fraîchement éclos au niveau du groupe.",
        },
        {
          badge: { label: "poids", tone: "mount" },
          title: "Tuckle / Turtacle",
          pal: "Tuckle",
          body: "Réduit le poids du minerai de 84% dans l'équipe. Vous portez des stacks énormes de minerai sans être surchargé.",
        },
        {
          badge: { label: "poids", tone: "base" },
          title: "Cattiva et Gumoss",
          pal: "Cattiva",
          body: "Cattiva : +100 de limite de charge. Gumoss : efficacité de bûcheronnage +30% et poids du bois -40%. Parfaits pour les runs de récolte manuelle.",
        },
        {
          badge: { label: "soin", tone: "base" },
          title: "Petallia",
          pal: "Petallia",
          body: "Sortez-la, activez : rend un énorme paquet de vie (jusqu'à +75% sur la version Ignis). Plus rapide qu'attendre le soin naturel.",
        },
        {
          badge: { label: "retour", tone: "mount" },
          title: "Dongan",
          pal: "Dongan",
          body: "Compétence : téléporte à la base la plus proche (cooldown 1000 s). En exploration, sortez-le, appuyez, vous rentrez sans chercher un point de voyage.",
        },
        {
          badge: { label: "or", tone: "base" },
          title: "Dumud Guild",
          pal: "Dumud Guild",
          body: "Full doré, se revend très cher (environ 44 000 au niveau 34, bien plus qu'un alpha légendaire). Fabriquez-en en alpha pour une ferme à or hilarante.",
        },
        {
          badge: { label: "exploration", tone: "mount" },
          title: "Broncherry + Grintale",
          pal: "Broncherry",
          body: "En ramassant un oeuf, Broncherry a 35% de le rendre alpha, Grintale 50% de doubler. Ramassez les oeufs partout et rentrez avec des Pals de haut tier.",
        },
        {
          badge: { label: "clés", tone: "mount" },
          title: "Mini-mugs",
          pal: "Minimug",
          body: "Sortez-les pour ouvrir les coffres verrouillés : ils donnent des clés gratuites de temps en temps. Précieux pour looter d'autres régions.",
        },
      ],
    },
  ],
};
