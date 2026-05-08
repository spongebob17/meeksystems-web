import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E4DF] bg-warm-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-fraunces text-near-black font-bold text-base">Meek Systems LLC</p>
            <p className="font-dm text-slate-brand text-sm mt-1">Wyoming · jimik@meeksystems.com</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="https://merridian.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm text-sm text-slate-brand hover:text-terracotta transition-colors"
            >
              merridian.ai
            </a>
            <a
              href="https://bruwis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm text-sm text-slate-brand hover:text-terracotta transition-colors"
            >
              bruwis.com
            </a>
            <Link
              href="/about"
              className="font-dm text-sm text-slate-brand hover:text-terracotta transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-dm text-sm text-slate-brand hover:text-terracotta transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E8E4DF]">
          <p className="font-dm text-slate-brand text-xs">
            © 2026 Meek Systems LLC · Wyoming · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
