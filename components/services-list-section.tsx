import Wrapper from "@/components/layout/wrapper";
import ServicesListGrid from "@/components/services-list-grid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ServicesListSection() {
  return (
    <section className="py-20 bg-black text-white">
      <Wrapper>
        <header>
          <h4 className="text-lg uppercase tracking-[2px]">Our Services</h4>
          <h3 className="mt-7 text-4xl md:text-5xl font-open-sans font-semibold">
            Learn About Our Practice Areas
          </h3>
        </header>
        <ServicesListGrid />
        <Button>
          Learn more <ArrowRight />
        </Button>
      </Wrapper>
    </section>
  );
}
