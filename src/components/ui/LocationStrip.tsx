import Image from "next/image";
import manifest from "@/content/image-manifest.json";

const locations: Record<string, string> = manifest.locations;

const LABELS: Record<string, string> = {
  sakurajima: "Sakurajima",
  feybreak: "Faybreak",
  volcan: "Zone du volcan",
  desert: "Désert",
  "montagnes-enneigees": "Montagnes enneigées",
  "windswept-hills": "Windswept Hills",
  "arbre-monde": "Arbre-Monde",
  "sun-reach-isles": "Sun Reach Isles",
  sanctuaire: "Sanctuaire",
  oasis: "Île Oasis",
};

/*
  Best effort gallery of locally downloaded region shots.
  Missing images are simply skipped: nothing broken, ever.
*/
export function LocationStrip({ slugs }: { slugs: string[] }) {
  const available = slugs.filter((s) => locations[s]);
  if (available.length === 0) return null;

  return (
    <div className="my-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {available.map((slug) => (
        <figure key={slug} className="group relative overflow-hidden rounded-xl border border-line bg-surface">
          <Image
            src={`/images/locations/${locations[slug]}`}
            alt={LABELS[slug] ?? slug}
            width={480}
            height={280}
            className="h-28 w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.04] sm:h-32"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/95 to-transparent px-2.5 pb-1.5 pt-6 font-mono text-[11px] text-ink">
            {LABELS[slug] ?? slug}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
