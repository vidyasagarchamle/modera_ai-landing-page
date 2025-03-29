import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modly AI - Ethical Content Modlytion for the Decentralized Web",
  description: "AI-powered moderation for text, images, and links on Web3. Built for ethical, censorship-resistant content moderation.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: ["/favicon.svg"],
    apple: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#7C3AED",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://modly.ai",
    title: "Modly AI - Ethical Content Modlytion for the Decentralized Web",
    description: "AI-powered moderation for text, images, and links on Web3. Built for ethical, censorship-resistant content moderation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Modly AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modly AI - Ethical Content Modlytion for the Decentralized Web",
    description: "AI-powered moderation for text, images, and links on Web3. Built for ethical, censorship-resistant content moderation.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex-1 flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
