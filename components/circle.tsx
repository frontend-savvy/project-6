import { cn } from "@/lib/utils";

export default function Circle({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-[85px] w-[85px] lg:h-[105px] lg:w-[105px] rounded-full bg-[#cbff00]"
      )}
    ></div>
  );
}
