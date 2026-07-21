import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Xai - Intelligence Workspace",
  description:
    "Xai - Intelligence Workspace is a high-fidelity interactive AI product experience that demonstrates how modern artificial intelligence transforms raw information into structured intelligence, actionable insights, and intelligent automation.",
};

export default function RootLayout({ children }) {
  return(
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#050816] text-white"
      >
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>,
  );
}
