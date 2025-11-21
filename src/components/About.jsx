export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div className="bg-slate-800/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white text-2xl font-semibold mb-3">Tentang Saya</h2>
          <p className="text-blue-100/80 leading-relaxed">
            Saya adalah siswa SMK Amaliah yang tinggal di Cigombong, Lido. Saya fokus pada pengembangan perangkat lunak dan keamanan sistem. Saya nyaman bekerja dengan Linux baik untuk hardening maupun pengujian penetrasi yang bertanggung jawab untuk meningkatkan keamanan perusahaan.
          </p>
        </div>
        <div className="bg-slate-800/40 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white text-xl font-semibold mb-3">Info Singkat</h3>
          <ul className="text-blue-100/80 space-y-2">
            <li><span className="text-white">Nama:</span> Wildan Abiarsa</li>
            <li><span className="text-white">Peran:</span> Software Engineer</li>
            <li><span className="text-white">Sekolah:</span> SMK Amaliah</li>
            <li><span className="text-white">Domisili:</span> Cigombong, Lido</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
