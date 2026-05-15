import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-warm-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          <span className="inline-block font-dm text-xs font-bold tracking-widest text-terracotta uppercase mb-6">
            Meek Systems
          </span>
          <h1 className="font-fraunces text-near-black text-4xl md:text-6xl font-bold leading-tight text-balance mb-6">
            One system. Every function. Built for people ready to move.
          </h1>
          <p className="font-dm text-slate-brand text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Meek Systems is the parent company behind Merridian, Bruwis, and Kindr — three AI platforms built for operators who are done waiting for the right moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://merridian.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-terracotta text-warm-white font-dm font-bold text-base px-7 py-3.5 rounded-lg hover:bg-[#b06340] transition-colors text-center"
            >
              Work with us
            </a>
            <Link
              href="/builds"
              className="inline-block border border-[#D4CFC9] text-near-black font-dm font-medium text-base px-7 py-3.5 rounded-lg hover:border-terracotta hover:text-terracotta transition-colors text-center"
            >
              See the builds
            </Link>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section className="bg-[#F3F0EC] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-fraunces text-near-black text-2xl md:text-3xl font-bold mb-3">
            Three platforms. One operating system behind them.
          </h2>
          <p className="font-dm text-slate-brand text-base mb-12 max-w-xl">
            Each one built to solve a specific problem for a specific operator — no feature bloat, no generic tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Merridian */}
            <a
              href="https://merridian.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-warm-white rounded-2xl p-8 border border-[#E8E4DF] hover:border-terracotta hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-terracotta mb-6 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8" stroke="#FAF8F5" strokeWidth="2"/>
                  <path d="M12 4v2M12 18v2M4 12H2M22 12h-2" stroke="#FAF8F5" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 12l5-5" stroke="#FAF8F5" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="inline-block bg-[#F3F0EC] text-terracotta font-dm text-xs font-bold px-2.5 py-1 rounded-full mb-4 uppercase tracking-wide">
                Live
              </div>
              <h3 className="font-fraunces text-near-black text-xl font-bold mb-3">Merridian</h3>
              <p className="font-dm text-slate-brand text-sm leading-relaxed mb-6">
                AI that works the way your business does. Custom AI systems for logistics, hospitality, and property management operators.
              </p>
              <span className="font-dm text-terracotta text-sm font-bold group-hover:underline">
                merridian.ai →
              </span>
            </a>

            {/* Bruwis */}
            <a
              href="https://bruwis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-warm-white rounded-2xl p-8 border border-[#E8E4DF] hover:border-terracotta hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-near-black mb-6 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="10" rx="2" stroke="#FAF8F5" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="#FAF8F5" strokeWidth="2"/>
                </svg>
              </div>
              <div className="inline-block bg-[#F3F0EC] text-terracotta font-dm text-xs font-bold px-2.5 py-1 rounded-full mb-4 uppercase tracking-wide">
                Live
              </div>
              <h3 className="font-fraunces text-near-black text-xl font-bold mb-3">Bruwis</h3>
              <p className="font-dm text-slate-brand text-sm leading-relaxed mb-6">
                Your restaurant. Running smarter. AI-powered operations for independent restaurants — scheduling, compliance, HR, and more.
              </p>
              <span className="font-dm text-terracotta text-sm font-bold group-hover:underline">
                bruwis.com →
              </span>
            </a>

            {/* Kindr */}
            <div className="bg-warm-white rounded-2xl p-8 border border-[#E8E4DF] opacity-75">
              <div className="w-10 h-10 rounded-lg bg-[#D4CFC9] mb-6 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21C12 21 4 14 4 8a8 8 0 0116 0c0 6-8 13-8 13z" stroke="#6B7280" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="inline-block bg-[#F3F0EC] text-slate-brand font-dm text-xs font-bold px-2.5 py-1 rounded-full mb-4 uppercase tracking-wide">
                In Development
              </div>
              <h3 className="font-fraunces text-near-black text-xl font-bold mb-3">Kindr</h3>
              <p className="font-dm text-slate-brand text-sm leading-relaxed mb-6">
                Be the difference. Track the proof. A platform for communities and organizations that measure what matters — kindness, impact, accountability.
              </p>
              <span className="font-dm text-slate-brand text-sm font-medium">
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder strip */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Photo placeholder */}
          <div className="relative flex-shrink-0"><div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-[#E8E4DF] relative"><Image src="/jimik-founder.jpg" alt="Jimik Ligon" fill className="object-cover object-top" priority /></div><div className="absolute -bottom-2 -right-2 w-5 h-5 bg-terracotta rounded-full border-2 border-warm-white" /></div>
          <div>
            <p className="font-fraunces text-near-black text-xl md:text-2xl font-bold mb-2">
              Built by Jimik Ligon. Orlando, FL.
            </p>
            <p className="font-dm text-slate-brand text-base leading-relaxed max-w-lg">
              Ten years in luxury kitchens. One operating system built to make everything else run. Meek is not a weakness — it&apos;s the discipline to build something that lasts.
            </p>
            <Link
              href="/about"
              className="inline-block mt-5 font-dm text-terracotta text-sm font-bold hover:underline"
            >
              Read the story →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-near-black py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-fraunces text-warm-white text-2xl md:text-4xl font-bold mb-4">
            Your business doesn&apos;t need more software.
          </h2>
          <p className="font-dm text-[#9B8069] text-base md:text-lg mb-8 max-w-xl mx-auto">
            It needs AI that actually works the way you do. Merridian builds that for you.
          </p>
          <a
            href="https://merridian.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-terracotta text-warm-white font-dm font-bold text-base px-8 py-4 rounded-lg hover:bg-[#b06340] transition-colors"
          >
            Work with us at Merridian
          </a>
        </div>
      </section>
    </div>
  )
}
