import { BrainCircuit, Flame, Compass, GitMerge, Radio } from "lucide-react";

interface FutureTimelineSectionProps {
  scrollProgress: number; // 0 to 1
}

export default function FutureTimelineSection({ scrollProgress }: FutureTimelineSectionProps) {
  // Horizontal translation calculation
  // At scrollProgress = 0, offset = 0%. At scrollProgress = 1, offset = -65%
  // This shifts the timeline track leftwards as we scroll.
  const translateX = -scrollProgress * 62; // percentage shift

  const milestones = [
    {
      version: "V4.2 Upgrade",
      title: "AI Crack Classification",
      desc: "Integration of advanced Deep Learning vision models on-chip to categorize crack hazard levels in real-time, reducing false alarms.",
      icon: BrainCircuit,
      color: "border-blue-200 text-blue-600 bg-blue-50",
      date: "Q3 2026",
    },
    {
      version: "V4.5 Upgrade",
      title: "Active Thermal Imaging",
      desc: "Adding infrared sensors to scan steel beams for hidden subsurface moisture pockets, structural delamination, and friction weld stresses.",
      icon: Flame,
      color: "border-red-200 text-red-600 bg-red-50",
      date: "Q1 2027",
    },
    {
      version: "V5.0 Upgrade",
      title: "3D LiDAR Mapping",
      desc: "Equipping the rover with solid-state micro-LiDAR to scan and render millimeter-accurate 3D point-cloud models of inspected nodes.",
      icon: Compass,
      color: "border-emerald-200 text-emerald-600 bg-emerald-50",
      date: "Q3 2027",
    },
    {
      version: "V5.5 Upgrade",
      title: "Digital Twin Sync",
      desc: "Automatic synchronization of coordinate logs, laser profiles, and defect models into municipal CAD twins for asset management.",
      icon: GitMerge,
      color: "border-purple-200 text-purple-600 bg-purple-50",
      date: "Q2 2028",
    },
    {
      version: "V6.0 Upgrade",
      title: "Swarm Autonomous Navigation",
      desc: "Enables multiple coordinated rovers to inspect a giant suspension bridge simultaneously, sharing map data and telemetry links.",
      icon: Radio,
      color: "border-amber-200 text-amber-600 bg-amber-50",
      date: "Q4 2028",
    },
  ];

  return (
    <div className="relative h-[250vh] bg-white" id="future">
      {/* Sticky Inner Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center z-10">
        
        {/* Engineering Blueprint Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12 relative z-10">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block">
            SECTION 09 // DEVELOPMENT ROADMAP
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            FUTURE UPGRADES &
            <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              NEXT-GEN ROADMAP
            </span>
          </h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base font-light max-w-2xl">
            Our vision for the next iteration. Transforming single-rover inspections into fully cooperative, multi-sensor autonomous civil monitoring networks.
          </p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative w-full overflow-hidden py-12">
          
          {/* Glowing central timeline track line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 z-0">
            {/* The active blue progress fill */}
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-75 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Sliding Track */}
          <div
            className="flex space-x-8 px-4 sm:px-12 md:px-24 transition-transform duration-75 ease-out"
            style={{
              transform: `translateX(${translateX}vw)`,
            }}
          >
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              // Node active status based on how far we have scrolled
              const isNodeActive = scrollProgress > (idx / milestones.length);
              
              return (
                <div
                  key={idx}
                  className="w-[280px] sm:w-[360px] flex-shrink-0 relative z-10"
                >
                  {/* Timeline node dot indicator */}
                  <div
                    className={`absolute top-[-34px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 transition-all duration-300 flex items-center justify-center ${
                      isNodeActive
                        ? "bg-blue-600 border-white ring-4 ring-blue-100 scale-125 shadow-md"
                        : "bg-white border-slate-300 scale-100"
                    }`}
                  >
                    {isNodeActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    )}
                  </div>

                  {/* Milestone card */}
                  <div
                    className={`bg-white border p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group ${
                      isNodeActive ? "border-blue-400" : "border-slate-200"
                    }`}
                  >
                    {/* Card header with version and date */}
                    <div className="flex justify-between items-center mb-4 font-mono text-[10px]">
                      <span className="text-blue-600 font-bold bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                        {milestone.version}
                      </span>
                      <span className="text-slate-400 font-semibold">{milestone.date}</span>
                    </div>

                    {/* Title & Icon */}
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2.5 rounded-xl border ${milestone.color} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-200">
                        {milestone.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                      {milestone.desc}
                    </p>

                    {/* Roadmap step indicator */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-400">
                      <span>PHASE 0{idx + 1}</span>
                      <span className={isNodeActive ? "text-emerald-500 font-bold" : "text-slate-400"}>
                        {isNodeActive ? "● EN ROUTE" : "○ DEFERRED"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Guidance caption */}
        <div className="text-center font-mono text-[10px] text-slate-400 tracking-wider uppercase mt-8 relative z-10">
          ◄ Keep scrolling to advance horizontal roadmap progression ►
        </div>

      </div>
    </div>
  );
}
