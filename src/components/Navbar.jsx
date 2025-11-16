import { Menu, Car, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-4 py-3 shadow-[0_6px_30px_-12px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center gap-2">
            <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-white shadow-inner">
              <Car className="h-5 w-5" />
              <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-yellow-300" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">Drivemaster</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors">
              Sign in
            </button>
            <button className="inline-flex rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-600/30 hover:brightness-105 transition">
              Get Started
            </button>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white/80">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </motion.nav>
      </div>
    </div>
  );
}
