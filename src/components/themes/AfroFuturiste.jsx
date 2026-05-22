import { useEffect, useRef } from "react";
import gsap from "gsap";
import ThreeBackground from "../ThreeBackground";

export default function AfroFuturiste({ config }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Warm, energetic stagger effect
      gsap.fromTo(
        ".animate-item",
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" }
      );
      
      // Floating animation for avatar
      gsap.to(".avatar-float", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, [config]);

  return (
    <div ref={containerRef} className="relative min-h-full w-full bg-[#1a0b00] text-white flex flex-col items-center py-16 px-6 font-display overflow-hidden">
      {/* Background gradients - Warm earthy and vibrant sunset tones */}
      <div className="absolute top-[-20%] left-[-10%] w-[140%] h-[60%] bg-[#ff6b35]/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-20%] w-[100%] h-[50%] bg-[#D4AF37]/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Abstract geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <ThreeBackground theme="neon-futuristic" /> {/* Using the same particle system but it will blend with the warm background */}

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center">
        
        {/* Profile Image */}
        <div className="animate-item avatar-float relative w-32 h-32 mb-8 group">
          <div className="absolute inset-0 rounded-full rotate-3 bg-gradient-to-tr from-[#ff6b35] to-[#D4AF37] blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ff6b35] to-[#D4AF37] p-1">
            <img 
              src={config.image || "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop"} 
              alt={config.name} 
              className="w-full h-full object-cover rounded-full bg-[#1a0b00]"
            />
          </div>
        </div>

        {/* Name & Bio */}
        <h1 className="animate-item text-4xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#ff6b35] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
          {config.name}
        </h1>
        <p className="animate-item text-sm text-[#ffcda3]/80 max-w-[280px] mb-10 leading-relaxed font-medium">
          {config.bio}
        </p>

        {/* Links */}
        <div className="w-full flex flex-col gap-4 perspective-1000">
          {config.links.map((link, i) => (
            <a 
              key={link.id || i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-item group relative w-full rounded-2xl bg-[#2a1300]/80 backdrop-blur-md border border-[#D4AF37]/30 py-4 px-6 transition-all duration-300 hover:border-[#ff6b35] hover:shadow-[0_0_30px_-5px_rgba(255,107,53,0.4)] hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/0 via-[#ff6b35]/10 to-[#D4AF37]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              <span className="relative z-10 text-sm font-bold tracking-wide text-[#ffeedd] group-hover:text-white transition-colors flex items-center justify-center gap-2">
                {link.label}
              </span>
            </a>
          ))}
        </div>
        
        {/* Footer */}
        <div className="animate-item mt-16 pb-8">
          <div className="text-[10px] uppercase tracking-widest text-[#D4AF37]/50 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff6b35] shadow-[0_0_10px_rgba(255,107,53,0.8)] animate-pulse"></span>
            Prism Core
          </div>
        </div>
      </div>
    </div>
  );
}
