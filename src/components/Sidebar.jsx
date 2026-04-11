import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Globe, Settings, User, LogOut, ChevronRight } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Servers", path: "/servers", icon: Globe },
    { name: "Profile", path: "/profile", icon: User },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 glass-dark h-screen fixed left-0 top-0 flex flex-col p-6">
      <div className="flex items-center gap-2 mb-10 px-2 mt-4">
        <div className="bg-primary w-8 h-8 rounded flex items-center justify-center">
          <Globe className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold">AsharVPN</span>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all group ${
                isActive ? "bg-primary text-white" : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </div>
              {isActive && <ChevronRight className="w-4 h-4" />}
            </Link>
          );
        })}
      </nav>

      <button className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all mt-auto group">
        <LogOut className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span className="font-medium">Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;
