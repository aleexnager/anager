import React from "react";
import Image from "next/image";
import {
  firstListImages,
  secondListImages,
  thirdListImages,
} from "../../lib/svgs";

function Carousel() {
  return (
    <section className="hidden lg:flex w-full relative justify-center items-center">
      <div className="w-full h-fit flex justify-center items-center flex-col">
        <h3 className="text-center text-3xl font-bold text-white py-3 px-4">
          What
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            {" "}
            technologies{" "}
          </span>
          do I know?
        </h3>
        <p className="pb-6 text-white">Well... this are some of them</p>
        <div className="p-3 flex w-full overflow-hidden select-none [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
          <ul className="flex-shrink-0 flex justify-around items-center whitespace-nowrap w-full animate-scroll_left">
            {firstListImages.map((item) => (
              <li className="grid items-center w-[clamp(10rem, 1rem + 40vmin, 30rem)] p-[calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)]">
                <Image
                  className="object-contain w-full h-full rounded-lg aspect-video py-1 px-5"
                  src={item}
                  width={100}
                  height={100}
                />
              </li>
            ))}
          </ul>
          <ul className="flex-shrink-0 flex justify-around items-center whitespace-nowrap w-full animate-scroll_left">
            {firstListImages.map((item) => (
              <li className="grid items-center w-[clamp(10rem, 1rem + 40vmin, 30rem)] p-[calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)]">
                <Image
                  className="object-contain w-full h-full rounded-lg aspect-video py-1 px-5"
                  src={item}
                  width={100}
                  height={100}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3 flex w-full overflow-hidden select-none [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
          <ul className="flex-shrink-0 flex justify-around items-center whitespace-nowrap w-full animate-scroll_right">
            {secondListImages.map((item) => (
              <li className="grid items-center w-[clamp(10rem, 1rem + 40vmin, 30rem)] p-[calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)]">
                <Image
                  className="object-contain w-full h-full rounded-lg aspect-video py-1 px-5"
                  src={item}
                  width={100}
                  height={100}
                />
              </li>
            ))}
          </ul>
          <ul className="flex-shrink-0 flex justify-around items-center whitespace-nowrap w-full animate-scroll_right">
            {secondListImages.map((item) => (
              <li className="grid items-center w-[clamp(10rem, 1rem + 40vmin, 30rem)] p-[calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)]">
                <Image
                  className="object-contain w-full h-full rounded-lg aspect-video py-1 px-5"
                  src={item}
                  width={100}
                  height={100}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3 flex w-full overflow-hidden select-none [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
          <ul className="flex-shrink-0 flex justify-around items-center whitespace-nowrap w-full animate-scroll_left">
            {thirdListImages.map((item) => (
              <li className="grid items-center w-[clamp(10rem, 1rem + 40vmin, 30rem)] p-[calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)]">
                <Image
                  className="object-contain w-full h-full rounded-lg aspect-video py-1 px-5"
                  src={item}
                  width={100}
                  height={100}
                />
              </li>
            ))}
          </ul>
          <ul className="flex flex-shrink-0 justify-around items-center whitespace-nowrap w-full animate-scroll_left">
            {thirdListImages.map((item) => (
              <li className="grid items-center w-[clamp(10rem, 1rem + 40vmin, 30rem)] p-[calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)]">
                <Image
                  className="object-contain w-full h-full rounded-lg aspect-video py-1 px-5"
                  src={item}
                  width={100}
                  height={100}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
