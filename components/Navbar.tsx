import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="px-5">
      <div className="flex items-center justify-between">
        <Image src="/m_logo.svg" width={50} height={50} alt="M" />
        <Image src="/e_logo.svg" width={50} height={50} alt="E" />
      </div>
    </nav>
  );
};

export default Navbar;
