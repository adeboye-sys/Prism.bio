"use client";

import Link from "next/link";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import { ArrowRight, Star, Sparkles, Zap, Globe } from "lucide-react";
import AfricanPattern from "@/components/AfricanPattern";

// Use the existing 3D background for the hero section
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), { ssr: false });

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#080502] text-white selection:bg-[#D4AF37] selection:text-black relative">
      <Header />

      {/* Subtle African-inspired geometric pattern overlay */}
      <AfricanPattern className="fixed z-0 text-[#D4AF37]" opacity="0.04" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <ThreeBackground theme="dark-luxury" />
        
        {/* Radial gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#080502]/60 to-[#080502] z-0 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D4AF37]/20 text-xs font-medium text-white/80 mb-8 backdrop-blur-sm">
            <Sparkles size={12} className="text-[#D4AF37]" />
            <span>Le nouveau standard pour les créateurs africains</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6 max-w-4xl leading-[1.1]">
            Votre présence digitale, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d368] to-[#ff6b35]">sublimée.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 font-light leading-relaxed">
            Créez des pages "lien en bio" immersives et spectaculaires en quelques secondes. 
            Des environnements 3D, des thèmes haut de gamme et des performances fulgurantes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="/builder" 
              className="flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#ff6b35] text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              Créer mon profil <ArrowRight size={20} />
            </Link>
            <Link 
              href="#examples" 
              className="px-8 py-4 rounded-full font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              Voir des exemples
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <div className="w-0.5 h-12 bg-gradient-to-b from-[#D4AF37] to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative z-10 border-t border-white/5 bg-[#0a0705]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Zéro complexité. Élégance infinie.</h2>
            <p className="text-white/50 max-w-xl mx-auto">Tout ce dont vous avez besoin pour mettre en valeur votre travail, présenté dans une expérience visuelle époustouflante.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Immersion 3D</h3>
              <p className="text-white/60 text-sm leading-relaxed">Des arrière-plans WebGL accélérés matériellement qui fonctionnent parfaitement sur chaque appareil, créant une première impression inoubliable.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ff6b35]/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#ff6b35]/10 flex items-center justify-center mb-6 text-[#ff6b35] group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Performances fulgurantes</h3>
              <p className="text-white/60 text-sm leading-relaxed">Construit sur Next.js 15, votre page se charge instantanément. La génération statique garantit que votre audience n'attend jamais.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#8b5cf6]/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center mb-6 text-[#8b5cf6] group-hover:scale-110 transition-transform">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Thèmes Premium</h3>
              <p className="text-white/60 text-sm leading-relaxed">Des esthétiques de luxe sélectionnées avec soin. De l'élégance minimaliste au thème exclusif Afro-Futuriste, trouvez votre style unique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-32 bg-[#080502] relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-6">Approuvé par les créateurs</h2>
            <div className="flex items-center gap-1 text-[#D4AF37] mb-2">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            <p className="text-white/50 text-sm">4.9/5 par plus de 10 000 utilisateurs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Aïssatou D.",
                role: "Artiste Digitale",
                text: "Prism a complètement transformé la façon dont mes clients perçoivent mon portfolio. L'arrière-plan 3D attire tout de suite l'attention.",
                img: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98a?w=150&h=150&fit=crop"
              },
              {
                name: "Kwame O.",
                role: "Producteur de Musique",
                text: "J'avais un arbre de liens générique avant. Maintenant, j'ai un vrai portail cinématographique. La différence d'engagement est flagrante.",
                img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop"
              },
              {
                name: "Fatou S.",
                role: "Photographe",
                text: "Le thème Luxe Sombre correspond parfaitement à ma marque. La configuration a pris exactement 2 minutes. Un produit incroyable.",
                img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=150&h=150&fit=crop"
              }
            ].map((review, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/10 transition-colors"></div>
                <p className="text-white/80 text-sm italic mb-6 leading-relaxed relative z-10">"{review.text}"</p>
                <div className="flex items-center gap-4 relative z-10">
                  <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                  <div>
                    <h4 className="text-sm font-bold">{review.name}</h4>
                    <p className="text-xs text-[#D4AF37]">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#050301] border-t border-white/10 text-center relative z-10">
        <h2 className="text-2xl font-serif font-bold tracking-widest mb-4">PRISM<span className="text-[#D4AF37]">.BIO</span></h2>
        <p className="text-white/40 text-sm mb-8">© 2026 Prism.bio. Tous droits réservés.</p>
        <div className="flex justify-center gap-6 text-sm text-white/50">
          <Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          <Link href="#" className="hover:text-white transition-colors">Conditions d'utilisation</Link>
          <Link href="#" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
