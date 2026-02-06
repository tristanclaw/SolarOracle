import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Box, 
  ArrowRight 
} from 'lucide-react';

const SolarOracle = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-900 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sun className="text-amber-500 w-6 h-6" />
            <span className="font-mono font-bold text-lg tracking-wider text-slate-100">SOLAR_ORACLE<span className="text-amber-500 animate-pulse">_</span></span>
          </div>
          <div className="hidden md:flex items-center gap-6 font-mono text-sm text-slate-400">
            <a href="#how-it-works" className="hover:text-amber-500 transition-colors">LOGIC</a>
            <a href="#hardware" className="hover:text-amber-500 transition-colors">HARDWARE</a>
            <a href="#specs" className="hover:text-amber-500 transition-colors">SPECS</a>
            <a href="https://github.com" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded border border-slate-700 hover:border-amber-500 transition-all text-slate-200">
              <Github className="w-4 h-4" />
              <span>REPO</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6">
        <div className="absolute top-0 right-0 -z-10 opacity-10">
          <div className="w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              SYSTEM ONLINE // V2.5
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-6">
              Zero Connectivity.<br />
              Zero Literacy.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">
                Universal Knowledge.
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              An open-source, offline, solar-powered speech interface for the next billion users. 
              Running <span className="text-slate-200 font-mono bg-slate-800 px-1 rounded">LiquidAI LFM2.5</span> on edge hardware.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded font-bold transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                <Code className="w-5 h-5" />
                VIEW THE CODE
              </button>
              <button className="flex items-center justify-center gap-2 bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-8 py-4 rounded font-medium transition-all">
                <Box className="w-5 h-5" />
                HARDWARE BOM
              </button>
            </div>
          </motion.div>
        </div>

        {/* Kiosk Placeholder Graphic */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden lg:block absolute top-32 right-0 w-1/3 h-[600px] border-l border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8"
        >
          <div className="h-full border border-slate-700/50 rounded-lg relative overflow-hidden bg-slate-800/30 flex flex-col items-center justify-center group">
            <div className="w-32 h-4 bg-slate-700 mb-2"></div>
            <div className="w-48 h-64 bg-slate-900 border-2 border-slate-700 rounded-xl relative flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors"></div>
              <Mic className="w-12 h-12 text-slate-600 group-hover:text-amber-500 transition-colors" />
            </div>
            <div className="w-8 h-48 bg-slate-800 mt-2"></div>
            <div className="w-32 h-2 bg-slate-700"></div>
            
            {/* Solar Roof */}
            <div className="absolute top-10 w-40 h-24 bg-blue-900/20 border border-blue-500/30 transform -skew-x-12 origin-bottom-left flex items-center justify-center">
              <Sun className="text-amber-500/50 w-8 h-8" />
            </div>
            
            <div className="absolute bottom-4 left-4 font-mono text-xs text-slate-500">
              FIG 1.0: FIELD UNIT
            </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-800 flex-1"></div>
            <h2 className="font-mono text-amber-500 text-sm tracking-widest">SYSTEM_LOGIC // AUDIO RAG</h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative">
            {/* Flow Steps */}
            {[
              { icon: Mic, label: "User Speaks", sub: "Local Dialect" },
              { icon: Cpu, label: "Pi 5 Processing", sub: "Offline Transcribe" },
              { icon: Database, label: "RAG Search", sub: "Vector DB Look-up" },
              { icon: Volume2, label: "LFM2.5 Speaks", sub: "Text-to-Speech" }
            ].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-full md:w-64 p-6 bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-xl relative group transition-all"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <step.icon className="w-10 h-10 text-slate-400 group-hover:text-amber-500 mb-4 transition-colors" />
                  <h3 className="font-bold text-lg text-slate-200 mb-1">{step.label}</h3>
                  <p className="font-mono text-xs text-slate-500 uppercase">{step.sub}</p>
                </motion.div>
                {index < 3 && (
                  <ArrowRight className="hidden md:block text-slate-700 w-6 h-6 flex-shrink-0" />
                )}
                {index < 3 && (
                  <div className="md:hidden h-8 w-px bg-slate-700 my-2"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <span className="inline-block px-4 py-2 bg-slate-900 border border-slate-700 rounded text-sm text-slate-400 font-mono">
              <span className="text-amber-500">●</span> NO NPU REQUIRED
            </span>
          </div>
        </div>
      </section>

      {/* Hardware Stack */}
      <section id="hardware" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <HardDrive className="text-amber-500" />
          The Hardware Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: Cpu, 
              title: "Compute", 
              spec: "Raspberry Pi 5 (8GB)", 
              desc: "Chosen for high-bandwidth GGUF CPU inference without dedicated NPU." 
            },
            { 
              icon: Battery, 
              title: "Power", 
              spec: "40W Panel + LiFePO4", 
              desc: "LiFePO4 chemistry chosen for stability in high heat (up to 60°C)." 
            },
            { 
              icon: HardDrive, 
              title: "Storage", 
              spec: "NVMe SSD", 
              desc: "Industrial grade SSD eliminates SD card corruption risks in power-loss events." 
            },
            { 
              icon: Mic, 
              title: "Audio", 
              spec: "USB Mic + Gore Vents", 
              desc: "IP66 rated assembly with acoustic vents to prevent moisture ingress." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-amber-500 transition-colors group overflow-hidden relative"
            >
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-slate-700/20 rounded-full group-hover:bg-amber-500/10 transition-colors"></div>
              <item.icon className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="font-mono text-xs text-amber-500 mb-3">{item.spec}</p>
              <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-3 mt-3 opacity-80 group-hover:opacity-100 transition-opacity">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Field Ready / Weatherproofing */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-500 font-mono text-sm mb-4">
              <Umbrella className="w-4 h-4" />
              <span>FIELD HARDENING</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Built for the Monsoon.</h2>
            <p className="text-slate-400 text-lg mb-8">
              Hardware fails where people live. The Solar Oracle is engineered to survive 98% humidity, dust storms, and flash floods.
            </p>
            
            <ul className="space-y-4">
              {[
                "Passive Chimney Cooling (No moving fans)",
                "Conformal Coating on all PCB surfaces",
                "1.5m Flood Elevation Stand",
                "Thermal throttles tuned for Equatorial Sun"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative">
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-slate-500">
              THERMAL_STATUS: NOMINAL
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Thermometer className="text-red-400" />
                  <span className="font-mono text-sm">Internal Temp</span>
                </div>
                <span className="font-mono text-amber-500">42°C</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-amber-500 w-3/4"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="text-blue-400" />
                  <span className="font-mono text-sm">Humidity</span>
                </div>
                <span className="font-mono text-blue-400">89%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[89%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Snippet */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-slate-700">
            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-black/20">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 font-mono text-xs text-slate-400">core_loop.py</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed">
                <span className="text-slate-500"># The Infinite Knowledge Loop</span>{'\n'}
                <span className="text-purple-400">while</span> <span className="text-yellow-200">True</span>:{'\n'}
                {'    '}audio = <span className="text-blue-400">listen</span>(mic){'\n'}
                {'    '}query = model.<span className="text-blue-400">transcribe</span>(audio){'\n'}
                {'    '}facts = <span className="text-blue-400">search_offline_db</span>(query){'\n'}{'\n'}
                {'    '}<span className="text-slate-500"># The magic: Injecting facts into the speech stream</span>{'\n'}
                {'    '}model.<span className="text-blue-400">speak</span>({'\n'}
                {'        '}system_prompt=facts,{'\n'}
                {'        '}user_audio=audio{'\n'}
                {'    '})
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-2xl font-bold mb-16 text-slate-200">Deployed for Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Healthcare", query: "How do I treat a burn?", color: "border-red-500/30" },
              { title: "Agriculture", query: "When should I plant maize?", color: "border-green-500/30" },
              { title: "Maintenance", query: "My generator is making a clicking sound.", color: "border-blue-500/30" },
            ].map((useCase, i) => (
              <div key={i} className={`p-8 bg-slate-900 border ${useCase.color} rounded-lg relative hover:-translate-y-1 transition-transform`}>
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">{useCase.title}</h3>
                <div className="flex gap-3">
                  <div className="w-1 h-full bg-slate-800 rounded-full"></div>
                  <p className="text-lg font-medium text-slate-200 italic">"{useCase.query}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sun className="text-amber-500 w-6 h-6" />
            <span className="font-bold text-xl tracking-tight text-white">SOLAR_ORACLE</span>
          </div>
          
          <div className="flex justify-center gap-8 mb-12 font-mono text-sm text-slate-400">
            <a href="#" className="hover:text-amber-500">LiquidAI Model Card</a>
            <a href="#" className="hover:text-amber-500">Build Guide</a>
            <a href="#" className="hover:text-amber-500">Donate</a>
          </div>
          
          <p className="font-mono text-xs text-slate-600">
            Built for the field. Powered by the sun. <br />
            MIT License 2026.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SolarOracle;
