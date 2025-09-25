import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Socials({
  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      <Link href="https://facebook.com" aria-label="Facebook">
        <FaFacebookF color="#000" size={size} />
      </Link>
      <Link href="https://twitter.com" aria-label="Twitter">
        <FaTwitter color="#000" size={size} />
      </Link>
      <Link href="https://tiktok.com" aria-label="TikTok">
        <SiTiktok color="#000" size={size} />
      </Link>
      <Link href="https://youtube.com" aria-label="YouTube">
        <FaYoutube color="#000" size={size} />
      </Link>
    </div>
  );
}
