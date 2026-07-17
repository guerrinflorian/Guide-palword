import { SECTIONS, sectionNumber } from "@/content/sections";
import { COOP_TAG } from "@/content/hero";
import { buildSearchIndex } from "@/lib/searchIndex";
import { TopoPattern } from "@/components/brand/TopoPattern";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { CommandPalette } from "@/components/search/CommandPalette";
import { Section } from "@/components/ui/Section";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import type { NavItem } from "@/components/layout/nav-items";

export default function Home() {
  const navItems: NavItem[] = SECTIONS.map((s, i) => ({
    id: s.id,
    title: s.title,
    group: s.group,
    num: sectionNumber(i),
  }));
  const searchEntries = buildSearchIndex();

  return (
    <div id="top">
      <TopoPattern />
      <Header items={navItems} coopTag={COOP_TAG} />
      <CommandPalette entries={searchEntries} />

      <div className="mx-auto max-w-[1220px] px-5 lg:grid lg:grid-cols-[236px_minmax(0,1fr)] lg:gap-9">
        <Sidebar items={navItems} />

        <main className="min-w-0 pb-16 pt-2 lg:pt-4">
          <Hero />
          {SECTIONS.map((section, i) => (
            <Section key={section.id} data={section} num={sectionNumber(i)}>
              <BlockRenderer blocks={section.blocks} sectionId={section.id} accent={section.accent} />
            </Section>
          ))}
          <Footer />
        </main>
      </div>

      <BackToTop />
    </div>
  );
}
