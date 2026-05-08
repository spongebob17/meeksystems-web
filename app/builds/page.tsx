export const metadata = {
  title: 'Builds | Meek Systems',
  description:
    'Three platforms built for operators who need implementation, not advice. Merridian, Bruwis, and Kindr.',
}

export default function BuildsPage() {
  return (
    <div className="bg-warm-white">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-28">
        <span className="inline-block font-dm text-xs font-bold tracking-widest text-terracotta uppercase mb-6">
          Builds
        </span>
        <h1 className="font-fraunces text-near-black text-4xl md:text-5xl font-bold leading-tight mb-4">
          Three platforms. Each one earns its place.
        </h1>
        <p className="font-dm text-slate-brand text-lg leading-relaxed max-w-2xl">
          No feature bloat. No tools built to impress investors. Every build solves a specific problem for a specific operator — and it either works or it goes back.
        </p>
      </section>

      {/* Builds */}
      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-8">

        {/* Merridian */}
        <div className="bg-[#F3F0EC] rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-terracotta text-warm-white font-dm text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-white" />
                Live
              </div>
              <h2 className="font-fraunces text-near-black text-3xl font-bold mb-2">Merridian</h2>
              <p className="font-dm text-slate-brand text-base italic">
                &ldquo;AI that works the way your business does.&rdquo;
              </p>
            </div>
            <a
              href="https://merridian.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-block bg-terracotta text-warm-white font-dm font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#b06340] transition-colors text-center"
            >
              Visit merridian.ai
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-dm text-near-black text-sm">
            <div>
              <p className="font-bold text-xs text-slate-brand uppercase tracking-widest mb-3">What it is</p>
              <p className="leading-relaxed">
                An AI consulting and implementation platform for business operators in logistics, hospitality, and real estate. Not a SaaS product — a custom-built system designed around how each client actually works.
              </p>
            </div>
            <div>
              <p className="font-bold text-xs text-slate-brand uppercase tracking-widest mb-3">Who it&apos;s for</p>
              <p className="leading-relaxed">
                Business owners who know AI matters but don&apos;t know where to start and don&apos;t want to feel stupid asking. Operators who need a partner, not a vendor with a 90-day onboarding process.
              </p>
            </div>
            <div>
              <p className="font-bold text-xs text-slate-brand uppercase tracking-widest mb-3">What it solves</p>
              <p className="leading-relaxed">
                Manual workflows that eat hours every week. Disconnected systems that require five tools to do one job. Operations that scale on headcount instead of infrastructure.
              </p>
            </div>
            <div>
              <p className="font-bold text-xs text-slate-brand uppercase tracking-widest mb-3">How to engage</p>
              <p className="leading-relaxed">
                Book a free 20-minute AI audit at merridian.ai. No pitch — just clarity on where AI fits in your operation and what it would take to build it right.
              </p>
            </div>
          </div>
        </div>

        {/* Bruwis */}
        <div className="bg-[#F3F0EC] rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-terracotta text-warm-white font-dm text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-white" />
                Live
              </div>
              <h2 className="font-fraunces text-near-black text-3xl font-bold mb-2">Bruwis</h2>
              <p className="font-dm text-slate-brand text-base italic">
                &ldquo;Your restaurant. Running smarter.&rdquo;
              </p>
            </div>
            <a
              href="https://bruwis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-block bg-terracotta text-warm-white font-dm font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#b06340] transition-colors text-center"
            >
              Visit bruwis.com
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-dm text-near-black text-sm">
            <div>
              <p className="font-bold text-xs text-slate-brand uppercase tracking-widest mb-3">What it is</p>
              <p className="leading-relaxed">
                An AI-powered restaurant operations platform built by someone who has run professional kitchens. Scheduling, labor cost management, compliance monitoring, HR tools, and email operations — connected in one system.
              </p>
            </div>
            <div>
              <p className="font-bold text-xs text-slate-brand uppercase tracking-widest mb-3">Who it&apos;s for</p>
              <p className="leading-relaxed">
                Independent restaurant owners and GMs who are running on instinct and exhaustion. Not chains. Not franchises. The people who are everywhere at once and need a system that makes the decisions obvious.
              </p>
            </div>
            <div>
              <p className="font-bold text-xs text-slate-brand uppercase tracking-widest mb-3">What it solves</p>
              <p className="leading-relaxed">
                Scheduling violations that cost $400/month in fines and avoidable overtime. Staff turnover from inconsistent communication. Manual HR and onboarding that falls apart when the manager is on the floor.
              </p>
            </div>
            <div>
              <p className="font-bold text-xs text-slate-brand uppercase tracking-widest mb-3">Status</p>
              <p className="leading-relaxed">
                Live and in early access. The first restaurants using Bruwis are in Central Florida. The waitlist is open.
              </p>
            </div>
          </div>
        </div>

        {/* Kindr */}
        <div className="bg-[#F3F0EC] rounded-2xl p-8 md:p-12 opacity-75">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#D4CFC9] text-slate-brand font-dm text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-brand" />
                In Development
              </div>
              <h2 className="font-fraunces text-near-black text-3xl font-bold mb-2">Kindr</h2>
              <p className="font-dm text-slate-brand text-base italic">
                &ldquo;Be the difference. Track the proof.&rdquo;
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-dm text-near-black text-sm">
            <div>
              <p className="font-bold text-xs text-slate-brand uppercase tracking-widest mb-3">What it is</p>
              <p className="leading-relaxed">
                A platform for communities, mentors, and organizations that do good and need the proof to show for it. Kindness is measurable. Kindr builds the infrastructure to measure it.
              </p>
            </div>
            <div>
              <p className="font-bold text-xs text-slate-brand uppercase tracking-widest mb-3">Who it&apos;s for</p>
              <p className="leading-relaxed">
                Mentors, youth organizations, community programs, and accountability-focused teams who want to make impact visible — not for optics, but because what gets measured gets repeated.
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="font-bold text-xs text-slate-brand uppercase tracking-widest mb-3">Status</p>
              <p className="leading-relaxed">
                In development. No launch date announced. Kindr will ship when it&apos;s ready — not when it&apos;s good enough to demo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
