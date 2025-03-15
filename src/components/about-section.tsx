"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, AlertTriangle, Link as LinkIcon, FileText, Image as ImageIcon, Database } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Pre-Publication Scanning",
      description: "Analyze content before pushing to IPFS, ensuring websites remain safe and responsible."
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-primary" />,
      title: "Threat Detection",
      description: "Flags inappropriate, misleading, or harmful content before permanent IPFS storage."
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Text Analysis",
      description: "AI-powered scrutiny of all website text elements using advanced language models."
    },
    {
      icon: <ImageIcon className="h-10 w-10 text-primary" />,
      title: "Image Analysis",
      description: "Computer vision algorithms detect inappropriate or harmful visual content with high accuracy."
    },
    {
      icon: <LinkIcon className="h-10 w-10 text-primary" />,
      title: "URL Verification",
      description: "Detects phishing and malicious links before they become permanently stored on IPFS."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Privacy Preserving",
      description: "All content analysis happens without compromising user privacy or storing sensitive data."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/50"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute -top-24 -right-24 text-primary/5 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.5,-57.2C59.9,-45.8,67.4,-29.2,70.3,-12.2C73.2,4.8,71.6,22.2,62.7,34.8C53.8,47.5,37.7,55.3,21.2,60.2C4.6,65.1,-12.3,67,-27.7,62C-43.1,57,-57,45.1,-65.3,29.7C-73.6,14.2,-76.3,-4.8,-71.5,-22.1C-66.7,-39.4,-54.5,-55,-39.7,-65.8C-24.9,-76.7,-7.5,-82.8,7.9,-81.8C23.3,-80.8,35.1,-68.6,47.5,-57.2Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute -bottom-24 -left-24 text-primary/5 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.7,-58.4C59.1,-47.1,64.1,-29.6,67.4,-11.5C70.7,6.6,72.3,25.2,64.5,38.9C56.7,52.6,39.6,61.4,21.9,66.6C4.3,71.8,-13.8,73.4,-30.4,68.1C-47,62.8,-62.1,50.6,-70.4,34.3C-78.7,18,-80.2,-2.4,-74.1,-20.2C-68,-38,-54.3,-53.2,-38.6,-63.4C-22.9,-73.6,-5.2,-78.8,11.2,-76.5C27.7,-74.2,36.3,-69.6,47.7,-58.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Empowering Decentralized <span className="text-primary">Websites</span> with AI Moderation
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground">
              Modera AI provides seamless content moderation for websites before they are stored permanently on IPFS, 
              ensuring they remain safe and responsible.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors duration-300 overflow-hidden group hover-lift hover-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 