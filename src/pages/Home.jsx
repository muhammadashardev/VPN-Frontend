import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Zap, Globe, Lock, CheckCircle2, ArrowRight, Star, Award, Users } from "lucide-react";
import Navbar from "../components/Navbar";

const Home = () => {
  const features = [
    { icon: Shield, title: "Military-Grade", desc: "Advanced AES-256 bit encryption keeping your data invisible to trackers." },
    { icon: Zap, title: "Quantum Speed", desc: "Powered by 10Gbps mesh network for zero-buffering 8K streaming." },
    { icon: Globe, title: "Global Mesh", desc: "Access 5000+ servers across 50 countries with seamless geo-switching." },
    { icon: Lock, title: "Zero Logs", desc: "Verified no-logs infrastructure. We don't just promise privacy, we engineer it." },
  ];

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden mesh-gradient">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-10 border border-primary/20"
          >
            <div className="flex -space-x-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-6 h-6 rounded-full border-2 border-dark bg-slate-800" />
               ))}
            </div>
            <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">Trusted by 2M+ Users Worldwide</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] max-w-5xl tracking-tight"
          >
            Secure Your <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">Digital Border</span> with One Click 🛡️
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-400 mb-12 max-w-3xl leading-relaxed"
          >
            Experience the internet without boundaries. AsharVPN provides elite protection, ultra-fast speeds, and global access in a single, beautiful interface.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link to="/dashboard" className="btn-primary text-xl px-12 py-5 flex items-center gap-3">
              Get Started Now <ArrowRight className="w-6 h-6" />
            </Link>
            <Link to="/pricing" className="btn-secondary text-xl px-12 py-5 outline outline-1 outline-white/10 hover:outline-primary/50">
              View World Map
            </Link>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-24 relative w-full max-w-6xl group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="glass p-3 rounded-[3rem] shadow-2xl relative z-10 overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Network Visualization" 
                className="rounded-[2.5rem] w-full h-[600px] object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              
              {/* Floating Dashboard Elements */}
              <div className="absolute bottom-12 left-12 right-12 flex flex-wrap gap-6 justify-center">
                 <div className="glass p-6 rounded-3xl animate-float">
                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">Encrypted</p>
                    <p className="text-2xl font-black">256-AES</p>
                 </div>
                 <div className="glass p-6 rounded-3xl animate-float" style={{ animationDelay: "1s" }}>
                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">Live Speed</p>
                    <p className="text-2xl font-black text-accent">940 Mbps</p>
                 </div>
                 <div className="glass p-6 rounded-3xl animate-float" style={{ animationDelay: "2s" }}>
                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">Server Latency</p>
                    <p className="text-2xl font-black text-primary">12ms</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 border-y border-white/5 bg-slate-900/20">
         <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-12 opacity-40 grayscale">
            <h2 className="text-2xl font-black italic">TechCrunch</h2>
            <h2 className="text-2xl font-black italic">The Verge</h2>
            <h2 className="text-2xl font-black italic">PCMag</h2>
            <h2 className="text-2xl font-black italic">Wired</h2>
         </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-black mb-6"
            >
              Engineered for Ultimate Privacy
            </motion.h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We've redesigned the VPN experience from the ground up, focusing on maximum transparency and unmatched performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-10 rounded-[2.5rem] hover:-translate-y-2 transition-all duration-500 border border-white/5 group"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <f.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Connectivity Visual */}
      <section className="py-32 bg-slate-950/50">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-5xl font-black mb-8 leading-tight">Connected Everywhere,<br />Tracked Nowhere.</h2>
               <div className="space-y-6">
                  {[
                    "No bandwidth limits or throttling, ever.",
                    "Smart protocol switching for invisible browsing.",
                    "One account protects all your devices."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="bg-accent/20 p-2 rounded-full">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-lg font-medium text-slate-300">{item}</span>
                    </div>
                  ))}
               </div>
               <button className="mt-12 btn-primary">Discover All 50 Countries</button>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
               <div className="glass p-8 rounded-[3rem] relative z-10 aspect-square flex items-center justify-center overflow-hidden">
                  <Globe className="w-full h-full text-primary/50 animate-[spin_60s_linear_infinite]" />
                  <div className="absolute flex flex-col items-center">
                    <span className="text-8xl font-black text-white">50+</span>
                    <span className="text-xl font-bold text-slate-400 uppercase tracking-[0.5em]">Countries</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto glass-dark bg-gradient-to-br from-primary/30 via-slate-900 to-accent/10 p-16 md:p-24 rounded-[4rem] border border-white/10 text-center relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent_70%)]" />
             <div className="relative z-10">
               <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Ready for total digital freedom?</h2>
               <p className="text-slate-300 mb-12 text-xl max-w-2xl mx-auto">Join the premium network that puts your privacy before profits.</p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="btn-primary text-2xl font-black px-12 py-6">
                    Start Protection - $4.99/mo
                 </button>
                 <div className="flex items-center gap-4 justify-center">
                    <div className="flex text-yellow-500">
                       <Star className="w-5 h-5 fill-current" />
                       <Star className="w-5 h-5 fill-current" />
                       <Star className="w-5 h-5 fill-current" />
                       <Star className="w-5 h-5 fill-current" />
                       <Star className="w-5 h-5 fill-current" />
                    </div>
                    <span className="font-bold text-slate-400">4.9/5 Average Rating</span>
                 </div>
               </div>
             </div>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-black tracking-tight">AsharVPN</span>
          </div>
          <div className="flex gap-8 mb-12 text-slate-500 font-medium">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Server Status</a>
             <a href="#" className="hover:text-white transition-colors">Affiliates</a>
          </div>
          <p className="text-slate-600 font-bold">&copy; 2026 AsharVPN Global Operations. All data encrypted.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
