import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WorkPreview } from "@/components/sections/WorkPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WorkPreview />
      <Contact />
    </>
  );
}
