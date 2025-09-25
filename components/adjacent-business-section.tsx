import Circle from "@/components/circle";
import ImageCredit from "@/components/image-credit";
import Wrapper from "@/components/layout/wrapper";
import P from "@/components/p";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AdjacentBusinessSection() {
  return (
    <section className="py-20 bg-black text-white">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <Circle />
            <h3 className="font-open-sans font-semibold text-3xl mt-12">
              We build adjacent businesses to optimize our areas of expertise
            </h3>
            <P className="mt-8">
              Elit sed vulputate mi sit amet mauris. Arcu odio ut sem nulla
              pharetra. Nisi scelerisque eu ultrices vitae. Dapibus ultrices in
              iaculis nunc sed augue lacus. Laoreet non curabitur gravida arcu
              ac. Eget velit aliquet sagittis id consectetur purus ut. Sit amet
              luctus venenatis lectus magna fringilla urna. Dolor morbi non arcu
              risus quis varius quam. Aenean sed adipiscing diam donec
              adipiscing tristique risus.
            </P>
            <ImageCredit className="mt-8" />
            <Button className="mt-13">
              learn more
              <ArrowRight />
            </Button>
          </div>
          <div className="flex flex-col justify-center">
            <div className="relative aspect-square rounded-full overflow-hidden">
              <Image fill className="object-cover" src="/business.jpg" alt="" />
            </div>
            <Circle />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
