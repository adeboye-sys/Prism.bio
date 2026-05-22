import Link from "next/link";
import { User, LogIn, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-6 py-4 flex items-center justify-between">
      <div className="absolute inset-0 bg-[#080502]/80 backdrop-blur-md border-b border-white/5 -z-10"></div>
      
      <Link href="/" className="flex items-center gap-2 relative group">
        <div className="absolute -inset-2 bg-[#D4AF37]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <h1 className="text-xl font-serif font-bold tracking-wider relative z-10 text-white">
          PRISM<span className="text-[#D4AF37]">.BIO</span>
        </h1>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="/#features" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
          Fonctionnalités
        </Link>
        <Link href="/#reviews" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
          Avis
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link 
          href="/login" 
          className="hidden sm:flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
        >
          <LogIn size={16} />
          Connexion
        </Link>
        <Link 
          href="/premium" 
          className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#D4AF37] hover:text-[#f3d368] transition-colors px-3 py-2 rounded-lg hover:bg-[#D4AF37]/10 border border-[#D4AF37]/20"
        >
          <Sparkles size={14} />
          Premium
        </Link>
        <Link 
          href="/signup" 
          className="flex items-center gap-2 text-sm font-semibold text-[#080502] bg-[#D4AF37] hover:bg-[#f3d368] transition-colors px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:scale-105 active:scale-95 duration-200"
        >
          <User size={16} />
          S'inscrire
        </Link>
      </div>
    </header>
  );
}
