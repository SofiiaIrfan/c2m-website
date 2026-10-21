import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProjectModal from './components/ProjectModal';
import aboutImage from '../imports/GLA_25.jpg';
import riversideImage1 from '../imports/riverside-1.jpg';
import riversideImage2 from '../imports/riverside-2.jpg';
import glaImage1 from '../imports/GLA_01.jpg';
import heroProject from '../imports/GLA_01-1.jpg';
import glaImage9 from '../imports/GLA_09-1.jpg';
import primarschuleImg from '../imports/primarschule-1.jpg';
import primarschuleImg2 from '../imports/primarschule-2.jpg';
import primarschuleImg3 from '../imports/primarschule-3.jpg';
import zimmerli1 from '../imports/GLA_01-2.jpg';
import zimmerli2 from '../imports/GLA_09-2.jpg';
import zimmerli3 from '../imports/GLA_03.jpg';
import zimmerli4 from '../imports/GLA_11.jpg';
import zimmerli5 from '../imports/GLA_14.jpg';
import zimmerli6 from '../imports/GLA_13.jpg';
import zimmerli7 from '../imports/GLA_15.jpg';
import zimmerli8 from '../imports/GLA_22.jpg';
import erliacker1 from '../imports/2MFH-Erliacker-Langendorf-Aussen-1-Final.jpg';
import erliacker2 from '../imports/MFH-Erliacker-Innen-Final.jpg';
import erliacker3 from '../imports/2MFH-Erliacker-Langendorf-Aussen-2-Final.jpg';
import erliacker4 from '../imports/F3.jpg';

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
  images: string[];
  description?: string;
  fullDescription?: string;
  client?: string;
  year?: string;
  usage?: string;
  services?: string[];
}

