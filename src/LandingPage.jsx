import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Mic, 
  Cpu, 
  Database, 
  ArrowRight, 
  Play,
  Pause,
  Box,
  Zap,
  Radio
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SolarOracle = () => {
  return (
    <div className="min-h-screen bg-bone text-ink font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-bone/80 backdrop-blur-md border-b border-black/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-bone rounded-full"></div>
            </div>
            <span className="font-display font-bold text-lg tracking-tighter text-ink">SOLAR ORACLE (1)</span>
          </div>
          <div className="flex items-center gap-6">
             <button className="bg-black text-white px-6 py-2 rounded-full text-xs font-medium hover:bg-stone-800 transition-colors">
               Pre-order
             </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <FadeIn>
              <h1 className="font-display font-bold text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8 text-ink">
                Internet.<br/>
                Without<br/>
                Screens.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-stone-500 leading-relaxed mb-10 max-w-sm">
                The first offline speech interface for the unconnected world. No grid. No literacy required.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex gap-4">
                <button className="border border-black/10 hover:border-black bg-white px-8 py-4 rounded-lg font-medium transition-all text-sm flex items-center gap-2">
                  Read the Whitepaper <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="relative aspect-square bg-stone-200 rounded-3xl overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621503348633-8a3d4678125a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-50 grayscale"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                {/* Conceptual Render Placeholder */}
                <div className="w-64 h-96 bg-[#2a2a2a] rounded-[3rem] shadow-2xl relative flex flex-col items-center justify-between p-6 border-l border-t border-white/10">
                   <div className="w-full h-1/2 bg-black/40 rounded-[2rem] border border-white/5 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
                         <div className="w-16 h-16 rounded-full bg-amber-500/20 blur-xl"></div>
                      </div>
                   </div>
                   <div className="w-full grid grid-cols-4 gap-2">
                      {[...Array(12)].map((_,i) => (
                        <div key={i} className="w-1 h-1 bg-white/20 rounded-full mx-auto"></div>
                      ))}
                   </div>
                   <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
                      Design Concept 004
                   </div>
                </div>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="font-display font-bold text-4xl tracking-tighter mb-16">System Architecture.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">
             
             {/* Large Card: Voice */}
             <FadeIn className="md:col-span-2 bg-bone rounded-2xl p-10 flex flex-col justify-between group hover:bg-stone-100 transition-colors relative overflow-hidden">
                <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors"></div>
                <div>
                   <Mic className="w-8 h-8 mb-6 text-ink" />
                   <h3 className="font-display font-bold text-2xl tracking-tight mb-2">Native Voice Interface</h3>
                   <p className="text-stone-500 max-w-sm">Eliminating literacy barriers with sub-200ms latency speech-to-speech interaction.</p>
                </div>
                <div className="w-full h-12 flex items-end gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                   {[...Array(20)].map((_,i) => (
                      <div key={i} className="w-full bg-black" style={{ height: `${Math.random() * 100}%` }}></div>
                   ))}
                </div>
             </FadeIn>

             {/* Tall Card: Solar */}
             <FadeIn delay={0.2} className="md:row-span-2 bg-[#18181B] text-bone rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-800 to-transparent opacity-50"></div>
                <div className="relative z-10">
                   <Sun className="w-8 h-8 mb-6" />
                   <h3 className="font-display font-bold text-2xl tracking-tight mb-2">Zero Grid.</h3>
                   <p className="text-stone-400 text-sm leading-relaxed">
                      Self-sustaining power architecture. 
                      <br/><br/>
                      40W Panel<br/>
                      LiFePO4 Storage<br/>
                      60°C Heat Tolerance
                   </p>
                </div>
                <div className="relative z-10 font-mono text-xs text-stone-600 uppercase tracking-widest">
                   Fig 2.1 — Power
                </div>
             </FadeIn>

             {/* Small Card: Offline */}
             <FadeIn delay={0.3} className="bg-bone rounded-2xl p-8 flex flex-col justify-center group hover:bg-stone-100 transition-colors">
                <Radio className="w-6 h-6 mb-4 text-ink" />
                <h3 className="font-display font-bold text-lg tracking-tight">100% Offline</h3>
                <p className="text-stone-500 text-sm mt-2">No 4G/5G required. Works in total isolation.</p>
             </FadeIn>

             {/* Small Card: Edge */}
             <FadeIn delay={0.4} className="bg-bone rounded-2xl p-8 flex flex-col justify-center group hover:bg-stone-100 transition-colors">
                <Cpu className="w-6 h-6 mb-4 text-ink" />
                <h3 className="font-display font-bold text-lg tracking-tight">Edge Intelligence</h3>
                <p className="text-stone-500 text-sm mt-2">1.5B Parameter model running locally.</p>
             </FadeIn>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-bone border-t border-black/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
             <div className="col-span-2">
                <span className="font-display font-bold text-lg tracking-tighter text-ink block mb-6">SOLAR ORACLE</span>
                <p className="text-stone-500 max-w-xs text-sm">
                   Designing technology for the other 2.6 billion.
                </p>
             </div>
             
             <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-6">Explore</h4>
                <ul className="space-y-4 text-sm font-medium">
                   <li><a href="#" className="hover:text-stone-500 transition-colors">Vision</a></li>
                   <li><a href="#" className="hover:text-stone-500 transition-colors">Stories</a></li>
                   <li><a href="#" className="hover:text-stone-500 transition-colors">Careers</a></li>
                </ul>
             </div>

             <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-6">Technical</h4>
                <ul className="space-y-4 text-sm font-medium">
                   <li><a href="https://github.com/tristanclaw/SolarOracle" className="hover:text-stone-500 transition-colors">GitHub Repo</a></li>
                   <li><a href="#" className="hover:text-stone-500 transition-colors">Hardware BOM</a></li>
                   <li><a href="#" className="hover:text-stone-500 transition-colors">Model Card</a></li>
                </ul>
             </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-black/5 flex justify-between items-center text-xs text-stone-400 font-mono">
             <div>© 2026 Solar Oracle Project</div>
             <div>Designed in Canada</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SolarOracle;
