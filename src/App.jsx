import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="antialiased">
      {/* Simple nav */}
      <header className="fixed inset-x-0 top-0 z-40 bg-white/70 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-serif text-xl text-gray-900">HB</a>
          <div className="hidden gap-6 text-sm text-gray-700 md:flex">
            <a href="#portfolio" className="hover:text-gray-900">Portfolio</a>
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
          <a href="#contact" className="rounded-full bg-gray-900 px-4 py-2 text-xs font-medium text-white md:text-sm">Hire Me</a>
        </nav>
      </header>

      <main className="pt-16">
        <Hero />
        <Portfolio />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-gray-200 bg-white px-6 py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Husena Bohari — Crafted with care.
      </footer>
    </div>
  );
}
