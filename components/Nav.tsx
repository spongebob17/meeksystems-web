'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/builds', label: 'Builds' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-warm-white border-b border-[#E8E4DF]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <svg width="28" height="28" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M512 218V560" stroke="#1A1A1A" strokeWidth="52" strokeLinecap="round"/>
            <circle cx="512" cy="182" r="76" fill="#1A1A1A"/>
            <path d="M498 484C370 438 292 324 278 224C395 252 482 354 498 484Z" fill="#1A1A1A"/>
            <path d="M526 484C654 438 732 324 746 224C629 252 542 354 526 484Z" fill="#C4714A"/>
            <path d="M250 579C392 531 497 565 512 560C527 565 632 531 774 579" stroke="#9B8069" strokeWidth="36" strokeLinecap="round"/>
            <path d="M512 560C508 645 508 731 512 818" stroke="#9B8069" strokeWidth="40" strokeLinecap="round"/>
            <path d="M512 590C450 660 384 688 338 773" stroke="#9B8069" strokeWidth="33" strokeLinecap="round"/>
            <path d="M512 598C584 658 643 700 686 778" stroke="#9B8069" strokeWidth="33" strokeLinecap="round"/>
          </svg>
          <span className="font-fraunces text-near-black text-lg font-bold tracking-tight">
            Meek Systems
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-dm text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-terracotta'
                  : 'text-slate-brand hover:text-near-black'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://merridian.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta text-warm-white font-dm text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#b06340] transition-colors"
          >
            Work with us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-near-black transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-near-black transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-near-black transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-warm-white border-t border-[#E8E4DF] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-dm text-base font-medium ${
                pathname === link.href ? 'text-terracotta' : 'text-slate-brand'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://merridian.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta text-warm-white font-dm text-sm font-bold px-4 py-2.5 rounded-lg text-center"
          >
            Work with us
          </a>
        </div>
      )}
    </nav>
  )
}
