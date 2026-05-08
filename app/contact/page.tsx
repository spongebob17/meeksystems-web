export const metadata = {
  title: 'Contact | Meek Systems',
  description:
    'Book a free AI audit. Get clarity on where AI fits in your operation — no pitch, no pressure.',
}

export default function ContactPage() {
  return (
    <div className="bg-warm-white">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-28">
        <span className="inline-block font-dm text-xs font-bold tracking-widest text-terracotta uppercase mb-6">
          Contact
        </span>
        <h1 className="font-fraunces text-near-black text-4xl md:text-6xl font-bold leading-tight mb-4">
          Ready to move?
        </h1>
        <p className="font-dm text-slate-brand text-lg leading-relaxed max-w-xl">
          Book a free 20-minute AI audit. No pitch. Just clarity on where AI fits in your operation and what it would actually take to build it right.
        </p>
      </section>

      {/* Contact content */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Primary CTA */}
          <div className="md:col-span-7">
            <div className="bg-[#F3F0EC] rounded-2xl p-8 md:p-10 mb-6">
              <h2 className="font-fraunces text-near-black text-2xl font-bold mb-4">
                Free AI Audit — 20 minutes
              </h2>
              <div className="space-y-3 font-dm text-slate-brand text-sm mb-8">
                <p className="flex items-start gap-3">
                  <span className="text-terracotta mt-0.5">✓</span>
                  <span>Look at how your business actually runs right now</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-terracotta mt-0.5">✓</span>
                  <span>Identify where AI creates leverage — and where it doesn&apos;t</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-terracotta mt-0.5">✓</span>
                  <span>Leave with a clear answer, not a sales process</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-terracotta mt-0.5">✓</span>
                  <span>No commitment required. No follow-up pressure.</span>
                </p>
              </div>
              <a
                href="https://merridian.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-terracotta text-warm-white font-dm font-bold text-base px-8 py-4 rounded-lg hover:bg-[#b06340] transition-colors w-full text-center"
              >
                Book your audit at merridian.ai
              </a>
            </div>

            <p className="font-dm text-slate-brand text-sm leading-relaxed">
              This isn&apos;t a discovery call with a 45-minute pitch at the end. It&apos;s exactly what it says — 20 minutes to get clear on what AI could actually do for your operation. Most people leave knowing either exactly what to build, or exactly why now isn&apos;t the right time. Both are useful.
            </p>
          </div>

          {/* Contact details */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-[#F3F0EC] rounded-2xl p-6">
              <p className="font-dm text-slate-brand text-xs font-bold uppercase tracking-widest mb-4">
                Direct
              </p>
              <a
                href="mailto:jimik@meeksystems.com"
                className="flex items-center gap-3 font-dm text-near-black text-sm hover:text-terracotta transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E8E4DF] group-hover:bg-terracotta transition-colors flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="2" className="text-slate-brand group-hover:text-warm-white"/>
                    <path d="M3 5l9 7 9-7" stroke="currentColor" strokeWidth="2" className="text-slate-brand group-hover:text-warm-white"/>
                  </svg>
                </div>
                jimik@meeksystems.com
              </a>
            </div>

            <div className="bg-[#F3F0EC] rounded-2xl p-6">
              <p className="font-dm text-slate-brand text-xs font-bold uppercase tracking-widest mb-4">
                Instagram
              </p>
              <a
                href="https://instagram.com/meek.l.s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-dm text-near-black text-sm hover:text-terracotta transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E8E4DF] group-hover:bg-terracotta transition-colors flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" className="text-slate-brand group-hover:text-warm-white"/>
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" className="text-slate-brand group-hover:text-warm-white"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" className="text-slate-brand group-hover:text-warm-white"/>
                  </svg>
                </div>
                @meek.l.s
              </a>
            </div>

            <div className="bg-[#F3F0EC] rounded-2xl p-6">
              <p className="font-dm text-slate-brand text-xs font-bold uppercase tracking-widest mb-4">
                Company
              </p>
              <div className="space-y-2 font-dm text-near-black text-sm">
                <p>Meek Systems LLC</p>
                <p className="text-slate-brand">Wyoming · USA</p>
                <p className="text-slate-brand">EIN: 42-2050565</p>
              </div>
            </div>

            <div className="bg-[#F3F0EC] rounded-2xl p-6">
              <p className="font-dm text-slate-brand text-xs font-bold uppercase tracking-widest mb-4">
                Platforms
              </p>
              <div className="space-y-2">
                <a
                  href="https://merridian.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-dm text-sm text-terracotta hover:underline"
                >
                  merridian.ai →
                </a>
                <a
                  href="https://bruwis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-dm text-sm text-terracotta hover:underline"
                >
                  bruwis.com →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
