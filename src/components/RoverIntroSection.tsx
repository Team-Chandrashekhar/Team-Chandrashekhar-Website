import RoverModel from "./RoverModel";
import { CheckCircle2, Cpu, Zap, Signal, Video, Target, Database } from "lucide-react";

interface RoverIntroSectionProps {
  scrollProgress: number; // 0 to 1
}

export default function RoverIntroSection({ scrollProgress }: RoverIntroSectionProps) {
  // Rover entry translation (slides in from left)
  // At progress 0, slide offset is -200px. By progress 0.4, it reaches 0px.
  const slideProgress = Math.min(1, Math.max(0, scrollProgress * 2.5));
  const roverXOffset = -150 * (1 - slideProgress);
  const roverOpacity = slideProgress;

  // Rover rotation and scale (driven by scrolling after entry)
  // As scroll goes from 0.4 to 1.0, rotate slightly and scale up.
  const secondaryProgress = Math.min(1, Math.max(0, (scrollProgress - 0.4) * 1.6));
  const roverRotation = secondaryProgress * 15; // rotates 0 to 15 degrees
  const roverScale = 1 + secondaryProgress * 0.12; // scales 100% to 112%

  // Text slide in from right
  const textProgress = Math.min(1, Math.max(0, (scrollProgress - 0.1) * 2));
  const textXOffset = 150 * (1 - textProgress);
  const textOpacity = textProgress;

  const features = [
    {
      title: "Electromagnetic Climbing",
      desc: "Four high-power electromagnets that cling securely to steel beams, supporting up to 15kg of vertical payload.",
      icon: Zap,
      accent: "text-amber-500 bg-amber-50",
    },
    {
      title: "Dual ESP32 Controllers",
      desc: "Equipped with dual-core microcontrollers managing synchronized motor drive, sensor fusion, and wireless streaming.",
      icon: Cpu,
      accent: "text-blue-500 bg-blue-50",
    },
    {
      title: "Wireless Telemetry",
      desc: "Robust 2.4GHz Wi-Fi/Bluetooth link transmitting critical structural telemetry and control streams up to 150m.",
      icon: Signal,
      accent: "text-emerald-500 bg-emerald-50",
    },
    {
      title: "Live Camera Feed",
      desc: "High-definition wide-angle inspection camera streaming low-latency video feeds directly to the operator's tablet.",
      icon: Video,
      accent: "text-indigo-500 bg-indigo-50",
    },
    {
      title: "Autonomous Crack Detection",
      desc: "Edge AI vision processing that scans and highlights surface fissures and paint defects in real-time.",
      icon: Target,
      accent: "text-red-500 bg-red-50",
    },
    {
      title: "Real-Time Data Collection",
      desc: "Onboard storage and instant cloud logging for acceleration, magnetic field strength, and ambient humidity.",
      icon: Database,
      accent: "text-purple-500 bg-purple-50",
    },
  ];

  return (
    <section id="intro" className="relative py-24 bg-white overflow-hidden">
      {/* Engineering blueprint grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            SECTION 03 // THE ROBOTIC SOLUTION
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            MEET THE
            <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ELECTROMAGNETIC ROVER
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-light">
            Designed to go where humans cannot. High-torque magnetic drive system enables vertical climbing, inverted ceiling crawling, and precision steel inspections.
          </p>
        </div>

        {/* Rover & Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Rover Interactive Model (6 cols) */}
          <div
            className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[420px] transition-all duration-75 ease-out"
            style={{
              transform: `translateX(${roverXOffset}px)`,
              opacity: roverOpacity,
            }}
          >
            {/* Technical Target Circle behind Rover */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-blue-100/50 flex items-center justify-center animate-[spin_40s_linear_infinite] pointer-events-none">
              <div className="w-[300px] h-[300px] rounded-full border border-dashed border-blue-200/50" />
              <div className="w-[180px] h-[180px] rounded-full border border-blue-300/20" />
            </div>

            {/* The Live Animate-on-Scroll Rover Schematic */}
            <RoverModel
              className="w-full max-w-[450px]"
              rotation={roverRotation}
              scale={roverScale}
              isClimbing={false}
              magneticPulse={true}
              laserActive={secondaryProgress > 0.3}
            />

            {/* Live Telemetry Card floating below Rover */}
            <div className="mt-6 bg-slate-950 text-white font-mono text-[10px] p-4 rounded-xl shadow-lg border border-slate-800 w-72">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-2">
                <span className="text-blue-400 font-bold">ROVER STATUS SPEC</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
                <div>CHASSIS: <span className="text-white font-bold">AL-7075</span></div>
                <div>WT: <span className="text-white font-bold">3.2 KG</span></div>
                <div>ADHESION: <span className="text-white font-bold">4x 600N</span></div>
                <div>BATTERY: <span className="text-white font-bold">5200mAH</span></div>
                <div>DRIVE: <span className="text-white font-bold">4WD Coreless</span></div>
                <div>EDGE AI: <span className="text-white font-bold">ESP32 Cam</span></div>
              </div>
            </div>
          </div>

          {/* Right Column: Features and Checklists (6 cols) */}
          <div
            className="lg:col-span-6 transition-all duration-75 ease-out"
            style={{
              transform: `translateX(${textXOffset}px)`,
              opacity: textOpacity,
            }}
          >
            {/* Short Tagline */}
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
              Core Capabilities & Inspection Technology
            </h3>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={index}
                    className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/20 transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-2.5 mb-2">
                      <div className={`p-2 rounded-lg ${feat.accent} group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">{feat.title}</h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Checkmark summary row */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Fail-Safe Magnetic Lock</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Wireless Operation</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero Scaffolding Required</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
