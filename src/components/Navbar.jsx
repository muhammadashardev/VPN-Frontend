import React from "react";
import { Link } from "react-router-dom";
import { Shield, Menu as MenuIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-2xl">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            AsharVPN
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-300">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link to="/features" className="hover:text-primary transition-colors">Features</Link>
          <Link to="/login" className="hover:text-primary transition-colors">Login</Link>
          <Link to="/dashboard" className="btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white">
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
