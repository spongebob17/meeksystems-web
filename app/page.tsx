import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-warm-white">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <span className="block font-dm text-[11px] font-bold tracking-widest text-slate-brand uppercase mb-8">
          Orlando, FL
        </span>
        <h1 className="font-fraunces font-[200] text-near-black text-[46px] leading-tight mb-8">
          People first.<br />
          <span className="text-terracotta italic">Systems</span> that follow.
        </h1>
        <p className="font-dm text-[15px] text-slate-brand leading-relaxed mb-4 max-w-xl">
          Three AI platforms built because real people have real problems and deserve real tools.
        </p>
        <p className="font-dm text-[15px] text-slate-brand leading-relaxed mb-10 max-w-xl">
          Not built to flip. Not built to impress anyone. Built because it needed to exist and someone had to build it.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://merridian.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-near-black text-warm-white font-dm text-sm font-medium px-6 py-3 hover:bg-[#2a2a2a] transition-colors"
          >
            Work with us
          </a>
          <Link
            href="/builds"
            className="font-dm text-sm text-near-black underline underline-offset-4 hover:text-terracotta transition-colors"
          >
            See the builds
          </Link>
        </div>
      </section>

      {/* Builds section */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <span className="block font-dm text-[11px] font-bold tracking-widest text-terracotta uppercase mb-5">
          What we build
        </span>
        <h2 className="font-fraunces font-[300] text-near-black text-2xl md:text-3xl mb-12">
          Three platforms. One operating system behind them.
        </h2>

        <div className="border-t border-[rgba(26,26,26,0.10)]">

          {/* Merridian */}
          <div className="flex items-center gap-5 py-5 border-b border-[rgba(26,26,26,0.10)]">
            <div className="flex-shrink-0 w-10 h-[36px] flex items-center justify-center">
              <img src="/logos/merridian.png" alt="Merridian" style={{height: '36px', width: 'auto', objectFit: 'contain'}} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-fraunces text-[19px] text-near-black leading-snug">Merridian</p>
              <p className="font-dm text-[13px] text-slate-brand mt-0.5 leading-relaxed">
                AI consulting and custom agent systems. For operators who need it built, not explained.
              </p>
            </div>
            <span className="flex-shrink-0 font-dm text-[11px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
              Live
            </span>
          </div>

          {/* Bruwis */}
          <div className="flex items-center gap-5 py-5 border-b border-[rgba(26,26,26,0.10)]">
            <div className="flex-shrink-0 w-10 h-[36px] flex items-center justify-center">
              <img src="/logos/bruwis.png" alt="Bruwis" style={{height: '36px', width: 'auto', objectFit: 'contain'}} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-fraunces text-[19px] text-near-black leading-snug">Bruwis</p>
              <p className="font-dm text-[13px] text-slate-brand mt-0.5 leading-relaxed">
                Restaurant operations built by someone who has worked the line. Scheduling, HR, insights in one place.
              </p>
            </div>
            <span className="flex-shrink-0 font-dm text-[11px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
              Live
            </span>
          </div>

          {/* Ascend Scholar */}
          <div className="flex items-center gap-5 py-5 border-b border-[rgba(26,26,26,0.10)]">
            <div className="flex-shrink-0 w-10 h-[36px] flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="4" fill="#1A1A1A"/>
                <text x="18" y="25" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fontWeight="700" fill="#C4714A">A</text>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-fraunces text-[19px] text-near-black leading-snug">Ascend Scholar</p>
              <p className="font-dm text-[13px] text-slate-brand mt-0.5 leading-relaxed">
                AI scholarship navigator for first-generation students. The money exists. We help you find it.
              </p>
            </div>
            <span className="flex-shrink-0 font-dm text-[11px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
              Live
            </span>
          </div>

          {/* Kindr */}
          <div className="flex items-center gap-5 py-5 border-b border-[rgba(26,26,26,0.10)]">
            <div className="flex-shrink-0 w-10 h-[36px] flex items-center justify-center" style={{background: '#1A1A1A', borderRadius: '4px', padding: '4px'}}>
              <img src="/logos/kindr.png" alt="Kindr" style={{height: '28px', width: 'auto', objectFit: 'contain'}} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-fraunces text-[19px] text-near-black leading-snug">Kindr</p>
              <p className="font-dm text-[13px] text-slate-brand mt-0.5 leading-relaxed">
                Human connection platform. Coming after Ascend launches.
              </p>
            </div>
            <span className="flex-shrink-0 font-dm text-[11px] font-bold text-slate-brand bg-[#F3F0EC] px-2.5 py-1 rounded-full uppercase tracking-wide">
              Soon
            </span>
          </div>

        </div>
      </section>

      {/* Founder section */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-[88px_1fr] gap-8 items-start">

          <div className="flex-shrink-0">
            <div className="w-[88px] h-[88px] rounded-lg overflow-hidden bg-[#E3DFD8] flex items-center justify-center relative">
              <Image
                src="/jimik-founder.jpg"
                alt="Jimik Ligon"
                fill
                className="object-cover object-[center_20%]"
                priority
              />
            </div>
          </div>

          <div>
            <span className="block font-dm text-[11px] font-bold tracking-widest text-terracotta uppercase mb-3">
              The founder
            </span>
            <p className="font-fraunces font-[300] text-near-black text-[26px] leading-snug mb-5">
              Jimik Ligon
            </p>

            <p className="font-dm text-[15px] text-slate-brand leading-relaxed mb-4 max-w-xl">
              Grew up in Philadelphia. Spent a decade in professional kitchens at some of the best properties in the country. Navigates ADHD every day and builds systems around it because he had no other option.
            </p>

            <p className="font-dm text-[15px] text-slate-brand leading-relaxed mb-6 max-w-xl">
              Came home after a shift one night, opened a laptop, and started building AI companies. Not for the money. For the people who needed it.
            </p>

            <blockquote className="border-t border-b border-[rgba(26,26,26,0.10)] py-5 my-6 max-w-xl">
              <p className="font-fraunces font-[200] italic text-[17px] text-near-black leading-relaxed">
                The only operation that lasts is one built on something real.
              </p>
            </blockquote>

            <p className="font-dm text-[15px] text-slate-brand leading-relaxed mb-5 max-w-xl">
              Building for family. Building for the people the industry keeps overlooking. Building because it matters more than the outcome.
            </p>

            <Link
              href="/about"
              className="font-dm text-sm text-near-black underline underline-offset-4 hover:text-terracotta transition-colors block mb-6"
            >
              Read the full story
            </Link>

            <p className="font-fraunces italic text-[12px] text-[rgba(26,26,26,0.45)]">
              Ten years in the kitchen. Every system built after the shift ended.
            </p>
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-near-black py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-fraunces font-[300] text-warm-white text-[21px] leading-snug mb-4 max-w-2xl">
            Your business does not need more software. It needs AI that works the way you do.
          </p>
          <p className="font-dm text-[13px] text-slate-brand leading-relaxed mb-8 max-w-lg">
            Merridian builds that for you. No pitch decks. No strategy you already know. Just the system, built and running.
          </p>
          <a
            href="https://merridian.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-warm-white text-near-black font-dm text-sm font-medium px-6 py-3 hover:bg-[#ede9e5] transition-colors"
          >
            Work with us at Merridian
          </a>
        </div>
      </section>

    </div>
  )
}
