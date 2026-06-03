'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/about', label: 'About' },
  { href: '/builds', label: 'Builds' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-warm-white border-b border-[rgba(26,26,26,0.10)]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-fraunces text-near-black text-[14px] font-medium tracking-tight">
          Meek Systems
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-dm text-[13px] text-slate-brand hover:text-near-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://merridian.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm text-[13px] text-near-black hover:text-terracotta transition-colors"
          >
            Work with us
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-near-black transition-transform ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-px bg-near-black transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-near-black transition-transform ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-warm-white border-t border-[rgba(26,26,26,0.10)] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-dm text-[13px] text-slate-brand"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://merridian.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm text-[13px] text-near-black"
          >
            Work with us
          </a>
        </div>
      )}
    </nav>
  )
}
