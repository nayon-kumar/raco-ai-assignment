import DashboardPreview from "@/components/DashboardPreview";
import Hero from "@/components/Hero";
import InsightFlow from "@/components/InsightFlow";
import SectionReveal from "@/components/SectionReveal";
import SignatureInteraction from "@/components/SignatureInteraction";

export default function Home() {
  return (
    <div>
      <SectionReveal>
        <Hero />
      </SectionReveal>
      <SectionReveal>
        <InsightFlow />
      </SectionReveal>
      <DashboardPreview />
      <SectionReveal>
        <SignatureInteraction />
      </SectionReveal>
    </div>
  );
}
