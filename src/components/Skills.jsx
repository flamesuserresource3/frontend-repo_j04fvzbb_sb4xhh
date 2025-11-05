import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tools = [
  { name: 'Adobe Photoshop', level: 'Advanced' },
  { name: 'Adobe Illustrator', level: 'Advanced' },
  { name: 'Adobe InDesign', level: 'Intermediate' },
  { name: 'Adobe After Effects', level: 'Intermediate' },
  { name: 'Adobe Premiere Pro', level: 'Intermediate' },
  { name: 'Canva', level: 'Advanced' },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <h2 className="font-serif text-4xl text-gray-900 md:text-5xl">Skills & Tools</h2>
        <p className="mt-3 max-w-2xl text-gray-600">A versatile toolkit across brand strategy, identity systems, and motion‑enhanced visuals.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            viewport={{ once: true, amount: 0.4 }}
            className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur transition hover:-translate-y-1"
          >
            <div>
              <p className="text-base font-medium text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-600">{t.level}</p>
            </div>
            <span className="rounded-full bg-emerald-100 p-2 text-emerald-700">
              <Check size={18} />
            </span>
          </motion.div>
        ))}
      </div>

      {/* Experience & Education */}
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-gray-200 bg-gradient-to-br from-rose-50 to-white p-8"
        >
          <h3 className="font-serif text-2xl text-gray-900">Experience</h3>
          <p className="mt-3 text-gray-700">Worked on 2 small projects with 2 companies, gaining hands‑on experience in creative branding and layout design. Collaborated on briefs, presented iterations, and delivered production‑ready assets.</p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-gray-200 bg-gradient-to-br from-indigo-50 to-white p-8"
        >
          <h3 className="font-serif text-2xl text-gray-900">Education</h3>
          <p className="mt-3 text-gray-700">Applied Arts student focused on graphic design and advertising. Exploring identity systems, typography, motion fundamentals, and visual communication strategy.</p>
        </motion.div>
      </div>
    </section>
  );
}
