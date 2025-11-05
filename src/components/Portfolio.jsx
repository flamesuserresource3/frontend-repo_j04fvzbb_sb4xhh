import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 'branding-bloom',
    title: 'Bloom Botanics — Branding & Packaging',
    tags: ['Branding', 'Packaging', 'Illustration'],
    summary: 'Organic identity system with hand‑drawn florals and soft earthy palette.',
    process:
      'Started with moodboards exploring organic forms. Developed a modular logo and custom pattern library. Prototyped packaging dielines and tested legibility at shelf distance. Finalized with recyclable, two‑tone print to reduce ink usage.',
    color: 'from-emerald-200 to-green-100',
  },
  {
    id: 'logo-mark',
    title: 'Monoline Logo Marks — Collection',
    tags: ['Logos', 'Iconography'],
    summary: 'A set of minimal, scalable logos exploring geometry and rhythm.',
    process:
      'Sketched dozens of variations to balance negative space. Vectorized with consistent stroke, optical adjustments on curves, and grid alignment for crisp reproduction across sizes.',
    color: 'from-amber-200 to-orange-100',
  },
  {
    id: 'poster-experimental',
    title: 'Type & Motion Poster Series',
    tags: ['Poster', 'Experimental', 'Motion'],
    summary: 'Playful kinetic posters combining serif elegance with bold sans accents.',
    process:
      'Explored contrast between classic serif headlines and modular sans. Iterated in Photoshop and After Effects for micro‑motion, applying overshoot and easing for a lively feel.',
    color: 'from-sky-200 to-blue-100',
  },
  {
    id: 'ad-campaign',
    title: 'Mini Ad Campaign — Social Carousel',
    tags: ['Advertising', 'Layout'],
    summary: 'Story‑driven carousel layouts optimized for attention and clarity.',
    process:
      'Mapped a narrative arc across frames. Used focal hierarchy, whitespace, and color pacing. Exported as platform‑ready assets; validated contrast and accessibility.',
    color: 'from-rose-200 to-pink-100',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <section id="portfolio" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="font-serif text-4xl text-gray-900 md:text-5xl">Portfolio</h2>
          <p className="mt-3 max-w-2xl text-gray-600">A selection of logos, branding, posters, and experimental art. Click any project to see a quick process snapshot.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <motion.button
            key={p.id}
            onClick={() => setActive(p)}
            whileHover={{ y: -6 }}
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.color} p-1 text-left shadow-md transition focus:outline-none`}
            aria-label={`Open ${p.title}`}
          >
            <div className="rounded-2xl bg-white/70 p-5 backdrop-blur">
              <div className="mb-10 aspect-[4/3] w-full rounded-xl bg-white/60 shadow-inner" />
              <h3 className="font-serif text-2xl text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-gray-300 bg-white/60 px-3 py-1 text-xs text-gray-700">{t}</span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="max-w-2xl rounded-3xl bg-white p-6 shadow-xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 aspect-[16/9] w-full rounded-xl bg-gray-100" />
              <h3 className="font-serif text-2xl text-gray-900">{active.title}</h3>
              <p className="mt-3 text-gray-700">{active.process}</p>
              <div className="mt-6 flex justify-end">
                <button onClick={() => setActive(null)} className="rounded-full bg-gray-900 px-5 py-2 text-sm text-white">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
