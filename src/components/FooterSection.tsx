import { useState } from "react";
import { ArrowUp, Award, Settings, MessageSquare, ExternalLink, Mail, Send, X, FileText, Smartphone } from "lucide-react";

interface FooterSectionProps {
  scrollToSection: (id: string) => void;
}

export default function FooterSection({ scrollToSection }: FooterSectionProps) {
  const [activeModal, setActiveModal] = useState<"spec" | "contact" | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && message.trim()) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setEmail("");
        setMessage("");
        setActiveModal(null);
      }, 2500);
    }
  };

  return (
    <section
      id="final"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-white pt-24 pb-12"
    >
      {/* Sunrise Bridge Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/35096046/pexels-photo-35096046.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
          alt="Bridge sunrise silhouetted waters"
          className="w-full h-full object-cover opacity-90 brightness-95"
        />
        {/* Sunrise Warm Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-amber-500/10 mix-blend-multiply" />
        {/* Soft radial sunrise center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-400/10 blur-[120px] pointer-events-none" />
        {/* Soft bottom white fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
      </div>

      {/* Blueprint grid subtle lines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />

      {/* Empty Spacer to push content down slightly */}
      <div className="h-6" />

      {/* Main Call To Action Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center my-auto">
        {/* Engineering badge */}
        <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full text-amber-700 font-mono text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
          <Award className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
          <span>ROBOTICS SHAPING THE FUTURE</span>
        </div>

        {/* Big Bold Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-slate-900 leading-none select-none">
          BUILDING SMARTER
          <span className="block text-blue-600 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
            BRIDGES
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-xl sm:text-3xl text-slate-700 font-light max-w-3xl mx-auto leading-relaxed">
          Through Robotics and Innovation
        </p>

        {/* Sub-label */}
        <p className="mt-3 text-sm sm:text-base text-slate-500 font-medium tracking-wide font-mono uppercase">
          BRIDGE MONITORING ROVER SYSTEM
        </p>

        {/* Beautiful Interactive Button Cluster */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          
          {/* Button 1: View Project (Scrolls to Top) */}
          <button
            onClick={() => scrollToSection("hero")}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm flex items-center justify-center space-x-2"
          >
            <Smartphone className="w-4 h-4" />
            <span>Restart Journey</span>
          </button>

          {/* Button 2: Technical Details Modal trigger */}
          <button
            onClick={() => setActiveModal("spec")}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-sm transition-all duration-300 cursor-pointer text-sm flex items-center justify-center space-x-2"
          >
            <Settings className="w-4 h-4 text-slate-500 animate-spin" style={{ animationDuration: "12s" }} />
            <span>Technical Details</span>
          </button>

          {/* Button 3: Contact Modal trigger */}
          <button
            onClick={() => setActiveModal("contact")}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-800 shadow-sm transition-all duration-300 cursor-pointer text-sm flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-4 h-4 text-slate-400" />
            <span>Contact Us</span>
          </button>

        </div>
      </div>

      {/* Footer Branding & Copyright Row */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/50 pt-8 mt-12 w-full flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-mono gap-4">
        <div>
          <span>© {new Date().getFullYear()} BRIDGE MONITORING ROVER // PROJECT SHOWCASE</span>
        </div>
        <div className="flex space-x-6">
          <span className="hover:text-slate-900 cursor-pointer">TERMS</span>
          <span className="hover:text-slate-900 cursor-pointer">DOCUMENTATION</span>
          <span className="hover:text-slate-900 cursor-pointer">UNIVERSITY LABS</span>
        </div>
        <div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* --- MODAL 1: TECHNICAL DETAILS SPECIFICATION SHEET --- */}
      {activeModal === "spec" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md transition-all duration-300 animate-fadeIn">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative overflow-hidden">
            
            {/* Header */}
            <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>TECHNICAL SPECIFICATIONS SHEET</span>
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">VER: 4.0 // ESP32 MICRO-CRAWLER</p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Spec details grid */}
            <div className="space-y-4 text-xs text-slate-600 font-mono">
              <div className="grid grid-cols-3 py-2 border-b border-slate-50">
                <span className="font-bold text-slate-900">ADHESION MECHANISM</span>
                <span className="col-span-2 text-slate-600">4x Independent Neodymium core electromagnets. Dynamic variable flux density. Max holding force: 2400 Newtons total.</span>
              </div>
              <div className="grid grid-cols-3 py-2 border-b border-slate-50">
                <span className="font-bold text-slate-900">DRIVE TRAIN</span>
                <span className="col-span-2 text-slate-600">4-Wheel-Drive independent high-torque coreless metal gearmotors. Custom polyurethane crawler treads for added mechanical friction.</span>
              </div>
              <div className="grid grid-cols-3 py-2 border-b border-slate-50">
                <span className="font-bold text-slate-900">MAIN PROCESSOR</span>
                <span className="col-span-2 text-slate-600">Dual ESP32-WROOM-32E (240MHz dual core). Integrated Wi-Fi & Bluetooth LE. Specialized low-latency ESP-NOW protocol for direct manual control.</span>
              </div>
              <div className="grid grid-cols-3 py-2 border-b border-slate-50">
                <span className="font-bold text-slate-900">INSPECTION PAYLOAD</span>
                <span className="col-span-2 text-slate-600">OV2640 HD camera sensor turret on a 2-axis micro servo tilt bracket. Continuous laser line generator (450nm blue, 5mW) for optical crack profiling.</span>
              </div>
              <div className="grid grid-cols-3 py-2 border-b border-slate-50">
                <span className="font-bold text-slate-900">POWER SOURCE</span>
                <span className="col-span-2 text-slate-600">High-rate 4S Li-Po battery pack (14.8V, 5200mAh). Smart battery management system with real-time current draw monitoring via I2C telemetry.</span>
              </div>
              <div className="grid grid-cols-3 py-2">
                <span className="font-bold text-slate-900">TELEMETRY DECK</span>
                <span className="col-span-2 text-slate-600">MPU6050 6-axis IMU for tilt and vibration monitoring. ACS712 current sensor. Digital temperature & humidity sensor. Real-time logging onto on-board MicroSD.</span>
              </div>
            </div>

            {/* Footer download button */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => alert("Downloading Technical Datasheet PDF (Simulated)")}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs flex items-center space-x-2 shadow-md cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Download Full Schematics</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 2: PREMIUM CONTACT FORM --- */}
      {activeModal === "contact" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md transition-all duration-300 animate-fadeIn">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-md w-full p-6 sm:p-8 relative overflow-hidden">
            
            {/* Header */}
            <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>CONTACT ENGINEERING TEAM</span>
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">Request academic cooperation or demo trials</p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200">
                  <Send className="w-6 h-6 animate-pulse" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Message Dispatched!</h4>
                <p className="text-xs text-slate-500 mt-2 max-w-xs mx-auto leading-relaxed">
                  Thank you for your interest in the Bridge Monitoring Rover. Our engineering lab will review your request and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@university.edu or company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase mb-1.5">
                    Inquiry Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Specify if you are interested in pilot deployments, engineering schematics, or academic collaboration..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 shadow-md cursor-pointer transition-all duration-200"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
