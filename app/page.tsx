import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { featuredPaintings, paintings } from '@/data/paintings'

export default function HomePage() {
  const preview = (featuredPaintings.length > 0 ? featuredPaintings : paintings).slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Intro */}
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
          <p className="text-xs uppercase tracking-[0.32em] text-accent">
            A small online museum
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-normal leading-[1.08] tracking-tight text-foreground text-balance md:text-6xl">
            A quiet room for looking at paintings.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The Meridian Collection is a small, carefully kept gathering of
            paintings — landscapes, portraits, and still lifes spanning several
            centuries. Take your time, look closely, and if a piece speaks to
            you, each one is available to acquire.
          </p>
          <div className="mt-9">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              View the Gallery
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </section>

        {/* Preview row */}
        <section
          aria-labelledby="preview-heading"
          className="border-t border-border/60 bg-card"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
            <div className="flex items-end justify-between gap-4">
              <h2
                id="preview-heading"
                className="font-serif text-2xl text-foreground md:text-3xl"
              >
                From the collection
              </h2>
              <Link
                href="/gallery"
                className="hidden shrink-0 items-center gap-1 text-sm text-accent underline-offset-4 hover:underline sm:inline-flex"
              >
                See all paintings
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
              {preview.map((painting) => (
                <li key={painting.id}>
                  <Link href="/gallery" className="group block">
                    <div className="relative overflow-hidden bg-muted">
                      <Image
                        src={painting.image || '/placeholder.svg'}
                        alt={`${painting.title} by ${painting.artist}`}
                        width={700}
                        height={860}
                        className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        sizes="(min-width: 1024px) 25vw, 50vw"
                      />
                      <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/5" />
                    </div>
                    <h3 className="mt-3 font-serif text-base leading-snug text-foreground text-balance">
                      {painting.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {painting.artist}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 sm:hidden">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1 text-sm text-accent underline-offset-4 hover:underline"
              >
                See all paintings
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* About / mission */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <h2 className="font-serif text-2xl text-foreground md:text-3xl md:leading-tight text-balance">
              About the museum
            </h2>
            <div className="max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                We believe a painting deserves a little stillness. This museum
                keeps things deliberately simple — one wall, one collection, and
                room to breathe between each work.
              </p>
              <p>
                The collection grows slowly. Each piece is chosen for the way it
                rewards a second, longer look. Click any painting in the gallery
                to see it enlarged, read a few words about it, and find how to
                inquire if you would like to make it yours.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
