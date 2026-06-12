export function generateStandaloneHTML(config) {
  const { name, bio, image, links, theme } = config;
  
  // Choose theme specific styling/templates
  let themeHtml = "";
  let bodyClass = "";
  let fontImports = `<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">`;

  // Render the links
  const linksHtml = links.map(link => {
    if (theme === 'dark-luxury') {
      return `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
         class="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 py-4 px-6 transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] flex items-center justify-center text-center">
        <div class="absolute inset-0 w-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent transition-all duration-500 ease-out group-hover:w-full"></div>
        <span class="relative z-10 text-sm font-medium tracking-widest uppercase text-white/90 group-hover:text-[#D4AF37] transition-colors">
          ${link.label}
        </span>
      </a>`;
    } else if (theme === 'minimal-clean') {
      return `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
         class="group relative w-full rounded-xl bg-white border border-gray-200 py-4 px-6 text-sm font-medium text-gray-800 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center text-center">
        ${link.label}
      </a>`;
    } else { // afro-futuriste
      return `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
         class="group relative w-full rounded-2xl bg-[#2a1300]/80 backdrop-blur-md border border-[#D4AF37]/30 py-4 px-6 transition-all duration-300 hover:border-[#ff6b35] hover:shadow-[0_0_30px_-5px_rgba(255,107,53,0.4)] hover:-translate-y-1 overflow-hidden flex items-center justify-center text-center">
        <div class="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/0 via-[#ff6b35]/10 to-[#D4AF37]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
        <span class="relative z-10 text-sm font-bold tracking-wide text-[#ffeedd] group-hover:text-white transition-colors">
          ${link.label}
        </span>
      </a>`;
    }
  }).join('\n');

  if (theme === 'dark-luxury') {
    bodyClass = "bg-[#050505] text-[#F3EFE0] font-sans";
    themeHtml = `
    <div class="relative min-h-screen w-full flex flex-col items-center py-20 px-6 overflow-hidden">
      <!-- Glow effects -->
      <div class="absolute top-[-20%] left-[-10%] w-[140%] h-[60%] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <!-- Particle Background Simulator (pure CSS) -->
      <div class="absolute inset-0 opacity-20 pointer-events-none" id="particles"></div>

      <div class="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center">
        <!-- Profile Image -->
        <div class="relative w-28 h-28 mb-8 animate-fade-in-up" style="animation-delay: 0.1s">
          <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37] to-transparent opacity-20 blur-xl"></div>
          <img src="${image || 'https://i.pravatar.cc/150'}" alt="${name}" class="w-full h-full object-cover rounded-full border border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.15)] relative z-10" />
        </div>

        <!-- Name & Bio -->
        <h1 class="text-3xl font-serif font-bold tracking-wide mb-3 text-[#D4AF37] animate-fade-in-up" style="animation-delay: 0.2s">
          ${name}
        </h1>
        <p class="text-sm font-light tracking-wide text-white/70 max-w-[280px] mb-12 leading-relaxed animate-fade-in-up" style="animation-delay: 0.3s">
          ${bio}
        </p>

        <!-- Links -->
        <div class="w-full flex flex-col gap-4 animate-fade-in-up" style="animation-delay: 0.4s">
          ${linksHtml}
        </div>
        
        <!-- Footer -->
        <div class="mt-20 pb-8 animate-fade-in-up" style="animation-delay: 0.5s">
          <div class="text-[10px] uppercase tracking-[0.3em] text-white/30 font-serif">
            Powered by Prism
          </div>
        </div>
      </div>
    </div>`;
  } else if (theme === 'minimal-clean') {
    bodyClass = "bg-[#fcfcfc] text-[#111] font-sans";
    themeHtml = `
    <div class="relative min-h-screen w-full flex flex-col items-center py-20 px-6">
      <div class="w-full max-w-sm mx-auto flex flex-col items-center text-center">
        <!-- Profile Image -->
        <div class="w-24 h-24 mb-6 animate-fade-in-up" style="animation-delay: 0.1s">
          <img src="${image || 'https://i.pravatar.cc/150'}" alt="${name}" class="w-full h-full object-cover rounded-full shadow-sm border border-gray-100" />
        </div>

        <!-- Name & Bio -->
        <h1 class="text-2xl font-bold tracking-tight mb-2 text-black animate-fade-in-up" style="animation-delay: 0.2s">
          ${name}
        </h1>
        <p class="text-[15px] text-gray-500 max-w-[280px] mb-10 leading-relaxed font-light animate-fade-in-up" style="animation-delay: 0.3s">
          ${bio}
        </p>

        <!-- Links -->
        <div class="w-full flex flex-col gap-3 animate-fade-in-up" style="animation-delay: 0.4s">
          ${linksHtml}
        </div>
        
        <!-- Footer -->
        <div class="mt-20 pb-8 animate-fade-in-up" style="animation-delay: 0.5s">
          <div class="text-[11px] uppercase tracking-wider text-gray-400 font-medium">
            Powered by Prism
          </div>
        </div>
      </div>
    </div>`;
  } else { // afro-futuriste
    bodyClass = "bg-[#1a0b00] text-white font-display";
    themeHtml = `
    <div class="relative min-h-screen w-full flex flex-col items-center py-20 px-6 overflow-hidden">
      <!-- Sunset gradient glow effects -->
      <div class="absolute top-[-20%] left-[-10%] w-[140%] h-[60%] bg-[#ff6b35]/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div class="absolute bottom-[-10%] right-[-20%] w-[100%] h-[50%] bg-[#D4AF37]/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <!-- Abstract geometric pattern -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#D4AF37 2px, transparent 2px); background-size: 30px 30px;"></div>

      <div class="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center">
        <!-- Profile Image -->
        <div class="avatar-float relative w-32 h-32 mb-8 group animate-fade-in-up" style="animation-delay: 0.1s">
          <div class="absolute inset-0 rounded-full rotate-3 bg-gradient-to-tr from-[#ff6b35] to-[#D4AF37] blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ff6b35] to-[#D4AF37] p-1">
            <img src="${image || 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop'}" alt="${name}" class="w-full h-full object-cover rounded-full bg-[#1a0b00]" />
          </div>
        </div>

        <!-- Name & Bio -->
        <h1 class="text-4xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#ff6b35] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] animate-fade-in-up" style="animation-delay: 0.2s">
          ${name}
        </h1>
        <p class="text-sm text-[#ffcda3]/80 max-w-[280px] mb-10 leading-relaxed font-medium animate-fade-in-up" style="animation-delay: 0.3s">
          ${bio}
        </p>

        <!-- Links -->
        <div class="w-full flex flex-col gap-4 animate-fade-in-up" style="animation-delay: 0.4s">
          ${linksHtml}
        </div>
        
        <!-- Footer -->
        <div class="mt-20 pb-8 animate-fade-in-up" style="animation-delay: 0.5s">
          <div class="text-[10px] uppercase tracking-widest text-[#D4AF37]/50 font-bold flex items-center justify-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#ff6b35] shadow-[0_0_10px_rgba(255,107,53,0.8)] pulse-slow"></span>
            Prism Core
          </div>
        </div>
      </div>
    </div>`;
  }

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} | Prism.bio</title>
  <meta name="description" content="${bio}">
  
  <!-- Font imports -->
  ${fontImports}

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['"Playfair Display"', 'serif'],
            display: ['Outfit', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <style>
    /* Entry fade-in animation */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;
    }

    /* Floating avatar animation */
    @keyframes avatarFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .avatar-float {
      animation: avatarFloat 6s ease-in-out infinite;
    }

    /* Soft pulse animation */
    @keyframes pulseSlow {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.2); }
    }
    .pulse-slow {
      animation: pulseSlow 3s ease-in-out infinite;
    }

    /* Hide scrollbar */
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  </style>
</head>
<body class="${bodyClass} no-scrollbar min-h-screen">
  ${themeHtml}

  <!-- Dark Luxury CSS particle generation -->
  ${theme === 'dark-luxury' ? `
  <script>
    const container = document.getElementById('particles');
    const particleCount = 40;
    for(let i=0; i<particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute bg-[#D4AF37] rounded-full opacity-30';
      const size = Math.random() * 3 + 1;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.transform = 'translate3d(0, 0, 0)';
      
      // Random float animation
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * -20;
      particle.style.animation = 'floatParticle ' + duration + 's linear infinite';
      particle.style.animationDelay = delay + 's';
      
      container.appendChild(particle);
    }
  </script>
  <style>
    @keyframes floatParticle {
      0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      10% {
        opacity: 0.3;
      }
      90% {
        opacity: 0.3;
      }
      100% {
        transform: translateY(-100px) translateX(20px);
        opacity: 0;
      }
    }
  </style>
  ` : ''}
</body>
</html>`;
}
