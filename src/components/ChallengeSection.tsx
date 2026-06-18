import { AlertTriangle, Droplets, Grid, EyeOff, ShieldAlert } from "lucide-react";

interface ChallengeSectionProps {
  scrollProgress: number; // 0 to 1
}

export default function ChallengeSection({ scrollProgress }: ChallengeSectionProps) {
  // Calculate visibility threshold triggers
  const rustOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.1) * 1.5));
  const card1Progress = Math.min(1, Math.max(0, (scrollProgress - 0.2) * 4));
  const card2Progress = Math.min(1, Math.max(0, (scrollProgress - 0.35) * 4));
  const card3Progress = Math.min(1, Math.max(0, (scrollProgress - 0.5) * 4));
  const card4Progress = Math.min(1, Math.max(0, (scrollProgress - 0.65) * 4));
  const card5Progress = Math.min(1, Math.max(0, (scrollProgress - 0.8) * 4));

  const challenges = [
    {
      title: "Structural Cracks",
      desc: "Micro-fractures formed due to constant vibrational stress and temperature cycles, expanding silently under high loads.",
      icon: AlertTriangle,
      color: "text-red-500 bg-red-50 border-red-200",
      progress: card1Progress,
      yOffset: Math.max(0, 40 * (1 - card1Progress)),
    },
    {
      title: "Corrosion & Decay",
      desc: "Acidic atmospheric conditions and environmental salinity degrade protective coatings, eating into the core load-bearing steel.",
      icon: Droplets,
      color: "text-orange-500 bg-orange-50 border-orange-200",
      progress: card2Progress,
      yOffset: Math.max(0, 40 * (1 - card2Progress)),
    },
    {
      title: "Rust Formation",
      desc: "Iron oxidation that expands to up to six times its original volume, causing severe material delamination and loss of section thickness.",
      icon: Grid,
      color: "text-amber-500 bg-amber-50 border-amber-200",
      progress: card3Progress,
      yOffset: Math.max(0, 40 * (1 - card3Progress)),
    },
    {
      title: "Hard-to-Reach Areas",
      desc: "Complex gusset plates, interior box girders, and high vertical pillars that are physically inaccessible or dangerous for human inspectors.",
      icon: EyeOff,
      color: "text-blue-500 bg-blue-50 border-blue-200",
      progress: card4Progress,
      yOffset: Math.max(0, 40 * (1 - card4Progress)),
    },
    {
      title: "Inspection Risks",
      desc: "Traditional inspections require heavy scaffolding, lane closures, and hanging platforms, endangering crew lives and costing millions.",
      icon: ShieldAlert,
      color: "text-slate-600 bg-slate-50 border-slate-200",
      progress: card5Progress,
      yOffset: Math.max(0, 40 * (1 - card5Progress)),
    },
  ];

  return (
    <section id="challenge" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Structural grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            SECTION 02 // CIVIL THREATS
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            THE INVISIBLE DECAY OF
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
              MODERN STEEL BRIDGES
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-light">
            Infrastructure ages silently. Traditional inspection methods are too slow, highly dangerous, and fail to detect defects before they become catastrophic structural failures.
          </p>
        </div>

        {/* Interactive Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Image Comparison & Visual Stress Highlight (6 cols) */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
              
              {/* Layer 1: Healthy Structural Steel */}
              <img
                src="https://images.pexels.com/photos/5845726/pexels-photo-5845726.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
                alt="Healthy steel structure bridge"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Layer 2: Rusted & Damaged Structural Steel (Opacity linked to scroll progress) */}
              <div
                className="absolute inset-0 transition-opacity duration-100 ease-out"
                style={{ opacity: rustOpacity }}
              >
                <img
                  src="https://images.pexels.com/photos/37446697/pexels-photo-37446697.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
                  alt="Corroded steel bridge beam"
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay to make glowing overlays pop */}
                <div className="absolute inset-0 bg-slate-950/30 mix-blend-multiply" />
              </div>

              {/* Stress Analysis Grid & Laser Scan Overlays (Pulsing and drawing dynamically) */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  {/* Digital Crosshair HUD */}
                  <circle cx="200" cy="150" r="40" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.6" />
                  <circle cx="200" cy="150" r="5" fill="#3b82f6" opacity="0.8" />
                  <path d="M 200,100 L 200,80 M 200,200 L 200,220 M 150,150 L 130,150 M 250,150 L 270,150" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
                  
                  {/* Glowing Red Warning Areas (Corrosion overlay) */}
                  {rustOpacity > 0.2 && (
                    <g className="animate-pulse">
                      {/* Critical Crack Highlight */}
                      <path
                        d="M 120,110 L 140,115 L 145,130 L 175,135 L 180,155 L 210,165"
                        stroke="#ef4444"
                        strokeWidth="3.5"
                        fill="none"
                        strokeLinecap="round"
                        filter="url(#glowRed)"
                        className="animate-[dash_3s_linear_infinite]"
                        strokeDasharray="8 4"
                      />
                      <circle cx="210" cy="165" r="6" fill="#ef4444" />
                      
                      {/* Corrosion Hotspot 1 */}
                      <circle cx="280" cy="80" r="24" fill="#f97316" fillOpacity="0.25" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="3 2" />
                      
                      {/* Corrosion Hotspot 2 */}
                      <circle cx="100" cy="220" r="30" fill="#f97316" fillOpacity="0.2" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="3 2" />
                    </g>
                  )}
                  
                  <defs>
                    <filter id="glowRed" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* Status Tags on Image */}
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-md border border-slate-700 font-mono text-[10px] text-white flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>STRUCTURAL SCAN FEED</span>
              </div>

              <div className="absolute bottom-4 right-4 bg-red-600/90 backdrop-blur-md px-3 py-1 rounded-md border border-red-500 font-mono text-[10px] text-white flex items-center space-x-2">
                <span>RUST LEVEL: {(rustOpacity * 100).toFixed(0)}%</span>
              </div>
            </div>
            
            {/* Explanatory text under comparison */}
            <p className="mt-4 text-xs font-mono text-slate-500 text-center uppercase tracking-widest">
              ◄ Scroll to inspect transition from nominal steel to heavily oxidized joint ►
            </p>
          </div>

          {/* Right Column: Animated Challenge Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-6 relative">
            {/* Vertical Flow Infographic Line on the Left of Cards */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-200 -z-10 hidden sm:block">
              {/* Scrolling Blue Flow Dot */}
              <div
                className="w-2 h-10 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full absolute -left-[3px] transition-all duration-75 ease-out"
                style={{
                  top: `${scrollProgress * 100}%`,
                }}
              />
            </div>

            {/* List of cards */}
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/60 shadow-md shadow-slate-100/50 transition-all duration-300 transform sm:pl-12 relative overflow-hidden group hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5"
                  style={{
                    opacity: challenge.progress,
                    transform: `translateY(${challenge.yOffset}px)`,
                  }}
                >
                  {/* Circular Index Pin */}
                  <div className="absolute top-6 left-4 w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-mono font-bold flex items-center justify-center hidden sm:flex">
                    0{index + 1}
                  </div>

                  <div className="flex items-start space-x-4">
                    {/* Icon Box */}
                    <div className={`p-3 rounded-xl border ${challenge.color} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Text Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 flex items-center justify-between">
                        <span>{challenge.title}</span>
                        {challenge.progress > 0.8 && (
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-red-50 text-red-600 border border-red-100 uppercase animate-pulse">
                            CRITICAL
                          </span>
                        )}
                      </h3>
                      <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                        {challenge.desc}
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
