import { ShieldCheck, Code2, Terminal, Server } from "lucide-react";

const skills = [
  { icon: Code2, title: "Pemrograman", items: ["JavaScript", "Python", "Web Dev"] },
  { icon: Terminal, title: "Linux", items: ["CLI", "Automation", "Scripting"] },
  { icon: ShieldCheck, title: "Keamanan", items: ["Hardening", "Pentest Etis", "Monitoring"] },
  { icon: Server, title: "Infra", items: ["Docker", "API", "CI/CD"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-2xl font-semibold mb-6">Keahlian</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="bg-slate-800/40 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-300 flex items-center justify-center">
                  <Icon size={18} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <ul className="text-blue-100/80 text-sm space-y-1">
                {items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
