import { useEffect, useState } from "react";
import RoverModel from "./RoverModel";
import { Magnet, ShieldCheck, ArrowUpCircle, Award } from "lucide-react";

interface ClimbingSectionProps {
  scrollProgress: number; // 0 to 1
}

export default function ClimbingSection({ scrollProgress }: ClimbingSectionProps) {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  // Map scroll progress to vertical position (climbing from bottom to top)
  // At 0: bottom of screen (e.g. 80%). At 1: top of screen (e.g. 15%)
  const roverY = 80 - scrollProgress * 68; // in percentage of container height

  // Wheel spinning speed (only spins when climbing)
  const isMoving = scrollProgress > 0.01 && scrollProgress < 0.99;

  // Determine which label is active based on scroll progress
  useEffect(() => {
    if (scrollProgress > 0.05 && scrollProgress <= 0.28) {
      setActiveLabel("adhesion");
    } else if (scrollProgress > 0.28 && scrollProgress <= 0.53) {
      setActiveLabel("grip");
    } else if (scrollProgress > 0.53 && scrollProgress <= 0.78) {
      setActiveLabel("navigation");
    } else if (scrollProgress > 0.78 && scrollProgress <= 0.98) {
      setActiveLabel("safety");
    } else {
      setActiveLabel(null);
    }
  }, [scrollProgress]);

  return (
    <div className="relative h-[250vh] bg-slate-50" id="climbing">
      {/* Sticky Inner Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-between px-4 sm:px-12 md:px-24 z-10">
        
        {/* Engineering Blueprint Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

        {/* Left Side: Descriptive Static Panel */}
        <div className="w-full md:w-[32%] z-20 pointer-events-none select-none">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full pointer-events-auto inline-block">
            SECTION 04 // ELECTROMAGNETIC ADHESION
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none pointer-events-auto">
            VERTICAL
            <span className="block text-blue-600 mt-1">CLIMBING</span>
            MECHANISM
          </h2>
          <p className="mt-6 text-slate-600 text-sm sm:text-base font-light leading-relaxed pointer-events-auto">
            Experience real-time anti-gravity engineering. As you scroll, the rover energizes its high-density electromagnetic arrays to scale a solid steel pillar.
          </p>

          {/* Adhesion Status Indicator */}
          <div className="mt-8 p-4 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200/50 shadow-sm pointer-events-auto">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg transition-all duration-300 ${isMoving ? "bg-blue-600 text-white animate-pulse" : "bg-slate-100 text-slate-400"}`}>
                <Magnet className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400">COIL STATUS</div>
                <div className="text-sm font-bold text-slate-800">
                  {isMoving ? "MAGNETS ENERGIZED: 100%" : "STATIC HOLD: 65%"}
                </div>
              </div>
            </div>
            {/* Status bars */}
            <div className="mt-3 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                style={{ width: isMoving ? "100%" : "65%" }}
              />
            </div>
          </div>
        </div>

        {/* Center: The Massive Steel Girder Column & Climbing Rover */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-32 sm:w-48 flex items-center justify-center z-10">
          
          {/* Real Industrial Steel Pillar (Blueprint Styled & Textured) */}
          <div className="w-20 sm:w-32 h-full bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 relative border-x-4 border-slate-600 shadow-inner flex flex-col justify-between py-4">
            
            {/* Vertical Center Rib of I-Beam */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-6 sm:w-10 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 border-x border-slate-600/50 opacity-90 shadow-2xl" />
            
            {/* Structural Rivets / Bolts lining the pillar edges */}
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="flex justify-between w-full px-2 opacity-80" style={{ transform: `translateY(${i * 12}px)` }}>
                <circle className="w-2 h-2 rounded-full bg-slate-700 shadow-md border border-slate-500" />
                <circle className="w-2 h-2 rounded-full bg-slate-700 shadow-md border border-slate-500" />
              </div>
            ))}

            {/* Scale Markings (Visualizing Height) */}
            <div className="absolute left-1 top-0 bottom-0 flex flex-col justify-between font-mono text-[8px] text-slate-800/60 pointer-events-none py-10">
              <span>H: 24.5m</span>
              <span>H: 22.0m</span>
              <span>H: 19.5m</span>
              <span>H: 17.0m</span>
              <span>H: 14.5m</span>
              <span>H: 12.0m</span>
              <span>H: 09.5m</span>
              <span>H: 07.0m</span>
              <span>H: 04.5m</span>
              <span>H: 02.0m</span>
            </div>
            
            {/* Glowing Magnetic Field Overlay inside Pillar */}
            <div
              className="absolute w-full bg-blue-500/10 pointer-events-none transition-all duration-75"
              style={{
                top: `${roverY - 10}%`,
                height: "200px",
                filter: "blur(40px)",
                opacity: isMoving ? 0.6 : 0.3,
              }}
            />
          </div>

          {/* The Rover climbing the pillar */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-36 sm:w-52 transition-all duration-75 ease-out z-20 cursor-grab active:cursor-grabbing"
            style={{
              top: `${roverY}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* The Animated Rover Model */}
            <RoverModel
              className="w-full"
              isClimbing={isMoving}
              magneticPulse={true}
              scale={1}
              rotation={0}
              laserActive={false}
            />

            {/* Small height ticker beside the rover */}
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 bg-blue-600 text-white font-mono text-[9px] px-2 py-0.5 rounded shadow-md border border-blue-400">
              {(2 + scrollProgress * 22.5).toFixed(1)}m
            </div>
          </div>
        </div>

        {/* Right Side: Floating Hotspots / Labels (Active based on Scroll Height) */}
        <div className="w-full md:w-[32%] z-20 flex flex-col justify-center space-y-6">
          
          {/* Label 1: Electromagnetic Adhesion */}
          <div
            className={`p-6 rounded-2xl bg-white border transition-all duration-300 shadow-lg ${
              activeLabel === "adhesion"
                ? "border-blue-500 ring-2 ring-blue-100 translate-x-0 opacity-100 scale-100"
                : "border-slate-200 translate-x-10 opacity-40 scale-95"
            }`}
          >
            <div className="flex items-center space-x-2.5 mb-2">
              <Magnet className="w-4 h-4 text-blue-600" />
              <h4 className="font-bold text-slate-900 text-sm">Electromagnetic Adhesion</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Neodymium-core electromagnets supply massive clamping pressure, maintaining strong normal forces on rusted, painted, or uneven steel surfaces.
            </p>
            <div className="mt-3 flex items-center space-x-2">
              <span className="text-[9px] font-mono font-bold bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded">
                NORMAL FORCE: 2400N
              </span>
            </div>
          </div>

          {/* Label 2: Strong Steel Grip */}
          <div
            className={`p-6 rounded-2xl bg-white border transition-all duration-300 shadow-lg ${
              activeLabel === "grip"
                ? "border-blue-500 ring-2 ring-blue-100 translate-x-0 opacity-100 scale-100"
                : "border-slate-200 translate-x-10 opacity-40 scale-95"
            }`}
          >
            <div className="flex items-center space-x-2.5 mb-2">
              <Award className="w-4 h-4 text-blue-600" />
              <h4 className="font-bold text-slate-900 text-sm">Strong Steel Grip</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Provides fail-safe structural connection. Active magnetic grip keeps the rover securely locked even in the event of an onboard system power loss.
            </p>
            <div className="mt-3 flex items-center space-x-2">
              <span className="text-[9px] font-mono font-bold bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded">
                PAYLOAD CAPACITY: 15KG
              </span>
            </div>
          </div>

          {/* Label 3: Vertical Navigation */}
          <div
            className={`p-6 rounded-2xl bg-white border transition-all duration-300 shadow-lg ${
              activeLabel === "navigation"
                ? "border-blue-500 ring-2 ring-blue-100 translate-x-0 opacity-100 scale-100"
                : "border-slate-200 translate-x-10 opacity-40 scale-95"
            }`}
          >
            <div className="flex items-center space-x-2.5 mb-2">
              <ArrowUpCircle className="w-4 h-4 text-blue-600" />
              <h4 className="font-bold text-slate-900 text-sm">Vertical Navigation</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Four-wheel-drive independent suspension climbs vertical 90-degree steel beams and maneuvers around gussets and rivet plates seamlessly.
            </p>
            <div className="mt-3 flex items-center space-x-2">
              <span className="text-[9px] font-mono font-bold bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded">
                SLOPE ANGLE: 90° MAX
              </span>
            </div>
          </div>

          {/* Label 4: Safe Inspection */}
          <div
            className={`p-6 rounded-2xl bg-white border transition-all duration-300 shadow-lg ${
              activeLabel === "safety"
                ? "border-blue-500 ring-2 ring-blue-100 translate-x-0 opacity-100 scale-100"
                : "border-slate-200 translate-x-10 opacity-40 scale-95"
            }`}
          >
            <div className="flex items-center space-x-2.5 mb-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <h4 className="font-bold text-slate-900 text-sm">Safe Inspection</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Eliminates the need for inspectors to work at extreme heights. Operates in high wind speeds and hazardous weather conditions without human risk.
            </p>
            <div className="mt-3 flex items-center space-x-2">
              <span className="text-[9px] font-mono font-bold bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded">
                HUMAN RISK: 0%
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
