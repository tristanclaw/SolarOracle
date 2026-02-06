import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, 
  Cpu, 
  Database, 
  Volume2, 
  Sun, 
  Battery, 
  HardDrive, 
  Umbrella, 
  Thermometer, 
  Activity, 
  Code, 
  Github, 
  Download, 
  ArrowRight,
  Play,
  Terminal,
  WifiOff,
  ShieldCheck
} from 'lucide-react';

const SolarOracle = () => {
  const [isListening, setIsListening] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);

  // Simulated audio visualizer
  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        setAudioLevel(Math.random() * 100);
      }, 100);
      setTimeout(() => setIsListening(false), 3000); // Stop after 3s
      return () => clearInterval(interval);
    } else {
      setAudioLevel(0);
    }
  }, [isListening]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-900 overflow-x-hidden relative">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0f172a]/90 backdrop-blur border-b-2 border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-amber-500 rounded-sm animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
            <span className="font-mono font-bold text-lg tracking-wider text-slate-100">SOLAR_ORACLE<span className="text-amber-500">_</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm text-slate-400">
            <a href="#logic" className="hover:text-amber-500 transition-colors uppercase tracking-widest text-xs">System Logic</a>
            <a href="#specs" className="hover:text-amber-500 transition-colors uppercase tracking-widest text-xs">Specs</a>
            <a href="https://github.com/tristanclaw/SolarOracle" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 border border-slate-700 hover:border-amber-500 transition-all text-slate-200 uppercase text-xs font-bold tracking-wider">
              <Github className="w-4 h-4" />
              <span>Source</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6 z-10">
        <div className="absolute top-0 right-0 -z-10 opacity-20">
          <div className="w-96 h-96 bg-amber-500 rounded-full blur-[128px]"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-mono mb-8 uppercase tracking-widest">
              <WifiOff className="w-3 h-3" />
              <span>Offline • Independent • Resilient</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight text-white mb-6 font-mono">
              THE SOLAR<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">ORACLE</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-xl mb-10 leading-relaxed font-light border-l-2 border-amber-500/50 pl-6">
              Zero Connectivity. Universal Knowledge. <br/>
              A ruggedized, speech-to-speech AI kiosk for the next billion users.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://github.com/tristanclaw/SolarOracle" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 font-bold transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] uppercase tracking-wider font-mono text-sm border-b-4 border-amber-700 hover:border-amber-600 active:border-b-0 active:translate-y-1">
                <Github className="w-5 h-5" />
                View Source
              </a>
              <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white px-8 py-4 font-bold transition-all uppercase tracking-wider font-mono text-sm group">
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Build Guide
              </button>
            </div>

            {/* Simulated Interaction */}
            <div className="bg-slate-800/50 border border-slate-700 p-4 rounded max-w-md backdrop-blur-sm">
               <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-500 uppercase">System Status</span>
                  <div className="flex gap-1">
                    <div className={`w-2 h-2 rounded-full ${isListening ? 'bg-red-500 animate-pulse' : 'bg-slate-600'}`}></div>
                    <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
               </div>
               
               <button 
                onClick={() => setIsListening(!isListening)}
                className={`w-full h-16 border-2 border-dashed ${isListening ? 'border-amber-500 bg-amber-500/10' : 'border-slate-600 hover:border-slate-500'} rounded flex items-center justify-center gap-3 transition-all group`}
               >
                 {isListening ? (
                   <div className="flex items-center gap-1 h-8">
                     {[...Array(8)].map((_, i) => (
                       <motion.div 
                        key={i}
                        animate={{ height: [10, Math.random() * 32 + 10, 10] }}
                        transition={{ duration: 0.2, repeat: Infinity }}
                        className="w-1.5 bg-amber-500 rounded-full"
                       />
                     ))}
                   </div>
                 ) : (
                   <>
                    <Play className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-sm text-slate-300">INITIATE AUDIO QUERY_</span>
                   </>
                 )}
               </button>
            </div>
          </motion.div>

          {/* Right Column: Code/Terminal Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block"
          >
             <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-purple-600 rounded-lg blur opacity-20"></div>
             <div className="relative bg-[#0d1117] rounded-lg border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm">
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-black/50">
                   <Terminal className="w-4 h-4 text-slate-400" />
                   <span className="text-slate-400 text-xs">root@solar-oracle:~</span>
                </div>
                <div className="p-6 text-slate-300 space-y-2">
                   <div className="flex gap-2">
                      <span className="text-green-400">➜</span>
                      <span>python3 core_loop.py</span>
                   </div>
                   <div className="text-slate-500 italic"># Initializing LFM2.5 (1.5B)...</div>
                   <div className="text-slate-500 italic"># Loading Vector DB... OK</div>
                   <br/>
                   <div className="pl-4 border-l-2 border-slate-700">
                      <span className="text-purple-400">while</span> <span className="text-amber-300">True</span>:<br/>
                      &nbsp;&nbsp;audio = <span className="text-blue-400">listen</span>(mic)<br/>
                      &nbsp;&nbsp;query = model.<span className="text-blue-400">transcribe</span>(audio)<br/>
                      &nbsp;&nbsp;<span className="text-slate-500"># &gt; "How do I treat a burn?"</span><br/>
                      &nbsp;&nbsp;facts = <span className="text-blue-400">rag_search</span>(query)<br/>
                      &nbsp;&nbsp;model.<span className="text-blue-400">speak</span>(facts)
                   </div>
                   <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-2 h-4 bg-amber-500 mt-2"
                   />
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Logic Pipeline */}
      <section id="logic" className="py-24 bg-[#0b101e] border-y border-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-mono text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">Architecture</h2>
            <h3 className="text-3xl font-bold text-white">The Knowledge Pipeline</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {[
               { icon: Mic, title: "Input", desc: "User Speech" },
               { icon: Cpu, title: "Process", desc: "Pi 5 Inference" },
               { icon: Database, title: "Retrieval", desc: "Vector Search" },
               { icon: Volume2, title: "Output", desc: "AI Speech" }
             ].map((item, i) => (
               <div key={i} className="relative">
                  <div className="h-full bg-slate-900 border border-slate-800 p-8 hover:border-amber-500/50 transition-colors group">
                    <item.icon className="w-10 h-10 text-slate-500 group-hover:text-amber-500 mb-6 transition-colors" />
                    <h4 className="font-mono text-lg font-bold text-slate-200 mb-2">{item.title}</h4>
                    <p className="text-slate-500 font-mono text-xs uppercase tracking-wider">{item.desc}</p>
                    
                    {/* Connector Line (Mobile hidden) */}
                    {i < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-6 w-8 h-px bg-slate-800 z-20">
                        <div className="w-2 h-2 bg-slate-800 rotate-45 absolute -right-1 -top-1 border-t border-r border-slate-700"></div>
                      </div>
                    )}
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Hardware Bento Grid */}
      <section id="specs" className="py-24 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <HardDrive className="text-amber-500" />
          Field Hardware Specs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-96">
          {/* Main Card */}
          <div className="lg:col-span-2 lg:row-span-2 bg-slate-800/30 border-2 border-slate-700 p-8 relative overflow-hidden group hover:border-amber-500/50 transition-all">
             <div className="absolute top-0 right-0 p-4 opacity-50">
               <Cpu className="w-24 h-24 text-slate-700 group-hover:text-amber-500/10 transition-colors" />
             </div>
             <h3 className="text-2xl font-bold mb-2">Compute Module</h3>
             <p className="font-mono text-amber-500 mb-6">Raspberry Pi 5 (8GB)</p>
             <p className="text-slate-400 leading-relaxed max-w-sm">
               Selected for high-bandwidth GGUF CPU inference. Delivers 4-5 tokens/sec for speech synthesis without a dedicated NPU.
             </p>
             <div className="mt-8 flex gap-2">
                <span className="px-2 py-1 bg-slate-700 rounded text-xs font-mono">ARM64</span>
                <span className="px-2 py-1 bg-slate-700 rounded text-xs font-mono">2.4GHz</span>
             </div>
          </div>

          {/* Sub Cards */}
          <div className="bg-slate-800/30 border-2 border-slate-700 p-6 hover:border-amber-500/50 transition-all group">
             <Battery className="w-8 h-8 text-amber-500 mb-4" />
             <h4 className="font-bold text-lg">Power</h4>
             <p className="text-xs font-mono text-slate-500 mt-1 mb-2">LiFePO4 + 40W Panel</p>
             <div className="h-px bg-slate-700 w-full my-3"></div>
             <p className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
               Heat tolerant up to 60°C. &gt;2000 cycles.
             </p>
          </div>

          <div className="bg-slate-800/30 border-2 border-slate-700 p-6 hover:border-amber-500/50 transition-all group">
             <HardDrive className="w-8 h-8 text-amber-500 mb-4" />
             <h4 className="font-bold text-lg">Storage</h4>
             <p className="text-xs font-mono text-slate-500 mt-1 mb-2">NVMe SSD 256GB</p>
             <div className="h-px bg-slate-700 w-full my-3"></div>
             <p className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
               Prevents SD card corruption on power loss.
             </p>
          </div>

          <div className="lg:col-span-2 bg-slate-800/30 border-2 border-slate-700 p-6 flex items-center justify-between hover:border-amber-500/50 transition-all">
             <div>
               <h4 className="font-bold text-lg flex items-center gap-2">
                 <Mic className="w-5 h-5 text-amber-500" />
                 Audio Array
               </h4>
               <p className="text-sm text-slate-400 mt-2">IP66 Waterproof Mic + Gore Acoustic Vents</p>
             </div>
             <div className="text-right hidden sm:block">
               <div className="text-xs font-mono text-slate-500">SENSITIVITY</div>
               <div className="text-amber-500 font-bold">-42dB ±3dB</div>
             </div>
          </div>
        </div>
      </section>

      {/* Monsoon Defense */}
      <section className="py-20 bg-[#0f172a] border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-xl relative overflow-hidden">
             {/* Decorative Warning Stripe */}
             <div className="absolute top-0 left-0 w-2 h-full bg-repeating-linear-gradient(45deg, #f59e0b, #f59e0b 10px, #0f172a 10px, #0f172a 20px)"></div>
             
             <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
               <div>
                  <div className="flex items-center gap-2 text-amber-500 font-mono text-xs uppercase tracking-widest mb-4">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Environmental Hardening</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Monsoon Defense</h2>
                  <p className="text-slate-400 mb-8">
                    Engineered for the harshest climates. We assume the hardware will be rained on, overheated, and covered in dust.
                  </p>
                  
                  <div className="space-y-4 font-mono text-sm">
                    {[
                      { label: "PCB Protection", val: "Acrylic Conformal Coating" },
                      { label: "Flood Safety", val: "1.5m Steel Elevation Stand" },
                      { label: "Cooling", val: "Passive Chimney Effect (Fanless)" },
                      { label: "Ingress", val: "IP65 Enclosure Rating" },
                    ].map((spec, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="text-slate-500">{spec.label}</span>
                        <span className="text-amber-500">{spec.val}</span>
                      </div>
                    ))}
                  </div>
               </div>
               
               <div className="h-64 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                  <Umbrella className="w-20 h-20 text-slate-700 relative z-10" />
                  <div className="absolute bottom-4 right-4 text-xs font-mono text-slate-600">
                    TEST_ID: H2O_RESIST_01
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-[#0b101e]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <Sun className="text-amber-500 w-5 h-5" />
              <span className="font-bold text-lg tracking-tight text-white font-mono">SOLAR_ORACLE</span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              MIT License 2026. Open Source Hardware.
            </p>
          </div>
          
          <div className="flex gap-8 font-mono text-xs text-slate-400 uppercase tracking-wider">
            <a href="#" className="hover:text-amber-500">Model Card</a>
            <a href="#" className="hover:text-amber-500">Assembly Docs</a>
            <a href="#" className="hover:text-amber-500">Contributors</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SolarOracle;
