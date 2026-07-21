import DashboardPreview from "@/components/DashboardPreview";
import Hero from "@/components/Hero";
import InsightFlow from "@/components/InsightFlow";
import SignatureInteraction from "@/components/SignatureInteraction";

export default function Home() {
  return (
    <div className="mt-50">
      <Hero />
      <InsightFlow />
      <DashboardPreview />
      <SignatureInteraction />
    </div>
  );
}
