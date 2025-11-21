import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-slate-800/40 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <h2 className="text-white text-2xl font-semibold mb-2">Tertarik bekerja sama?</h2>
            <p className="text-blue-100/80">Kirimkan pesan, dan saya akan segera membalas.</p>
          </div>
          <a href="mailto:wildan@example.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition shadow-lg shadow-blue-600/20">
            <Mail size={18} />
            <span>Email Saya</span>
          </a>
        </div>
      </div>
    </section>
  );
}
