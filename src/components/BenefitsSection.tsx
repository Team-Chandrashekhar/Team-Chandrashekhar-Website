import { useEffect, useState } from "react";
import { ShieldCheck, Zap, Clock, Users } from "lucide-react";

interface BenefitsSectionProps {
  scrollProgress: number; // 0 to 1
}

export default function BenefitsSection({ scrollProgress }: BenefitsSectionProps) {
  // Trigger counters based on scroll progress
  const isActive = scrollProgress > 0.05;
  const progressFactor = isActive ? Math.min(1, scrollProgress * 1.8) : 0;

  const [saferInspection, setSaferInspection] = useState(0);
  const [fasterMonitoring, setFasterMonitoring] = useState(0);
  const [reducedRisk, setReducedRisk] = useState(0);

  useEffect(() => {
    if (isActive) {
      setSaferInspection(Math.round(progressFactor * 50));
      setFasterMonitoring(Math.round(progressFactor * 70));
      setReducedRisk(Math.round(progressFactor * 100));
    } else {
      setSaferInspection(0);
      setFasterMonitoring(0);
      setReducedRisk(0);
    }
  }, [isActive, progressFactor]);

  const stats = [
    {
      label: "Safer Inspection",
      value: `${saferInspection}%`,
      subText: "Accident Reduction",
      desc: "Eliminates the danger of high-altitude slips, heavy machinery traffic collision risks, and structural collapse hazards.",
      icon: ShieldCheck,
      color: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-50 text-blue-600",
    },
    {
      label: "Faster Monitoring",
      value: `${fasterMonitoring}%`,
      subText: "Turnaround Speed",
      desc: "Deploys in minutes. Avoids lane closures, heavy permits, and massive crane scheduling delays of old-school inspections.",
      icon: Zap,
      color: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50 text-amber-600",
    },
    {
      label: "Accessibility",
      value: "24/7",
      subText: "Operational Uptime",
      desc: "Fully sealed, weather-resistant chassis inspects structures during heavy rain, high winds, and dark night hours.",
      icon: Clock,
      color: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Reduced Human Risk",
      value: `${reducedRisk}%`,
      subText: "Ground-Level Control",
      desc: "Inspectors operate from secure ground control centers, reviewing live high-fidelity feeds and telemetry feeds on tablets.",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      accentBg: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section id="benefits" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Structural accent lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            SECTION 08 // PROJECT IMPACT
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            QUANTIFIED BENCHMARKS
            <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              & STRATEGIC BENEFITS
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-light">
            Real engineering achievements measured by safety, cost-efficiency, and inspection speed. Replacing vintage methods with autonomous electromagnetic robotics.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glowing Top Accent Bar */}
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${stat.color}`} />

                <div>
                  {/* Icon & Label */}
                  <div className="flex justify-between items-center mb-6">
                    <div className={`p-2.5 rounded-xl ${stat.accentBg} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 font-bold uppercase">
                      BENCHMARK_0{idx + 1}
                    </span>
                  </div>

                  {/* Value Counter (Huge text) */}
                  <div className="mb-2">
                    <span className="text-5xl sm:text-6xl font-black tracking-tight text-slate-900 font-mono">
                      {stat.value}
                    </span>
                    <span className="block text-xs font-bold text-blue-600 mt-1 font-mono uppercase tracking-widest">
                      {stat.subText}
                    </span>
                  </div>

                  <h3 className="text-slate-800 font-bold text-sm mt-4 mb-2">
                    {stat.label}
                  </h3>

                  <p className="text-slate-500 text-xs leading-relaxed font-light">
                    {stat.desc}
                  </p>
                </div>

                {/* Technical Micro Graph Graphic in card footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-[9px] text-slate-400">
                  <span>METRIC: RELIABLE</span>
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-slate-500 font-bold">VERIFIED</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Callout Banner */}
        <div className="mt-16 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200/60 p-6 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-4 text-left">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 font-mono font-black">
              90%
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Targeted Inspection Precision</h4>
              <p className="text-xs text-slate-500 max-w-xl">
                By maintaining a constant focal distance from steel pillars, the onboard AI reaches a 90% defect categorization accuracy, surpassing manual visual records.
              </p>
            </div>
          </div>
          <div className="text-right font-mono text-xs text-slate-500">
            <div>STANDARDS: <span className="font-bold text-slate-800">ISO-9001 // EN-1090</span></div>
            <div>COMPLIANT: <span className="font-bold text-emerald-600">FEDERAL LEVEL</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
