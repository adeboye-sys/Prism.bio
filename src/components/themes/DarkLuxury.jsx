import { useEffect, useRef } from "react";
import gsap from "gsap";
import ThreeBackground from "../ThreeBackground";

export default function DarkLuxury({ config }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade in animation
      gsap.fromTo(
        ".animate-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [config]);

  return (
    <div ref={containerRef} className="relative min-h-full w-full bg-[#050505] text-[#F3EFE0] flex flex-col items-center py-16 px-6 font-sans">
      <ThreeBackground theme="dark-luxury" />
      
      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center">
        
        {/* Profile Image */}
        <div className="animate-item relative w-28 h-28 mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37] to-transparent opacity-20 blur-xl"></div>
          <img 
            src={config.image || "https://i.pravatar.cc/150"} 
            alt={config.name} 
            className="w-full h-full object-cover rounded-full border border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.15)] relative z-10"
          />
        </div>

        {/* Name & Bio */}
        <h1 className="animate-item text-3xl font-serif font-bold tracking-wide mb-3 text-[#D4AF37]">
          {config.name}
        </h1>
        <p className="animate-item text-sm font-light tracking-wide text-white/70 max-w-[280px] mb-12 leading-relaxed">
          {config.bio}
        </p>

        {/* Links */}
        <div className="w-full flex flex-col gap-4">
          {config.links.map((link, i) => (
            <a 
              key={link.id || i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-item group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 py-4 px-6 transition-all hover:border-[#D4AF37]/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] flex items-center justify-center"
            >
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent transition-all duration-500 ease-out group-hover:w-full"></div>
              <span className="relative z-10 text-sm font-medium tracking-widest uppercase text-white/90 group-hover:text-[#D4AF37] transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </div>
        
        {/* Footer */}
        <div className="animate-item mt-16 pb-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-serif">
            Powered by Prism
          </div>
        </div>
      </div>
    </div>
  );
}
