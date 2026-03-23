import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.manifesto-word', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
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
    <section
      id="filosofia"
      ref={sectionRef}
      className="relative py-40 px-8 md:px-16 overflow-hidden bg-[#2A2A35]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1400&q=80"
          alt="dark marble texture"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="font-mono text-xs tracking-[0.35em] text-[#C9A84C] uppercase mb-16">A Filosofia</p>

        <p className="manifesto-word font-sans text-ivory/40 text-lg md:text-xl mb-4">
          A maioria dos criadores foca em:
        </p>
        <p className="manifesto-word font-sans font-bold text-2xl md:text-3xl text-ivory mb-12 leading-snug">
          Volumes de posts, hacks virais, e templates copiados de qualquer criador americano.
        </p>

        <div className="w-16 h-px bg-[#C9A84C]/40 mb-12" />

        <p className="manifesto-word font-sans text-ivory/40 text-lg md:text-xl mb-4">
          Nós focamos em:
        </p>
        <p className="font-serif italic text-[clamp(2.5rem,6vw,5rem)] leading-tight text-[#C9A84C]">
          Arquitetura.<br />Precisão.<br />
          <span className="text-ivory">Resultado.</span>
        </p>

        <p className="manifesto-word font-sans text-ivory/50 text-base md:text-lg max-w-2xl mt-12 leading-relaxed">
          Cada ferramenta do Arsenal foi construída em campo, testada com exaustão, e refinada até não sobrar mais nenhum ruído. Você não recebe possibilidades. Você recebe o sistema que funciona.
        </p>
      </div>
    </section>
  )
}
