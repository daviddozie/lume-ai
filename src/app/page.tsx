import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { HowItWorks } from "@/components/home/how-it-works";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/home/faq";
import { Download } from "@/components/home/download";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Download />
    </div>
  );
}
