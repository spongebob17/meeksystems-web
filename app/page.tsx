'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { agents, boardMembers, departments } from '@/lib/agents'

type Priority = 'NORMAL' | 'HIGH' | 'LOW'

type TaskEntry = {
  id: string
  agent: string
  task: string
  time: string
  filename?: string
  status: 'pending' | 'sent' | 'error'
  error?: string
}

type NewsItem = {
  title: string
  source: string
  date: string
  url: string
}

type EventItem = {
  title: string
  date: string
  location: string
  type: string
  description: string
}

const STORAGE_KEY = 'cc-tasks-v3'
const PRIORITIES: Priority[] = ['NORMAL', 'HIGH', 'LOW']

function loadTasks(): TaskEntry[] {
  if (typeof window === 'undefined') return []
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') } catch { return [] }
}
function saveTasks(tasks: TaskEntry[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.slice(0, 100)))
}

function parseJSON(raw: string): unknown[] {
  try {
    const clean = raw.replace(/```json|```/g, '').trim()
    const start = clean.indexOf('[')
    const end = clean.lastIndexOf(']')
    if (start === -1 || end === -1) return []
    return JSON.parse(clean.slice(start, end + 1))
  } catch { return [] }
}

async function fetchIntel(prompt: string): Promise<string> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }],
      messages: [{ role: 'user', content: prompt }],
    }),
  })
  const data = await res.json()
  return (data.content as { type: string; text?: string }[])
    .filter((b) => b.type === 'text')
    .map((b) => b.text ?? '')
    .join('\n')
}

type Metrics = { activeTasks: number; pendingApprovals: number; completedToday: number }
type Health = { ok: boolean; latency: number; uptime: string }

