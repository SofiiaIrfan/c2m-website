import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-[0px_2px_20px_0px_rgba(0,0,0,0.1)]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif' }}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <Logo className="h-10" />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <a
              href="#"
              className="text-[13px] text-gray-700 hover:text-black tracking-[0.05em] transition-colors relative group uppercase"
            >
              Home
              <span className="absolute bottom-[-8px] left-0 right-0 h-px bg-[#c4b5a3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a
              href="#projects"
              className="text-[13px] text-gray-700 hover:text-black tracking-[0.05em] transition-colors relative group uppercase"
            >
              Projekte
              <span className="absolute bottom-[-8px] left-0 right-0 h-px bg-[#c4b5a3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a
              href="#services"
              className="text-[13px] text-gray-700 hover:text-black tracking-[0.05em] transition-colors relative group uppercase"
            >
              Dienstleistungen
              <span className="absolute bottom-[-8px] left-0 right-0 h-px bg-[#c4b5a3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a
              href="#about"
              className="text-[13px] text-gray-700 hover:text-black tracking-[0.05em] transition-colors relative group uppercase"
            >
              Über uns
              <span className="absolute bottom-[-8px] left-0 right-0 h-px bg-[#c4b5a3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a
              href="#jobs"
              className="text-[13px] text-gray-700 hover:text-black tracking-[0.05em] transition-colors relative group uppercase"
            >
              Offene Stellen
              <span className="absolute bottom-[-8px] left-0 right-0 h-px bg-[#c4b5a3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a
              href="#news"
              className="text-[13px] text-gray-700 hover:text-black tracking-[0.05em] transition-colors relative group uppercase"
            >
              News
              <span className="absolute bottom-[-8px] left-0 right-0 h-px bg-[#c4b5a3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a
              href="#contact"
              className="text-[13px] text-gray-700 hover:text-black tracking-[0.05em] transition-colors relative group uppercase"
            >
              Kontakt
              <span className="absolute bottom-[-8px] left-0 right-0 h-px bg-[#c4b5a3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:flex items-center justify-center px-8 py-3 border border-[#c4b5a3] text-gray-900 text-[12px] tracking-[0.1em] uppercase hover:bg-[#c4b5a3] hover:text-white transition-all duration-300"
          >
            Anfrage
          </a>
        </div>
      </div>
    </header>
  );
}