const PROJECTS: Project[] = [
  {
    id: 100,
    title: 'Neubau Garage Zimmerli – NUVOLA',
    location: 'Aarau, AG',
    category: 'Gewerbe',
    image: zimmerli1,
    images: [zimmerli1, zimmerli2, zimmerli3, zimmerli4, zimmerli5, zimmerli6, zimmerli7, zimmerli8],
    description: 'Neubau Garage und Showroom',
    fullDescription: 'Der Neubau der Garage Zimmerli in Aarau vereint Werkstatt, Showroom und Kundenbereich in einem prägnanten Baukörper. Klare Linien, grosszügige Verglasungen und eine präzise Materialisierung verleihen dem Gebäude eine starke Präsenz.',
    client: 'Garage Zimmerli AG',
    year: '2025',
    usage: 'Gewerbe / Garage',
    services: ['Architektur', 'Generalplanung', 'Bauleitung'],
  },
  {
    id: 1,
    title: 'Riverside Living',
    location: 'Olten, SO',
    category: 'Wohnbau',
    image: riversideImage1,
    images: [riversideImage1, riversideImage2],
    description: 'Wohnbauprojekt am Flussufer',
    fullDescription: 'Ein modernes Wohnbauprojekt direkt am Flussufer in Olten. Das Projekt vereint zeitgemässe Architektur mit der natürlichen Umgebung des Aareufers und schafft hochwertige Wohnräume mit Blick auf die Natur.',
    client: 'Privater Bauherr',
    year: '2024',
    usage: 'Wohnen',
    services: ['Architektur', 'Bauleitung', 'Generalplanung'],
  },
  {
    id: 2,
    title: 'MFH Erliacker',
    location: 'Langendorf',
    category: 'Wohnbau',
    image: erliacker1,
    images: [erliacker1, erliacker3, erliacker2, erliacker4],
    description: 'Mehrfamilienhaus mit 12 Wohneinheiten',
    fullDescription: 'Das Mehrfamilienhaus Erliacker in Langendorf bietet 12 hochwertige Wohneinheiten. Die Architektur verbindet moderne Ästhetik mit funktionaler Planung und nachhaltigen Baumaterialien.',
    client: 'Genossenschaft Wohnen',
    year: '2023',
    usage: 'Wohnen / MFH',
    services: ['Architektur', 'Generalplanung'],
  },
  {
    id: 3,
    title: 'Engelpark',
    location: 'Dulliken, SO',
    category: 'Wohnbau',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'],
    description: 'Arealüberbauung mit 30 Wohnungen in sechs Baukörpern',
    fullDescription: 'Die Arealüberbauung beinhaltet dreissig Wohnungen auf sechs Baukörper verteilt mit einer unterirdischen Einstellhalle. Durch die bewusste Versetzung der Bauten entstehen reizvolle Durchblicke. Die verspielt gestalteten Freiräume weiten sich zur ländlich geprägten Umgebung aus in Verbindung mit Landschaft bestehend aus Obstbäume und Wiese. Dank der subtil durchdachten architektonischen Gestaltung bettet sich die Körnung der Bauten in den Siedlungskontext passend ein. Die horizontal artikulierten umlaufenden Bänder umrahmen die grosszügigen Fenster und die Klinkerfassaden auf einheitlicher Weise. Aufgrund deren hohen architektonischen Qualität erhielt dieses Projekt einen Gestaltungsbonus von der Gemeinde Dulliken.',
    client: 'Privater Investor',
    year: '2022',
    usage: 'Wohnen',
    services: ['Architektur', 'Bauleitung'],
  },
  {
    id: 4,
    title: 'Gewerbewohnhaus Däniken',
    location: 'Däniken, SO',
    category: 'Gewerbe',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'],
    description: 'Kombination Gewerbe und Wohnen',
    fullDescription: 'Das Gewerbewohnhaus in Däniken vereint Gewerbe- und Wohnnutzung unter einem Dach. Die flexible Grundrissgestaltung ermöglicht eine vielseitige Nutzung der Gewerbeflächen.',
    client: 'Privatperson',
    year: '2023',
    usage: 'Gewerbe / Wohnen',
    services: ['Generalplanung', 'Architektur'],
  },
  {
    id: 5,
    title: 'Primarschule Birsfelden',
    location: 'Birsfelden, BL',
    category: 'Öffentlich',
    image: primarschuleImg2,
    images: [primarschuleImg2, primarschuleImg, primarschuleImg3],
    description: 'Erweiterungsbau Primarschule',
    fullDescription: 'Erweiterungsbau der Primarschule Birsfelden mit modernen Klassenräumen und multifunktionalen Gemeinschaftsflächen. Der Neubau fügt sich harmonisch in den Bestand und das Ortsbild ein.',
    client: 'Gemeinde Birsfelden',
    year: '2022',
    usage: 'Bildung / Öffentlich',
    services: ['Architektur', 'Bauleitung', 'Generalplanung'],
  },
  {
    id: 6,
    title: 'Basel St. Jakob',
    location: 'Basel, BS',
    category: 'Gewerbe',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop'],
    description: 'Gewerbliche Umnutzung',
    fullDescription: 'Gewerbliche Umnutzung und Sanierung eines Bestandsgebäudes im Quartier St. Jakob. Das Projekt beinhaltet die vollständige energetische Sanierung sowie den Umbau zu modernen Gewerbeflächen.',
    client: 'Immobilienfonds',
    year: '2024',
    usage: 'Gewerbe',
    services: ['Architektur', 'Bauleitung'],
  },
  {
    id: 7,
    title: 'Umbau Villa Solothurn',
    location: 'Solothurn, SO',
    category: 'Umbau',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'],
    description: 'Sanierung und Umbau',
    fullDescription: 'Behutsame Sanierung und Umnutzung einer historischen Villa in Solothurn. Der Umbau bewahrt den charaktervollen Bestand und ergänzt ihn mit zeitgemässen Elementen.',
    client: 'Privatperson',
    year: '2023',
    usage: 'Wohnen',
    services: ['Architektur', 'Bauleitung'],
  },
  {
    id: 8,
    title: 'Logistikzentrum Aarau',
    location: 'Aarau, AG',
    category: 'Gewerbe',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop'],
    description: 'Neubau Logistik & Gewerbe',
    fullDescription: 'Neubau eines modernen Logistikzentrums mit angegliederten Gewerbeflächen in Aarau. Höchste Anforderungen an Funktionalität und Nachhaltigkeit wurden dabei konsequent umgesetzt.',
    client: 'Unternehmensgruppe',
    year: '2025',
    usage: 'Logistik / Gewerbe',
    services: ['Generalplanung', 'Architektur', 'Bauleitung'],
  },
];

const HERO_SLIDES = [
  { src: erliacker1, title: 'MFH Erliacker' },
  { src: erliacker2, title: 'MFH Erliacker' },
  { src: zimmerli1, title: 'Garage Zimmerli Aarau' },
  { src: zimmerli3, title: 'Garage Zimmerli Aarau' },
  { src: riversideImage1, title: 'Riverside' },
  { src: riversideImage2, title: 'Riverside' },
  { src: primarschuleImg3, title: 'Primarschule Birsfelden' },
];

