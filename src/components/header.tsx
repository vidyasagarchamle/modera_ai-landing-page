"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${
      isScrolled ? "bg-background/95 shadow-sm" : "bg-background/50"
    }`}>
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary relative group">
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#public-good" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Public Good
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#get-access" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Get Access
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm" className="hidden md:flex hover-lift">
            <Link href="#get-access">
              Request API
            </Link>
          </Button>
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex justify-start py-4">
                <Logo />
              </div>
              <nav className="flex flex-col gap-6 mt-8">
                <Link 
                  href="#about" 
                  className="text-base font-medium transition-colors hover:text-primary flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="#how-it-works" 
                  className="text-base font-medium transition-colors hover:text-primary flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
                </Link>
                <Link 
                  href="#public-good" 
                  className="text-base font-medium transition-colors hover:text-primary flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Public Good
                </Link>
                <Link 
                  href="#get-access" 
                  className="text-base font-medium transition-colors hover:text-primary flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Access
                </Link>
                <div className="pt-4 mt-4 border-t">
                  <Button asChild className="w-full" size="sm">
                    <Link href="#get-access" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 