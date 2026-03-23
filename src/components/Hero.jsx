import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.3,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex flex-col justify-end px-8 md:px-16 pb-20 pt-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="dark luxury interior"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/70 to-[#0D0D12]/30" />
      </div>

      {/* Content — bottom-left */}
      <div className="relative z-10 max-w-4xl">
        <p className="hero-line font-mono text-[#C9A84C] tracking-[0.35em] text-xs uppercase mb-6">
          Sistemas Artesanais · Velho Oeste Digital
        </p>

        <h1 className="hero-line font-sans font-black text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] tracking-tight text-ivory uppercase">
          Criação de<br />Conteúdo
        </h1>

        <h1 className="hero-line font-serif italic font-bold text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.85] text-[#C9A84C] -mt-2">
          Artesanal.
        </h1>

        <p className="hero-line font-sans text-ivory/60 text-base md:text-lg max-w-lg mt-8 leading-relaxed">
          Três níveis. Um sistema. Do primeiro prompt ao framework de negócios — tudo construído para quem não aceita o medíocre.
        </p>

        <div className="hero-line flex flex-col sm:flex-row gap-4 mt-10">
          <a href="#precos"
            className="btn-magnetic inline-block bg-[#C9A84C] text-[#0D0D12] font-sans font-bold tracking-widest uppercase text-xs px-8 py-4 rounded-full">
            <div className="btn-bg bg-ivory rounded-full" />
            <span>Escolher Meu Arsenal</span>
          </a>
          <a href="#arsenal"
            className="inline-block border border-ivory/20 text-ivory/60 font-mono tracking-widest uppercase text-xs px-8 py-4 rounded-full hover:border-[#C9A84C]/60 hover:text-[#C9A84C] transition-all duration-300">
            Ver o Sistema →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-line absolute bottom-8 right-8 md:right-16 flex items-center gap-3 z-10">
        <div className="w-8 h-px bg-[#C9A84C]/40" />
        <span className="font-mono text-[10px] tracking-[0.3em] text-ivory/30 uppercase">Descobrir</span>
      </div>
    </section>
  )
}
