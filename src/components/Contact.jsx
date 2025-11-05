import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [flap, setFlap] = useState(false);

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <h2 className="font-serif text-4xl text-gray-900 md:text-5xl">Let’s Connect</h2>
        <p className="mt-3 max-w-2xl text-gray-600">Say hello or share a brief! I love collaborating on logos, branding, posters, and playful experiments.</p>
      </div>

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Animated envelope */}
        <div className="flex items-center justify-center">
          <motion.div
            className="relative h-48 w-72"
            onHoverStart={() => setFlap(true)}
            onHoverEnd={() => setFlap(false)}
            whileHover={{ y: -6 }}
          >
            {/* Envelope body */}
            <div className="absolute inset-x-0 bottom-0 h-40 rounded-b-2xl border border-gray-300 bg-white shadow" />
            {/* Flap */}
            <motion.div
              className="absolute left-1/2 top-0 h-36 w-72 -translate-x-1/2 origin-top rounded-t-2xl border border-gray-300 bg-gradient-to-b from-rose-100 to-white"
              animate={{ rotateX: flap ? 160 : 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              style={{ transformStyle: 'preserve-3d' }}
            />
            {/* Letter */}
            <motion.div
              className="absolute left-1/2 top-6 h-28 w-60 -translate-x-1/2 rounded-xl border border-gray-200 bg-white"
              animate={{ y: flap ? -30 : 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            >
              <div className="p-4 text-center">
                <p className="font-serif text-lg text-gray-900">Let’s Create!</p>
                <p className="text-sm text-gray-600">Tap a link to reach me</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Links */}
        <div className="space-y-5">
          <a href="mailto:husenabohari@example.com" className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1">
            <span className="rounded-xl bg-gray-900 p-3 text-white"><Mail size={18} /></span>
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-sm text-gray-600">husenabohari@example.com</p>
            </div>
            <span className="ml-auto text-gray-400 transition group-hover:translate-x-1">→</span>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1">
            <span className="rounded-xl bg-pink-500 p-3 text-white"><Instagram size={18} /></span>
            <div>
              <p className="font-medium text-gray-900">Instagram</p>
              <p className="text-sm text-gray-600">@husenabohari</p>
            </div>
            <span className="ml-auto text-gray-400 transition group-hover:translate-x-1">→</span>
          </a>
          <a href="https://behance.net/" target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1">
            <span className="rounded-xl bg-blue-600 p-3 text-white"><ExternalLink size={18} /></span>
            <div>
              <p className="font-medium text-gray-900">Behance</p>
              <p className="text-sm text-gray-600">/husenabohari</p>
            </div>
            <span className="ml-auto text-gray-400 transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
