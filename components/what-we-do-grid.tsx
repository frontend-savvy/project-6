import Image from "next/image";

type WhatWeDoItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const whatWeDoItems: WhatWeDoItem[] = [
  {
    id: 1,
    title: "Research user needs",
    description: "Discover pain points and understand user behaviour",
    image: "/w1.png",
  },
  {
    id: 2,
    title: "Business Strategy",
    description: "Validate ideas with an interactive prototype of your vision",
    image: "/w2.png",
  },
  {
    id: 3,
    title: "Automation",
    description: "Launch an MVP with a best in class user experience",
    image: "/w3.png",
  },
  {
    id: 4,
    title: "Marketing",
    description: "Become a category leader using designops and UX/UI design",
    image: "/w4.png",
  },
];

export default function WhatWeDoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {whatWeDoItems.map((item) => (
        <div key={item.id} className="p-8 text-center bg-white">
          <div className="p-4 rounded-full bg-[#cbff00] mx-auto w-fit">
            <Image
              width={54}
              height={54}
              className="h-[54px] w-[54px]"
              src={item.image}
              alt={""}
            />
          </div>
          <h3 className="mt-8 text-xl font-open-sans font-bold capitalize">
            {item.title}
          </h3>
          <p className="mt-5">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
