import Link from "next/link";
import Header from "@/components/Header";
import { Sparkles, Check, ArrowRight } from "lucide-react";
import AfricanPattern from "@/components/AfricanPattern";

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-[#080502] text-white relative">
      <Header />
      
      {/* African pattern specifically styled for the Premium page */}
      <AfricanPattern className="fixed z-0 text-[#ff6b35]" opacity="0.06" />
      
      <div className="flex flex-col min-h-screen items-center justify-center p-6 pt-32 pb-20 relative overflow-hidden z-10">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#D4AF37] mb-6 tracking-widest uppercase">
            <Sparkles size={14} />
            <span>Prism Premium</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Démarquez-vous.</h1>
          <p className="text-white/60 text-lg max-w-lg mx-auto">Accédez à des thèmes exclusifs, des analyses détaillées et supprimez la marque Prism de votre profil.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl relative z-10">
          {/* Free Plan */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col">
            <h3 className="text-xl font-bold mb-2">Essentiel</h3>
            <p className="text-white/40 text-sm mb-6">Tout ce qu'il faut pour commencer.</p>
            <div className="text-4xl font-serif font-bold mb-8">Gratuit</div>
            
            <div className="space-y-4 mb-8 flex-1">
              {["1 profil", "3 thèmes de base", "Jusqu'à 5 liens", "Support communautaire"].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <Check size={16} className="text-white/30" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Link href="/signup" className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-medium text-sm text-center hover:bg-white/10 transition-colors">
              Commencer gratuitement
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-b from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-3xl p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-bl-xl">Populaire</div>
            
            <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">Premium</h3>
            <p className="text-white/60 text-sm mb-6">Pour les créateurs exigeants.</p>
            <div className="text-4xl font-serif font-bold mb-1 flex items-baseline gap-2">
              9,99€ <span className="text-lg text-white/40 font-sans font-normal">/mois</span>
            </div>
            <p className="text-xs text-[#D4AF37]/80 mb-8">Facturé annuellement</p>
            
            <div className="space-y-4 mb-8 flex-1">
              {[
                "Profils illimités", 
                "Thèmes exclusifs (Afro-Futuriste, etc.)", 
                "Liens illimités", 
                "Analyses de trafic", 
                "Sans logo Prism",
                "Support prioritaire"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/90">
                  <Check size={16} className="text-[#D4AF37]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#ff6b35] text-black rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              Passer Premium <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
