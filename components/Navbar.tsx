import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="p-5 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <Image src="/logos/m_logo.svg" width={50} height={50} alt="M" />
        <Image src="/logos/e_logo.svg" width={50} height={50} alt="E" />
      </div>
    </nav>
  );
};

