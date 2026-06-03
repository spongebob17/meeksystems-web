export default function Footer() {
  return (
    <footer className="border-t border-[rgba(26,26,26,0.10)] bg-warm-white">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-dm text-[12px] text-slate-brand">
          &copy; {new Date().getFullYear()} Meek Systems LLC
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="https://merridian.ai" target="_blank" rel="noopener noreferrer" className="font-dm text-[12px] text-slate-brand hover:text-near-black transition-colors">Merridian</a>
          <a href="https://bruwis.com" target="_blank" rel="noopener noreferrer" className="font-dm text-[12px] text-slate-brand hover:text-near-black transition-colors">Bruwis</a>
          <a href="https://ascendscholar.co" target="_blank" rel="noopener noreferrer" className="font-dm text-[12px] text-slate-brand hover:text-near-black transition-colors">Ascend Scholar</a>
          <span className="font-dm text-[12px] text-[rgba(107,114,128,0.5)]">Kindr</span>
        </div>
      </div>
    </footer>
  )
}
