"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { PublicGoodSection } from "@/components/public-good-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div 
      className="flex min-h-screen flex-col page-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <PublicGoodSection />
      </main>
      <Footer />
    </motion.div>
  );
}
