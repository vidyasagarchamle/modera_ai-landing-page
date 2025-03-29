"use client";

import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, AlertTriangle, FileText, Globe, Database, CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 0.9, 0.7],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32 w-full">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background dark:from-primary/30 dark:via-background dark:to-background"></div>
      
      {/* Hexagon pattern for IPFS */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 dark:opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5) rotate(0)">
              <path d="M25,17.3 L25,0 L0,8.7 L0,25.9 L25,34.6 L50,25.9 L50,8.7 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/20" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 h-40 w-40 rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl"
          initial={{ opacity: 0 }}
          animate={pulseAnimation}
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          <div className="flex flex-col">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Database className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary">IPFS-READY SOLUTION</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight">
                AI-Powered <span className="text-primary relative">
                  Website Moderation
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                  />
                </span> for IPFS
              </h1>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <p className="mt-6 text-lg text-muted-foreground">
                Ensure ethical, safe, and privacy-preserving content moderation before publishing websites on IPFS. Modly AI scans text, images, and links to detect harmful content while maintaining decentralization and censorship resistance.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="font-medium group hover-lift hover-glow">
                <Link href="#get-access" className="flex items-center gap-2">
                  Request API Access
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-lift">
                <Link href="#how-it-works">
                  Learn How It Works
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <motion.div 
                className="flex items-center gap-2 hover-lift"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">Privacy-Focused</p>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 hover-lift"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">Threat Detection</p>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 hover-lift"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">Content Analysis</p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Hero image/illustration */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={fadeInUp}
            animate={floatingAnimation}
          >
            <div className="relative w-full max-w-md hover-scale">
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 dark:from-primary/40 dark:to-primary/20 blur-xl transform rotate-3"
                animate={{
                  rotate: [3, 5, 3],
                  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
              ></motion.div>
              <div className="relative rounded-2xl border border-primary/20 bg-background/80 backdrop-blur-sm p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4 border-b pb-4">
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="h-3 w-3 rounded-full bg-red-500"
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                    <motion.div 
                      className="h-3 w-3 rounded-full bg-yellow-500"
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                    <motion.div 
                      className="h-3 w-3 rounded-full bg-green-500"
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                  </div>
                  <div className="text-xs font-mono text-muted-foreground">IPFS Website Scan</div>
                </div>
                
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-start gap-3"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Globe className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Pre-Publication Scan Complete</div>
                      <div className="text-xs text-muted-foreground mt-1">Ready for IPFS storage</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-muted/50 rounded-lg p-3"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="text-xs font-medium mb-2">Website Analysis</div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs">NSFW Content</span>
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-green-500"
                            initial={{ width: 0 }}
                            animate={{ width: "5%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                          ></motion.div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs">Misinformation</span>
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-green-500"
                            initial={{ width: 0 }}
                            animate={{ width: "8%" }}
                            transition={{ duration: 1, delay: 0.7 }}
                          ></motion.div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs">Malicious Links</span>
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-green-500"
                            initial={{ width: 0 }}
                            animate={{ width: "3%" }}
                            transition={{ duration: 1, delay: 0.9 }}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">Processed in 0.24s</span>
                    <motion.div 
                      className="flex items-center gap-1 text-primary font-medium"
                      whileHover={{ scale: 1.1 }}
                    >
                      <CheckCircle className="h-3 w-3" />
                      <span>IPFS Ready</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 