import { Plus, Trash2, Download, Copy, Share2, Upload, Crown, LogOut, Check, ExternalLink, X, QrCode } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { generateStandaloneHTML } from "@/utils/htmlGenerator";
import QRCode from "qrcode";

export default function Builder({ config, setConfig }) {
  const router = useRouter();
  const [userContext, setUserContext] = useState({ loggedIn: false, isPremium: false });
  const [isCopied, setIsCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalCopied, setModalCopied] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [showQrSection, setShowQrSection] = useState(false);

  const getProfileUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/profile`;
    }
    return "/profile";
  };

  const handleCopyPreview = () => {
    const url = getProfileUrl();
    navigator.clipboard.writeText(url).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleCopyModal = () => {
    const url = getProfileUrl();
    navigator.clipboard.writeText(url).then(() => {
      setModalCopied(true);
      setTimeout(() => setModalCopied(false), 2000);
    });
  };

  const handleDownloadHTML = () => {
    const htmlString = generateStandaloneHTML(config);
    const blob = new Blob([htmlString], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${config.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-prism.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleGenerateQR = async () => {
    try {
      const url = getProfileUrl();
      const dataUrl = await QRCode.toDataURL(url, {
        width: 250,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff'
        }
      });
      setQrCodeUrl(dataUrl);
      setShowQrSection(true);
    } catch (err) {
      console.error("Error generating QR code", err);
    }
  };

  const handleDownloadQR = () => {
    if (!qrCodeUrl) return;
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = `${config.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-qrcode.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowQrSection(false);
    setQrCodeUrl("");
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("prismUser");
    if (savedUser) {
      setUserContext(JSON.parse(savedUser));
    }
  }, []);

  const updateConfig = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleThemeClick = (themeId) => {
    if (themeId === 'afro-futuriste' && !userContext.isPremium) {
      alert("Ce thème exclusif est réservé aux membres Premium. Passez Premium pour débloquer l'Afro-Futurisme !");
      return;
    }
    updateConfig("theme", themeId);
  };

  const handleLogout = () => {
    localStorage.removeItem("prismUser");
    router.push("/");
  };

  const addLink = () => {
    if (config.links.length >= 5 && !userContext.isPremium) {
      alert("La version gratuite est limitée à 5 liens. Passez Premium pour des liens illimités !");
      return;
    }
    const newLink = { id: Date.now().toString(), label: "Nouveau lien", url: "https://" };
    updateConfig("links", [...config.links, newLink]);
  };

  const updateLink = (id, key, value) => {
    const newLinks = config.links.map(link => 
      link.id === id ? { ...link, [key]: value } : link
    );
    updateConfig("links", newLinks);
  };

  const removeLink = (id) => {
    updateConfig("links", config.links.filter(l => l.id !== id));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("L'image est trop grande. Veuillez sélectionner une image de moins de 2 Mo.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      updateConfig("image", reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="h-full flex flex-col overflow-y-auto no-scrollbar pb-10">
      <div className="p-8 border-b border-white/5 sticky top-0 bg-[#121212]/90 backdrop-blur-xl z-20 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-serif font-bold tracking-wider">PRISM<span className="text-[#D4AF37]">.BIO</span></h1>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-xs text-white/50 uppercase tracking-widest">Le Hub des Créateurs</p>
            {userContext.isPremium ? (
              <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                <Crown size={10} /> PREMIUM
              </span>
            ) : (
              <span className="bg-white/10 text-white/50 px-2 py-0.5 rounded text-[10px] font-bold">
                ESSENTIEL
              </span>
            )}
          </div>
        </div>
        <button onClick={handleLogout} className="text-white/40 hover:text-red-400 transition-colors p-2" title="Déconnexion">
          <LogOut size={18} />
        </button>
      </div>

      <div className="p-8 space-y-10 flex-1">
        {/* Profile Section */}
        <section className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37]/80">Informations du profil</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-white/60 mb-2 ml-1">Photo de profil</label>
              <div className="flex items-center gap-4">
                {config.image && (
                  <img src={config.image} alt="Aperçu avatar" className="w-12 h-12 rounded-full object-cover border border-white/10" />
                )}
                <label className="flex-1 cursor-pointer bg-white/5 border border-dashed border-white/20 rounded-2xl px-4 py-3 text-sm focus:outline-none hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5 transition-colors flex items-center justify-center gap-2 text-white/70">
                  <Upload size={16} />
                  <span>Importer une photo</span>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/60 mb-2 ml-1">Nom d'affichage</label>
              <input 
                type="text" 
                value={config.name}
                onChange={(e) => updateConfig("name", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                placeholder="Votre Nom"
              />
            </div>

            <div>
              <label className="block text-xs text-white/60 mb-2 ml-1">Biographie (max 120)</label>
              <textarea 
                maxLength={120}
                value={config.bio}
                onChange={(e) => updateConfig("bio", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors resize-none h-24"
                placeholder="Courte biographie..."
              />
              <div className="text-right text-[10px] text-white/40 mt-1">{config.bio.length}/120</div>
            </div>
          </div>
        </section>

        {/* Theme Selection */}
        <section className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37]/80">Thème</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { id: 'dark-luxury', label: 'Dark Luxury' },
              { id: 'minimal-clean', label: 'Minimal Clean' },
              { id: 'afro-futuriste', label: 'Afro-Futuriste', isPremium: true }
            ].map(t => {
              const isActive = config.theme === t.id;
              const isLocked = t.isPremium && !userContext.isPremium;
              
              return (
                <button
                  key={t.id}
                  onClick={() => handleThemeClick(t.id)}
                  className={`relative py-3 px-2 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                    isActive 
                      ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
                      : isLocked
                        ? 'bg-black/40 border border-white/5 text-white/30 cursor-not-allowed hover:border-red-500/30 hover:text-red-400/70'
                        : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {t.label}
                  {t.isPremium && (
                    <Crown size={12} className={isActive ? "text-black" : isLocked ? "text-white/20" : "text-[#D4AF37]"} />
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* Links Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37]/80">Liens</h2>
            <span className="text-xs text-white/40">{config.links.length}{userContext.isPremium ? '' : '/5'}</span>
          </div>
          
          <div className="space-y-4">
            {config.links.map((link, index) => (
              <div key={link.id} className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 relative group hover:border-white/20 transition-colors">
                <button 
                  onClick={() => removeLink(link.id)}
                  className="absolute right-4 top-4 text-white/20 hover:text-red-400 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
                <div>
                  <input 
                    type="text" 
                    value={link.label}
                    onChange={(e) => updateLink(link.id, "label", e.target.value)}
                    className="w-[85%] bg-transparent text-sm font-medium focus:outline-none placeholder:text-white/30"
                    placeholder="Titre du lien"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    value={link.url}
                    onChange={(e) => updateLink(link.id, "url", e.target.value)}
                    className="w-full bg-black/40 border border-white/5 rounded-xl px-3 py-2 text-xs text-white/60 focus:outline-none focus:border-[#D4AF37]/30 transition-colors"
                    placeholder="URL"
                  />
                </div>
              </div>
            ))}

            {(config.links.length < 5 || userContext.isPremium) && (
              <button 
                onClick={addLink}
                className="w-full py-4 border border-dashed border-white/20 rounded-2xl text-xs font-medium text-white/60 hover:text-white hover:border-white/40 transition-all flex items-center justify-center gap-2"
              >
                <Plus size={16} /> Ajouter un lien
              </button>
            )}
          </div>
        </section>
      </div>

      <div className="p-8 pt-4">
        <button 
          onClick={() => setShowModal(true)}
          className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#ff6b35] text-black rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
        >
          <Download size={18} /> Générer ma page
        </button>
        <button 
          onClick={handleCopyPreview}
          className={`w-full py-4 mt-3 rounded-2xl font-medium text-sm transition-all flex items-center justify-center gap-2 border ${
            isCopied 
              ? 'bg-green-500/10 text-green-400 border-green-500/30' 
              : 'bg-transparent text-white border-white/10 hover:bg-white/5'
          }`}
        >
          {isCopied ? <Check size={16} /> : <Copy size={16} />}
          {isCopied ? "Lien copié !" : "Copier le lien d'aperçu"}
        </button>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
            onClick={handleCloseModal}
          ></div>
          
          <div className="relative w-full max-w-md bg-[#121212]/90 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#D4AF37]/20 rounded-full blur-[60px] pointer-events-none"></div>
            
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col items-center text-center mt-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#ff6b35] flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-pulse">
                <Check size={32} className="text-black stroke-[3]" />
              </div>
              <h3 className="text-2xl font-serif font-bold tracking-wide">Félicitations !</h3>
              <p className="text-sm text-white/60 mt-1">Votre page de profil Prism est en ligne et prête à être partagée.</p>
            </div>

            <div className="space-y-2 mb-8">
              <label className="block text-[10px] uppercase tracking-wider text-white/40 ml-1 font-bold">Lien de votre page</label>
              <div className="flex items-center gap-2 bg-black/40 border border-white/5 rounded-2xl p-3">
                <span className="text-xs text-white/70 truncate flex-1 select-all font-mono ml-1 font-sans">
                  {getProfileUrl()}
                </span>
                <button 
                  onClick={handleCopyModal} 
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    modalCopied 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-[#D4AF37] text-black hover:bg-[#f3d368] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                  }`}
                >
                  {modalCopied ? <Check size={12} /> : <Copy size={12} />}
                  {modalCopied ? "Copié !" : "Copier"}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <a 
                href="/profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#ff6b35] text-black rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(212,175,55,0.2)] text-center font-sans"
              >
                <ExternalLink size={18} /> Voir ma page
              </a>
              <button 
                onClick={handleDownloadHTML}
                className="w-full py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-2xl font-medium text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Download size={18} /> Télécharger le code HTML
              </button>

              {/* QR Code Section */}
              <div className="mt-4 pt-4 border-t border-white/5 space-y-3">
                {!showQrSection ? (
                  <button 
                    onClick={handleGenerateQR}
                    className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white rounded-2xl font-medium text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <QrCode size={15} /> Générer un Code QR (Optionnel)
                  </button>
                ) : (
                  <div className="flex flex-col items-center gap-3 bg-white/5 border border-white/5 rounded-2xl p-4 animate-in fade-in duration-300">
                    <div className="bg-white p-2 rounded-xl shadow-lg">
                      <img src={qrCodeUrl} alt="Code QR de votre profil" className="w-32 h-32 object-contain" />
                    </div>
                    <button 
                      onClick={handleDownloadQR}
                      className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#ff6b35] text-black hover:scale-[1.02] active:scale-[0.98] transition-transform rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                    >
                      <Download size={12} /> Télécharger le Code QR
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={handleCloseModal}
                className="w-full py-3 text-white/40 hover:text-white/70 transition-colors text-xs font-medium"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