export default function DashboardPage() {
  const [selectedAgent, setSelectedAgent] = useState('Vinnie')
  const [taskText, setTaskText] = useState('')
  const [priority, setPriority] = useState<Priority>('NORMAL')
  const [tasks, setTasks] = useState<TaskEntry[]>([])
  const [loading, setLoading] = useState(false)
  const [metrics, setMetrics] = useState<Metrics | null>(null)
  const [health, setHealth] = useState<Health | null>(null)
  const [activeTab, setActiveTab] = useState<'agents' | 'board' | 'feed'>('agents')
  const [openDept, setOpenDept] = useState<string | null>(null)

  // Intel Feed state
  const [news, setNews] = useState<NewsItem[]>([])
  const [events, setEvents] = useState<EventItem[]>([])
  const [newsLoading, setNewsLoading] = useState(false)
  const [eventsLoading, setEventsLoading] = useState(false)
  const [newsError, setNewsError] = useState<string | null>(null)
  const [eventsError, setEventsError] = useState<string | null>(null)
  const [intelLastRefreshed, setIntelLastRefreshed] = useState<string | null>(null)
  const [intelLoaded, setIntelLoaded] = useState(false)
  const [feedSubTab, setFeedSubTab] = useState<'intel' | 'activity'>('intel')

  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setTasks(loadTasks())
    loadMetrics()
    loadHealth()
    const interval = setInterval(loadMetrics, 30000)
    return () => clearInterval(interval)
  }, [])

  // Auto-load intel when feed tab is opened for the first time
  useEffect(() => {
    if (activeTab === 'feed' && !intelLoaded) {
      loadIntel()
    }
  }, [activeTab])

  async function loadMetrics() {
    try {
      const res = await fetch('/api/metrics')
      if (res.ok) setMetrics(await res.json())
    } catch {}
  }

  async function loadHealth() {
    try {
      const res = await fetch('/api/health')
      if (res.ok) setHealth(await res.json())
    } catch { setHealth({ ok: false, latency: -1, uptime: 'unreachable' }) }
  }

  async function loadIntel() {
    setIntelLoaded(true)
    setNewsLoading(true)
    setEventsLoading(true)
    setNewsError(null)
    setEventsError(null)

    // Load news
    fetchIntel(
      `Search the web for the top 5 business, entrepreneurship, and AI news stories from the past 24–48 hours. 
      Return ONLY a JSON array, no explanation, no markdown fences. Each item: 
      { "title": string, "source": string, "date": string, "url": string }
      Focus on: AI tools, startup funding, business strategy, creator economy. Real article titles only.`
    ).then((raw) => {
      const parsed = parseJSON(raw) as NewsItem[]
      if (parsed.length === 0) setNewsError('No results returned.')
      else setNews(parsed)
    }).catch(() => setNewsError('Failed to load news.')).finally(() => setNewsLoading(false))

    // Load events
    fetchIntel(
      `Search the web for upcoming entrepreneurship, AI, startup, and business networking events in Orlando or Central Florida in the next 30–60 days.
      Return ONLY a JSON array, no explanation, no markdown fences. Each item:
      { "title": string, "date": string, "location": string, "type": string, "description": string }
      Type must be one of: Networking, Workshop, Conference, Meetup, Webinar.
      Include real verifiable events. If local events are sparse, include virtual events open to FL attendees.`
    ).then((raw) => {
      const parsed = parseJSON(raw) as EventItem[]
      if (parsed.length === 0) setEventsError('No events found.')
      else setEvents(parsed)
    }).catch(() => setEventsError('Failed to load events.')).finally(() => {
      setEventsLoading(false)
      setIntelLastRefreshed(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    })
  }

  function refreshIntel() {
    setNews([])
    setEvents([])
    setIntelLoaded(false)
    setTimeout(() => loadIntel(), 0)
  }

  const updateTasks = useCallback((updated: TaskEntry[]) => {
    setTasks(updated)
    saveTasks(updated)
  }, [])

  function buildHandoffSummary(): string {
    const now = new Date()
    const lines = [
      `---`,
      `## Session Handoff — ${now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`,
      `**Time:** ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
      `**Source:** Command Center v3`,
      ``,
      `### Tasks Dispatched This Session`,
    ]
    if (tasks.length === 0) { lines.push('No tasks dispatched.') } else {
      tasks.forEach((t) => {
        const mark = t.status === 'sent' ? '✓' : t.status === 'error' ? '✗' : '…'
        lines.push(`- [${mark}] **${t.agent}** (${t.time}): ${t.task}`)
        if (t.filename) lines.push(`  File: \`${t.filename}\``)
      })
    }
    lines.push(``, `### Next Steps`, `_Review dispatched tasks and confirm execution on server._`)
    return lines.join('\n')
  }

  async function submitCommand() {
    const text = taskText.trim()
    if (!text || loading) return

    const cmd = text.toLowerCase()

    if (cmd === 'clear') { updateTasks([]); setTaskText(''); return }

    if (cmd === 'handoff') {
      setTaskText(''); setLoading(true); setActiveTab('feed'); setFeedSubTab('activity')
      const summary = buildHandoffSummary()
      const entry: TaskEntry = {
        id: String(Date.now()), agent: 'SYSTEM',
        task: 'Session handoff — writing to _session-log.md',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'pending',
      }
      const optimistic = [entry, ...tasks]
      updateTasks(optimistic)
      try {
        const res = await fetch('/api/handoff', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ summary }) })
        const data: { ok?: boolean; error?: string } = await res.json()
        updateTasks(optimistic.map((t) => t.id === entry.id ? { ...t, status: res.ok ? 'sent' : 'error', error: data.error } : t))
      } catch {
        updateTasks(optimistic.map((t) => t.id === entry.id ? { ...t, status: 'error', error: 'Network error' } : t))
      } finally { setLoading(false) }
      return
    }

    const entry: TaskEntry = {
      id: String(Date.now()), agent: selectedAgent, task: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'pending',
    }
    const optimistic = [entry, ...tasks]
    updateTasks(optimistic)
    setTaskText(''); setLoading(true); setActiveTab('feed'); setFeedSubTab('activity')

    try {
      const res = await fetch('/api/command', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ agent: selectedAgent, task: text, priority }) })
      const data: { ok?: boolean; filename?: string; error?: string } = await res.json()
      updateTasks(optimistic.map((t) => t.id === entry.id ? { ...t, status: res.ok ? 'sent' : 'error', filename: data.filename, error: data.error } : t))
      loadMetrics()
    } catch {
      updateTasks(optimistic.map((t) => t.id === entry.id ? { ...t, status: 'error', error: 'Network error' } : t))
    } finally { setLoading(false) }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); submitCommand() }
  }

  const canSubmit = taskText.trim().length > 0 && !loading
  const pendingCount = (metrics?.pendingApprovals ?? 0)

  const SkeletonCard = () => (
    <div className="p-2.5 rounded-lg border border-line bg-card/40 animate-pulse mb-2">
      <div className="h-3 bg-line rounded w-4/5 mb-2" />
      <div className="h-2.5 bg-line rounded w-2/5" />
    </div>
  )

  const typeBadgeColor: Record<string, string> = {
    Networking: 'bg-agent-dim text-agent border-agent/20',
    Workshop: 'bg-terracotta/10 text-terracotta border-terracotta/20',
    Conference: 'bg-gold-dim text-gold border-gold/20',
    Meetup: 'bg-agent-dim text-agent border-agent/20',
    Webinar: 'bg-card text-muted border-line',
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-app-bg">

      {/* ── Header ── */}
      <header className="flex-none flex items-center justify-between px-4 py-3 border-b border-line">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted">Meek Systems</p>
            <h1 className="text-base font-semibold text-primary leading-tight">AI Team HQ</h1>
          </div>
          <div className="flex items-center gap-1.5 ml-2">
            <div className={`w-1.5 h-1.5 rounded-full ${health?.ok ? 'bg-agent' : health === null ? 'bg-muted animate-pulse' : 'bg-danger'}`} />
            <span className="text-[10px] text-muted">
              {health === null ? '—' : health.ok ? `${health.latency}ms` : 'down'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {pendingCount > 0 && (
            <Link href="/approvals" className="flex items-center gap-1 bg-gold-dim border border-gold/30 px-2 py-1 rounded-md">
              <span className="text-[11px] text-gold font-semibold">{pendingCount} pending</span>
            </Link>
          )}
          <Link href="/settings" className="text-muted hover:text-primary transition-colors">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.1 4.1l1.4 1.4M12.5 12.5l1.4 1.4M4.1 13.9l1.4-1.4M12.5 5.5l1.4-1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
      </header>

      {/* ── Metrics row ── */}
      <div className="flex-none grid grid-cols-3 border-b border-line">
        {[
          { label: 'Active Tasks', value: metrics?.activeTasks ?? '—', href: '/history' },
          { label: 'Pending Approval', value: metrics?.pendingApprovals ?? '—', href: '/approvals' },
          { label: 'Done Today', value: metrics?.completedToday ?? '—', href: '/history' },
        ].map((m, i) => (
          <Link key={i} href={m.href} className={`flex flex-col items-center py-2.5 hover:bg-card/50 transition-colors ${i < 2 ? 'border-r border-line' : ''}`}>
            <span className="text-xl font-semibold text-primary">{m.value}</span>
            <span className="text-[10px] text-muted mt-0.5">{m.label}</span>
          </Link>
        ))}
      </div>

      {/* ── Command Bar ── */}
      <div className="flex-none px-3 py-2.5 border-b border-line bg-app-bg">
        <div className="flex gap-2 items-start">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Task for ${selectedAgent}…`}
              rows={2}
              className="w-full bg-card border border-line rounded-lg px-3 py-2 text-sm text-primary placeholder-muted resize-none focus:outline-none focus:border-terracotta/40 transition-colors leading-relaxed"
            />
          </div>
          <button
            onClick={submitCommand}
            disabled={!canSubmit}
            className="flex-none w-11 h-[68px] rounded-lg bg-terracotta hover:bg-[#b36340] disabled:opacity-25 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
          >
            {loading ? (
              <span className="w-3.5 h-3.5 border-2 border-warm-white/20 border-t-warm-white rounded-full animate-spin" />
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12M9 3l5 5-5 5" stroke="#FAF8F5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[10px] text-muted">Priority</span>
          {PRIORITIES.map((p) => {
            const active = priority === p
            return (
              <button key={p} onClick={() => setPriority(p)} className={`text-[10px] px-1.5 py-0.5 rounded border transition-colors ${
                active
                  ? p === 'HIGH' ? 'bg-danger/10 text-danger border-danger/30'
                  : p === 'LOW' ? 'bg-agent-dim text-agent border-agent/30'
                  : 'bg-terracotta/10 text-terracotta border-terracotta/30'
                  : 'border-transparent text-muted hover:text-primary'
              }`}>{p}</button>
            )
          })}
          <div className="ml-auto flex gap-2">
            <button onClick={() => { setTaskText('handoff'); setTimeout(submitCommand, 0) }} className="text-[10px] text-muted hover:text-primary transition-colors">Handoff</button>
            <button onClick={() => updateTasks([])} className="text-[10px] text-muted hover:text-danger transition-colors">Clear</button>
          </div>
        </div>
      </div>

      {/* ── Mobile tabs ── */}
      <div className="flex-none flex lg:hidden border-b border-line text-[12px]">
        {(['agents', 'board', 'feed'] as const).map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-2.5 capitalize transition-colors ${activeTab === tab ? 'text-terracotta border-b-2 border-terracotta -mb-px' : 'text-muted hover:text-primary'}`}>
            {tab === 'feed' ? 'Intel' : tab}
          </button>
        ))}
      </div>

      {/* ── Panels ── */}
      <div className="flex-1 flex overflow-hidden min-h-0">

        {/* Agents + Departments */}
        <div className={`${activeTab === 'agents' ? 'flex' : 'hidden'} lg:flex flex-col lg:w-[300px] lg:border-r border-line overflow-y-auto`}>
          <div className="p-3">
            <p className="text-[10px] text-muted uppercase tracking-wider mb-2">Agents</p>
            <div className="grid grid-cols-3 gap-1.5">
              {agents.map((agent) => {
                const isSelected = selectedAgent === agent.name
                return (
                  <Link key={agent.id} href={`/agent/${agent.id}`}
                    onClick={(e) => { e.preventDefault(); setSelectedAgent(agent.name); inputRef.current?.focus() }}
                    className={`p-2 rounded-lg border text-left transition-all ${isSelected ? 'border-terracotta/50 bg-terracotta/10' : 'border-line hover:border-line/80 hover:bg-card'}`}
                  >
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold mb-1 ${isSelected ? 'bg-terracotta text-warm-white' : 'bg-card text-muted'}`}>
                      {agent.emoji}
                    </div>
                    <p className={`text-[11px] font-medium leading-tight truncate ${isSelected ? 'text-primary' : 'text-primary/80'}`}>{agent.name}</p>
                    <p className="text-[9px] text-muted leading-tight">{agent.role}</p>
                  </Link>
                )
              })}
            </div>

            <p className="text-[10px] text-muted uppercase tracking-wider mt-4 mb-2">Departments</p>
            <div className="grid grid-cols-2 gap-1.5">
              {departments.map((dept) => (
                <div key={dept.name}>
                  <button onClick={() => setOpenDept(openDept === dept.name ? null : dept.name)}
                    className="w-full p-2 rounded-lg border border-line hover:bg-card text-left transition-all"
                  >
                    <p className="text-[11px] font-medium text-primary">{dept.name}</p>
                    <p className="text-[9px] text-muted">Lead: {dept.lead}</p>
                  </button>
                  {openDept === dept.name && (
                    <div className="mt-1 p-2 rounded-lg bg-card border border-line">
                      {dept.agents.map((name) => {
                        const a = agents.find((x) => x.name === name)
                        return (
                          <div key={name} className="flex items-center gap-2 py-1">
                            <span>{a?.emoji}</span>
                            <span className="text-[11px] text-primary">{name}</span>
                            {a?.isLead && <span className="text-[9px] bg-gold-dim text-gold px-1 rounded">LEAD</span>}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Board */}
        <div className={`${activeTab === 'board' ? 'flex' : 'hidden'} lg:flex flex-col lg:w-[220px] lg:border-r border-line overflow-y-auto`}>
          <div className="p-3">
            <p className="text-[10px] text-muted uppercase tracking-wider mb-0.5">Board</p>
            <p className="text-[9px] text-muted/60 mb-3">Strategic decisions only</p>
            <div className="space-y-1.5">
              {boardMembers.map((member) => (
                <Link key={member.name} href="/board" className="block p-2.5 rounded-lg border border-line hover:border-gold/20 hover:bg-gold-dim/30 text-left transition-all group">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{member.emoji}</span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <p className="text-[12px] font-medium text-primary truncate">{member.name}</p>
                        {member.isChair && <span className="text-[8px] bg-gold-dim text-gold px-1 rounded flex-none">CHAIR</span>}
                      </div>
                      <p className="text-[9px] text-muted leading-tight truncate">{member.focus}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 space-y-1.5">
              <Link href="/board" className="flex items-center gap-2 p-2 rounded-lg bg-gold-dim border border-gold/20 hover:bg-gold-dim/80 transition-colors">
                <span className="text-sm">🏛️</span>
                <span className="text-[11px] text-gold font-medium">Board Session</span>
              </Link>
              <Link href="/meeting" className="flex items-center gap-2 p-2 rounded-lg bg-agent-dim border border-agent/20 hover:bg-agent-dim/80 transition-colors">
                <span className="text-sm">🤝</span>
                <span className="text-[11px] text-agent font-medium">Team Meeting</span>
              </Link>
              <Link href="/intervention" className="flex items-center gap-2 p-2 rounded-lg bg-danger-dim border border-danger/20 hover:bg-danger-dim/80 transition-colors">
                <span className="text-sm">⚡</span>
                <span className="text-[11px] text-danger font-medium">Intervention</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Intel Feed Panel ── */}
        <div className={`${activeTab === 'feed' ? 'flex' : 'hidden'} lg:flex flex-1 flex-col overflow-hidden min-w-0`}>

          {/* Intel panel header */}
          <div className="flex-none flex items-center justify-between px-3 pt-3 pb-2 border-b border-line">
            <div className="flex items-center gap-3">
              {/* Sub-tabs: Intel / Activity */}
              <button
                onClick={() => setFeedSubTab('intel')}
                className={`text-[11px] font-medium pb-1 border-b-2 transition-colors ${feedSubTab === 'intel' ? 'text-terracotta border-terracotta' : 'text-muted border-transparent hover:text-primary'}`}
              >
                Intel Feed
              </button>
              <button
                onClick={() => setFeedSubTab('activity')}
                className={`text-[11px] font-medium pb-1 border-b-2 transition-colors ${feedSubTab === 'activity' ? 'text-terracotta border-terracotta' : 'text-muted border-transparent hover:text-primary'}`}
              >
                Activity{tasks.length > 0 ? ` (${tasks.length})` : ''}
              </button>
            </div>
            {feedSubTab === 'intel' && (
              <div className="flex items-center gap-2">
                {intelLastRefreshed && (
                  <span className="text-[9px] text-muted/50">{intelLastRefreshed}</span>
                )}
                <button
                  onClick={refreshIntel}
                  disabled={newsLoading || eventsLoading}
                  className="text-[10px] text-terracotta border border-terracotta/30 px-2 py-0.5 rounded-md hover:bg-terracotta/10 disabled:opacity-40 transition-colors"
                >
                  ↻ Refresh
                </button>
              </div>
            )}
            {feedSubTab === 'activity' && tasks.length > 0 && (
              <button onClick={() => updateTasks([])} className="text-[10px] text-muted/60 hover:text-danger transition-colors">Clear</button>
            )}
          </div>

          {/* ── Intel sub-tab ── */}
          {feedSubTab === 'intel' && (
            <div className="flex-1 overflow-y-auto">
              <div className="p-3 space-y-4">

                {/* News section */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                    <p className="text-[10px] text-muted uppercase tracking-wider">Top Stories</p>
                  </div>
                  {newsLoading ? (
                    <>{[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}</>
                  ) : newsError ? (
                    <div className="p-2.5 rounded-lg border border-danger/20 bg-danger-dim/20 mb-2">
                      <p className="text-[11px] text-danger/70">{newsError}</p>
                    </div>
                  ) : (
                    news.map((item, i) => (
                      <a key={i} href={item.url || '#'} target="_blank" rel="noreferrer" className="block no-underline mb-2">
                        <div className="p-2.5 rounded-lg border border-line bg-card/40 hover:border-terracotta/30 hover:bg-card transition-all">
                          <p className="text-[12px] text-primary leading-snug mb-1">{item.title}</p>
                          <div className="flex items-center gap-2">
                            {item.source && <span className="text-[10px] text-terracotta font-semibold">{item.source}</span>}
                            {item.date && <span className="text-[10px] text-muted">{item.date}</span>}
                          </div>
                        </div>
                      </a>
                    ))
                  )}
                </div>

                {/* Divider */}
                <div className="border-t border-line" />

                {/* Events section */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-agent flex-shrink-0" />
                    <p className="text-[10px] text-muted uppercase tracking-wider">Orlando · Upcoming Events</p>
                  </div>
                  {eventsLoading ? (
                    <>{[...Array(3)].map((_, i) => <SkeletonCard key={i} />)}</>
                  ) : eventsError ? (
                    <div className="p-2.5 rounded-lg border border-danger/20 bg-danger-dim/20 mb-2">
                      <p className="text-[11px] text-danger/70">{eventsError}</p>
                    </div>
                  ) : (
                    events.map((item, i) => (
                      <div key={i} className="p-2.5 rounded-lg border border-line bg-card/40 hover:bg-card transition-all mb-2">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <p className="text-[12px] text-primary leading-snug">{item.title}</p>
                          {item.type && (
                            <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded border flex-shrink-0 ${typeBadgeColor[item.type] ?? 'bg-card text-muted border-line'}`}>
                              {item.type}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          {item.date && <span className="text-[10px] text-terracotta font-semibold">{item.date}</span>}
                          {item.location && <span className="text-[10px] text-muted">📍 {item.location}</span>}
                        </div>
                        {item.description && (
                          <p className="text-[11px] text-muted/70 mt-1 leading-snug">{item.description}</p>
                        )}
                      </div>
                    ))
                  )}
                </div>

              </div>
            </div>
          )}

          {/* ── Activity sub-tab ── */}
          {feedSubTab === 'activity' && (
            <div className="flex-1 overflow-y-auto">
              <div className="p-3">
                {tasks.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center mb-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3v5l3 3" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="8" cy="8" r="6" stroke="#555" strokeWidth="1.2" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted">No tasks yet.</p>
                    <p className="text-[11px] text-muted/50 mt-1">Commands appear here as you dispatch.</p>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    {tasks.map((entry) => (
                      <div key={entry.id} className={`p-2.5 rounded-lg border ${
                        entry.status === 'sent' ? 'border-agent/20 bg-agent-dim/30'
                        : entry.status === 'error' ? 'border-danger/20 bg-danger-dim/30'
                        : 'border-line bg-card/40'
                      }`}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className={`text-[11px] font-semibold ${entry.agent === 'SYSTEM' ? 'text-muted' : 'text-terracotta'}`}>{entry.agent}</span>
                            <span className={`text-[9px] px-1.5 py-px rounded ${
                              entry.status === 'sent' ? 'bg-agent/10 text-agent'
                              : entry.status === 'error' ? 'bg-danger/10 text-danger'
                              : 'bg-card text-muted'
                            }`}>
                              {entry.status === 'sent' ? '✓ sent' : entry.status === 'error' ? '✗ failed' : '…'}
                            </span>
                          </div>
                          <span className="text-[10px] text-muted/50">{entry.time}</span>
                        </div>
                        <p className="text-[12px] text-primary/80 leading-snug">{entry.task}</p>
                        {entry.filename && <p className="text-[9px] text-muted/50 mt-1 font-mono">{entry.filename}</p>}
                        {entry.error && <p className="text-[10px] text-danger/70 mt-1">{entry.error}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* ── Bottom Nav (mobile) ── */}
      <nav className="flex-none lg:hidden flex border-t border-line bg-app-bg">
        {[
          { href: '/command', icon: '⚡', label: 'Home' },
          { href: '/approvals', icon: '✓', label: 'Approvals', badge: pendingCount },
          { href: '/history', icon: '📋', label: 'History' },
          { href: '/settings', icon: '⚙️', label: 'Settings' },
        ].map((item) => (
          <Link key={item.href} href={item.href} className="flex-1 flex flex-col items-center py-2 text-muted hover:text-primary transition-colors relative">
            <span className="text-base">{item.icon}</span>
            <span className="text-[9px] mt-0.5">{item.label}</span>
            {item.badge ? (
              <span className="absolute top-1 right-1/4 w-3.5 h-3.5 rounded-full bg-gold text-[8px] text-near-black font-bold flex items-center justify-center">{item.badge}</span>
            ) : null}
          </Link>
        ))}
      </nav>
    </div>
  )
}
