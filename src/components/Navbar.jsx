import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[92%] max-w-5xl rounded-full px-6 py-3 flex items-center justify-between
      ${scrolled ? 'bg-[#0D0D12]/80 backdrop-blur-xl border border-[#C9A84C]/20 shadow-lg' : 'bg-transparent'}`}>
      
      <span className="font-sans font-black tracking-[0.2em] text-[#C9A84C] text-sm uppercase">
        Arsenal
      </span>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-ivory/60 uppercase">
        <a href="#arsenal" className="hover:text-[#C9A84C] transition-colors duration-200">Sistema</a>
        <a href="#filosofia" className="hover:text-[#C9A84C] transition-colors duration-200">Filosofia</a>
        <a href="#precos" className="hover:text-[#C9A84C] transition-colors duration-200">Tiers</a>
      </div>

      <a
        href="#precos"
        className="btn-magnetic text-xs font-mono tracking-widest uppercase border border-[#C9A84C] text-[#C9A84C] px-5 py-2 rounded-full hover:text-obsidian transition-colors duration-300"
      >
        <div className="btn-bg rounded-full" />
        <span>Entrar</span>
      </a>

      {/* Mobile toggle */}
      <button className="md:hidden text-ivory/60 ml-4" onClick={() => setMenuOpen(m => !m)}>
        <span className="font-mono text-lg">{menuOpen ? '✕' : '☰'}</span>
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0D0D12]/95 backdrop-blur-xl border border-[#C9A84C]/20 rounded-2xl mx-2 p-6 flex flex-col gap-4 md:hidden">
          {['#arsenal', '#filosofia', '#precos'].map((href, i) => (
            <a key={i} href={href} onClick={() => setMenuOpen(false)}
              className="text-xs font-mono tracking-widest uppercase text-ivory/70 hover:text-[#C9A84C] transition-colors">
              {['Sistema', 'Filosofia', 'Tiers'][i]}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
