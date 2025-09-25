import ImageCredit from "@/components/image-credit";
import Wrapper from "@/components/layout/wrapper";
import P from "@/components/p";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ConsultingTipsSection() {
  return (
    <section className="py-20 bg-[#cbff00] ">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="h-full  min-h-[400px] relative">
            <Image fill className="object-cover" src="/consulting.jpg" alt="" />
          </div>
          <div>
            <div className="bg-black text-white px-8 py-12 md:p-12">
              <h2 className="text-4xl md:text-5xl font-open-sans font-bold">
                How to Get Consulting Clients
              </h2>
              <P className="mt-10">
                Nibh venenatis cras sed felis eget velit aliquet sagittis id.
                Tellus pellentesque eu tincidunt tortor aliquam nulla.
              </P>
              <ImageCredit className="mt-5" />
              <Button className="mt-10">Learn more</Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
