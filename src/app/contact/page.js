"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import AfricanPattern from "@/components/AfricanPattern";
import { ArrowLeft, Mail, Send, Check } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#080502] text-white relative">
      <Header />
      <AfricanPattern className="fixed z-0 text-[#D4AF37]" opacity="0.04" />

      <div className="flex flex-col min-h-screen items-center justify-center p-6 pt-32 pb-20 relative z-10">
        <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b35]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <Mail size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-serif font-bold">Contactez-nous</h1>
              <p className="text-white/40 text-xs mt-1">Une question ? Notre équipe vous répond en moins de 24h.</p>
            </div>
          </div>

          {isSent ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(34,197,94,0.15)] animate-bounce">
                <Check size={32} className="stroke-[3]" />
              </div>
              <h3 className="text-xl font-bold">Message envoyé !</h3>
              <p className="text-sm text-white/50 max-w-xs mx-auto text-center">
                Merci de nous avoir contactés. Nous reviendrons vers vous au plus vite.
              </p>
              <button 
                onClick={() => setIsSent(false)}
                className="mt-6 text-xs text-[#D4AF37] hover:underline"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-white/60 mb-2 ml-1">Nom complet</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                  placeholder="Koffi Mensah"
                />
              </div>

              <div>
                <label className="block text-xs text-white/60 mb-2 ml-1">Adresse email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                  placeholder="vous@exemple.com"
                />
              </div>

              <div>
                <label className="block text-xs text-white/60 mb-2 ml-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#ff6b35] text-black rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                >
                  <Send size={16} /> Envoyer le message
                </button>
              </div>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-[#f3d368] transition-colors">
              <ArrowLeft size={16} /> Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
