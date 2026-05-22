"use client";

import { useState, useEffect } from "react";
import Builder from "@/components/Builder";
import dynamic from "next/dynamic";

const Preview = dynamic(() => import("@/components/Preview"), { ssr: false });

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

export default function BuilderPage() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [isMounted, setIsMounted] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("prismConfig");
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing saved config", e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("prismConfig", JSON.stringify(config));
    }
  }, [config, isMounted]);

  if (!isMounted) return null;

  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] text-white overflow-hidden flex-col lg:flex-row">
      <div className="w-full lg:w-[400px] xl:w-[500px] h-full flex-shrink-0 border-r border-white/10 relative z-10 bg-[#121212]">
        <Builder config={config} setConfig={setConfig} />
      </div>
      <div className="flex-1 h-full relative overflow-hidden bg-black">
        <Preview config={config} />
      </div>
    </div>
  );
}
