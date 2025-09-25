import Wrapper from "@/components/layout/wrapper";
import Logo from "@/components/logo";
import NavMenuButton from "@/components/nav-menu-button";

export default function Header() {
  return (
    <header className="bg-[#282D33] text-white">
      <Wrapper>
        <div className="py-6 flex items-center justify-between">
          <Logo />
          <NavMenuButton />
        </div>
      </Wrapper>
    </header>
  );
}
