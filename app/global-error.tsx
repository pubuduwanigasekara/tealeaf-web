"use client";

import "./globals.css";
import { Manrope, Playfair_Display } from "next/font/google";
import { ErrorCom } from "@/components/ErrorCom";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${playfairDisplay.variable} antialiased font-sans bg-brand-cream text-brand-dark selection:bg-brand-accent selection:text-white tracking-[0.025em]`}>
        <ErrorCom reset={reset} />
      </body>
    </html>
  );
}
