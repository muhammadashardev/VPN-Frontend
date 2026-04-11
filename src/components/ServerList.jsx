import React, { useState, useMemo } from "react";
import { Search, Globe, ChevronRight, Zap, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const allServers = [
  { id: 1, name: "USA - New York", code: "US", country: "United States", flag: "🇺🇸", latency: 12, region: "Americas" },
  { id: 2, name: "Germany - Frankfurt", code: "DE", country: "Germany", flag: "🇩🇪", latency: 45, region: "Europe" },
  { id: 3, name: "Singapore - Central", code: "SG", country: "Singapore", flag: "🇸🇬", latency: 89, region: "Asia" },
  { id: 4, name: "UK - London", code: "GB", country: "United Kingdom", flag: "🇬🇧", latency: 34, region: "Europe" },
  { id: 5, name: "Japan - Tokyo", code: "JP", country: "Japan", flag: "🇯🇵", latency: 112, region: "Asia" },
  { id: 6, name: "Canada - Toronto", code: "CA", country: "Canada", flag: "🇨🇦", latency: 28, region: "Americas" },
  { id: 7, name: "France - Paris", code: "FR", country: "France", flag: "🇫🇷", latency: 41, region: "Europe" },
  { id: 8, name: "Australia - Sydney", code: "AU", country: "Australia", flag: "🇦🇺", latency: 160, region: "Asia" },
  { id: 9, name: "Netherlands - Amsterdam", code: "NL", country: "Netherlands", flag: "🇳🇱", latency: 38, region: "Europe" },
  { id: 10, name: "Brazil - São Paulo", code: "BR", country: "Brazil", flag: "🇧🇷", latency: 145, region: "Americas" },
  { id: 11, name: "India - Mumbai", code: "IN", country: "India", flag: "🇮🇳", latency: 95, region: "Asia" },
  { id: 12, name: "South Korea - Seoul", code: "KR", country: "South Korea", flag: "🇰🇷", latency: 105, region: "Asia" },
  { id: 13, name: "Italy - Milan", code: "IT", country: "Italy", flag: "🇮🇹", latency: 52, region: "Europe" },
  { id: 14, name: "Spain - Madrid", code: "ES", country: "Spain", flag: "🇪🇸", latency: 58, region: "Europe" },
  { id: 15, name: "Switzerland - Zurich", code: "CH", country: "Switzerland", flag: "🇨🇭", latency: 49, region: "Europe" },
  { id: 16, name: "Sweden - Stockholm", code: "SE", country: "Sweden", flag: "🇸🇪", latency: 62, region: "Europe" },
  { id: 17, name: "UAE - Dubai", code: "AE", country: "UAE", flag: "🇦🇪", latency: 82, region: "Asia" },
  { id: 18, name: "Turkey - Istanbul", code: "TR", country: "Turkey", flag: "🇹🇷", latency: 74, region: "Europe" },
  { id: 19, name: "South Africa - Cape Town", code: "ZA", country: "South Africa", flag: "🇿🇦", latency: 190, region: "Africa" },
  { id: 20, name: "Poland - Warsaw", code: "PL", country: "Poland", flag: "🇵🇱", latency: 65, region: "Europe" },
  { id: 21, name: "Mexico - Mexico City", code: "MX", country: "Mexico", flag: "🇲🇽", latency: 88, region: "Americas" },
  { id: 22, name: "Argentina - Buenos Aires", code: "AR", country: "Argentina", flag: "🇦🇷", latency: 175, region: "Americas" },
  { id: 23, name: "Norway - Oslo", code: "NO", country: "Norway", flag: "🇳🇴", latency: 68, region: "Europe" },
  { id: 24, name: "Denmark - Copenhagen", code: "DK", country: "Denmark", flag: "🇩🇰", latency: 64, region: "Europe" },
  { id: 25, name: "Finland - Helsinki", code: "FI", country: "Finland", flag: "🇫🇮", latency: 72, region: "Europe" },
  { id: 26, name: "Portugal - Lisbon", code: "PT", country: "Portugal", flag: "🇵🇹", latency: 61, region: "Europe" },
  { id: 27, name: "Ireland - Dublin", code: "IE", country: "Ireland", flag: "🇮🇪", latency: 55, region: "Europe" },
  { id: 28, name: "Belgium - Brussels", code: "BE", country: "Belgium", flag: "🇧🇪", latency: 59, region: "Europe" },
  { id: 29, name: "Austria - Vienna", code: "AT", country: "Austria", flag: "🇦🇹", latency: 57, region: "Europe" },
  { id: 30, name: "Greece - Athens", code: "GR", country: "Greece", flag: "🇬🇷", latency: 85, region: "Europe" },
  { id: 31, name: "Israel - Tel Aviv", code: "IL", country: "Israel", flag: "🇮🇱", latency: 92, region: "Asia" },
  { id: 32, name: "Saudi Arabia - Riyadh", code: "SA", country: "Saudi Arabia", flag: "🇸🇦", latency: 102, region: "Asia" },
  { id: 33, name: "Thailand - Bangkok", code: "TH", country: "Thailand", flag: "🇹🇭", latency: 125, region: "Asia" },
  { id: 34, name: "Vietnam - Hanoi", code: "VN", country: "Vietnam", flag: "🇻🇳", latency: 135, region: "Asia" },
  { id: 35, name: "Malaysia - Kuala Lumpur", code: "MY", country: "Malaysia", flag: "🇲🇾", latency: 128, region: "Asia" },
  { id: 36, name: "Indonesia - Jakarta", code: "ID", country: "Indonesia", flag: "🇮🇩", latency: 142, region: "Asia" },
  { id: 37, name: "Philippines - Manila", code: "PH", country: "Philippines", flag: "🇵🇭", latency: 155, region: "Asia" },
  { id: 38, name: "New Zealand - Auckland", code: "NZ", country: "New Zealand", flag: "🇳🇿", latency: 185, region: "Asia" },
  { id: 39, name: "Chile - Santiago", code: "CL", country: "Chile", flag: "🇨🇱", latency: 168, region: "Americas" },
  { id: 40, name: "Colombia - Bogota", code: "CO", country: "Colombia", flag: "🇨🇴", latency: 132, region: "Americas" },
  { id: 41, name: "Peru - Lima", code: "PE", country: "Peru", flag: "🇵🇪", latency: 148, region: "Americas" },
  { id: 42, name: "Czech Republic - Prague", code: "CZ", country: "Czech Republic", flag: "🇨🇿", latency: 66, region: "Europe" },
  { id: 43, name: "Hungary - Budapest", code: "HU", country: "Hungary", flag: "🇭🇺", latency: 69, region: "Europe" },
  { id: 44, name: "Romania - Bucharest", code: "RO", country: "Romania", flag: "🇷🇴", latency: 75, region: "Europe" },
  { id: 45, name: "Bulgaria - Sofia", code: "BG", country: "Bulgaria", flag: "🇧🇬", latency: 78, region: "Europe" },
  { id: 46, name: "Ukraine - Kyiv", code: "UA", country: "Ukraine", flag: "🇺🇦", latency: 88, region: "Europe" },
  { id: 47, name: "Egypt - Cairo", code: "EG", country: "Egypt", flag: "🇪🇬", latency: 115, region: "Africa" },
  { id: 48, name: "Nigeria - Lagos", code: "NG", country: "Nigeria", flag: "🇳🇬", latency: 178, region: "Africa" },
  { id: 49, name: "Kenya - Nairobi", code: "KE", country: "Kenya", flag: "🇰🇪", latency: 182, region: "Africa" },
  { id: 50, name: "Pakistan - Karachi", code: "PK", country: "Pakistan", flag: "🇵🇰", latency: 110, region: "Asia" },
];

const ServerList = ({ selectedId, onSelect }) => {
  const [search, setSearch] = useState("");
  const [activeRegion, setActiveRegion] = useState("All");

  const regions = ["All", "Americas", "Europe", "Asia", "Africa"];

  const filteredServers = useMemo(() => {
    return allServers.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
                            s.country.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = activeRegion === "All" || s.region === activeRegion;
      return matchesSearch && matchesRegion;
    });
  }, [search, activeRegion]);

  return (
    <div className="glass-dark rounded-[2.5rem] p-8 flex flex-col h-full overflow-hidden border border-white/5 shadow-2xl">
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <Globe className="w-6 h-6 text-primary" />
            Global Network
          </h3>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-800/50 px-3 py-1 rounded-full">
            {filteredServers.length} Locations
          </span>
        </div>

        {/* Search & Filters */}
        <div className="space-y-4">
          <div className="relative group">
            <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search by country or city..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-950/50 border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-slate-600"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeRegion === region 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Server Grid */}
      <div className="flex-1 overflow-y-auto server-scrollbar pr-2 space-y-2">
        <AnimatePresence mode="popLayout">
          {filteredServers.map((server) => (
            <motion.button
              layout
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={server.id}
              onClick={() => onSelect(server.id)}
              className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group relative overflow-hidden ${
                selectedId === server.id 
                  ? "bg-primary/10 border border-primary/40" 
                  : "hover:bg-white/5 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-5 relative z-10">
                <span className="text-3xl filter grayscale-[0.2] group-hover:grayscale-0 transition-all scale-110">
                  {server.flag}
                </span>
                <div className="text-left">
                  <p className={`font-bold transition-colors ${selectedId === server.id ? "text-white" : "text-slate-200 group-hover:text-white"}`}>
                    {server.name}
                  </p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                    {server.region}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="flex flex-col items-end">
                   <div className="flex items-center gap-1.5">
                      <Zap className={`w-3 h-3 ${
                        server.latency < 50 ? "text-accent" : server.latency < 100 ? "text-yellow-500" : "text-red-500"
                      }`} />
                      <span className={`text-sm font-bold ${
                        server.latency < 50 ? "text-accent" : "text-slate-400"
                      }`}>{server.latency}ms</span>
                   </div>
                   {server.latency < 50 && (
                     <span className="text-[9px] text-accent/60 font-black uppercase mt-0.5">Recommended</span>
                   )}
                </div>
                <ChevronRight className={`w-5 h-5 transition-all ${
                  selectedId === server.id ? "text-primary translate-x-1" : "text-slate-700 group-hover:text-slate-500 group-hover:translate-x-1"
                }`} />
              </div>

              {selectedId === server.id && (
                <motion.div 
                  layoutId="active-bg"
                  className="absolute inset-0 bg-primary/5 -z-0"
                />
              )}
            </motion.button>
          ))}
        </AnimatePresence>

        {filteredServers.length === 0 && (
          <div className="text-center py-20 flex flex-col items-center gap-4 opacity-40">
             <Globe className="w-16 h-16" />
             <p className="font-bold text-lg">No locations found</p>
             <button 
              onClick={() => {setSearch(""); setActiveRegion("All")}}
              className="text-primary hover:underline text-sm font-bold"
             >
                Reset all filters
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServerList;
