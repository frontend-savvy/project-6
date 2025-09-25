import ImageCredit from "@/components/image-credit";
import Wrapper from "@/components/layout/wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServicesFeatureSection() {
  return (
    <section className="py-20 bg-black">
      <Wrapper>
        <div className="flex flex-col md:flex-row relative md:mt-20 md:mr-24">
          <div className="hidden md:block bg-transparent border-[#cbff00] border-28 absolute rounded-full h-[200px] w-[200px] -top-20 -right-24"></div>
          <div className="min-h-[400px] lg:ml-24 w-full relative flex-1">
            <Image
              fill
              className="object-cover object-top"
              src="/service-feat.jpg"
              alt={""}
            />
          </div>
          <div className="relative w-full flex-1 bg-white">
            <div className="p-8">
              <h3 className="font-open-sans font-bold leading-[1.1] text-4xl hyphens-auto">
                Diversity, Equity, and Inclusion
              </h3>
              <p className="mt-8">
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit nullam nunc justo sagittis suscipit ultrices.
              </p>
              <ImageCredit className="mt-8 text-black" />
              <Button className="mt-8">learn more</Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
