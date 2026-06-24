import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FITCORP GYM | Premium Fitness Experience",
  description: "Train with expert coaches, modern equipment, and a community dedicated to helping you become your strongest self. Premium membership starting at just ₹1200/month.",
  keywords: ["Gym", "Fitness", "Workout", "Fitcorp", "Fitcorp Gym", "Strength Training", "Cardio", "Personal Trainer", "Gym Membership", "Affordable Gym"],
  openGraph: {
    title: "FITCORP GYM | Premium Fitness Experience",
    description: "Train with expert coaches, modern equipment, and a community dedicated to helping you become your strongest self. Starting at ₹1200/month.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} scroll-smooth`}>
      <body className="bg-brand-bg text-brand-text font-body antialiased min-h-screen relative overflow-x-hidden selection:bg-brand-primary selection:text-brand-bg">
        <div className="absolute inset-0 ambient-glow pointer-events-none z-0" />
        <CustomCursor />
        <LenisProvider>
          <div className="relative z-10">
            {children}
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
