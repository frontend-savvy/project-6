import Wrapper from "@/components/layout/wrapper";
import P from "@/components/p";
import Socials from "@/components/socials";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-20 bg-[#cbff00]">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[10rem]">
          <div className="">
            <h3 className="font-open-sans font-bold text-4xl ">Get in Touch</h3>
            <h5 className="mt-5 font-open-sans font-bold uppercase tracking-[2px] text-xl">
              {" "}
              Hey! We are looking forward to start a project with you!
            </h5>
            <P className="mt-5">
              Etiam sit amet convallis erat – class aptent taciti sociosqu ad
              litora torquent per conubia! Maecenas gravida lacus. Lorem etiam
              sit amet convallis erat.
            </P>
            <Socials className="mt-10 gap-4" size={24} />
          </div>
          <div>
            <form className="grid grid-cols-1 gap-4">
              <Input
                placeholder="Enter your name"
                className="border-0 placeholder:text-gray-300 placeholder:text-lg py-6"
              />
              <Input
                placeholder="Enter a valid email address"
                className="border-0 placeholder:text-gray-300 placeholder:text-lg py-6"
              />
              <Textarea placeholder="Enter your message" />
              <div>
                <Checkbox className="bg-white" /> I accept the{" "}
                <Link className="font-roboto uppercase text-bold" href="/">
                  terms of services
                </Link>
              </div>
              <Button className="bg-black text-white hover:text-black">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
