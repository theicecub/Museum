import { Mail, Phone } from 'lucide-react'
import { site, emailHref, phoneHref } from '@/data/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <div className="space-y-1">
          <p className="font-serif text-base text-foreground">{site.name}</p>
          <p>Paintings available for acquisition. Inquiries welcome.</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <a
            href={emailHref}
            className="inline-flex items-center gap-2 underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            <Mail className="size-4" aria-hidden="true" />
            {site.email}
          </a>
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
        </div>
      </div>
    </footer>
  )
}
