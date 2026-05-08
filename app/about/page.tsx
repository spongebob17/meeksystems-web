import Link from 'next/link'

export const metadata = {
  title: 'About | Meek Systems',
  description:
    "Ten years in luxury kitchens. One company built to make everything else run. The story behind Meek Systems and why it exists.",
}

export default function AboutPage() {
  return (
    <div className="bg-warm-white">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-28">
        <span className="inline-block font-dm text-xs font-bold tracking-widest text-terracotta uppercase mb-6">
          About
        </span>
        <h1 className="font-fraunces text-near-black text-4xl md:text-6xl font-bold leading-tight mb-6">
          Meek don&apos;t mean weak.
        </h1>
        <p className="font-dm text-slate-brand text-lg leading-relaxed max-w-2xl">
          The name is a reclamation. Meek is not timid. It&apos;s the discipline of someone who doesn&apos;t need to announce themselves before they deliver.
        </p>
      </section>

      {/* Photo placeholder */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="w-full aspect-[16/7] bg-[#E8E4DF] rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#D4CFC9] mx-auto mb-3 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="#9B8069" strokeWidth="2"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#9B8069" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="font-dm text-slate-brand text-sm">Jimik Ligon · Founder, Meek Systems</p>
          </div>
        </div>
      </div>

      {/* Story sections */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Main content */}
          <div className="md:col-span-8 space-y-16">

            {/* Section 1 — The Kitchen */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center">
                  <span className="font-dm text-warm-white text-xs font-bold">01</span>
                </div>
                <h2 className="font-fraunces text-near-black text-2xl font-bold">The Kitchen</h2>
              </div>
              <div className="space-y-4 font-dm text-near-black text-base leading-relaxed">
                <p>
                  For ten years, Jimik Ligon ran professional kitchens. Waldorf Astoria. Signia Hilton. Walt Disney World. The kind of operations where every second is tracked and every dollar shows up in the numbers.
                </p>
                <p>
                  He learned what most operators never get taught in business school: systems are not a luxury. They are how things actually work. Not best practices. Not frameworks. The invisible infrastructure that makes 300 covers look effortless from the dining room.
                </p>
                <p>
                  He also learned that the people who build the best products — who show up the longest, who solve the hardest problems — rarely look like what the room expects. That observation became the company.
                </p>
              </div>
            </div>

            {/* Section 2 — The Build */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center">
                  <span className="font-dm text-warm-white text-xs font-bold">02</span>
                </div>
                <h2 className="font-fraunces text-near-black text-2xl font-bold">The Build</h2>
              </div>
              <div className="space-y-4 font-dm text-near-black text-base leading-relaxed">
                <p>
                  Meek Systems exists because most AI tools are built for people who don&apos;t actually run businesses. They&apos;re built for demos. They look good in a pitch deck and fall apart on a Tuesday when three staff call out and the system can&apos;t adapt.
                </p>
                <p>
                  Jimik started building Meek Systems while working full kitchen shifts. Not as a side project — as the thing that had to get built. Merridian is the AI consulting arm. Bruwis is the restaurant ops platform. Kindr is the community impact layer. Each one is a real system solving a real problem.
                </p>
                <p>
                  The 22-agent AI team that runs Meek Systems operations internally? That&apos;s the prototype. Every system we sell has already run inside this company first.
                </p>
              </div>
            </div>

            {/* Section 3 — The Name */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center">
                  <span className="font-dm text-warm-white text-xs font-bold">03</span>
                </div>
                <h2 className="font-fraunces text-near-black text-2xl font-bold">The Name</h2>
              </div>
              <div className="space-y-4 font-dm text-near-black text-base leading-relaxed">
                <p>
                  Meek is a reclamation. It&apos;s the quality that gets mistaken for softness until the results show up. Strategic. Quiet. Precise. The kind of person who doesn&apos;t need to be the loudest voice in the room because their work walks in ahead of them.
                </p>
                <p>
                  The seedling in the logo is deliberate. Not a lightning bolt, not a rocket, not an infinity symbol. A seedling. Something that starts small, builds roots, and eventually holds weight that looks impossible from the outside.
                </p>
                <p>
                  That&apos;s the operating model. Not a sprint. A system that compounds.
                </p>
              </div>
            </div>

            {/* Section 4 — The Mission */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center">
                  <span className="font-dm text-warm-white text-xs font-bold">04</span>
                </div>
                <h2 className="font-fraunces text-near-black text-2xl font-bold">The Mission</h2>
              </div>
              <div className="space-y-4 font-dm text-near-black text-base leading-relaxed">
                <p>
                  Meek Systems builds AI infrastructure for operators who need implementation, not advice. Not another webinar. Not a 90-page strategy doc. A system that runs.
                </p>
                <p>
                  The restaurant owner losing $400 a month to scheduling violations doesn&apos;t have time for a roadmap. The logistics company with five people doing manual data entry for six hours a day doesn&apos;t need a thought leadership piece on digital transformation. They need it fixed.
                </p>
                <p>
                  That&apos;s what we do. We build the thing that runs.
                </p>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="md:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-[#F3F0EC] rounded-2xl p-6">
                <p className="font-fraunces text-near-black text-lg font-bold mb-2">
                  &ldquo;Systems before tasks.&rdquo;
                </p>
                <p className="font-dm text-slate-brand text-sm leading-relaxed">
                  Every decision gets evaluated through: does this create leverage, or does this just create more work?
                </p>
              </div>

              <div className="bg-[#F3F0EC] rounded-2xl p-6">
                <p className="font-dm text-slate-brand text-xs font-bold uppercase tracking-widest mb-3">
                  Background
                </p>
                <ul className="space-y-2 font-dm text-near-black text-sm">
                  <li>Waldorf Astoria — Orlando</li>
                  <li>Signia Hilton — Orlando</li>
                  <li>Walt Disney World</li>
                  <li>Penn State NSO Leadership</li>
                </ul>
              </div>

              <div className="bg-[#F3F0EC] rounded-2xl p-6">
                <p className="font-dm text-slate-brand text-xs font-bold uppercase tracking-widest mb-3">
                  Building
                </p>
                <ul className="space-y-2 font-dm text-near-black text-sm">
                  <li>
                    <a href="https://merridian.ai" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">
                      Merridian AI →
                    </a>
                  </li>
                  <li>
                    <a href="https://bruwis.com" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">
                      Bruwis →
                    </a>
                  </li>
                  <li className="text-slate-brand">Kindr (in development)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-[#E8E4DF]">
          <p className="font-fraunces text-near-black text-xl md:text-2xl font-bold mb-6">
            See what we&apos;re building.
          </p>
          <Link
            href="/builds"
            className="inline-block bg-terracotta text-warm-white font-dm font-bold text-base px-7 py-3.5 rounded-lg hover:bg-[#b06340] transition-colors"
          >
            View the builds →
          </Link>
        </div>
      </div>
    </div>
  )
}
