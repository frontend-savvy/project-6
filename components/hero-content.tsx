import ImageCredit from "@/components/image-credit";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroContent() {
  return (
    <div className="text-center mx-auto relative text-white">
      <div className="relative h-[180px] w-[180px] mx-auto">
        <Image fill src="/logo-1.png" alt="" />
      </div>
      <h1 className="underline underline-offset-8 mt-13 | text-4xl sm:text-5xl md:text-7xl hyphens-auto font-open-sans leading-[1.2] ">
        {" "}
        Reinvent what your business could be
      </h1>
      <Button className="mt-14">About us</Button>
      <ImageCredit className="mt-14" />
    </div>
  );
}
