"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { UserPlus } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [isPremium, setIsPremium] = useState(false);
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup by saving user state to localStorage
    localStorage.setItem("prismUser", JSON.stringify({ loggedIn: true, isPremium }));
    router.push("/builder");
  };

  return (
    <div className="min-h-screen bg-[#080502] text-white">
      <Header />
      <div className="flex min-h-screen items-center justify-center p-6 pt-24">
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#ff6b35]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="text-center mb-8 relative z-10">
            <h1 className="text-3xl font-serif font-bold mb-2">Rejoignez-nous.</h1>
            <p className="text-white/50 text-sm">Créez votre page Prism en quelques secondes.</p>
          </div>
          
          <form onSubmit={handleSignup} className="space-y-4 relative z-10">
            <div>
              <label className="block text-xs text-white/60 mb-2 ml-1">Nom complet</label>
              <input 
                type="text" 
                required
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff6b35]/50 transition-colors"
                placeholder="Koffi Mensah"
              />
            </div>
            <div>
              <label className="block text-xs text-white/60 mb-2 ml-1">Adresse email</label>
              <input 
                type="email" 
                required
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff6b35]/50 transition-colors"
                placeholder="vous@exemple.com"
              />
            </div>
            <div>
              <label className="block text-xs text-white/60 mb-2 ml-1">Mot de passe</label>
              <input 
                type="password" 
                required
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff6b35]/50 transition-colors"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center gap-2 py-2">
              <input 
                type="checkbox" 
                id="premium-mock-signup"
                checked={isPremium}
                onChange={(e) => setIsPremium(e.target.checked)}
                className="w-4 h-4 rounded border-white/20 bg-black/40 text-[#ff6b35] focus:ring-[#ff6b35]/50"
              />
              <label htmlFor="premium-mock-signup" className="text-xs text-[#ff6b35] cursor-pointer">
                Simuler un compte Premium (Pour le test)
              </label>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#ff6b35] text-black rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,107,53,0.2)]"
              >
                <UserPlus size={18} />
                Créer mon compte
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center relative z-10">
            <p className="text-xs text-white/40">
              Déjà un compte ?{" "}
              <Link href="/login" className="text-[#ff6b35] hover:underline">Se connecter</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
