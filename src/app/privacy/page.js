import Link from "next/link";
import Header from "@/components/Header";
import AfricanPattern from "@/components/AfricanPattern";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080502] text-white relative">
      <Header />
      <AfricanPattern className="fixed z-0 text-[#D4AF37]" opacity="0.04" />

      <div className="flex flex-col min-h-screen items-center justify-center p-6 pt-32 pb-20 relative z-10">
        <div className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <Shield size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-serif font-bold">Politique de confidentialité</h1>
              <p className="text-white/40 text-xs mt-1">Dernière mise à jour : 12 juin 2026</p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-white/70 leading-relaxed font-light">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white font-serif">1. Collecte des informations</h2>
              <p>
                Nous recueillons les informations que vous nous fournissez directement lors de la création de votre profil, notamment votre adresse email, votre nom complet, votre biographie ainsi que les liens que vous ajoutez à votre page.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white font-serif">2. Utilisation des données</h2>
              <p>
                Les informations recueillies sont utilisées pour faire fonctionner, maintenir et améliorer le service Prism.bio. Vos données de profil configurées sont stockées localement dans votre navigateur et utilisées pour générer votre page personnalisée.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white font-serif">3. Cookies et stockage local</h2>
              <p>
                Prism.bio utilise principalement le stockage local (localStorage) de votre navigateur pour enregistrer vos configurations de profil et vos préférences de thème de manière sécurisée et immédiate.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white font-serif">4. Vos droits</h2>
              <p>
                Vous avez le droit d'accéder, de modifier ou de supprimer vos données à tout moment en ajustant les champs de profil dans le générateur ou en réinitialisant le stockage de votre navigateur.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-[#f3d368] transition-colors">
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
