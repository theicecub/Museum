'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight, Mail, Phone } from 'lucide-react'
import type { Painting } from '@/data/paintings'
import { site, emailHref, phoneHref } from '@/data/site'

export function GalleryGrid({ paintings }: { paintings: Painting[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isOpen = openIndex !== null

  const close = useCallback(() => setOpenIndex(null), [])

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) => {
        if (current === null) return current
        return (current + delta + paintings.length) % paintings.length
      })
    },
    [paintings.length],
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, close, step])

  const active = openIndex !== null ? paintings[openIndex] : null

  return (
    <>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {paintings.map((painting, index) => (
          <li key={painting.id}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group block w-full text-left"
              aria-label={`Enlarge ${painting.title} by ${painting.artist}`}
            >
              <div className="relative overflow-hidden bg-muted">
                <Image
                  src={painting.image || '/placeholder.svg'}
                  alt={`${painting.title} by ${painting.artist}`}
                  width={900}
                  height={1100}
                  className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/5" />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-lg leading-snug text-foreground text-balance">
                  {painting.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {painting.artist}
                  {painting.year ? `, ${painting.year}` : ''}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {isOpen && active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} by ${active.artist}`}
          className="fixed inset-0 z-50 flex flex-col bg-foreground/92 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-end px-6 py-5">
            <button
              type="button"
              onClick={close}
              className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
            >
              Close
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div
            className="flex flex-1 items-center justify-center px-4 pb-4 sm:px-16"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Previous painting"
              onClick={(e) => {
                e.stopPropagation()
                step(-1)
              }}
              className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full p-2 text-background/60 transition-colors hover:text-background sm:block"
            >
              <ChevronLeft className="size-8" aria-hidden="true" />
            </button>

            <figure
              className="flex max-h-full max-w-4xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex min-h-0 flex-1 items-center justify-center">
                <Image
                  src={active.image || '/placeholder.svg'}
                  alt={`${active.title} by ${active.artist}`}
                  width={1400}
                  height={1700}
                  className="max-h-[70vh] w-auto object-contain shadow-2xl"
                  sizes="90vw"
                  priority
                />
              </div>
              <figcaption className="mt-5 max-w-xl text-center text-background">
                <p className="font-serif text-xl">{active.title}</p>
                <p className="mt-1 text-sm text-background/70">
                  {active.artist}
                  {active.year ? `, ${active.year}` : ''}
                  {active.medium ? ` · ${active.medium}` : ''}
                </p>
                {active.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-background/60 text-pretty">
                    {active.description}
                  </p>
                ) : null}

                <div className="mt-6 border-t border-background/15 pt-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-background/50">
                    Interested in this piece?
                  </p>
                  <div className="mt-3 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <a
                      href={`${emailHref}?subject=${encodeURIComponent(
                        `Inquiry: “${active.title}” by ${active.artist}`,
                      )}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
                    >
                      <Mail className="size-4" aria-hidden="true" />
                      Email to inquire
                    </a>
                    <a
                      href={phoneHref}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-sm text-background/70 underline-offset-4 transition-colors hover:text-background hover:underline"
                    >
                      <Phone className="size-4" aria-hidden="true" />
                      {site.phone}
                    </a>
                  </div>
                </div>
              </figcaption>
            </figure>

            <button
              type="button"
              aria-label="Next painting"
              onClick={(e) => {
                e.stopPropagation()
                step(1)
              }}
              className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full p-2 text-background/60 transition-colors hover:text-background sm:block"
            >
              <ChevronRight className="size-8" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
