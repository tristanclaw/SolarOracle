import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Mic, 
  Cpu, 
  Radio,
  Github,
  ArrowRight,
  Sprout,
  HeartPulse,
  Wrench
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
    <div className="min-h-screen bg-bone text-ink font-sans selection:bg-black selection:text-white overflow-x-hidden flex flex-col">
      
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
                <a href="#knowledge" className="hover:text-ink transition-colors">Knowledge</a>
                <a href="#specs" className="hover:text-ink transition-colors">Specs</a>
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

      {/* Full-Screen Hero */}
      <section className="flex-grow flex flex-col justify-center items-center pt-32 pb-20 container mx-auto px-6 relative">
        <FadeIn className="text-center max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-black/10 rounded-full bg-white/50 backdrop-blur-sm mb-10">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/60">Status: Architecture Phase // Seeking Contributors</span>
          </div>
          
          <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-8 text-ink">
            The Blueprint for<br/>
            Offline Knowledge.
          </h1>
          
          <p className="text-xl md:text-2xl text-ink/60 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            The world's first offline, solar-powered speech interface for the unconnected billion.
          </p>
          
          <a href="#roadmap" className="bg-ink hover:bg-black text-white px-10 py-5 rounded-full font-bold tracking-tight transition-all text-sm flex items-center gap-3 mx-auto hover:scale-105 inline-flex">
            View the Roadmap <ArrowRight className="w-4 h-4" />
          </a>
        </FadeIn>

        {/* Blueprint Schematic */}
        <FadeIn delay={0.4} className="mt-24 relative w-full max-w-md h-96 flex items-end justify-center">
            {/* The Kiosk Pillar - Wireframe */}
            <div className="w-48 h-80 border-2 border-dashed border-ink/20 rounded-t-3xl relative flex items-center justify-center">
              
              {/* Internal Structure Lines */}
              <div className="absolute inset-x-4 top-24 bottom-4 border border-ink/10 rounded-t-xl"></div>
              <div className="absolute top-32 left-0 right-0 h-px bg-ink/10 w-full"></div>
              <div className="absolute bottom-12 left-0 right-0 h-px bg-ink/10 w-full"></div>
              
              {/* Dimension Labels */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-mono text-ink/40 tracking-widest">
                 HEIGHT: 1.5M
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-ink/40 tracking-widest">
                 WIDTH: 0.4M
              </div>

              {/* Center Axis */}
              <div className="absolute top-0 bottom-0 w-px bg-ink/10 border-r border-dashed border-ink/20"></div>

              {/* Label */}
              <div className="absolute bottom-4 bg-white px-2 py-1 text-[9px] font-mono text-ink border border-ink/20">
                 MAIN_CHASSIS
              </div>
            </div>
            
            {/* The Solar Roof (Floating Wireframe) */}
            <motion.div 
               initial={{ y: -10 }}
               animate={{ y: 0 }}
               transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
               className="absolute top-0 w-72 h-16 border-2 border-dashed border-ink/20 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center z-20"
            >
               <div className="w-full h-px bg-ink/10 absolute"></div>
               <div className="h-full w-px bg-ink/10 absolute"></div>
               <div className="bg-white px-2 py-0.5 text-[9px] font-mono text-ink border border-ink/20 relative z-10">
                  SOLAR_ARRAY
               </div>
            </motion.div>
            
            {/* Connection Lines */}
            <div className="absolute top-8 w-px h-16 border-l border-dashed border-ink/30"></div>
        </FadeIn>
      </section>

      {/* Universal Knowledge Section */}
      <section id="knowledge" className="py-32 bg-bone border-t border-black/5">
         <div className="container mx-auto px-6">
            <FadeIn>
               <h2 className="font-display font-bold text-4xl tracking-tighter mb-16 text-center">Deployable Expertise.</h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                  {
                     icon: Sprout,
                     title: "Farming",
                     desc: "Instant answers on crop disease, planting cycles, and livestock health.",
                     q: "How do I stop weevils?",
                     a: "Dry maize thoroughly and use ash..."
                  },
                  {
                     icon: HeartPulse,
                     title: "First Aid",
                     desc: "Emergency triage protocols and basic medical guidance when no doctor is near.",
                     q: "Treatment for burn?",
                     a: "Cool water immediately..."
                  },
                  {
                     icon: Wrench,
                     title: "Infrastructure",
                     desc: "Repair guides for pumps, generators, and local machinery.",
                     q: "Pump not starting.",
                     a: "Check the intake valve..."
                  }
               ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-black/5 transition-colors group">
                     <div className="w-12 h-12 bg-bone rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                        <item.icon className="w-6 h-6 text-ink group-hover:text-accent transition-colors" />
                     </div>
                     <h3 className="font-display font-bold text-2xl tracking-tight mb-4">{item.title}</h3>
                     <p className="text-ink/60 mb-8 leading-relaxed h-20">{item.desc}</p>
                     
                     {/* Chat Bubble Visual */}
                     <div className="bg-bone rounded-xl p-4 text-xs font-mono space-y-3 opacity-60 group-hover:opacity-100 transition-opacity">
                        <div className="flex gap-2">
                           <div className="w-1 h-full bg-black/20 rounded-full"></div>
                           <span className="text-ink/50">Q: "{item.q}"</span>
                        </div>
                        <div className="flex gap-2">
                           <div className="w-1 h-full bg-accent rounded-full"></div>
                           <span className="text-ink font-medium">A: "{item.a}"</span>
                        </div>
                     </div>
                  </FadeIn>
               ))}
            </div>
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

      {/* Roadmap Section */}
      <section id="roadmap" className="py-32 bg-bone border-t border-black/5">
         <div className="container mx-auto px-6">
            <FadeIn>
               <div className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="font-display font-bold text-4xl tracking-tighter mb-4 text-ink">
                     Project Roadmap.
                  </h2>
                  <p className="text-ink/60">We are building in the open. Join us.</p>
               </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-8">
               {[
                  { phase: "01", title: "Architecture & Design", status: "Active", desc: "Defining hardware specs, power budget, and RAG pipeline." },
                  { phase: "02", title: "Prototype Build", status: "Q3 2026", desc: "First physical assembly and thermal testing." },
                  { phase: "03", title: "Field Trials", status: "Q4 2026", desc: "Deployment of 5 units to partner communities." }
               ].map((step, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="flex gap-8 items-start border-b border-black/5 pb-8">
                     <div className="font-display font-bold text-2xl text-ink/20">{step.phase}</div>
                     <div>
                        <div className="flex items-center gap-3 mb-2">
                           <h3 className="font-display font-bold text-xl">{step.title}</h3>
                           <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${step.status === 'Active' ? 'bg-accent text-white' : 'bg-black/5 text-ink/40'}`}>
                              {step.status}
                           </span>
                        </div>
                        <p className="text-ink/60 text-sm">{step.desc}</p>
                     </div>
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-32 bg-white border-t border-black/5">
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
      <footer className="py-20 bg-bone border-t border-black/5">
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
