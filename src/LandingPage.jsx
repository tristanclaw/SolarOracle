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
  Wrench,
  CheckCircle2,
  Circle,
  Zap,
  Code,
  Box
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
                <a href="#roadmap" className="hover:text-ink transition-colors">Roadmap</a>
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

      {/* Planned Capabilities (Replaces Universal Knowledge) */}
      <section id="knowledge" className="py-32 bg-bone border-t border-black/5">
         <div className="container mx-auto px-6">
            <FadeIn>
               <h2 className="font-display font-bold text-4xl tracking-tighter mb-16 text-center">Planned Capabilities.</h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                  {
                     title: "Agricultural Triage",
                     input: "My maize has white spots.",
                     output: "Diagnosis and organic treatment options."
                  },
                  {
                     title: "Emergency Health",
                     input: "How to treat a scorpion sting?",
                     output: "Immediate first-aid steps while seeking help."
                  },
                  {
                     title: "Equipment Repair",
                     input: "Solar pump error code 4.",
                     output: "Troubleshooting steps from the manual."
                  }
               ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="border border-ink/20 rounded-2xl p-8 hover:border-ink/50 transition-colors">
                     <h3 className="font-display font-bold text-xl tracking-tight mb-6">{item.title}</h3>
                     <div className="space-y-4 text-sm">
                        <div>
                           <div className="text-[10px] font-mono text-ink/40 uppercase tracking-widest mb-1">Input</div>
                           <p className="font-medium text-ink">"{item.input}"</p>
                        </div>
                        <div>
                           <div className="text-[10px] font-mono text-ink/40 uppercase tracking-widest mb-1">Output</div>
                           <p className="text-ink/60">"{item.output}"</p>
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

      {/* Project Roadmap */}
      <section id="roadmap" className="py-32 bg-white border-t border-black/5">
         <div className="container mx-auto px-6">
            <FadeIn>
               <h2 className="font-display font-bold text-4xl tracking-tighter mb-20 text-center">Project Roadmap.</h2>
            </FadeIn>

            <div className="max-w-2xl mx-auto relative pl-8 border-l border-ink/10">
               {/* Phase 1 */}
               <FadeIn delay={0.1} className="mb-16 relative">
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-accent border-4 border-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                     <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">Current Phase</span>
                     <span className="text-sm font-mono text-ink/40">Q1 2026</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl tracking-tight mb-4 text-ink">Architecture & Definition</h3>
                  <ul className="space-y-3">
                     {[
                        "Define Hardware Stack (Pi 5 + LiFePO4)",
                        "Select Speech Model (Liquid LFM 1.5B)",
                        "Establish RAG Knowledge Schema"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-ink font-medium">
                           <CheckCircle2 className="w-4 h-4 text-accent" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </FadeIn>

               {/* Phase 2 */}
               <FadeIn delay={0.2} className="mb-16 relative opacity-50">
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-white ring-1 ring-ink/20"></div>
                  <div className="flex items-center gap-4 mb-4">
                     <span className="text-sm font-mono text-ink/40">Q3 2026</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl tracking-tight mb-4 text-ink">Prototyping</h3>
                  <ul className="space-y-3">
                     {[
                        "3D Print Enclosure V1",
                        "First Offline Power Tests",
                        "Thermal Stress Testing"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-ink">
                           <Circle className="w-4 h-4 text-ink/20" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </FadeIn>

               {/* Phase 3 */}
               <FadeIn delay={0.3} className="relative opacity-50">
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-white ring-1 ring-ink/20"></div>
                  <div className="flex items-center gap-4 mb-4">
                     <span className="text-sm font-mono text-ink/40">2027</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl tracking-tight mb-4 text-ink">Pilot Deployment</h3>
                  <ul className="space-y-3">
                     {[
                        "Field Deployment: Rift Valley",
                        "Local Language Training",
                        "Community Feedback Loop"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-ink">
                           <Circle className="w-4 h-4 text-ink/20" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* Help Build It (Open Roles) */}
      <section className="py-32 bg-[#18181B] text-bone">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
               <FadeIn>
                  <h2 className="font-display font-bold text-5xl tracking-tighter mb-4 text-white">
                     This is Open Hardware.<br/>
                     <span className="text-stone-500">We need hands.</span>
                  </h2>
               </FadeIn>
               <FadeIn delay={0.2}>
                   <a 
                     href="https://github.com/tristanclaw/SolarOracle" 
                     className="bg-accent hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold tracking-tight transition-all text-sm flex items-center gap-2"
                   >
                     <Github className="w-4 h-4" />
                     Contribute on GitHub
                   </a>
               </FadeIn>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                  {
                     icon: Zap,
                     role: "Electrical Engineers",
                     task: "Help design the BMS and Solar charging circuits for maximum efficiency."
                  },
                  {
                     icon: Code,
                     role: "Python Developers",
                     task: "Assist with LFM 2.5 integration, RAG logic, and audio pipeline."
                  },
                  {
                     icon: Box,
                     role: "Industrial Designers",
                     task: "Optimize the enclosure for passive cooling in 45°C+ environments."
                  }
               ].map((job, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                     <job.icon className="w-8 h-8 text-stone-500 mb-6 group-hover:text-accent transition-colors" />
                     <h3 className="font-display font-bold text-xl mb-3">{job.role}</h3>
                     <p className="text-stone-400 text-sm leading-relaxed">{job.task}</p>
                  </FadeIn>
               ))}
            </div>
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
