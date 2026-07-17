import { Hero } from "@/components/sections/Hero";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { HumanoidRobotics } from "@/components/sections/HumanoidRobotics";
import { RehabDevices } from "@/components/sections/RehabDevices";
import { TechnologyInnovation } from "@/components/sections/TechnologyInnovation";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent/30 selection:text-foreground">
      <Hero />
      <CompanyOverview />
      <HumanoidRobotics />
      <RehabDevices />
      <TechnologyInnovation />
    </main>
  );
}
