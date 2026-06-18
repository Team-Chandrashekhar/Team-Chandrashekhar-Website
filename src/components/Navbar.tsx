import { Activity, ShieldAlert, Disc, Cpu, Compass, Sliders, Wrench, BarChart2, Calendar, CheckCircle2 } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const navItems = [
    { id: "hero", label: "Overview", icon: Compass },
    { id: "challenge", label: "The Challenge", icon: ShieldAlert },
    { id: "intro", label: "The Rover", icon: Cpu },
    { id: "climbing", label: "Climbing Mech", icon: Disc },
    { id: "inspection", label: "Inspection", icon: Sliders },
    { id: "dashboard", label: "Live Telemetry", icon: Activity },
    { id: "maintenance", label: "Maintenance", icon: Wrench },
    { id: "benefits", label: "Impact & Stats", icon: BarChart2 },
    { id: "future", label: "Future Scope", icon: Calendar },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-500/30">
            <span className="font-mono font-black text-lg">B</span>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
          </div>
          <div>
            <h1 className="text-sm font-black tracking-tight text-slate-900 leading-none">
              BRIDGE MONITORING ROVER
            </h1>
            <p className="text-[10px] font-mono text-slate-400 mt-0.5 tracking-wider">
              SYS-VER.4.0 // CO-PILOT
            </p>
          </div>
        </div>

        {/* Desktop Navigation Link Pills */}
        <nav className="hidden xl:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-600 shadow-sm border border-blue-100/50"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button & Status Telemetry */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex flex-col items-end font-mono text-[10px] text-slate-400">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-slate-600 font-semibold">ROVER ONLINE</span>
            </div>
            <span>PING: 14ms // 98.2% BIND</span>
          </div>

          <button
            onClick={() => scrollToSection("final")}
            className="flex items-center space-x-2 bg-slate-950 hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Deploy Spec</span>
          </button>
        </div>
      </div>
    </header>
  );
}
