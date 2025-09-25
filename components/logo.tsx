import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block relative h-8 w-16">
      <Image fill src="/logo.png" alt="logo" />
    </Link>
  );
}
