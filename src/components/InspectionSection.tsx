import { useEffect, useState } from "react";
import { Scan, Eye, Activity, ShieldCheck, Radio, Sparkles } from "lucide-react";

interface InspectionSectionProps {
  scrollProgress: number; // 0 to 1
}

interface Hotspot {
  id: number;
  x: number; // percentage
  y: number; // percentage
  name: string;
  type: string;
  readout: string;
}

export default function InspectionSection({ scrollProgress }: InspectionSectionProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  // 5 stages mapped to scroll progress ranges
  useEffect(() => {
    // scrollProgress goes from 0 to 1
    const step = Math.min(4, Math.floor(scrollProgress * 5));
    setActiveStep(step);
  }, [scrollProgress]);

  const stages = [
    {
      step: 1,
      title: "Surface Scanning",
      desc: "Wide-field optical scanners assess paint integrity, detecting peeling, surface dirt, and early signs of structural stress.",
      icon: Scan,
      color: "text-blue-500 bg-blue-50 border-blue-200",
      target: "LENS CORE CALIBRATED // GAIN 1.2x",
    },
    {
      step: 2,
      title: "Crack Detection",
      desc: "Edge-based computer vision sweeps the surface to identify microscopic concrete fissures and weld cracks down to 0.1mm.",
      icon: Eye,
      color: "text-red-500 bg-red-50 border-red-200",
      target: "FRACTURE FOUND // WIDTH 0.42mm // ADVISORY",
    },
    {
      step: 3,
      title: "Corrosion Analysis",
      desc: "Electromagnetic and ultrasonic depth sensors measure steel thickness loss and corrosion depth beneath paint layers.",
      icon: Activity,
      color: "text-orange-500 bg-orange-50 border-orange-200",
      target: "LOSS DEPTH: 1.8mm // SURFACE OXIDIZED",
    },
    {
      step: 4,
      title: "Structural Assessment",
      desc: "Onboard DSP algorithms calculate real-time load distribution anomalies and vibrational deflection rates.",
      icon: ShieldCheck,
      color: "text-purple-500 bg-purple-50 border-purple-200",
      target: "STRUCTURAL INDEX: 92/100 // NOMINAL",
    },
    {
      step: 5,
      title: "Data Transmission",
      desc: "Telemetric inspection reports, HD images, and coordinate logs are uploaded securely to the control base via dual-channel Wi-Fi.",
      icon: Radio,
      color: "text-emerald-500 bg-emerald-50 border-emerald-200",
      target: "TX COMPLETED // 4.8MB LOG DISPATCHED",
    },
  ];

  const hotspots: Hotspot[] = [
    { id: 0, x: 50, y: 30, name: "Optical Lens Scanner", type: "Surface Scan", readout: "SCAN AREA: 400cm²" },
    { id: 1, x: 25, y: 65, name: "Weld Joint Crack", type: "Crack Check", readout: "CRACK WIDTH: 0.42mm" },
    { id: 2, x: 75, y: 75, name: "Gusset Plate Corner", type: "Corrosion check", readout: "STEEL LOSS: 8.4%" },
    { id: 3, x: 50, y: 85, name: "Anchor Bolt Tension", type: "Stress Check", readout: "TORQUE: 450 Nm" },
    { id: 4, x: 80, y: 20, name: "Telemetry Antenna", type: "Data Uplink", readout: "SIGNAL: -62 dBm" },
  ];

  const currentHotspot = hotspots[activeStep] || hotspots[0];

  return (
    <section id="inspection" className="relative py-24 bg-white overflow-hidden">
      {/* Structural grid line pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            SECTION 05 // MISSION PROTOCOLS
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            5-STAGE HIGH PRECISION
            <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              INSPECTION PROTOCOL
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-light">
            The rover executes an autonomous sequence, scanning critical weld joints, bolts, and steel webs with micro-millimeter precision.
          </p>
        </div>

        {/* Interactive Inspection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Steel Gusset Plate & Laser Scanner Mockup (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* The Gusset Plate Visualizer Box */}
            <div className="relative w-full aspect-[4/3] max-w-[600px] bg-slate-100 rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 flex items-center justify-center">
              
              {/* Grid backdrop overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-25" />

              {/* Steel Plate Drawing (SVG) */}
              <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 500 380" fill="none">
                {/* Steel gusset plate polygon */}
                <polygon
                  points="50,60 450,60 410,320 90,320"
                  fill="#e2e8f0"
                  stroke="#94a3b8"
                  strokeWidth="6"
                  className="drop-shadow-lg"
                />
                
                {/* Steel plate internal panel cuts */}
                <polygon
                  points="70,80 430,80 390,300 110,300"
                  fill="#cbd5e1"
                  stroke="#94a3b8"
                  strokeWidth="2.5"
                  opacity="0.8"
                />

                {/* Industrial Rivet points around the steel plate borders */}
                {/* Top Row */}
                {Array.from({ length: 9 }).map((_, i) => (
                  <circle key={`t-${i}`} cx={65 + i * 46} cy="70" r="6" fill="#64748b" stroke="#475569" strokeWidth="2" />
                ))}
                {/* Bottom Row */}
                {Array.from({ length: 7 }).map((_, i) => (
                  <circle key={`b-${i}`} cx={110 + i * 46} cy="310" r="6" fill="#64748b" stroke="#475569" strokeWidth="2" />
                ))}
                {/* Left Angled Row */}
                <circle cx="60" cy="120" r="6" fill="#64748b" stroke="#475569" />
                <circle cx="70" cy="180" r="6" fill="#64748b" stroke="#475569" />
                <circle cx="80" cy="240" r="6" fill="#64748b" stroke="#475569" />
                
                {/* Right Angled Row */}
                <circle cx="440" cy="120" r="6" fill="#64748b" stroke="#475569" />
                <circle cx="430" cy="180" r="6" fill="#64748b" stroke="#475569" />
                <circle cx="420" cy="240" r="6" fill="#64748b" stroke="#475569" />

                {/* Laser Scanning Line sweeps from left/right or top/bottom over active hotspot */}
                <line
                  x1="50"
                  y1={70 + (activeStep * 55)}
                  x2="450"
                  y2={70 + (activeStep * 55)}
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeDasharray="6 3"
                  className="animate-pulse"
                />
                
                {/* Glowing Laser scanning gradient beam overlay */}
                <rect
                  x="70"
                  y={60 + (activeStep * 55)}
                  width="360"
                  height="20"
                  fill="url(#laserBeamGrad)"
                  opacity="0.35"
                  className="transition-all duration-300"
                />

                <defs>
                  <linearGradient id="laserBeamGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Glowing Pulsing Markers on top of plate */}
              {hotspots.map((spot, i) => {
                const isActive = activeStep === i;
                return (
                  <div
                    key={spot.id}
                    className="absolute transition-all duration-300"
                    style={{
                      left: `${spot.x}%`,
                      top: `${spot.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Ring Pulse */}
                    <span
                      className={`absolute w-12 h-12 -left-6 -top-6 rounded-full border-2 border-blue-500 transition-transform duration-1000 origin-center ${
                        isActive ? "animate-ping scale-100 opacity-100" : "scale-50 opacity-0"
                      }`}
                    />
                    <span
                      className={`absolute w-8 h-8 -left-4 -top-4 rounded-full border border-blue-400 transition-transform duration-700 origin-center ${
                        isActive ? "animate-pulse scale-100 opacity-100" : "scale-50 opacity-0"
                      }`}
                    />
                    
                    {/* Core Button/Node */}
                    <button
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[9px] font-bold border-2 transition-all duration-300 ${
                        isActive
                          ? "bg-blue-600 text-white border-white scale-125 shadow-lg shadow-blue-500/50"
                          : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {i + 1}
                    </button>

                    {/* Miniature tooltip floating above active node */}
                    {isActive && (
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-mono py-1 px-2 rounded whitespace-nowrap shadow-md z-30 border border-slate-700 flex items-center space-x-1">
                        <Sparkles className="w-3 h-3 text-yellow-400 animate-spin" style={{ animationDuration: "3s" }} />
                        <span>{spot.name}</span>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Simulated Rover Scanning Footprint (bounding box overlay) */}
              <div
                className="absolute w-32 h-32 border-2 border-dashed border-blue-500/80 rounded-xl pointer-events-none transition-all duration-500 flex items-center justify-center bg-blue-500/5"
                style={{
                  left: `${currentHotspot.x}%`,
                  top: `${currentHotspot.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="absolute top-1 left-1 text-[8px] font-mono text-blue-600 font-bold">INS-BOX V4</span>
              </div>
            </div>

            {/* Diagnostic Telemetry Output below visualizer */}
            <div className="w-full max-w-[600px] mt-6 bg-slate-900 text-emerald-400 font-mono text-xs p-4 rounded-xl border border-slate-800 shadow-md">
              <div className="flex justify-between border-b border-slate-800 pb-2 mb-2 text-slate-400 text-[10px]">
                <span>DIAGNOSTIC TELEMETRY MATRIX</span>
                <span className="text-emerald-500 animate-pulse font-bold">● ONLINE SCANNING</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                <div>STAGE ACTIVE: <span className="text-white">0{activeStep + 1} // {stages[activeStep]?.title}</span></div>
                <div>NODE FOCUS: <span className="text-white">{currentHotspot.name}</span></div>
                <div>SENSOR FEED: <span className="text-yellow-400">{stages[activeStep]?.target}</span></div>
                <div>MUTABLE HZ: <span className="text-white">52.8 GHz U-LOBE</span></div>
                <div>COORDINATES: <span className="text-white">X:{currentHotspot.x * 4}mm Y:{currentHotspot.y * 3}mm</span></div>
                <div>LINK BUDGET: <span className="text-white">99.4% (EXCELLENT)</span></div>
              </div>
            </div>

          </div>

          {/* Right Column: Steps Description Timeline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = activeStep === index;
              return (
                <div
                  key={stage.step}
                  className={`p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? "bg-blue-50/50 border-blue-400/50 shadow-md translate-x-2"
                      : "bg-slate-50/40 border-slate-200 opacity-60 hover:opacity-90"
                  }`}
                >
                  {/* Background progress bar for the active step */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 animate-[pulse_1.5s_infinite]" style={{ width: "100%" }} />
                  )}

                  <div className="flex items-start space-x-4">
                    {/* Stage number bubble */}
                    <div className={`w-8 h-8 rounded-full font-mono text-xs font-bold flex items-center justify-center border transition-colors duration-300 ${
                      isActive ? "bg-blue-600 text-white border-blue-500" : "bg-slate-100 text-slate-500 border-slate-200"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Text Details */}
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-base flex items-center justify-between">
                        <span>{stage.title}</span>
                        {isActive && (
                          <span className="text-[9px] font-mono font-black text-blue-600 tracking-wider uppercase bg-blue-100 px-2 py-0.5 rounded animate-pulse">
                            SCANNING
                          </span>
                        )}
                      </h3>
                      <p className="mt-1.5 text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
