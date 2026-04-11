import React, { useState } from "react";
import { Power, ShieldCheck, ShieldAlert, Zap } from "lucide-react";
import { motion } from "framer-motion";

const VPNCard = ({ isConnected, onToggle, latency = 24 }) => {
  return (
    <div className="glass-dark rounded-3xl p-8 relative overflow-hidden group">
      {/* Decorative Glow */}
      <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[100px] transition-colors duration-1000 ${
        isConnected ? "bg-accent/20" : "bg-primary/20"
      }`} />

      <div className="flex flex-col items-center text-center relative z-10">
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
          isConnected ? "bg-accent shadow-[0_0_40px_rgba(74,222,128,0.4)]" : "bg-slate-800"
        }`}>
          {isConnected ? (
            <ShieldCheck className="w-10 h-10 text-slate-900" />
          ) : (
            <ShieldAlert className="w-10 h-10 text-slate-400" />
          )}
        </div>

        <h2 className="text-3xl font-heading font-bold mb-2">
          {isConnected ? "Securely Connected" : "Not Protected"}
        </h2>
        <p className="text-slate-400 mb-8 max-w-[250px]">
          {isConnected 
            ? "Your internet traffic is encrypted and your IP is hidden." 
            : "Connect to a server to secure your connection and browse privately."
          }
        </p>

        <div className="flex gap-4 mb-8">
          <div className="px-4 py-2 glass-dark rounded-xl flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">{latency}ms</span>
          </div>
          <div className="px-4 py-2 glass-dark rounded-xl flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium">Auto Protocol</span>
          </div>
        </div>

        <button
          onClick={onToggle}
          className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 text-xl font-bold transition-all active:scale-95 shadow-2xl ${
            isConnected 
              ? "bg-slate-800 text-red-500 border border-red-500/20 hover:bg-red-500/5" 
              : "bg-primary text-white hover:bg-blue-700 shadow-primary/30"
          }`}
        >
          <Power className={`w-6 h-6 ${isConnected ? "animate-pulse" : ""}`} />
          {isConnected ? "Disconnect Now" : "Quick Connect"}
        </button>
      </div>
    </div>
  );
};

export default VPNCard;
