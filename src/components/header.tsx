"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import logo from "../imgs/logo.jpg";

const ThemeRadios = dynamic(
  () => import("./theme-toggle").then((mod) => mod.ThemeToggle),
  { ssr: false }
);

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-black shadow-md border-b border-white/20">
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <Image
          src={logo}
          alt="Micro Chang Logo"
          className="w-25 md:w-35 h-auto"
        />
        <ThemeRadios />
      </div>
    </header>
  );
};

export default Header;
