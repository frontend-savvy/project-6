import HeroContent from "@/components/hero-content";
import Wrapper from "@/components/layout/wrapper";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="h-screen relative max-h-[696px]">
      <Image fill className="object-cover" src="/bg.jpg" alt="" />
      <div className="bg-black/40 inset-0 absolute"></div>
      <Wrapper className="h-full">
        <div className=" flex items-center h-full">
          <HeroContent />
        </div>
      </Wrapper>
    </section>
  );
}
