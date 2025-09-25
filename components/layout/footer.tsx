import Wrapper from "@/components/layout/wrapper";

export default function Footer() {
  return (
    <footer className="bg-[#333] text-white text-center">
      <Wrapper>
        <p className="text-sm py-14">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </p>
        <p className="text-[12.8px] pt-4 pb-8 capitalize">
          &copy; copright {new Date().getFullYear()}. All right reserved.
        </p>
      </Wrapper>
    </footer>
  );
}
