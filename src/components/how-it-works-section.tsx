"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileSearch, Brain, Tags, BarChart4, Code, Database, Globe } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <FileSearch className="h-10 w-10 text-primary" />,
      title: "Content Extraction",
      description: "Scans website content (text, images, links) before IPFS upload.",
      details: [
        "Supports various Web3 website formats",
        "Preserves contextual meaning in analysis",
        "Optimized for IPFS content types"
      ]
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "AI Analysis",
      description: "Uses advanced models like GPT-4 Vision for deep content review.",
      details: [
        "Detects harmful content with high accuracy",
        "Context-aware moderation ensures fairness",
        "Continuous model improvements"
      ]
    },
    {
      icon: <Tags className="h-10 w-10 text-primary" />,
      title: "Smart Categorization",
      description: "Classifies flagged content into specific categories.",
      details: [
        "Detailed classification system",
        "Provides transparent moderation reasons",
        "Nuanced content categories"
      ]
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-primary" />,
      title: "Confidence Scoring",
      description: "Assigns confidence levels to flagged content.",
      details: [
        "Granular confidence metrics",
        "Allows adjustable moderation thresholds",
        "Uncertainty highlighting"
      ]
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Seamless Integration",
      description: "RESTful API for easy website moderation before IPFS storage.",
      details: [
        "Developer-friendly SDKs and documentation",
        "Webhook support for real-time scanning",
        "Simple integration with IPFS workflows"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute right-0 top-0 h-96 w-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute left-0 bottom-0 h-96 w-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How <span className="text-primary">Modera AI</span> Works
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our AI-powered moderation process is designed to be effective, transparent, and easy to integrate,
            providing powerful content safety for IPFS websites with minimal implementation effort.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <Card className="relative overflow-hidden border-primary/10 group hover:border-primary/30 transition-all duration-300 hover-scale">
                {index < steps.length - 1 && (
                  <div className="absolute left-12 top-[5.5rem] bottom-0 w-0.5 bg-border z-0"></div>
                )}
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 z-10">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <div className="hidden md:block h-1 w-1 rounded-full bg-muted-foreground"></div>
                        <span className="text-sm text-muted-foreground">Step {index + 1}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 