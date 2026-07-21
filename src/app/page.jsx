import DashboardPreview from "@/components/DashboardPreview";
import Hero from "@/components/Hero";
import InsightFlow from "@/components/InsightFlow";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-50">
      <Hero />
      <InsightFlow />
      <DashboardPreview />
    </div>
  );
}
