import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Mic, 
  Cpu, 
  Database, 
  ArrowRight, 
  Box, 
  Zap, 
  Radio,
  Github
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
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="font-display font-bold text-lg tracking-tight text-ink uppercase">SOLAR ORACLE.</span>
          </div>
          <div className="flex items-center gap-8">
             <div className="hidden md:flex gap-8 text-sm font-medium text-ink/60">
                <a href="#vision" className="hover:text-ink transition-colors">Vision</a>
                <a href="#specs" className="hover:text-ink transition-colors">Specs</a>
                <a href="#impact" className="hover:text-ink transition-colors">Impact</a>
             </div>
             <a 
               href="https://github.com/tristanclaw/SolarOracle" 
               className="bg-ink text-bone px-5 py-2.5 rounded-full text-xs font-bold tracking-wide hover:bg-black transition-colors flex items-center gap-2"
             >
               <Github className="w-3 h-3" />
               VIEW SOURCE
             </a>
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
              <p className="text-lg md:text-xl text-ink/60 leading-relaxed mb-10 max-w-sm">
                The first offline speech interface for the unconnected world. No grid. No literacy required.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex gap-4">
                <button className="bg-accent hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold tracking-tight transition-all text-sm flex items-center gap-2">
                  Read Whitepaper <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="relative aspect-square bg-stone-200 rounded-3xl overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621503348633-8a3d4678125a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-50 grayscale"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                {/* Conceptual Render Placeholder - CSS Art */}
                <div className="w-56 h-[22rem] bg-[#2a2a2a] rounded-[2.5rem] shadow-2xl relative flex flex-col items-center p-6 border border-white/10 ring-1 ring-black/20">
                   {/* Solar Top */}
                   <div className="w-full h-1/3 bg-black/40 rounded-[1.5rem] border border-white/5 flex items-center justify-center mb-6 overflow-hidden relative">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:10px_10px]"></div>
                      <Sun className="text-white/20 w-8 h-8 relative z-10" />
                   </div>
                   {/* Speaker Grille */}
                   <div className="w-full grid grid-cols-4 gap-3 px-4">
                      {[...Array(16)].map((_,i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-full mx-auto"></div>
                      ))}
                   </div>
                   {/* Status Light */}
                   <div className="mt-auto w-full flex justify-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(217,119,6,0.8)]"></div>
                   </div>
                   
                   <div className="absolute -right-12 top-10 rotate-90 origin-left text-[8px] font-mono text-ink/40 tracking-widest uppercase whitespace-nowrap">
                      Fig 1.0 — Prototype
                   </div>
                </div>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* Specs Bento Grid */}
      <section id="specs" className="py-32 bg-white border-t border-black/5">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="font-display font-bold text-4xl tracking-tighter mb-16">System Architecture.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">
             
             {/* Large Card: Voice */}
             <FadeIn className="md:col-span-2 bg-bone rounded-2xl p-10 flex flex-col justify-between group hover:bg-stone-100 transition-colors relative overflow-hidden">
                <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors"></div>
                <div>
                   <Mic className="w-8 h-8 mb-6 text-ink" />
                   <h3 className="font-display font-bold text-2xl tracking-tight mb-2">Native Voice Interface</h3>
                   <p className="text-ink/60 max-w-sm">Eliminating literacy barriers with sub-200ms latency speech-to-speech interaction.</p>
                </div>
                <div className="w-full h-16 flex items-end gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                   {[...Array(30)].map((_,i) => (
                      <div key={i} className="w-full bg-black rounded-t-sm" style={{ height: `${Math.random() * 100}%` }}></div>
                   ))}
                </div>
             </FadeIn>

             {/* Tall Card: Solar */}
             <FadeIn delay={0.2} className="md:row-span-2 bg-[#18181B] text-bone rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-800 to-transparent opacity-50"></div>
                <div className="relative z-10">
                   <Sun className="w-8 h-8 mb-6 text-accent" />
                   <h3 className="font-display font-bold text-2xl tracking-tight mb-2">Zero Grid.</h3>
                   <div className="space-y-4 mt-6">
                      <div>
                        <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">Input</div>
                        <div className="font-display text-lg">40W Solar Panel</div>
                      </div>
                      <div>
                        <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">Storage</div>
                        <div className="font-display text-lg">LiFePO4 Array</div>
                      </div>
                      <div>
                        <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">Thermals</div>
                        <div className="font-display text-lg">60°C Tolerance</div>
                      </div>
                   </div>
                </div>
                <div className="relative z-10 font-mono text-xs text-stone-600 uppercase tracking-widest mt-auto pt-8 border-t border-white/10">
                   Fig 2.1 — Power Architecture
                </div>
             </FadeIn>

             {/* Small Card: Offline */}
             <FadeIn delay={0.3} className="bg-bone rounded-2xl p-8 flex flex-col justify-center group hover:bg-stone-100 transition-colors border border-transparent hover:border-black/5">
                <Radio className="w-6 h-6 mb-4 text-ink" />
                <h3 className="font-display font-bold text-lg tracking-tight">100% Offline</h3>
                <p className="text-ink/60 text-sm mt-2">No 4G/5G required. Works in total isolation.</p>
             </FadeIn>

             {/* Small Card: Edge */}
             <FadeIn delay={0.4} className="bg-bone rounded-2xl p-8 flex flex-col justify-center group hover:bg-stone-100 transition-colors border border-transparent hover:border-black/5">
                <Cpu className="w-6 h-6 mb-4 text-ink" />
                <h3 className="font-display font-bold text-lg tracking-tight">Edge Intelligence</h3>
                <p className="text-ink/60 text-sm mt-2">1.5B Parameter model running locally on Pi 5.</p>
             </FadeIn>

          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-32 bg-bone border-t border-black/5">
         <div className="container mx-auto px-6">
            <FadeIn>
               <div className="max-w-4xl mx-auto text-center">
                  <h2 className="font-display font-bold text-5xl tracking-tighter mb-8 text-ink">
                     Designing for the<br/>
                     <span className="text-accent">Other 2.6 Billion.</span>
                  </h2>
                  <p className="text-xl text-ink/60 leading-relaxed font-light">
                     We believe access to knowledge is a fundamental human right. 
                     The Solar Oracle bridges the digital divide without requiring literacy or electricity.
                  </p>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-black/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
             <div>
                <span className="font-display font-bold text-lg tracking-tight text-ink block mb-2 uppercase">SOLAR ORACLE.</span>
                <p className="text-ink/40 text-sm font-mono">
                   © 2026 Open Hardware Initiative.
                </p>
             </div>
             
             <div className="flex gap-8">
                <a href="#" className="text-sm font-bold tracking-tight hover:text-accent transition-colors">VISION</a>
                <a href="#" className="text-sm font-bold tracking-tight hover:text-accent transition-colors">SPECS</a>
                <a href="https://github.com/tristanclaw/SolarOracle" className="text-sm font-bold tracking-tight hover:text-accent transition-colors">GITHUB</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SolarOracle;
