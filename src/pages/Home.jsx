import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Zap, Globe, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

const Home = () => {
  const features = [
    { icon: Shield, title: "Military-Grade Encryption", desc: "Your data is protected with industry-leading AES-256 encryption." },
    { icon: Zap, title: "Ultra Fast Servers", desc: "Enjoy high-speed streaming and browsing without any lag or buffering." },
    { icon: Globe, title: "Global Access", desc: "Bypass geo-restrictions and access your favorite content from anywhere." },
    { icon: Lock, title: "No-Logs Policy", desc: "We never track, collect, or share your private data. Your privacy is priority." },
  ];

  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 blur-[150px] -z-10 rounded-full" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
          >
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Your Online Privacy, Our Mission</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl"
          >
            Secure Your Internet with <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">AsharVPN 🔒</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 mb-10 max-w-2xl"
          >
            Experience lightning-fast speeds and bulletproof security. Connect to over 100+ secure servers worldwide with just one click. 
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/dashboard" className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/pricing" className="glass px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all border border-white/10">
              View Pricing
            </Link>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20 relative w-full max-w-5xl"
          >
            <div className="glass p-2 rounded-3xl shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                alt="Dashboard Preview" 
                className="rounded-2xl w-full h-auto opacity-80"
              />
            </div>
            {/* Visual Overlays */}
            <div className="absolute -top-10 -right-10 glass p-6 rounded-2xl animate-bounce hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-slate-900" />
                </div>
                <div className="text-left">
                  <p className="font-bold">Connected</p>
                  <p className="text-xs text-slate-400">USA - New York Server</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose AsharVPN?</h2>
            <p className="text-slate-400">The most powerful and secure VPN service for your devices.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl hover:bg-white/20 transition-all border border-white/5 group"
              >
                <div className="bg-primary/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass-dark bg-gradient-to-br from-primary/20 to-accent/10 p-12 rounded-[3rem] border border-white/10 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent)]" />
             <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Stop Waiting, Start Protecting.</h2>
             <p className="text-slate-300 mb-10 text-lg relative z-10">Take the first step towards a more secure and free internet today.</p>
             <button className="btn-primary text-xl px-12 py-5 relative z-10 shadow-[0_0_50px_rgba(37,99,235,0.4)]">
                Get Started for Free
             </button>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-slate-500">
        <p>&copy; 2026 AsharVPN. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
