'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-serif text-lg font-medium tracking-tight text-foreground md:text-xl">
            The Meridian Collection
          </span>
          <span className="mt-1 text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
            Online Museum
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <nav aria-label="Primary" className="flex items-center gap-6 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={
                    isActive
                      ? 'font-medium text-accent underline-offset-4 decoration-accent/60 underline'
                      : 'text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline'
                  }
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
