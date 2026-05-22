import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MinimalClean({ config }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle fade in, no heavy movement
      gsap.fromTo(
        ".animate-item",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [config]);

  return (
    <div ref={containerRef} className="relative min-h-full w-full bg-[#fcfcfc] text-[#111] flex flex-col items-center py-16 px-6 font-sans">
      {/* Content Wrapper */}
      <div className="w-full max-w-sm mx-auto flex flex-col items-center text-center">
        
        {/* Profile Image */}
        <div className="animate-item w-24 h-24 mb-6">
          <img 
            src={config.image || "https://i.pravatar.cc/150"} 
            alt={config.name} 
            className="w-full h-full object-cover rounded-full shadow-sm"
          />
        </div>

        {/* Name & Bio */}
        <h1 className="animate-item text-2xl font-bold tracking-tight mb-2 text-black">
          {config.name}
        </h1>
        <p className="animate-item text-[15px] text-gray-500 max-w-[280px] mb-10 leading-relaxed font-light">
          {config.bio}
        </p>

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {config.links.map((link, i) => (
            <a 
              key={link.id || i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-item group relative w-full rounded-xl bg-white border border-gray-200 py-4 px-6 text-sm font-medium text-gray-800 shadow-sm transition-all hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Footer */}
        <div className="animate-item mt-16 pb-8">
          <div className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">
            Powered by Prism
          </div>
        </div>
      </div>
    </div>
  );
}
