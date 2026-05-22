export default function AfricanPattern({ className = "", opacity = "0.05" }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="african-geo" width="120" height="120" patternUnits="userSpaceOnUse">
            <g stroke="currentColor" strokeWidth="2.5" fill="none" opacity={opacity}>
              {/* Row 1: ZigZags */}
              <path d="M0 10 L 15 25 L 30 10 L 45 25 L 60 10 L 75 25 L 90 10 L 105 25 L 120 10" />
              <path d="M0 20 L 15 35 L 30 20 L 45 35 L 60 20 L 75 35 L 90 20 L 105 35 L 120 20" />
              
              {/* Row 2: Diamonds with dots */}
              <polygon points="15,45 25,55 15,65 5,55" />
              <circle cx="15" cy="55" r="2" fill="currentColor"/>
              
              <polygon points="45,45 55,55 45,65 35,55" />
              <circle cx="45" cy="55" r="2" fill="currentColor"/>
              
              <polygon points="75,45 85,55 75,65 65,55" />
              <circle cx="75" cy="55" r="2" fill="currentColor"/>
              
              <polygon points="105,45 115,55 105,65 95,55" />
              <circle cx="105" cy="55" r="2" fill="currentColor"/>
  
              {/* Row 3: Tribal shields/Circles */}
              <circle cx="30" cy="90" r="14" />
              <circle cx="30" cy="90" r="6" />
              <line x1="30" y1="76" x2="30" y2="104" />
              <line x1="16" y1="90" x2="44" y2="90" />
  
              <circle cx="90" cy="90" r="14" />
              <circle cx="90" cy="90" r="6" />
              <line x1="90" y1="76" x2="90" y2="104" />
              <line x1="76" y1="90" x2="104" y2="90" />

              {/* Row 4: Dashed divider */}
              <line x1="0" y1="115" x2="120" y2="115" strokeDasharray="4 6" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#african-geo)" />
      </svg>
    </div>
  );
}
