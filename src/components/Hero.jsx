export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_90%_20%,rgba(34,197,94,0.12),transparent_25%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-blue-300/80 mb-3">Halo, saya</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Wildan Abiarsa
          </h1>
          <p className="text-lg text-blue-100/80 mb-6">
            Seorang Software Engineer yang gemar membangun solusi IT, dari aplikasi web hingga otomasi sistem. Terbiasa dengan Linux untuk keamanan sistem dan analisis, serta selalu belajar hal baru.
          </p>
          <div className="flex gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition shadow-lg shadow-blue-600/20">Lihat Proyek</a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Hubungi Saya</a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-blue-500 to-emerald-500 p-[2px]">
            <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center text-white/80">
              WA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
