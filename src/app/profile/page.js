"use client";

import { useEffect, useState } from "react";
import DarkLuxury from "@/components/themes/DarkLuxury";
import MinimalClean from "@/components/themes/MinimalClean";
import AfroFuturiste from "@/components/themes/AfroFuturiste";

const DEFAULT_CONFIG = {
  name: "Koffi Mensah",
  bio: "Créateur Digital & Designer 🌍",
  image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop",
  links: [
    { id: "1", label: "Mon Portfolio", url: "https://example.com" },
    { id: "2", label: "Twitter", url: "https://twitter.com" },
    { id: "3", label: "Instagram", url: "https://instagram.com" }
  ],
  theme: "afro-futuriste"
};

export default function ProfilePage() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("prismConfig");
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing saved config", e);
        setConfig(DEFAULT_CONFIG);
      }
    } else {
      setConfig(DEFAULT_CONFIG);
    }
  }, []);

  if (!config) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
      </div>
    );
  }

  const renderTheme = () => {
    switch (config.theme) {
      case "dark-luxury":
        return <DarkLuxury config={config} />;
      case "minimal-clean":
        return <MinimalClean config={config} />;
      case "afro-futuriste":
        return <AfroFuturiste config={config} />;
      default:
        return <DarkLuxury config={config} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-black overflow-y-auto overflow-x-hidden no-scrollbar">
      {renderTheme()}
    </div>
  );
}
