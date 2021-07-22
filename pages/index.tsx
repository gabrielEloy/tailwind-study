import div from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
}
const Card = ({ href, imgSrc, layoutId }: CardProps) => {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
        <motion.img
          src={imgSrc}
          className="w-full h-full"
          layoutId={layoutId}
        />
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl mt-10 md:mt-24 leading-none font-extrabold tracking-light text-gray-900 sm:text-6xl lg:text-7xl">
        Home
      </h1>
      <div className="grid w-full grid-cols-1 grid-rows-3 mt-10 md:mt-24 gap-4 md:grid-cols-3">
        <Card href="/nextjs" imgSrc="/img/nextjs.svg" layoutId="nextjs-logo" />
        <Card
          href="/tailwind"
          imgSrc="/img/tailwind.svg"
          layoutId="tailwind-logo"
        />
        <Card
          href="/framermotion"
          imgSrc="/img/framermotion.svg"
          layoutId="framermotion-logo"
        />
      </div>
    </div>
  );
}
