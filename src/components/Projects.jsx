const projects = [
  {
    title: "Sistem Manajemen Keamanan",
    desc: "Dashboard untuk memonitor layanan, login auditing, dan alerting dasar.",
    tags: ["React", "FastAPI", "MongoDB"],
  },
  {
    title: "Otomasi Deploy",
    desc: "Script dan pipeline untuk build dan deploy aplikasi kontainer.",
    tags: ["CI/CD", "Docker"],
  },
  {
    title: "Portal Sekolah",
    desc: "Aplikasi web sederhana untuk informasi siswa dan pengumuman.",
    tags: ["Frontend", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-2xl font-semibold mb-6">Proyek</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="bg-slate-800/40 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition">
              <h3 className="text-white font-semibold mb-2">{p.title}</h3>
              <p className="text-blue-100/80 text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/5 text-blue-200 border border-white/10">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
