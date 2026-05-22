"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { LogIn } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isPremium, setIsPremium] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login by saving user state to localStorage
    localStorage.setItem("prismUser", JSON.stringify({ loggedIn: true, isPremium }));
    router.push("/builder");
  };

  return (
    <div className="min-h-screen bg-[#080502] text-white">
      <Header />
      <div className="flex min-h-screen items-center justify-center p-6 pt-24">
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="text-center mb-8 relative z-10">
            <h1 className="text-3xl font-serif font-bold mb-2">Bon retour.</h1>
            <p className="text-white/50 text-sm">Connectez-vous à votre espace créateur.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4 relative z-10">
            <div>
              <label className="block text-xs text-white/60 mb-2 ml-1">Adresse email</label>
              <input 
                type="email" 
                required
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                placeholder="vous@exemple.com"
              />
            </div>
            <div>
              <label className="block text-xs text-white/60 mb-2 ml-1">Mot de passe</label>
              <input 
                type="password" 
                required
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center gap-2 py-2">
              <input 
                type="checkbox" 
                id="premium-mock"
                checked={isPremium}
                onChange={(e) => setIsPremium(e.target.checked)}
                className="w-4 h-4 rounded border-white/20 bg-black/40 text-[#D4AF37] focus:ring-[#D4AF37]/50"
              />
              <label htmlFor="premium-mock" className="text-xs text-[#D4AF37] cursor-pointer">
                Simuler un compte Premium (Pour le test)
              </label>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#ff6b35] text-black rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <LogIn size={18} />
                Se connecter
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center relative z-10">
            <p className="text-xs text-white/40">
              Pas encore de compte ?{" "}
              <Link href="/signup" className="text-[#D4AF37] hover:underline">S'inscrire</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
