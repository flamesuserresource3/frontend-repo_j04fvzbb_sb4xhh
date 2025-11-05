import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white via-white to-rose-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil to ensure text readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 py-24">
        <motion.h1 style={{ y, opacity }} className="font-serif text-5xl leading-tight text-gray-900 md:text-7xl">
          Husena Bohari
          <span className="block text-2xl font-normal tracking-wide text-gray-600 md:text-3xl">
            Imaginative Graphic Designer & Branding Enthusiast
          </span>
        </motion.h1>

        <motion.p
          style={{ y }}
          className="mt-6 max-w-2xl text-lg text-gray-700 md:text-xl"
        >
          Applied Arts student passionate about blending art with functionality. I explore logos, branding, posters, packaging, and experimental visuals to tell stories with clarity and style.
        </motion.p>

        <div className="mt-10 flex gap-4">
          <a href="#portfolio" className="group inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
            View Portfolio
            <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
          </a>
          <a href="#contact" className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-400">
            Let’s Connect
          </a>
        </div>

        {/* Playful micro-interactions: floating dots that react on hover */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:w-[480px]">
          {["Detail‑oriented","Modern aesthetics","Playful ideas"].map((tag, i) => (
            <motion.div
              key={tag}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
              className="rounded-2xl border border-gray-200 bg-white/70 px-4 py-3 text-center text-sm text-gray-700 shadow-sm backdrop-blur transition"
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
