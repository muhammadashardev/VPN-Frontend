import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import VPNCard from "../components/VPNCard";
import ServerList from "../components/ServerList";
import { Download, Bell, User, ChevronDown, Activity, Globe, ShieldCheck, TrendingUp, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Dashboard = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedServer, setSelectedServer] = useState(1);
  const [isConnecting, setIsConnecting] = useState(false);

  const toggleConnection = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnected(!isConnected);
      setIsConnecting(false);
    }, 1500);
  };

  const logs = [
    { time: "10:45 AM", action: "Connected to USA - New York", status: "success", icon: ShieldCheck },
    { time: "09:12 AM", action: "System Health Check Pass", status: "info", icon: Info },
    { time: "Yesterday", action: "Auto-Reconnect: Germany", status: "success", icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-dark text-white flex mesh-gradient overflow-hidden">
      <Sidebar />

      <main className="flex-1 ml-64 p-8 h-screen overflow-y-auto server-scrollbar">
        {/* Top Header */}
        <header className="flex items-center justify-between mb-12 relative z-10">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-black tracking-tight"
            >
              Control Center
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 font-medium mt-1"
            >
              System is {isConnected ? "Optimized & Protected" : "Ready for Deployment"}.
            </motion.p>
          </div>

          <div className="flex items-center gap-6">
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="relative p-3 glass-dark rounded-2xl hover:bg-white/10 transition-all border border-white/5"
             >
                <Bell className="w-5 h-5 text-slate-400" />
                <span className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full ring-4 ring-slate-950" />
             </motion.button>
             
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="flex items-center gap-4 glass-dark p-2 pr-5 rounded-2xl border border-white/5 cursor-pointer group"
             >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center font-black text-lg shadow-lg shadow-primary/20">A</div>
                <div className="text-left hidden lg:block">
                  <p className="text-sm font-bold group-hover:text-primary transition-colors">Ashar Mehmood</p>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Enterprise Plan</p>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-600 group-hover:text-white transition-all" />
             </motion.div>
          </div>
        </header>

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 relative z-10">
          
          {/* Main Content Area */}
          <div className="xl:col-span-8 space-y-8">
            
            {/* Connection Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur-2xl opacity-50 transition-all group-hover:opacity-100" />
              <div className="relative">
                <VPNCard 
                  isConnected={isConnected} 
                  onToggle={toggleConnection} 
                  latency={isConnected ? 24 : "--"}
                />
              </div>
            </div>

            {/* Server Selection */}
            <div className="h-[600px]">
               <ServerList 
                selectedId={selectedServer} 
                onSelect={(id) => setSelectedServer(id)} 
               />
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="xl:col-span-4 space-y-8">
            
            {/* Quick Stats Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-dark rounded-[2.5rem] p-8 border border-white/5 relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-all" />
               <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                 <Activity className="w-6 h-6 text-primary" />
                 Live Analytics
               </h3>
               
               <div className="mt-4 flex items-end gap-3 h-24">
                  {[40, 60, 45, 90, 65, 80, 50, 70, 85].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1, duration: 1 }}
                      className={`flex-1 rounded-t-full ${i === 8 ? "bg-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "bg-slate-800"}`}
                    />
                  ))}
               </div>
               
               <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-slate-950/50 p-4 rounded-2xl border border-white/5">
                     <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Upload</p>
                     <p className="text-xl font-black tracking-tight">{isConnected ? "124.5" : "0.0"} <span className="text-xs text-slate-600">Mbps</span></p>
                  </div>
                  <div className="bg-slate-950/50 p-4 rounded-2xl border border-white/5">
                     <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Download</p>
                     <p className="text-xl font-black tracking-tight text-accent">{isConnected ? "842.1" : "0.0"} <span className="text-xs text-slate-600">Mbps</span></p>
                  </div>
               </div>
            </motion.div>

            {/* Config & Support */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-dark bg-gradient-to-br from-primary/10 to-transparent rounded-[2.5rem] p-8 border border-white/5 overflow-hidden relative"
            >
               <TrendingUp className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 -rotate-12" />
               <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                 <Download className="w-6 h-6 text-accent" />
                 Configurations
               </h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-8">
                 Deploy your private credentials using industry standard protocols.
               </p>
               
               <div className="space-y-3">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
                  >
                     <ShieldCheck className="w-5 h-5" />
                     Get WireGuard
                  </motion.button>
                  <button className="w-full py-4 glass-dark rounded-2xl font-bold flex items-center justify-center gap-3 border border-white/10 hover:bg-white/5">
                     <Download className="w-5 h-5" />
                     OpenVPN (.conf)
                  </button>
               </div>
            </motion.div>

            {/* Activity Logs */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-dark rounded-[2.5rem] p-8 border border-white/5"
            >
               <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                 <Activity className="w-6 h-6 text-slate-400" />
                 Activity Logs
               </h3>
               <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
                 {logs.map((log, i) => (
                   <div key={i} className="flex gap-5 relative group">
                     <div className={`w-[16px] h-[16px] rounded-full mt-1.5 shrink-0 border-4 border-slate-900 z-10 ${
                       log.status === "success" ? "bg-accent" : "bg-primary"
                     }`} />
                     <div>
                       <p className="text-sm font-bold group-hover:text-primary transition-colors">{log.action}</p>
                       <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">{log.time}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
