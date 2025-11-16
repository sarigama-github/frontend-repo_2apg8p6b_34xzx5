import { motion } from 'framer-motion';
import { ShieldCheck, Gauge, LineChart, BookOpen } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Exam-realistic simulations',
    desc: 'Timed tests, randomized questions, and real DMV-like conditions.',
  },
  {
    icon: Gauge,
    title: 'Adaptive difficulty',
    desc: 'Questions evolve to challenge you just enough to improve fast.',
  },
  {
    icon: LineChart,
    title: 'Live performance analytics',
    desc: 'Track accuracy, speed, weak topics, and readiness score.',
  },
  {
    icon: BookOpen,
    title: 'Premium study library',
    desc: 'Curated explanations, tips, and visuals designed by instructors.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black to-[#0b0d10] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight"
        >
          Engineered for results
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-2xl text-white/70"
        >
          Everything you need to pass on the first try, wrapped in a polished, premium experience.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-rose-600 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
