interface RoverModelProps {
  className?: string;
  isClimbing?: boolean;
  isScanning?: boolean;
  magneticPulse?: boolean;
  laserActive?: boolean;
  rotation?: number; // degrees
  scale?: number;    // multiplier
  telemetryActive?: boolean;
}

export default function RoverModel({
  className = "",
  isClimbing = false,
  isScanning = false,
  magneticPulse = false,
  laserActive = false,
  rotation = 0,
  scale = 1,
  telemetryActive = true,
}: RoverModelProps) {
  return (
    <div
      className={`relative select-none transition-all duration-300 ease-out ${className}`}
      style={{
        transform: `rotate(${rotation}deg) scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      {/* Laser Scanning Cone (Visible only when scanning is active) */}
      {laserActive && (
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-72 h-48 pointer-events-none origin-top z-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 200 150">
            <defs>
              <linearGradient id="laserGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Cone */}
            <polygon
              points="100,0 30,150 170,150"
              fill="url(#laserGrad)"
              className="animate-pulse"
            />
            {/* Scanning Laser Line */}
            <line
              x1="30"
              y1="130"
              x2="170"
              y2="130"
              stroke="#2563eb"
              strokeWidth="2.5"
              strokeDasharray="4 2"
              className="animate-[pulse_1.5s_infinite]"
            >
              <animate
                attributeName="y1"
                values="20;145;20"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y2"
                values="20;145;20"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </line>
          </svg>
        </div>
      )}

      {/* Main Rover Body SVG */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_10px_25px_rgba(59,130,246,0.15)]"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="chassisGrad" x1="0" y1="0" x2="400" y2="320">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="steelBeamGrad" x1="0" y1="0" x2="100" y2="0">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="50%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="accentGrad" x1="0" y1="0" x2="0" y2="320">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <radialGradient id="magnetGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Electromagnetic Waves / Fields (when climbing or active) */}
        {(isClimbing || magneticPulse) && (
          <g className="magnetic-waves">
            {/* Wheel 1 (Top Left) Magnetic Waves */}
            <circle cx="70" cy="70" r="45" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" className="animate-ping" style={{ animationDuration: "2s", transformOrigin: "70px 70px" }} />
            <circle cx="70" cy="70" r="55" stroke="#60a5fa" strokeWidth="0.5" opacity="0.4" className="animate-ping" style={{ animationDuration: "3s", transformOrigin: "70px 70px" }} />

            {/* Wheel 2 (Top Right) Magnetic Waves */}
            <circle cx="330" cy="70" r="45" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" className="animate-ping" style={{ animationDuration: "2s", transformOrigin: "330px 70px" }} />
            <circle cx="330" cy="70" r="55" stroke="#60a5fa" strokeWidth="0.5" opacity="0.4" className="animate-ping" style={{ animationDuration: "3s", transformOrigin: "330px 70px" }} />

            {/* Wheel 3 (Bottom Left) Magnetic Waves */}
            <circle cx="70" cy="250" r="45" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" className="animate-ping" style={{ animationDuration: "2s", transformOrigin: "70px 250px" }} />
            <circle cx="70" cy="250" r="55" stroke="#60a5fa" strokeWidth="0.5" opacity="0.4" className="animate-ping" style={{ animationDuration: "3s", transformOrigin: "70px 250px" }} />

            {/* Wheel 4 (Bottom Right) Magnetic Waves */}
            <circle cx="330" cy="250" r="45" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" className="animate-ping" style={{ animationDuration: "2s", transformOrigin: "330px 250px" }} />
            <circle cx="330" cy="250" r="55" stroke="#60a5fa" strokeWidth="0.5" opacity="0.4" className="animate-ping" style={{ animationDuration: "3s", transformOrigin: "330px 250px" }} />
          </g>
        )}

        {/* 1. Heavy Duty Aluminium Chassis Structure */}
        {/* Outer Frame */}
        <rect x="60" y="50" width="280" height="220" rx="16" fill="url(#chassisGrad)" stroke="#94a3b8" strokeWidth="4" />
        {/* Inner Carbon Fiber Plate */}
        <rect x="75" y="65" width="250" height="190" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
        {/* Structural Hexagonal Honeycomb Engravings (Light SVG pattern style) */}
        <path d="M 90,80 L 105,71.3 M 105,71.3 L 120,80 M 120,80 L 120,97.3 M 120,97.3 L 105,106 M 105,106 L 90,97.3 M 90,97.3 L 90,80" stroke="#1e293b" strokeWidth="1" opacity="0.5" />
        <path d="M 125,80 L 140,71.3 M 140,71.3 L 155,80 M 155,80 L 155,97.3 M 155,97.3 L 140,106 M 140,106 L 125,97.3" stroke="#1e293b" strokeWidth="1" opacity="0.5" />

        {/* 2. Magnetic Crawler Wheel Units (4x corner assemblies) */}
        {/* Top-Left Wheel */}
        <g className={isClimbing ? "animate-[spin_3s_linear_infinite]" : ""} style={{ transformOrigin: "70px 70px" }}>
          {/* Wheel Mount */}
          <rect x="35" y="45" width="30" height="50" rx="4" fill="#334155" stroke="#475569" strokeWidth="1.5" />
          {/* Magnetic Core Rim */}
          <circle cx="70" cy="70" r="28" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          {/* Electromagnetic Coil Windings */}
          <circle cx="70" cy="70" r="18" fill="none" stroke="#60a5fa" strokeWidth="4" strokeDasharray="3 3" />
          {/* Steel Grip Hub */}
          <circle cx="70" cy="70" r="8" fill="#f8fafc" />
          <line x1="70" y1="50" x2="70" y2="90" stroke="#94a3b8" strokeWidth="2" />
          <line x1="50" y1="70" x2="90" y2="70" stroke="#94a3b8" strokeWidth="2" />
        </g>

        {/* Top-Right Wheel */}
        <g className={isClimbing ? "animate-[spin_3s_linear_infinite]" : ""} style={{ transformOrigin: "330px 70px" }}>
          {/* Wheel Mount */}
          <rect x="335" y="45" width="30" height="50" rx="4" fill="#334155" stroke="#475569" strokeWidth="1.5" />
          {/* Magnetic Core Rim */}
          <circle cx="330" cy="70" r="28" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          {/* Electromagnetic Coil Windings */}
          <circle cx="330" cy="70" r="18" fill="none" stroke="#60a5fa" strokeWidth="4" strokeDasharray="3 3" />
          {/* Steel Grip Hub */}
          <circle cx="330" cy="70" r="8" fill="#f8fafc" />
          <line x1="330" y1="50" x2="330" y2="90" stroke="#94a3b8" strokeWidth="2" />
          <line x1="310" y1="70" x2="350" y2="70" stroke="#94a3b8" strokeWidth="2" />
        </g>

        {/* Bottom-Left Wheel */}
        <g className={isClimbing ? "animate-[spin_3s_linear_infinite]" : ""} style={{ transformOrigin: "70px 250px" }}>
          {/* Wheel Mount */}
          <rect x="35" y="225" width="30" height="50" rx="4" fill="#334155" stroke="#475569" strokeWidth="1.5" />
          {/* Magnetic Core Rim */}
          <circle cx="70" cy="250" r="28" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          {/* Electromagnetic Coil Windings */}
          <circle cx="70" cy="250" r="18" fill="none" stroke="#60a5fa" strokeWidth="4" strokeDasharray="3 3" />
          {/* Steel Grip Hub */}
          <circle cx="70" cy="250" r="8" fill="#f8fafc" />
          <line x1="70" y1="230" x2="70" y2="270" stroke="#94a3b8" strokeWidth="2" />
          <line x1="50" y1="250" x2="90" y2="250" stroke="#94a3b8" strokeWidth="2" />
        </g>

        {/* Bottom-Right Wheel */}
        <g className={isClimbing ? "animate-[spin_3s_linear_infinite]" : ""} style={{ transformOrigin: "330px 250px" }}>
          {/* Wheel Mount */}
          <rect x="335" y="225" width="30" height="50" rx="4" fill="#334155" stroke="#475569" strokeWidth="1.5" />
          {/* Magnetic Core Rim */}
          <circle cx="330" cy="250" r="28" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          {/* Electromagnetic Coil Windings */}
          <circle cx="330" cy="250" r="18" fill="none" stroke="#60a5fa" strokeWidth="4" strokeDasharray="3 3" />
          {/* Steel Grip Hub */}
          <circle cx="330" cy="250" r="8" fill="#f8fafc" />
          <line x1="330" y1="230" x2="330" y2="270" stroke="#94a3b8" strokeWidth="2" />
          <line x1="310" y1="250" x2="350" y2="250" stroke="#94a3b8" strokeWidth="2" />
        </g>

        {/* 3. Central Controller: ESP32 Board Representation */}
        <g transform="translate(130, 110)">
          {/* PCB Base */}
          <rect x="0" y="0" width="140" height="100" rx="6" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
          {/* ESP32 Core Module */}
          <rect x="45" y="20" width="50" height="60" rx="3" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
          {/* Chip Label */}
          <text x="70" y="45" fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">ESP32-WROOM</text>
          {/* Gold Pin Headers */}
          {Array.from({ length: 9 }).map((_, i) => (
            <g key={i}>
              <rect x="15" y={15 + i * 8} width="6" height="4" fill="#fbbf24" />
              <rect x="119" y={15 + i * 8} width="6" height="4" fill="#fbbf24" />
            </g>
          ))}
          {/* Wiring Copper Traces (Sleek light paths) */}
          <path d="M 20,20 L 45,35 M 20,50 L 45,50 M 20,80 L 45,65 M 120,30 L 95,40 M 120,70 L 95,60" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

          {/* Glowing Status LEDs */}
          {/* Power Red LED (Solid) */}
          <circle cx="55" cy="70" r="3" fill="#ef4444" />
          <circle cx="55" cy="70" r="6" fill="#ef4444" opacity="0.5" className="animate-pulse" />

          {/* Wifi Blue LED (Blinking) */}
          <circle cx="70" cy="70" r="3" fill="#3b82f6" className="animate-ping" style={{ animationDuration: "1s" }} />
          <circle cx="70" cy="70" r="3" fill="#3b82f6" />

          {/* Tx/Rx Data Green LED (Blinking) */}
          <circle cx="85" cy="70" r="3" fill="#22c55e" className="animate-pulse" style={{ animationDuration: "0.4s" }} />
          <circle cx="85" cy="70" r="3" fill="#22c55e" />
        </g>

        {/* 4. Telemetry Antenna & Wireless Signal Indicator */}
        <g transform="translate(200, 45)">
          {/* Antenna Pole */}
          <line x1="0" y1="20" x2="0" y2="5" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
          <circle cx="0" cy="2" r="3" fill="#ef4444" />
          {/* Telemetry signals */}
          {telemetryActive && (
            <g className="animate-pulse">
              <path d="M -8,-5 A 10,10 0 0,1 8,-5" stroke="#3b82f6" strokeWidth="1.5" fill="none" className="animate-[ping_1.8s_infinite]" />
              <path d="M -14,-10 A 18,18 0 0,1 14,-10" stroke="#60a5fa" strokeWidth="1.2" fill="none" className="animate-[ping_2.2s_infinite]" />
            </g>
          )}
        </g>

        {/* 5. Ultra-High-Def Inspection Camera & Laser Diode Turret (Front Center) */}
        <g transform="translate(200, 275)" className={isScanning ? "animate-[bounce_2s_infinite]" : ""}>
          {/* Turret Arm Bracket */}
          <path d="M -30,-15 L -20,10 L 20,10 L 30,-15 Z" fill="#475569" stroke="#64748b" strokeWidth="2" />
          {/* Camera Pod Body */}
          <circle cx="0" cy="-5" r="22" fill="url(#steelBeamGrad)" stroke="#94a3b8" strokeWidth="2.5" />
          {/* Lens Glass (Glow) */}
          <circle cx="0" cy="-5" r="14" fill="#090d16" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="-4" cy="-9" r="6" fill="#60a5fa" opacity="0.8" />
          <circle cx="-2" cy="-7" r="2" fill="#ffffff" />
          {/* Active Sensor Ring */}
          <circle cx="0" cy="-5" r="16" fill="none" stroke="#2563eb" strokeWidth="1" opacity="0.8" className="animate-pulse" />

          {/* Laser Diode Emitter */}
          <rect x="-6" y="10" width="12" height="8" rx="2" fill="#ef4444" stroke="#94a3b8" strokeWidth="1" />
          <circle cx="0" cy="14" r="2.5" fill="#ff2222" />
        </g>

        {/* Technical Label Overlays (Engineering-style layout decorations) */}
        <g opacity="0.3" fontSize="8" fontFamily="monospace" fill="#94a3b8">
          <text x="80" y="240">MAG-DRIVE V4.2</text>
          <text x="240" y="240">WIFI TELEMETRY</text>
          <text x="140" y="90">MODEL: BR-E100</text>
        </g>
      </svg>
    </div>
  );
}
