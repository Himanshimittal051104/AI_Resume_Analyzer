"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/app/providers";
export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const backgroundColors = {
    "/":"bg-emerald-100",
    "/about":"bg-pink-200"
  };

  const pageBgClass = backgroundColors[pathname] || "";

  return (
        <div className={`${pageBgClass} min-h-screen `}>
          <Providers>
          <Navbar />
         <main > {children}</main>
          <Footer />
          </Providers>
        </div>
  );
}