import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const TIERS = [
  {
    num: 'T1',
    name: 'Arsenal Starter',
    subtitle: 'Coleção Ouro',
    price: 'R$97',
    installment: '12x de R$9,17',
    tag: 'Para Começar Certo',
    url: 'https://pay.hotmart.com/N104728955B',
    features: [
      'Bot Arsenal com System Prompt',
      'WebApp com 68 Prompts',
      'PDF Arsenal: Guias + Templates',
      'Bônus: Matrizes Brasileiras',
      '7 dias de Garantia Incondicional',
    ],
    highlight: false,
  },
  {
    num: 'T2',
    name: 'Arsenal Social Media',
    subtitle: 'Coleção Profissional',
    price: 'R$197',
    installment: '12x de R$18,50',
    tag: 'Mais Popular',
    url: 'https://pay.hotmart.com/C105035049H',
    features: [
      'Tudo do Tier 1',
      'Biblioteca de Prompts Social Media',
      'Frameworks de Grid e Reels',
      'Scripts de Stories e VSL',
      'PDFs de Estratégia de Conteúdo',
      'Acesso ao Vault de Texturas',
    ],
    highlight: true,
  },
  {
    num: 'T3',
    name: 'Arsenal Business',
    subtitle: 'Coleção Sovereignty',
    price: 'R$347',
    installment: '12x de R$32,55',
    tag: 'Escala Máxima',
    url: 'https://pay.hotmart.com/N105035190A',
    features: [
      'Tudo dos Tiers 1 e 2',
      'Grids de Business Mastery',
      'OODA Loop e Blue Ocean',
      'Frameworks de Decision-Making',
      'Sistemas de Monetização de Atenção',
      'Acesso Vitalício + Atualizações',
    ],
    highlight: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.price-card', {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="precos" ref={sectionRef} className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <p className="font-mono text-xs tracking-[0.35em] text-[#C9A84C] uppercase mb-3">Escolha o Seu Arsenal</p>
        <h2 className="font-sans font-black text-4xl md:text-6xl leading-tight">
          Três Níveis.<br />
          <span className="font-serif italic font-normal text-[#C9A84C]">Um Sistema.</span>
        </h2>
        <p className="font-sans text-ivory/50 mt-6 max-w-xl mx-auto">
          Cada tier é um nível de comprometimento com o resultado. Comece onde faz sentido. Escale quando quiser.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        {TIERS.map((tier, i) => (
          <div
            key={i}
            className={`price-card flex flex-col rounded-[2rem] p-8 transition-all duration-300
              ${tier.highlight
                ? 'bg-[#C9A84C] text-[#0D0D12] ring-0 shadow-[0_0_60px_#C9A84C22] relative'
                : 'bg-[#2A2A35]/40 border border-[#C9A84C]/10 text-ivory hover:border-[#C9A84C]/30'}`}
          >
            {tier.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-obsidian text-[#C9A84C] font-mono text-[10px] tracking-widest uppercase px-5 py-1.5 rounded-full border border-[#C9A84C]/30">
                {tier.tag}
              </div>
            )}

            <div className="mb-6">
              <span className={`font-mono text-xs tracking-widest uppercase ${tier.highlight ? 'text-obsidian/50' : 'text-[#C9A84C]/50'}`}>{tier.num}</span>
              <h3 className="font-sans font-black text-2xl mt-1">{tier.name}</h3>
              <p className={`font-mono text-xs tracking-wide mt-1 ${tier.highlight ? 'text-obsidian/60' : 'text-ivory/40'}`}>{tier.subtitle}</p>
            </div>

            <div className="mb-8">
              <p className="font-sans font-black text-5xl">{tier.price}</p>
              <p className={`font-mono text-xs tracking-wide mt-1 ${tier.highlight ? 'text-obsidian/60' : 'text-ivory/40'}`}>
                ou {tier.installment}
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-10 flex-1">
              {tier.features.map((f, j) => (
                <li key={j} className="flex items-start gap-3 text-sm leading-snug">
                  <Check className={`flex-shrink-0 mt-0.5 w-4 h-4 ${tier.highlight ? 'text-obsidian' : 'text-[#C9A84C]'}`} />
                  <span className={tier.highlight ? 'text-obsidian/80' : 'text-ivory/70'}>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={tier.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-magnetic text-center font-sans font-bold tracking-widest uppercase text-xs px-8 py-4 rounded-full block
                ${tier.highlight
                  ? 'bg-obsidian text-ivory hover:text-obsidian'
                  : 'bg-[#C9A84C] text-obsidian hover:text-ivory'}`}
            >
              <div className={`btn-bg ${tier.highlight ? 'bg-[#2A2A35]' : 'bg-obsidian'} rounded-full`} />
              <span>Quero Este Arsenal</span>
            </a>

            <p className={`text-center font-mono text-[10px] mt-4 ${tier.highlight ? 'text-obsidian/40' : 'text-ivory/30'}`}>
              7 dias de garantia incondicional
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
