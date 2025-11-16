import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[84vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.3)]"
          >
            Master your driving exam with premium precision
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-5 text-lg sm:text-xl text-white/90"
          >
            Elite-quality mock tests, real-time analytics, and personalized coaching to get you road-ready with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <button className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-600/30 transition hover:brightness-105">
              Start free trial
            </button>
            <button className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white/95 backdrop-blur-sm transition hover:bg-white/20">
              See how it works
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/80"
          >
            {[
              ['98%','Pass insights'],
              ['300+','Exam questions'],
              ['24/7','AI tutor'],
              ['Pro','Roadmap'],
            ].map(([stat, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-bold text-white">{stat}</div>
                <div className="text-xs uppercase tracking-widest text-white/70">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
