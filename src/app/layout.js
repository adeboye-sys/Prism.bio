import "./globals.css";
import { Inter, Playfair_Display, Outfit } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "PRISM.BIO",
  description: "Ultra-high-end animated personal pages for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} ${outfit.variable}`}>
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