function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % HERO_SLIDES.length), 10000);
    return () => clearInterval(id);
  }, [index]);

  return (
    <div className="relative w-full flex-1 min-h-0 overflow-hidden bg-[#2A2A2A]">
      {HERO_SLIDES.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-out ${i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      <div className="absolute left-6 md:left-10 bottom-6 flex items-end gap-6 text-white">
        <span className="text-xs tracking-[0.3em] uppercase text-[#c4b5a3]">{String(index + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}</span>
        <span className="text-sm tracking-[0.2em] uppercase font-light">{HERO_SLIDES[index].title}</span>
      </div>
      <div className="absolute right-6 md:right-10 bottom-7 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Bild ${i + 1}`}
            className="h-[2px] w-8 bg-white/30 overflow-hidden"
          >
            <span key={i === index ? `a${index}` : i} className={`block h-full bg-[#c4b5a3] ${i === index ? 'animate-[heroProgress_10s_linear_forwards]' : i < index ? 'w-full' : 'w-0'}`}></span>
          </button>
        ))}
      </div>
      <style>{`@keyframes heroProgress { from { width: 0% } to { width: 100% } }`}</style>
    </div>
  );
}

const CATEGORIES = ['Alle', 'Wohnbau', 'Gewerbe', 'Öffentlich', 'Umbau'];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'Alle'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#E8E8E8] min-h-screen text-[#222222] selection:bg-[#A49C93] selection:text-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif' }}>
      <Header />

      {/* 1. HERO SECTION */}
      <section id="home" className="relative h-screen w-full max-w-[1440px] mx-auto bg-white shadow-2xl mb-16">
        <div className="h-full flex flex-col pt-28 md:pt-32 px-8 md:px-12 lg:px-24 pb-12 gap-8">
          <h1 className="text-[#2A2A2A] text-4xl md:text-6xl leading-tight tracking-tighter uppercase font-normal font-[Inter]">
            C2M Architekten<br/>und Generalplaner AG
          </h1>
          <HeroSlideshow />
          <p className="text-gray-500 text-base md:text-lg font-light">Architektur, Generalplanung und Baumanagement aus einer Hand.</p>
        </div>
      </section>

      {/* 2. ABOUT US SPREAD */}
      <section id="about" className="w-full max-w-[1440px] mx-auto bg-white overflow-hidden shadow-2xl mb-16 grid grid-cols-1 lg:grid-cols-[1fr_400px_1fr]">
        {/* Left dark panel */}
        <div className="bg-[#2A2A2A] text-white flex flex-col p-[80px]">
          <h3 className="text-sm tracking-[0.2em] uppercase text-white/50 mb-12">Inhalt</h3>
          <ul className="space-y-6 text-sm text-white/80 font-light">
            <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Philosophie &amp; Vision</li>
            <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Unser Team</li>
            <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Arbeitsweise</li>
            <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Nachhaltigkeit</li>
          </ul>
          <div className="mt-auto pt-16">
            <p className="text-xs text-white/40 leading-relaxed">
              Mit über 20 Jahren Erfahrung im Bereich Architektur und Generalplanung begleiten wir unsere Kunden von der ersten Idee bis zur schlüsselfertigen Übergabe.
            </p>
          </div>
        </div>

        {/* Center circle column */}
        <div className="hidden lg:flex items-center justify-center bg-[#2A2A2A] relative py-16">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-white"></div>
          <div className="w-[360px] h-[360px] rounded-full overflow-hidden shadow-2xl z-10 flex-shrink-0">
            <img
              src={aboutImage}
              alt="C2M Team"
              className="w-full h-full object-cover hover:scale-105 transition duration-1000"
            />
          </div>
        </div>

        {/* Right white panel */}
        <div className="bg-white text-[#2A2A2A] flex flex-col items-end text-right justify-center p-[80px]">
          <h2 className="text-5xl font-bold tracking-tight mb-8">Über uns</h2>
          <p className="max-w-xs text-sm leading-relaxed text-gray-500 mb-8">
            Die C2M Architekten und Generalplaner AG mit Sitz in Olten ist Ihr verlässlicher Partner für anspruchsvolle Bauprojekte.
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-gray-500">
            Als erfahrenes Team setzen wir auf Transparenz, Innovation und höchste Sorgfalt von der ersten Idee bis zur Schlüsselübergabe.
          </p>
        </div>
      </section>

      {/* 3. SERVICES SPREAD */}
      <section id="services" className="relative min-h-screen w-full max-w-[1440px] mx-auto bg-white shadow-2xl mb-16 p-12 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-bold tracking-tight mb-16 leading-tight">
            Leistungen<br/>& Expertise
          </h2>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="text-3xl text-[#A49C93] font-light">01</div>
              <div>
                <h4 className="font-bold text-lg mb-2 tracking-wide">ARCHITEKTUR UND PLANUNG</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Entwurf und Planung von Wohn-, Gewerbe- und Bildungsbauten – von der ersten Idee bis zur Ausführungsplanung.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-3xl text-[#A49C93] font-light">02</div>
              <div>
                <h4 className="font-bold text-lg mb-2 tracking-wide">GENERALPLANUNG</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Führung und Koordination aller Fachplaner unter einem Dach, mit klaren Verantwortlichkeiten und einer Ansprechperson.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-3xl text-[#A49C93] font-light">03</div>
              <div>
                <h4 className="font-bold text-lg mb-2 tracking-wide">BAUMANAGEMENT</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Baumanagement und Bauleitung mit Kosten- und Terminverantwortung bis zur schlüsselfertigen Übergabe.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 h-full">
          <div className="flex flex-col gap-6">
            <img
              src={glaImage1}
              alt="Leistung 1"
              className="w-full h-64 object-cover grayscale hover:grayscale-0 transition duration-700"
            />
            <div className="bg-[#F4F4F4] p-8 flex-grow flex flex-col justify-center items-center text-center">
              <span className="text-4xl font-light text-[#2A2A2A] mb-2">150+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500">Projekte</span>
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-12">
            <img
              src={glaImage9}
              alt="Leistung 2"
              className="w-full h-[400px] object-contain bg-gray-100 grayscale hover:grayscale-0 transition duration-700"
            />
            <div className="bg-[#2A2A2A] p-8 flex flex-col justify-center items-center text-center">
              <span className="text-4xl font-light text-white mb-2">20+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/60">Jahre Erfahrung</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS GRID */}
      <section id="projects" className="w-full max-w-[1440px] mx-auto bg-white shadow-2xl mb-16 p-12 lg:p-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-5xl font-bold tracking-tight leading-tight">
            Unsere<br/>Projekte
          </h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-[11px] tracking-widest uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-[#2A2A2A] text-white border-[#2A2A2A]'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-[#A49C93]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group cursor-pointer overflow-hidden bg-[#F4F4F4]"
              onClick={() => setSelectedProject(project)}
            >
              <div className="overflow-hidden h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6">
                <p className="text-[10px] tracking-widest uppercase text-[#A49C93] mb-2">{project.category}</p>
                <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="w-full max-w-[1440px] mx-auto bg-[#2A2A2A] shadow-2xl mb-16 p-12 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="text-white">
          <h2 className="text-5xl font-bold tracking-tight mb-8 leading-tight">
            Kontakt<br/>aufnehmen
          </h2>
          <p className="text-sm text-white/60 leading-relaxed mb-12 max-w-sm">
            Haben Sie ein Bauprojekt? Wir freuen uns auf Ihre Anfrage und beraten Sie gerne unverbindlich.
          </p>
          <div className="space-y-6 text-sm">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-white/40 mb-1">Adresse</p>
              <p className="text-white/80">C2M Architekten und Generalplaner AG<br/>Olten, Schweiz</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-white/40 mb-1">E-Mail</p>
              <p className="text-white/80">info@c2m-architekten.ch</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-white/40 mb-1">Telefon</p>
              <p className="text-white/80">+41 62 000 00 00</p>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-white/40 mb-2">Vorname</label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#A49C93] transition-colors"
                  placeholder="Max"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-white/40 mb-2">Nachname</label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#A49C93] transition-colors"
                  placeholder="Muster"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-white/40 mb-2">E-Mail</label>
              <input
                type="email"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#A49C93] transition-colors"
                placeholder="max@muster.ch"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-white/40 mb-2">Nachricht</label>
              <textarea
                rows={5}
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#A49C93] transition-colors resize-none"
                placeholder="Beschreiben Sie Ihr Projekt..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#A49C93] text-white py-4 text-[12px] tracking-[0.15em] uppercase hover:bg-white hover:text-[#2A2A2A] transition-all duration-300"
            >
              Anfrage senden
            </button>
          </form>
        </div>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  );
}
