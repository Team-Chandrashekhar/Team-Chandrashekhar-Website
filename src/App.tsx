import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ChallengeSection from "./components/ChallengeSection";
import RoverIntroSection from "./components/RoverIntroSection";
import ClimbingSection from "./components/ClimbingSection";
import InspectionSection from "./components/InspectionSection";
import DashboardSection from "./components/DashboardSection";
import MaintenanceSection from "./components/MaintenanceSection";
import BenefitsSection from "./components/BenefitsSection";
import FutureTimelineSection from "./components/FutureTimelineSection";
import FooterSection from "./components/FooterSection";

import { Compass, ShieldAlert, Cpu, Disc, Sliders, Activity, Wrench, BarChart2, Calendar, ShieldCheck } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [sectionProgress, setSectionProgress] = useState<{ [key: string]: number }>({
    hero: 0,
    challenge: 0,
    intro: 0,
    climbing: 0,
    inspection: 0,
    dashboard: 0,
    maintenance: 0,
    benefits: 0,
    future: 0,
    final: 0,
  });

  const sections = [
    { id: "hero", label: "Overview", icon: Compass },
    { id: "challenge", label: "Civil Challenge", icon: ShieldAlert },
    { id: "intro", label: "Rover Blueprint", icon: Cpu },
    { id: "climbing", label: "Climbing Demo", icon: Disc },
    { id: "inspection", label: "Inspection Flow", icon: Sliders },
    { id: "dashboard", label: "Live Console", icon: Activity },
    { id: "maintenance", label: "Maintenance", icon: Wrench },
    { id: "benefits", label: "Key Benchmarks", icon: BarChart2 },
    { id: "future", label: "Next-Gen Roadmap", icon: Calendar },
    { id: "final", label: "Deploy Rover", icon: ShieldCheck },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      const newProgress: { [key: string]: number } = {};
      let currentActive = "hero";
      let maxVisibleHeight = 0;

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const top = el.offsetTop;
        const height = el.offsetHeight;

        // 1. Calculate Active Section based on largest visible area in viewport
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          currentActive = id;
        }

        // 2. Calculate Precision Scroll Progress [0, 1]
        let progress = 0;
        if (height > viewportHeight + 50) {
          // Tall / Sticky sections (Climbing, Future Roadmap)
          // Progress tracks from top aligning with viewport top, to bottom aligning with viewport bottom
          const scrollableRange = height - viewportHeight;
          const scrolledAmount = scrollY - top;
          progress = scrolledAmount / scrollableRange;
        } else {
          // Normal sections (Hero, Challenge, Intro, etc.)
          // Progress tracks from top entering viewport bottom, to top aligning with viewport top
          const startScroll = top - viewportHeight;
          progress = (scrollY - startScroll) / viewportHeight;
        }

        // Clamp between 0 and 1
        newProgress[id] = Math.max(0, Math.min(1, progress));
      });

      setSectionProgress(newProgress);
      setActiveSection(currentActive);
    };

    // Run once on load
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // Run after a small delay to ensure all images and layouts have rendered
    const timer = setTimeout(handleScroll, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-blue-600 selection:text-white relative">
      
      {/* 1. Header & Navigation */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* 2. Sticky Left Cinematic Progress Panel (Desktop only) */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center space-y-6 z-40 bg-white/60 backdrop-blur-md px-3 py-6 rounded-full border border-slate-100/80 shadow-lg shadow-slate-100/20">
        
        {/* Navigation line fill indicator */}
        <div className="absolute top-8 bottom-8 w-[2px] bg-slate-100 -z-10" />

        {/* Section nodes */}
        {sections.map((sec, idx) => {
          const Icon = sec.icon;
          const isActive = activeSection === sec.id;
          const progress = sectionProgress[sec.id] || 0;

          return (
            <div key={sec.id} className="relative group flex items-center justify-center">
              
              {/* Dynamic circular node */}
              <button
                onClick={() => scrollToSection(sec.id)}
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-500 scale-110 shadow-md shadow-blue-500/30"
                    : "bg-white text-slate-400 border-slate-200 hover:text-slate-900 hover:border-slate-400"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </button>

              {/* Mini progress ring around the active node */}
              {isActive && (
                <svg className="absolute w-10 h-10 -rotate-90 pointer-events-none" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset={100 - progress * 100} />
                </svg>
              )}

              {/* Hover Tooltip */}
              <div className="absolute left-12 bg-slate-950 text-white font-mono text-[9px] px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-800 shadow-lg">
                <span className="font-bold text-blue-400 mr-1">0{idx + 1} //</span>
                {sec.label.toUpperCase()}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Section Storytelling Flow */}
      
      {/* SECTION 1: Hero */}
      <HeroSection
        scrollProgress={sectionProgress["hero"] || 0}
        onExploreClick={() => scrollToSection("challenge")}
      />

      {/* SECTION 2: The Challenge */}
      <ChallengeSection
        scrollProgress={sectionProgress["challenge"] || 0}
      />

      {/* SECTION 3: Rover Introduction */}
      <RoverIntroSection
        scrollProgress={sectionProgress["intro"] || 0}
      />

      {/* SECTION 4: Electromagnetic Climbing Animation */}
      <ClimbingSection
        scrollProgress={sectionProgress["climbing"] || 0}
      />

      {/* SECTION 5: Inspection Process */}
      <InspectionSection
        scrollProgress={sectionProgress["inspection"] || 0}
      />

      {/* SECTION 6: Live Monitoring Dashboard */}
      <DashboardSection
        scrollProgress={sectionProgress["dashboard"] || 0}
      />

      {/* SECTION 7: Maintenance Assistance */}
      <MaintenanceSection
        scrollProgress={sectionProgress["maintenance"] || 0}
      />

      {/* SECTION 8: Project Benefits */}
      <BenefitsSection
        scrollProgress={sectionProgress["benefits"] || 0}
      />

      {/* SECTION 9: Future Scope (Horizontal Timeline) */}
      <FutureTimelineSection
        scrollProgress={sectionProgress["future"] || 0}
      />

      {/* SECTION 10: Final Sunrise Call to Action & Footer */}
      <FooterSection
        scrollToSection={scrollToSection}
      />

    </div>
  );
}
