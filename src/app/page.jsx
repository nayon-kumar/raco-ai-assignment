import DashboardPreview from "@/components/DashboardPreview";
import Hero from "@/components/Hero";
import InsightFlow from "@/components/InsightFlow";
import SignatureInteraction from "@/components/SignatureInteraction";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-50">
      <Hero />
      <InsightFlow />
      <DashboardPreview />
      <SignatureInteraction />
    </div>
  );
}
