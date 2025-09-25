import Wrapper from "@/components/layout/wrapper";
import P from "@/components/p";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Celia Almeda",
    text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.",
    image: "/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Frank Kinney",
    text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.",
    image: "/testimonial2.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#e4e5e4]">
      <Wrapper>
        <header className="text-center pb-16">
          <h2 className="font-open-sans font-bold text-4xl md:text-6xl ">
            Testimonials
          </h2>
          <P className="mt-6">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit .
          </P>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white px-8 py-10">
              <div className="flex justify-between items-center">
                <div className="ml-6">
                  <h3 className="relative font-open-sans font-bold text-xl">
                    {item.name}
                  </h3>
                  <Image
                    height={64}
                    width={64}
                    src="/quote.png"
                    alt=""
                    className="object-cover -mt-12 -ml-6"
                  />
                </div>
                <div>
                  <Image
                    width={79}
                    height={79}
                    className="rounded-full h-[79px] w-[79px] object-cover object-top"
                    src={item.image}
                    alt=""
                  />
                </div>
              </div>
              <P className="mt-10">{item.text}</P>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
