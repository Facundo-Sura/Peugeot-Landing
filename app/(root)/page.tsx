import Image from "next/image";
import Link from "next/link";
import Berlina from "../berlina/page";
import Suv from "../suv/page";
import { Pickup } from "../pickup/page";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center w-full min-h-screen font-[family-name:var(--font-geist-sans)] z-10">
      <header className="flex justify-between items-center bg-stone-900 text-white">
        <div className="text-center basis-1/2">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Welcome to the Cars Land</h1>
            <p className="text-lg mt-4">
              Explore our collection of amazing cars!
            </p>
          </div>
          <p className="text-center px-8 py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            alias est, dolorem, minima at, minus cupiditate voluptatibus
            repellendus quis aliquam voluptatem nulla sit similique. Maxime at
            amet repellat voluptates animi! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Sunt maiores eos itaque ducimus saepe,
            aperiam voluptate praesentium odio quidem perferendis quae
            laboriosam voluptas eaque, facere recusandae animi, laborum dolor.
            Corporis.
          </p>
          <button className="bg-slate-500 shadow-2xl cursor-pointer shadow-black p-4 rounded-2xl text-center ">
            view more{" "}
          </button>
        </div>
        <Image
          src="/car.png"
          alt="Car Image"
          width={800}
          height={800}
          className="basis-1/2"
        />
      </header>
      <nav className="w-full p-4 bg-sky-500/10 sticky top-0 z-10">
        <menu className="w-full flex justify-end space-x-4 p-4">
          <Link href="/berlina" className="cursor-pointer">BERLINA</Link>
          <Link href="/suv" className="cursor-pointer">SUV</Link>
          <Link href="/pickup" className="cursor-pointer">PICKUP</Link>
          <Link href="#about" className="cursor-pointer">About us</Link>
          <Link href="#contact" className="cursor-pointer">Contact us</Link>
        </menu>
      </nav>
      <Berlina />
      <Suv />
      <Pickup />
      <footer className="text-sm text-gray-500">
        © 2023 Cars Land. All rights reserved.
      </footer>
    </div>
  );
}
