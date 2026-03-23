import { useEffect, useRef, useState } from 'react'

const PROMPTS = [
  'Sistema de Prompts',
  'Templates de Grid',
  'Scripts de Vídeo',
]

const FEED_LINES = [
  '> Abrindo Arsenal WebApp...',
  '> 68 prompts carregados.',
  '> Selecionando: Engajamento',
  '> Gerando conteúdo...',
  '> Post pronto em 12s.',
  '> Publicar agora?',
]

export default function Features() {
  const [activeCard, setActiveCard] = useState(0)
  const [feedLine, setFeedLine] = useState(0)
  const [feedText, setFeedText] = useState('')
  const [charIdx, setCharIdx] = useState(0)
  const [activeDay, setActiveDay] = useState(null)
  const sectionRef = useRef(null)

  // Shuffler
  useEffect(() => {
    const t = setInterval(() => setActiveCard(c => (c + 1) % PROMPTS.length), 2800)
    return () => clearInterval(t)
  }, [])

  // Typewriter
  useEffect(() => {
    const line = FEED_LINES[feedLine]
    if (charIdx < line.length) {
      const t = setTimeout(() => setFeedText(line.slice(0, charIdx + 1)), 38)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setFeedLine(f => (f + 1) % FEED_LINES.length)
        setCharIdx(0)
        setFeedText('')
      }, 1000)
      return () => clearTimeout(t)
    }
  }, [charIdx, feedLine])

  useEffect(() => {
    if (feedText.length === FEED_LINES[feedLine].length) return
    setCharIdx(c => c + 1)
  }, [feedText])

  // Scheduler
  const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  useEffect(() => {
    const schedule = [1, 3, 5]
    let i = 0
    const t = setInterval(() => {
      setActiveDay(schedule[i % schedule.length])
      i++
    }, 1500)
    return () => clearInterval(t)
  }, [])

  const cardBase = "bg-[#2A2A35]/40 border border-[#C9A84C]/10 rounded-[2rem] p-8 flex flex-col gap-4 backdrop-blur-sm"

  return (
    <section id="arsenal" className="py-32 px-8 md:px-16 max-w-7xl mx-auto" ref={sectionRef}>
      <div className="mb-16">
        <p className="font-mono text-xs tracking-[0.35em] text-[#C9A84C] uppercase mb-3">O Sistema</p>
        <h2 className="font-sans font-black text-4xl md:text-6xl leading-tight">
          Três Camadas.<br />
          <span className="font-serif italic font-normal text-[#C9A84C]">Um Arsenal.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 — Shuffler */}
        <div className={cardBase}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#C9A84C] pulse-dot" />
            <span className="font-mono text-xs tracking-widest text-ivory/40 uppercase">Módulo Ativo</span>
          </div>
          <div className="relative h-28 overflow-hidden">
            {PROMPTS.map((p, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex items-center transition-all duration-700 ${i === activeCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <span className="font-serif italic text-3xl text-ivory leading-tight">{p}</span>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-ivory/50 leading-relaxed">
            Sistema de prompts com a sua voz. Bot personalizado que entrega conteúdo pronto — sem ajustes, sem tentativa, sem erro.
          </p>
          <span className="font-mono text-xs text-[#C9A84C]/60 tracking-widest mt-auto">Arsenal Starter →</span>
        </div>

        {/* Card 2 — Typewriter */}
        <div className={cardBase}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
            <span className="font-mono text-xs tracking-widest text-ivory/40 uppercase">Live Feed</span>
          </div>
          <div className="bg-obsidian/60 rounded-xl p-4 font-mono text-xs text-emerald-400 min-h-[7rem] flex flex-col justify-center leading-6">
            {feedText}<span className="cursor-blink">▋</span>
          </div>
          <p className="font-sans text-sm text-ivory/50 leading-relaxed">
            68 prompts organizados por objetivo. Engajamento, autoridade, vendas, storytelling. Acessa do celular ou do computador.
          </p>
          <span className="font-mono text-xs text-[#C9A84C]/60 tracking-widest mt-auto">Arsenal Social Media →</span>
        </div>

        {/* Card 3 — Scheduler */}
        <div className={cardBase}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#C9A84C] pulse-dot" />
            <span className="font-mono text-xs tracking-widest text-ivory/40 uppercase">Protocolo</span>
          </div>
          <div className="grid grid-cols-7 gap-1 my-2">
            {days.map((d, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-1 rounded-lg p-2 text-center transition-all duration-300 ${activeDay === i ? 'bg-[#C9A84C] text-obsidian scale-105' : 'bg-obsidian/40 text-ivory/30'}`}
              >
                <span className="font-mono text-[9px] uppercase">{d}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${activeDay === i ? 'bg-obsidian' : 'bg-ivory/20'}`} />
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-ivory/50 leading-relaxed">
            Frameworks de negócios para transformar atenção em receita. Do OODA Loop ao Blue Ocean — a camada que escala o que você cria.
          </p>
          <span className="font-mono text-xs text-[#C9A84C]/60 tracking-widest mt-auto">Arsenal Business →</span>
        </div>
      </div>
    </section>
  )
}
