export default function Footer() {
  return (
    <footer className="bg-[#2A2A35] rounded-t-[4rem] px-8 md:px-16 py-20 mt-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="font-sans font-black tracking-[0.2em] text-[#C9A84C] text-lg uppercase mb-3">Arsenal</p>
          <p className="font-serif italic text-ivory/50 text-sm leading-relaxed">
            Sistemas Artesanais para o<br />Velho Oeste Digital.
          </p>
        </div>

        {/* Nav */}
        <div>
          <p className="font-mono text-[10px] tracking-widest text-ivory/30 uppercase mb-4">Navegação</p>
          <div className="flex flex-col gap-3">
            {['#arsenal', '#filosofia', '#precos'].map((href, i) => (
              <a key={i} href={href}
                className="font-sans text-sm text-ivory/50 hover:text-[#C9A84C] transition-colors duration-200 hover:-translate-y-px transition-transform">
                {['O Sistema', 'Filosofia', 'Tiers de Acesso'][i]}
              </a>
            ))}
          </div>
        </div>

        {/* Legal & Status */}
        <div>
          <p className="font-mono text-[10px] tracking-widest text-ivory/30 uppercase mb-4">Sistema</p>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
            <span className="font-mono text-xs text-ivory/40 tracking-widest">SYSTEM OPERATIONAL</span>
          </div>
          <p className="font-mono text-[10px] text-ivory/30 leading-5">
            © {new Date().getFullYear()} Arsenal.<br />
            Todos os direitos reservados.<br />
            Hotmart · Garantia de 7 Dias.
          </p>
        </div>
      </div>
    </footer>
  )
}
