import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ImageCredit({ className }: { className?: string }) {
  return (
    <p className={cn("font-roboto text-white", className)}>
      Images from{" "}
      <Link className="border-b font-[500] text-inherit" href="/">
        Freepik
      </Link>
    </p>
  );
}
