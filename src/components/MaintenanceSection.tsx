import { Eye, ShieldCheck, TrendingDown, Clock, Heart } from "lucide-react";

interface MaintenanceSectionProps {
  scrollProgress: number; // 0 to 1
}

export default function MaintenanceSection({ scrollProgress }: MaintenanceSectionProps) {
  // Map scroll progress to vertical card offsets and opacity values
  const card1Progress = Math.min(1, Math.max(0, (scrollProgress - 0.1) * 3));
  const card2Progress = Math.min(1, Math.max(0, (scrollProgress - 0.25) * 3));
  const card3Progress = Math.min(1, Math.max(0, (scrollProgress - 0.4) * 3));
  const card4Progress = Math.min(1, Math.max(0, (scrollProgress - 0.55) * 3));
  const card5Progress = Math.min(1, Math.max(0, (scrollProgress - 0.7) * 3));

  const items = [
    {
      title: "Early Detection",
      desc: "Pins down hairline structural cracks and minor rust spots during daily autonomous runs, long before they are visible to human inspectors.",
      icon: Eye,
      color: "text-blue-600 bg-blue-50 border-blue-100",
      progress: card1Progress,
      yOffset: Math.max(0, 50 * (1 - card1Progress)),
    },
    {
      title: "Preventive Maintenance",
      desc: "Triggers targeted, localized paint repairs and bolt replacements, preventing localized flaws from causing catastrophic joint failures.",
      icon: Clock,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
      progress: card2Progress,
      yOffset: Math.max(0, 50 * (1 - card2Progress)),
    },
    {
      title: "Cost Reduction",
      desc: "Slashes inspection budgets by eliminating high-risk lane closures, heavy-duty mobile platforms, and large safety crews.",
      icon: TrendingDown,
      color: "text-amber-600 bg-amber-50 border-amber-100",
      progress: card3Progress,
      yOffset: Math.max(0, 50 * (1 - card3Progress)),
    },
    {
      title: "Improved Safety",
      desc: "Keeps human engineers safely on the ground. The rover navigates high vertical elevations and hazardous weather conditions autonomously.",
      icon: ShieldCheck,
      color: "text-purple-600 bg-purple-50 border-purple-100",
      progress: card4Progress,
      yOffset: Math.max(0, 50 * (1 - card4Progress)),
    },
    {
      title: "Longer Bridge Lifespan",
      desc: "Continuous, high-fidelity monitoring data assists municipalities in extending the operational lifespan of civil structures by decades.",
      icon: Heart,
      color: "text-red-600 bg-red-50 border-red-100",
      progress: card5Progress,
      yOffset: Math.max(0, 50 * (1 - card5Progress)),
    },
  ];

  return (
    <section id="maintenance" className="relative py-24 bg-white overflow-hidden">
      {/* Blueprint background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            SECTION 07 // CIVIL MAINTENANCE
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            INTELLIGENT MAINTENANCE
            <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ASSISTANCE PROTOCOLS
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-light">
            By shifting from reactive repairs to predictive maintenance, the rover helps protect civil infrastructure, prevent accidents, and reduce taxpayer costs.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium High-Altitude Photo (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group bg-slate-900 aspect-[3/4]">
              {/* Main Image */}
              <img
                src="https://images.pexels.com/photos/35750829/pexels-photo-35750829.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
                alt="Bridge maintenance climber high altitude"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Radial gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-white/10" />

              {/* Float diagnostic overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200/60 shadow-md font-mono">
                <div className="flex justify-between items-center mb-1.5 text-[10px] text-slate-400">
                  <span>DANGER HIGH ALTITUDE WORK</span>
                  <span className="text-red-500 font-bold uppercase animate-pulse">▲ ACCIDENT RISK: HIGH</span>
                </div>
                <p className="text-xs text-slate-700 font-sans leading-relaxed">
                  Traditional manual inspections expose technicians to high wind speeds, extreme heights, and passing traffic. The rover absorbs 100% of these risks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Benefits Cards List (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50/70 border border-slate-200/50 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 hover:bg-white transition-all duration-300 transform flex items-start space-x-4 group"
                  style={{
                    opacity: item.progress,
                    transform: `translateY(${item.yOffset}px)`,
                  }}
                >
                  {/* Icon Box with Pulse */}
                  <div className={`p-3 rounded-xl border ${item.color} transition-transform duration-300 group-hover:scale-110 flex-shrink-0`}>
                    <Icon className="w-5 h-5 animate-[pulse_3s_infinite]" />
                  </div>

                  {/* Text Details */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
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
