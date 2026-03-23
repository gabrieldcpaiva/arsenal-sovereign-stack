import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    num: '01',
    title: 'Escolha o Seu Nível',
    desc: 'Starter para quem quer criar conteúdo que vende. Social Media para quem quer escalar a presença. Business para quem quer transformar atenção em receita.',
  },
  {
    num: '02',
    title: 'Acesse o Sistema',
    desc: 'Bot personalizado, WebApp prática, PDFs e frameworks — tudo disponível no segundo que você confirma o acesso. Sem espera, sem burocracia.',
  },
  {
    num: '03',
    title: 'Execute com Precisão',
    desc: 'Você abre o Arsenal, seleciona o objetivo, e o sistema entrega. Engajamento, autoridade, vendas, storytelling — cada um no seu lugar, pronto para usar.',
  },
]

export default function Protocol() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      STEPS.forEach((_, i) => {
        gsap.from(`.protocol-card-${i}`, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.protocol-card-${i}`,
            start: 'top 80%',
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-xs tracking-[0.35em] text-[#C9A84C] uppercase mb-3">Como Funciona</p>
        <h2 className="font-sans font-black text-4xl md:text-6xl leading-tight">
          Três Passos.<br />
          <span className="font-serif italic font-normal text-[#C9A84C]">Velocidade de Escape.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {STEPS.map((step, i) => (
          <div
            key={i}
            className={`protocol-card-${i} group relative bg-[#2A2A35]/30 border border-[#C9A84C]/10 rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row gap-8 items-start hover:border-[#C9A84C]/30 transition-all duration-500`}
          >
            {/* EKG-style line decoration */}
            <svg className="absolute right-10 top-10 opacity-10 group-hover:opacity-20 transition-opacity" width="120" height="40" viewBox="0 0 120 40">
              <polyline
                points="0,20 15,20 25,5 35,35 45,10 55,30 65,20 120,20"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeDasharray="200"
                strokeDashoffset="0"
              />
            </svg>

            <span className="font-mono text-[#C9A84C]/30 text-6xl font-bold leading-none flex-shrink-0">{step.num}</span>
            <div>
              <h3 className="font-sans font-bold text-2xl md:text-3xl text-ivory mb-4">{step.title}</h3>
              <p className="font-sans text-ivory/50 text-base leading-relaxed max-w-2xl">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
