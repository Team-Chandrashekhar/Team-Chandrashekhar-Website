import { useEffect, useState } from "react";
import { Activity, Battery, Video, Wifi, ShieldCheck, Play, Pause, AlertCircle } from "lucide-react";

interface DashboardSectionProps {
  scrollProgress: number; // 0 to 1
}

export default function DashboardSection({ scrollProgress }: DashboardSectionProps) {
  // Animating values from 0 based on scroll entry
  // Once scrollProgress crosses 0.1, we start filling the charts up
  const isTriggered = scrollProgress > 0.05;
  const factor = isTriggered ? Math.min(1, scrollProgress * 1.8) : 0;

  const [batteryCharge, setBatteryCharge] = useState(0);
  const [bridgeHealth, setBridgeHealth] = useState(0);
  const [inspectedRatio, setInspectedRatio] = useState(0);
  const [isFeedStreaming, setIsFeedStreaming] = useState(true);

  // Smoothly increment statistics
  useEffect(() => {
    if (isTriggered) {
      setBatteryCharge(Math.round(factor * 88));
      setBridgeHealth(Math.round(factor * 94));
      setInspectedRatio(Math.round(factor * 85));
    } else {
      setBatteryCharge(0);
      setBridgeHealth(0);
      setInspectedRatio(0);
    }
  }, [factor, isTriggered]);

  // Simulated live camera coordinates drifting
  const [coordX, setCoordX] = useState(140.42);
  const [coordY, setCoordY] = useState(65.8);

  useEffect(() => {
    if (!isFeedStreaming) return;
    const interval = setInterval(() => {
      setCoordX((prev) => +(prev + (Math.random() - 0.5) * 0.1).toFixed(2));
      setCoordY((prev) => +(prev + (Math.random() - 0.5) * 0.05).toFixed(2));
    }, 800);
    return () => clearInterval(interval);
  }, [isFeedStreaming]);

  return (
    <section id="dashboard" className="relative py-24 bg-slate-100 overflow-hidden">
      {/* Heavy grid backdrop to emphasize dashboard theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e2e8f0_1.5px,transparent_1.5px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            SECTION 06 // CONTROL STATION
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            LIVE TELEMETRY &
            <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              MONITORING DASHBOARD
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-light">
            Real-time wireless diagnostic dashboard displaying the rover's structural findings, localized video streams, power budget, and connectivity health.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden p-6 md:p-8">
          
          {/* Top Info Bar of Dashboard */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-100 pb-6 mb-8 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <div className="font-mono">
                <div className="text-[10px] text-slate-400">ACTIVE CLIENT UPLINK</div>
                <div className="text-sm font-bold text-slate-800">TELEMETRY-STREAM_BR-E100_SEC-4</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 font-mono text-[11px]">
              <div className="bg-slate-50 border border-slate-200 px-3 py-1 rounded-md text-slate-600">
                GPS: <span className="font-bold text-slate-900">53.5418° N, 10.0124° E</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 px-3 py-1 rounded-md text-slate-600">
                UPLINK SPEED: <span className="font-bold text-blue-600">5.4 Mbps</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 px-3 py-1 rounded-md text-slate-600">
                SYSTEM VOLTS: <span className="font-bold text-emerald-600">14.8V</span>
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Core Telemetry Grid (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Bridge Health circular gauge */}
              <div className="bg-slate-50/60 border border-slate-200/60 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-bold text-slate-800 text-sm">Bridge Health</h3>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100 uppercase">
                    SECURE
                  </span>
                </div>
                
                <div className="my-6 flex items-center justify-center space-x-8">
                  {/* Circle Gauge */}
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle cx="50" cy="50" r="40" stroke="#e2e8f0" strokeWidth="8" fill="none" />
                      {/* Foreground circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#10b981"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="251.2"
                        strokeDashoffset={251.2 - (251.2 * bridgeHealth) / 100}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute font-mono text-center">
                      <span className="text-2xl font-black text-slate-800">{bridgeHealth}%</span>
                      <span className="block text-[8px] text-slate-400 tracking-wider uppercase">INDEX</span>
                    </div>
                  </div>

                  <div className="text-xs space-y-1 text-slate-500 font-mono">
                    <div>● Tension Level: <span className="text-slate-800 font-bold">Optimal</span></div>
                    <div>● Corrosion Rating: <span className="text-slate-800 font-bold">Low</span></div>
                    <div>● Deflection rate: <span className="text-slate-800 font-bold">&lt; 0.2mm</span></div>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-400 border-t border-slate-200/60 pt-3">
                  STRESS RATING: NOMINAL // FRACTURE ANOMALIES: 0
                </div>
              </div>

              {/* Card 2: Inspection Progress */}
              <div className="bg-slate-50/60 border border-slate-200/60 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-slate-800 text-sm">Inspection Progress</h3>
                  </div>
                  <span className="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100 uppercase">
                    ACTIVE
                  </span>
                </div>

                <div className="my-4">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-3xl font-black text-slate-800 font-mono">{inspectedRatio}%</span>
                    <span className="text-xs text-slate-500 font-mono">42 of 48 structural nodes</span>
                  </div>
                  
                  {/* Horizontal Progress Bar */}
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden p-0.5">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${inspectedRatio}%` }}
                    />
                  </div>

                  {/* Micro-bar chart showing node inspection statuses */}
                  <div className="mt-4 flex gap-1 h-6 items-end">
                    {Array.from({ length: 24 }).map((_, i) => {
                      const height = Math.sin(i * 0.3) * 8 + 12;
                      const isDone = i < 21;
                      return (
                        <div
                          key={i}
                          className={`flex-1 rounded-sm transition-all duration-500`}
                          style={{
                            height: `${isTriggered ? height : 0}px`,
                            backgroundColor: isDone ? "#3b82f6" : "#e2e8f0",
                          }}
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-400 border-t border-slate-200/60 pt-3 flex justify-between">
                  <span>EST. TIME LEFT: 14 MIN</span>
                  <span>SCAN SPEED: 1.2m/s</span>
                </div>
              </div>

              {/* Card 3: Battery & Power Budget */}
              <div className="bg-slate-50/60 border border-slate-200/60 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-2">
                    <Battery className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-bold text-slate-800 text-sm">Power & Battery Cell</h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">LI-PO 4S</span>
                </div>

                <div className="my-5">
                  <div className="flex items-center space-x-4">
                    {/* Battery Horizontal representation */}
                    <div className="relative w-20 h-10 border-2 border-slate-400 rounded-lg p-1 flex items-center bg-white">
                      <div
                        className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-full rounded-md transition-all duration-1000"
                        style={{ width: `${batteryCharge}%` }}
                      />
                      <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-1.5 h-4 bg-slate-400 rounded-r-sm" />
                    </div>
                    <div>
                      <span className="text-2xl font-black text-slate-800 font-mono">{batteryCharge}%</span>
                      <span className="block text-[10px] text-slate-400 font-mono">STABLE // 14.8V // 1.2A DRAW</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-500 leading-tight">
                    Dual smart battery cells provide redundancy. Active electromagnet power consumption is dynamically optimized based on steel thickness.
                  </p>
                </div>

                <div className="text-[10px] font-mono text-slate-400 border-t border-slate-200/60 pt-3">
                  REMAINING RUNTIME: 4H 12MIN
                </div>
              </div>

              {/* Card 4: Wireless Link Status */}
              <div className="bg-slate-50/60 border border-slate-200/60 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-slate-800 text-sm">Wireless Connectivity</h3>
                  </div>
                  <span className="text-[10px] font-mono text-blue-600 font-bold">2.4 GHz ESP-NOW</span>
                </div>

                <div className="my-4">
                  <div className="flex justify-between items-end mb-2 font-mono">
                    <div>
                      <span className="text-2xl font-black text-slate-800">-64</span>
                      <span className="text-xs text-slate-500"> dBm</span>
                    </div>
                    <span className="text-xs text-emerald-600 font-semibold">LATENCY: 12ms</span>
                  </div>

                  {/* Signal bars */}
                  <div className="flex items-end space-x-1.5 h-10 pt-2">
                    {Array.from({ length: 8 }).map((_, i) => {
                      const isActive = i < (isTriggered ? 7 : 0);
                      return (
                        <div
                          key={i}
                          className={`flex-1 rounded-t-md transition-all duration-500`}
                          style={{
                            height: `${(i + 1) * 12.5}%`,
                            backgroundColor: isActive ? "#3b82f6" : "#cbd5e1",
                            opacity: isActive ? 1 : 0.3,
                          }}
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-400 border-t border-slate-200/60 pt-3 flex justify-between">
                  <span>PACKET LOSS: 0.02%</span>
                  <span>ENCRYPTION: AES-128</span>
                </div>
              </div>

            </div>

            {/* Right Column: Live Camera Video Stream Mockup (4 cols) */}
            <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between shadow-xl relative min-h-[380px]">
              
              {/* Header */}
              <div className="p-4 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between z-20">
                <div className="flex items-center space-x-2">
                  <Video className="w-4 h-4 text-blue-500 animate-pulse" />
                  <span className="font-mono text-[10px] font-bold tracking-wider">LIVE HD CAMERA FEED</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsFeedStreaming(!isFeedStreaming)}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors duration-200"
                  >
                    {isFeedStreaming ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  </button>
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="font-mono text-[8px] text-red-500 font-bold uppercase">REC</span>
                </div>
              </div>

              {/* Feed Body (Simulation) */}
              <div className="flex-1 relative bg-slate-950 flex items-center justify-center overflow-hidden group">
                
                {/* Simulated static line scanning across camera */}
                <div className="absolute inset-x-0 h-[1.5px] bg-blue-500/20 shadow-[0_0_8px_#3b82f6] top-0 animate-[scan-line_4s_linear_infinite] pointer-events-none z-10" />

                {/* Simulated Camera Video Content */}
                <img
                  src="https://images.pexels.com/photos/11823376/pexels-photo-11823376.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
                  alt="Live bridge inspection camera stream"
                  className={`w-full h-full object-cover opacity-70 filter contrast-125 saturate-50 brightness-75 transition-all duration-300 ${
                    isFeedStreaming ? "" : "blur-sm"
                  }`}
                />

                {/* Video Static Noise Overlay (animated scanlines) */}
                <div className="absolute inset-0 bg-scanlines opacity-[0.08] pointer-events-none" />

                {/* HUD Targeting Reticle overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none font-mono text-[8px]">
                  <div className="w-40 h-40 border border-blue-500/30 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                    <div className="w-32 h-32 border border-dashed border-blue-500/20 rounded-full" />
                  </div>
                  
                  {/* Panning Reticle Target Square */}
                  <div
                    className="absolute w-24 h-16 border border-emerald-400/70 flex flex-col justify-between p-1 transition-all duration-1000 ease-in-out"
                    style={{
                      transform: `translate(${(coordX % 2 === 0 ? 10 : -10)}px, ${(coordY % 2 === 0 ? -8 : 8)}px)`,
                    }}
                  >
                    <div className="flex justify-between">
                      <div className="w-1.5 h-1.5 border-t border-l border-emerald-400" />
                      <div className="w-1.5 h-1.5 border-t border-r border-emerald-400" />
                    </div>
                    
                    {/* Target lock data */}
                    <div className="text-center font-bold text-emerald-400 tracking-wider">
                      TARGET ACC: LOCK
                    </div>

                    <div className="flex justify-between">
                      <div className="w-1.5 h-1.5 border-b border-l border-emerald-400" />
                      <div className="w-1.5 h-1.5 border-b border-r border-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* Live stream stats overlays */}
                <div className="absolute bottom-3 left-3 bg-slate-950/70 border border-slate-800/80 p-2 rounded font-mono text-[8px] text-slate-300 leading-tight space-y-0.5">
                  <div>LAT: <span className="text-white font-bold">{coordY.toFixed(4)}° N</span></div>
                  <div>LNG: <span className="text-white font-bold">{coordX.toFixed(4)}° E</span></div>
                  <div>ISO: <span className="text-white font-bold">400 // F2.8</span></div>
                  <div>FPS: <span className="text-white font-bold">60.00 FPS</span></div>
                </div>

                <div className="absolute bottom-3 right-3 bg-slate-950/70 border border-slate-800/80 p-2 rounded font-mono text-[8px] text-slate-300 leading-tight space-y-0.5">
                  <div className="text-blue-400 font-bold">AI SCAN: ACTIVE</div>
                  <div>WELD JOINT: <span className="text-emerald-400">NOMINAL</span></div>
                  <div>CRACKS: <span className="text-red-400">0 DETECTED</span></div>
                </div>

                {!isFeedStreaming && (
                  <div className="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center font-mono text-center p-4 z-20">
                    <AlertCircle className="w-8 h-8 text-yellow-500 mb-2 animate-bounce" />
                    <span className="text-xs text-white font-bold uppercase">STREAM PAUSED</span>
                    <span className="text-[9px] text-slate-500 mt-1">Press play to reconnect link</span>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-3 bg-slate-950 border-t border-slate-800/80 font-mono text-[8px] text-slate-400 flex justify-between items-center">
                <span>BITRATE: 4850 KBPS</span>
                <span>CODEC: H.265 / HEVC</span>
                <span>BAND: 5.8GHZ UNII-3</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
