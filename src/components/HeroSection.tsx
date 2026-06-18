import { ArrowDown, Compass } from "lucide-react";

interface HeroSectionProps {
  scrollProgress: number; // 0 to 1
  onExploreClick: () => void;
}

export default function HeroSection({ scrollProgress, onExploreClick }: HeroSectionProps) {
  // Parallax and zoom calculations
  const imageScale = 1 + scrollProgress * 0.2; // zooms from 100% to 120%
  const imageTranslateY = scrollProgress * 100; // moves down slightly for depth
  const textTranslateY = -scrollProgress * 150; // moves up
  const textOpacity = Math.max(0, 1 - scrollProgress * 1.5); // fades out

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16"
    >
      {/* Blueprint Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none" />

      {/* Radial overlay to soften grid */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-white to-white opacity-80 pointer-events-none" />

      {/* Hero Background Image Container (Parallax & Scale) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-[120%] absolute -top-[10%] left-0 transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(${imageTranslateY}px) scale(${imageScale})`,
          }}
        >
          <img
            src="https://images.pexels.com/photos/20614596/pexels-photo-20614596.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
            alt="Steel Bridge Structure twilight"
            className="w-full h-full object-cover opacity-85 brightness-95"
          />
          {/* Subtle Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-blue-900/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-4 text-center transition-all duration-75 ease-out"
        style={{
          transform: `translateY(${textTranslateY}px)`,
          opacity: textOpacity,
        }}
      >
        {/* Engineering Tag */}
        <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full text-blue-600 font-mono text-xs font-semibold uppercase tracking-wider mb-6 animate-bounce">
          <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "8s" }} />
          <span>ROVER SYSTEM ACTIVE</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-slate-900 leading-none select-none">
          BRIDGE MONITORING
          <span className="block text-blue-600 mt-2 font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            ROVER
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-2xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
          Autonomous Electromagnetic Bridge Inspection System
        </p>

        {/* Premium Spec Card */}
        <div className="mt-10 max-w-xl mx-auto bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-100/50 flex flex-wrap justify-around text-left">
          <div className="p-2">
            <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">ADHESION</span>
            <span className="text-sm font-bold text-slate-800">Electromagnetic</span>
          </div>
          <div className="w-px bg-slate-200 my-2" />
          <div className="p-2">
            <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">CONTROLLER</span>
            <span className="text-sm font-bold text-slate-800">Dual ESP32-WROOM</span>
          </div>
          <div className="w-px bg-slate-200 my-2" />
          <div className="p-2">
            <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">MONITORING</span>
            <span className="text-sm font-bold text-slate-800">Real-Time HD Video</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm tracking-wide"
          >
            Explore Project
          </button>
          <a
            href="#climbing"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-sm transition-all duration-300 cursor-pointer text-sm"
          >
            Watch Mechanism
          </a>
        </div>
      </div>

      {/* Animated Floating Bottom Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-slate-400 font-mono text-[10px] tracking-widest pointer-events-none">
        <span className="mb-2">SCROLL TO DISCOVER</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center p-1 bg-white/50">
          <div className="w-1.5 h-3 rounded-full bg-blue-500 animate-[bounce_1.6s_infinite]" />
        </div>
        <ArrowDown className="w-3.5 h-3.5 mt-2 animate-pulse text-blue-500" />
      </div>
    </section>
  );
}
