import Wrapper from "@/components/layout/wrapper";
import { Button } from "@/components/ui/button";

export default function GoalSection() {
  return (
    <section className="bg-[#cbff00] py-20">
      <Wrapper>
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-open-sans font-bold capitalize hyphens-auto">
            Our goal is to create 360° Value{" "}
            <span className="text-black/40">for all our stakeholders</span>
          </h2>
          <Button className="mt-14 bg-black text-[#cbff00] hover:text-black">
            Contact Us
          </Button>
        </div>
      </Wrapper>
    </section>
  );
}
