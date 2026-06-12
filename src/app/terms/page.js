import Link from "next/link";
import Header from "@/components/Header";
import AfricanPattern from "@/components/AfricanPattern";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080502] text-white relative">
      <Header />
      <AfricanPattern className="fixed z-0 text-[#ff6b35]" opacity="0.04" />

      <div className="flex flex-col min-h-screen items-center justify-center p-6 pt-32 pb-20 relative z-10">
        <div className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b35]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#ff6b35]/10 flex items-center justify-center text-[#ff6b35]">
              <FileText size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-serif font-bold">Conditions d'utilisation</h1>
              <p className="text-white/40 text-xs mt-1">Dernière mise à jour : 12 juin 2026</p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-white/70 leading-relaxed font-light">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white font-serif">1. Acceptation des conditions</h2>
              <p>
                En accédant au site Prism.bio et en utilisant ses fonctionnalités de création de pages personnelles, vous acceptez d'être lié par les présentes conditions d'utilisation.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white font-serif">2. Responsabilité du contenu</h2>
              <p>
                Vous êtes entièrement responsable de tout contenu (photos, textes, liens) que vous publiez sur votre profil Prism. Aucun lien vers des sites illégaux, malveillants ou offensants n'est toléré.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white font-serif">3. Propriété intellectuelle</h2>
              <p>
                Les modèles de pages, de thèmes et les visuels animés fournis sur Prism.bio sont protégés par le droit d'auteur. Vous obtenez une licence d'utilisation personnelle et commerciale limitée pour votre propre page de profil.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white font-serif">4. Abonnement Premium</h2>
              <p>
                L'accès à la formule Premium est facturé mensuellement ou annuellement. Vous pouvez résilier votre abonnement à tout moment. Tout mois entamé reste dû.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#ff6b35] hover:text-[#ff8d60] transition-colors">
              <ArrowLeft size={16} /> Retour à l'accueil
            </Link>
            <Link href="/builder" className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#ff6b35] text-black rounded-full font-bold text-xs hover:scale-105 active:scale-95 transition-all">
              Créer mon profil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
