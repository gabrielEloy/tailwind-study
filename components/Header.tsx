import React from "react";
import Image from "next/image";
import Link from "next/link";
export const Header = (props) => {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <Image width={150} height={33} src={"/img/logo.svg"} alt="logo" />
      <nav className="hidden md:block space-x-8">
        <Link href="/nextjs">
          <a className="tracking-wide hover:text-gray-300">Next.js</a>
        </Link>
        <Link href="/tailwind">
          <a className="tracking-wide hover:text-gray-300">Tailwind</a>
        </Link>
        <Link href="/framer-motion">
          <a className="tracking-wide hover:text-gray-300">Framer motion</a>
        </Link>
      </nav>
    </header>
  );
};
