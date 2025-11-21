import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight text-lg">
          Wildan<span className="text-blue-400">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/80">
          <a href="#about" className="hover:text-white transition">Tentang</a>
          <a href="#skills" className="hover:text-white transition">Keahlian</a>
          <a href="#projects" className="hover:text-white transition">Proyek</a>
          <a href="#contact" className="hover:text-white transition">Kontak</a>
        </nav>
        <button className="md:hidden text-blue-100/80" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
