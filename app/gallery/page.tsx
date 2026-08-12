import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { GalleryGrid } from '@/components/gallery-grid'
import { paintings } from '@/data/paintings'

export const metadata: Metadata = {
  title: 'Gallery — The Meridian Collection',
  description:
    'Browse the full collection of paintings. Click any work to enlarge it and look closely.',
}

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <header className="border-b border-border/60 py-14 md:py-20">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">
              The Gallery
            </p>
            <h1 className="mt-5 font-serif text-4xl font-normal tracking-tight text-foreground md:text-5xl">
              The Collection
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {paintings.length} paintings. Click any work to enlarge it, then
              use the arrows or your keyboard to move between pieces.
            </p>
          </header>

          <section aria-label="All paintings" className="py-14 md:py-20">
            <GalleryGrid paintings={paintings} />
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
