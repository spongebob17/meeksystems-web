export const metadata = {
  title: 'Resources | Meek Systems',
  description:
    'Tools, guides, and frameworks from Meek Systems. Built for operators who are done waiting.',
}

export default function ResourcesPage() {
  return (
    <div className="bg-warm-white">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-28">
        <span className="inline-block font-dm text-xs font-bold tracking-widest text-terracotta uppercase mb-6">
          Resources
        </span>
        <h1 className="font-fraunces text-near-black text-4xl md:text-5xl font-bold leading-tight mb-4">
          Tools for operators who move.
        </h1>
        <p className="font-dm text-slate-brand text-lg leading-relaxed max-w-xl">
          No fluff. No 30-day email courses with a PDF at the end that says &ldquo;take action.&rdquo; Real frameworks that came from running real operations.
        </p>
      </section>

      {/* Resources grid */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* The 30-Day OS Ebook */}
          <div className="bg-[#F3F0EC] rounded-2xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-terracotta flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#FAF8F5" strokeWidth="2"/>
                  <path d="M8 8h8M8 12h8M8 16h5" stroke="#FAF8F5" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-dm font-bold text-terracotta text-xl">$27</span>
            </div>
            <div className="inline-block bg-terracotta text-warm-white font-dm text-xs font-bold px-2.5 py-1 rounded-full mb-4 uppercase tracking-wide">
              Available
            </div>
            <h2 className="font-fraunces text-near-black text-xl font-bold mb-3">
              The 30-Day Operating System
            </h2>
            <p className="font-dm text-slate-brand text-sm leading-relaxed mb-6">
              A practical framework for building an AI-powered operating system for your business — in 30 days, starting from scratch. Written from the inside of a working company, not from a consulting deck.
            </p>
            <p className="font-dm text-near-black text-sm leading-relaxed mb-6">
              Covers: agent architecture, workflow mapping, automation stacking, approval flows, and how to stop making decisions that AI can make for you.
            </p>
            <a
              href="https://gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-terracotta text-warm-white font-dm font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#b06340] transition-colors"
            >
              Get it on Gumroad — $27
            </a>
          </div>

          {/* Agent OS Kit */}
          <div className="bg-[#F3F0EC] rounded-2xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-near-black flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="#FAF8F5" strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="#FAF8F5" strokeWidth="2"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="#FAF8F5" strokeWidth="2"/>
                  <path d="M14 17.5h7M17.5 14v7" stroke="#FAF8F5" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-dm font-bold text-slate-brand text-xl">$97</span>
            </div>
            <div className="inline-block bg-[#D4CFC9] text-slate-brand font-dm text-xs font-bold px-2.5 py-1 rounded-full mb-4 uppercase tracking-wide">
              Coming Soon
            </div>
            <h2 className="font-fraunces text-near-black text-xl font-bold mb-3">
              Agent OS Kit
            </h2>
            <p className="font-dm text-slate-brand text-sm leading-relaxed mb-6">
              The full kit for building a 22-agent AI team inside your business. Includes role briefs, prompt templates, workflow specs, Make.com scenario blueprints, and the governance layer that keeps it from becoming chaos.
            </p>
            <p className="font-dm text-near-black text-sm leading-relaxed mb-6">
              This is what runs Meek Systems. Packaged for operators who want to build their own version without starting from zero.
            </p>
            <button
              disabled
              className="inline-block bg-[#D4CFC9] text-slate-brand font-dm font-bold text-sm px-6 py-3 rounded-lg cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>

          {/* Free: AI Audit */}
          <div className="md:col-span-2 bg-near-black rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="inline-block bg-terracotta text-warm-white font-dm text-xs font-bold px-2.5 py-1 rounded-full mb-4 uppercase tracking-wide">
                  Free
                </div>
                <h2 className="font-fraunces text-warm-white text-2xl md:text-3xl font-bold mb-3">
                  Book a Free AI Audit
                </h2>
                <p className="font-dm text-[#9B8069] text-base leading-relaxed max-w-xl">
                  20 minutes. No pitch. Jimik will look at how your business actually runs and tell you exactly where AI fits — and where it doesn&apos;t. You walk away with clarity, not a follow-up email asking for a commitment.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="https://merridian.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-terracotta text-warm-white font-dm font-bold text-base px-7 py-4 rounded-lg hover:bg-[#b06340] transition-colors whitespace-nowrap"
                >
                  Book at merridian.ai
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
