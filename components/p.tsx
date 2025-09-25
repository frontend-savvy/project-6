import { BaseProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function P({ className, children }: BaseProps) {
  return (
    <p className={cn("leading-[1.6] md:text-xl hyphens-auto", className)}>
      {children}
    </p>
  );
}
