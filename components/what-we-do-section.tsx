import Wrapper from "@/components/layout/wrapper";
import WhatWeDoGrid from "@/components/what-we-do-grid";

export default function WhatWeDoSection() {
  return (
    <section className="bg-[#cbff00] py-20">
      <Wrapper>
        <div>
          <h2 className="text-4xl text-center md:text-6xl font-open-sans font-semibold pb-16 capitalize">
            What we do
          </h2>
        </div>
        <WhatWeDoGrid />
      </Wrapper>
    </section>
  );
}
