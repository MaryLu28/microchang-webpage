import React from "react";
import logo from "../../../public/imgs/logo.jpg";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-black shadow-md border-b border-white/20">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Image src={logo} alt="Micro Chang Logo" width={120} height={40} />
      </div>
    </header>
  );
};

export default Header;
