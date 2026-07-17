import Image from "next/image";
import manifest from "@/content/image-manifest.json";
import { slugify } from "@/lib/utils";

const pals: Record<string, string> = manifest.pals;

/*
  Inline Pal mention: shows the locally downloaded icon when it exists,
  falls back to a plain styled name otherwise (never a broken image).
*/
export function PalName({ name }: { name: string }) {
  const file = pals[slugify(name)];

  return (
    <span className="font-semibold text-ink">
      {file ? (
        <Image
          src={`/images/pals/${file}`}
          alt=""
          width={20}
          height={20}
          className="mr-1 inline-block size-5 -translate-y-px rounded-full border border-line/70 bg-surface2 object-cover align-text-bottom"
        />
      ) : null}
      {name}
    </span>
  );
}
