import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import VPNCard from "../components/VPNCard";
import ServerList from "../components/ServerList";
import { Download, Bell, User, ChevronDown, Activity, Globe, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedServer, setSelectedServer] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const toggleConnection = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsConnected(!isConnected);
      setIsRotating(false);
    }, 1500);
  };

  const logs = [
    { time: "10:45 AM", action: "Connected to USA - New York", status: "success" },
    { time: "09:12 AM", action: "System Check - All safe", status: "info" },
    { time: "Yesterday", action: "Connected to Germany - Frankfurt", status: "success" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <main className="flex-1 ml-64 p-8">
        {/* Top Header */}
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Ashar!</h1>
            <p className="text-slate-400">Your connection is currently {isConnected ? "protected" : "at risk"}.</p>
          </div>

          <div className="flex items-center gap-6">
             <button className="relative p-2 glass rounded-xl hover:bg-white/10 transition-all">
                <Bell className="w-6 h-6 text-slate-400" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-950" />
             </button>
             
             <div className="flex items-center gap-3 glass p-2 pr-4 rounded-2xl hover:bg-white/10 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold">A</div>
                <div className="text-left hidden lg:block">
                  <p className="text-sm font-bold">Ashar Mehmood</p>
                  <p className="text-xs text-slate-400">Pro Plan</p>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-500" />
             </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <VPNCard 
              isConnected={isConnected} 
              onToggle={toggleConnection} 
              latency={isConnected ? 22 : "--"}
            />
          </div>

          <div className="space-y-8">
            {/* User Info Card */}
            <div className="glass-dark rounded-3xl p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <User className="w-5 h-5 text-primary" />
                 Account Status
               </h3>
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Current Plan</span>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-bold">Premium Plus</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Expiration</span>
                    <span className="text-white font-medium">Dec 12, 2026</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Active Devices</span>
                    <span className="text-white font-medium">3 / 5</span>
                  </div>
               </div>
               <button className="w-full mt-6 py-3 border border-slate-700 rounded-xl text-sm font-bold hover:bg-white/5 transition-all">
                  Manage Subscription
               </button>
            </div>

            {/* Quick Actions */}
            <div className="glass-dark rounded-3xl p-6 bg-gradient-to-br from-primary/5 to-transparent">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <Download className="w-5 h-5 text-accent" />
                 Config Center
               </h3>
               <p className="text-sm text-slate-400 mb-6">Download OpenVPN or WireGuard configurations directly.</p>
               <button className="w-full py-4 bg-accent text-slate-950 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-400 transition-all shadow-lg shadow-accent/20">
                  <Download className="w-5 h-5" />
                  Download Config (.conf)
               </button>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
           <div className="xl:col-span-2 h-[500px]">
              <ServerList 
                selectedId={selectedServer} 
                onSelect={(id) => setSelectedServer(id)} 
              />
           </div>

           <div className="glass-dark rounded-3xl p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Recent Activity
              </h3>
              <div className="space-y-6">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${
                      log.status === "success" ? "bg-accent" : "bg-primary"
                    }`} />
                    <div>
                      <p className="text-sm font-medium">{log.action}</p>
                      <p className="text-xs text-slate-500 mt-1">{log.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 text-sm text-primary font-bold hover:underline">
                View All Activity Logs
              </button>
           </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
