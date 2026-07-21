import DashboardPreview from "@/components/DashboardPreview";
import Hero from "@/components/Hero";
import InsightFlow from "@/components/InsightFlow";
import SignatureInteraction from "@/components/SignatureInteraction";

export default function Home() {
  return (
    <div>
      <Hero />
      <InsightFlow />
      <DashboardPreview />
      <SignatureInteraction />
    </div>
  );
}
