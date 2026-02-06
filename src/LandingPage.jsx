import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Mic, 
  Cpu, 
  Database, 
  ArrowRight, 
  Globe2, 
  Leaf, 
  WifiOff 
} from 'lucide-react';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const SolarOracle = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-slate-900 font-sans selection:bg-emerald-900 selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#FDFCF8]/80 backdrop-blur-md border-b border-stone-200">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-900 rounded-full flex items-center justify-center">
              <Sun className="text-[#FDFCF8] w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">Solar Oracle</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#vision" className="hover:text-emerald-900 transition-colors">Vision</a>
            <a href="#features" className="hover:text-emerald-900 transition-colors">Technology</a>
            <button className="bg-slate-900 hover:bg-black text-white px-5 py-2.5 rounded-full transition-colors text-xs font-semibold tracking-wide">
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              The Future of Access
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-8">
              The Internet,<br />
              <span className="text-emerald-900">Without the Screen.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
              The world's first offline, solar-powered speech interface designed to bring universal knowledge to the unconnected billion.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-emerald-900/20 w-full sm:w-auto">
                Read the Whitepaper
              </button>
              <button className="bg-white border border-stone-200 hover:border-emerald-900 text-slate-900 px-8 py-4 rounded-full font-medium transition-all w-full sm:w-auto">
                Join the Waitlist
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Conceptual Visual Placeholder */}
        <FadeIn delay={0.5}>
          <div className="mt-20 relative max-w-5xl mx-auto">
            <div className="aspect-[16/9] bg-gradient-to-b from-stone-200 to-stone-100 rounded-2xl overflow-hidden shadow-2xl relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              {/* Abstract Kiosk Shape */}
              <div className="relative w-32 h-64 bg-slate-900 rounded-t-full shadow-2xl flex flex-col items-center">
                 <div className="w-full h-1/3 bg-slate-800 rounded-t-full flex items-center justify-center border-b border-slate-700">
                    <Sun className="text-emerald-500 w-8 h-8 opacity-80" />
                 </div>
                 <div className="w-1 h-20 bg-emerald-500/20 mt-8 rounded-full"></div>
              </div>
            </div>
            <div className="absolute -bottom-10 left-10 md:left-20 bg-white p-6 rounded-xl shadow-xl border border-stone-100 max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                 <WifiOff className="w-5 h-5 text-emerald-900" />
                 <span className="font-bold text-slate-900">Zero Connectivity</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Operating independently of grid and cellular networks.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* The Problem */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                2.6 Billion<br />
                <span className="text-emerald-900">Unconnected.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  For one-third of the global population, human knowledge is locked behind barriers of literacy, electricity, and connectivity.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We are removing those barriers. Not by building more cell towers, but by bringing the cloud to the ground.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Solution (Bento Grid) */}
      <section id="features" className="py-32 bg-[#FDFCF8]">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold mb-4">Engineered for Access</h2>
              <p className="text-slate-500">Advanced capabilities. Zero complexity.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Mic, 
                title: "Native Voice Interface", 
                desc: "No reading required. Just speak naturally in local dialects." 
              },
              { 
                icon: Sun, 
                title: "Zero Grid Dependency", 
                desc: "Self-sustaining solar architecture. Runs anywhere the sun shines." 
              },
              { 
                icon: Cpu, 
                title: "Edge Intelligence", 
                desc: "1.5B parameters of offline reasoning running entirely on-device." 
              },
              { 
                icon: Database, 
                title: "Infinite Context", 
                desc: "Localized RAG knowledge base tailored to community needs." 
              }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl transition-all h-full group">
                  <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors">
                    <feature.icon className="w-6 h-6 text-slate-900 group-hover:text-emerald-900 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section id="vision" className="py-32 bg-emerald-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <FadeIn>
            <Leaf className="w-12 h-12 text-emerald-400 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Built for the Middle of Nowhere.</h2>
            <p className="text-xl text-emerald-100 leading-relaxed mb-12 font-light">
              Designed to withstand monsoons, heat, and dust. A set-and-forget knowledge node for agriculture, healthcare, and education.
            </p>
            <button className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors inline-flex items-center gap-2">
              Explore the Technology <ArrowRight className="w-4 h-4" />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-stone-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
              <Sun className="text-white w-3 h-3" />
            </div>
            <span className="font-bold text-slate-900">Solar Oracle</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900">Vision</a>
            <a href="#" className="hover:text-slate-900">Technology</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
          
          <div className="text-sm text-slate-400 mt-4 md:mt-0">
            © 2026 The Solar Oracle Project.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SolarOracle;
