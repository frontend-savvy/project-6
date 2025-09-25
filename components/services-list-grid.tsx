type ServiceListItem = {
  id: number;
  name: string;
};

const servicesList: ServiceListItem[] = [
  { id: 1, name: "Business Operations" },
  { id: 2, name: "Marketing" },
  { id: 3, name: "Product Bootcamp" },
  { id: 4, name: "Company Transformation" },
  { id: 5, name: "Value Matrix" },
  { id: 6, name: "Concept Design" },
  { id: 7, name: "Idea Sketching" },
  { id: 8, name: "Corporate Travel" },
  { id: 9, name: "Experience Maps" },
  { id: 10, name: "Digital Solutions" },
  { id: 11, name: "Consulting" },
  { id: 12, name: "Technology Solutions" },
];

export default function ServicesListGrid() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-14 gap-x-8">
      {servicesList.map((item) => (
        <li
          key={item.id}
          className="text-[#cbff00] py-4 text-2xl border-b border-white/20 font-roboto font-medium"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
