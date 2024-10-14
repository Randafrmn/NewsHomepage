/** @format */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const images = {
    backgroundImageDesktop: "/images/image-web-3-desktop.jpg",
    imageRetro: "/images/image-retro-pcs.jpg",
    imageLaptop: "/images/image-top-laptops.jpg",
    imageGaming: "/images/image-gaming-growth.jpg",
    mobileBackgroundImage: "/images/image-web-3-mobile.jpg",
  };

  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth < 576) {
        setBackgroundImage(images.mobileBackgroundImage);
      } else {
        setBackgroundImage(images.backgroundImageDesktop);
      }
    };

    updateBackgroundImage();
    window.addEventListener("resize", updateBackgroundImage);

    return () => window.removeEventListener("resize", updateBackgroundImage);
  }, [images.mobileBackgroundImage, images.backgroundImageDesktop]);

  return (
    <div className="container mx-auto px-4 lg:px-36 md:px-4 pb-8 pt-4">
      <div className="grid lg:grid-cols-3 grid-cols-1 auto-rows-auto gap-6 text-5xl w-full">
        <div
          className="col-span-2 md:h-[260px] h-[300px]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="lg:row-span-2 lg:col-auto row-auto col-span-2 order-5 lg:order-none bg-veryDarkBlue p-4">
          <div className="flex flex-col gap-2">
            <span className="text-[2rem] font-extrabold text-softOrange">
              New
            </span>
            <div className="border-b border-[#5d5f79]">
              <motion.a
                href="/"
                className="text-[1rem] leading-[2.5rem] font-bold text-offWhite"
                whileHover={{
                  color: "#e9ab53",
                }}
                whileTap={{
                  color: "#e9ab53",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                Hydrogen VS Electric Cars
              </motion.a>
              <p className="pb-7 leading-5">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="border-b border-[#5d5f79]">
              <motion.a
                href="/"
                className="text-[1rem] leading-[2.5rem] font-bold text-offWhite"
                whileHover={{
                  color: "#e9ab53",
                }}
                whileTap={{
                  color: "#e9ab53",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                The Downsides of AI Artistry
              </motion.a>
              <p className="pb-7 leading-5">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div>
              <motion.a
                href="/"
                className="text-[1rem] leading-[2.5rem] font-bold text-offWhite"
                whileHover={{
                  color: "#e9ab53",
                }}
                whileTap={{
                  color: "#e9ab53",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                Is VC Funding Drying Up?
              </motion.a>
              <p className="leading-5">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-auto">
          <div className="md:w-64 w-72">
            <span className="md:text-[3rem] md:leading-[3rem] text-[2.5rem] leading-[2.5rem] font-extrabold">
              The Bright Future of Web 3.0?
            </span>
          </div>
        </div>
        <div className="col-span-2 lg:col-auto">
          <div className="grid grid-rows-[1fr_auto] gap-4 justify-between h-full">
            <p className="leading-6">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <motion.button
              className="bg-softRed text-veryDarkBlue px-7 py-2 font-bold text-sm max-w-max inline-block tracking-widest"
              whileHover={{
                backgroundColor: "#00001a",
                color: "#fffdfa",
              }}
              whileTap={{
                backgroundColor: "#00001a",
                color: "#fffdfa",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              READ MORE
            </motion.button>
          </div>
        </div>
        <div className="col-span-2 lg:col-auto order-6 lg:order-none lg:mt-6 mt-0">
          <div className="grid grid-cols-[auto,1fr] gap-4 items-center">
            <div
              className="md:h-[100px] h-[120px] md:w-20 w-24"
              style={{
                backgroundImage: `url(${images.imageRetro})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="flex flex-col gap-2 justify-center">
              <span className="text-[2rem] font-bold text-softRed">01</span>
              <motion.a
                href="/"
                className="text-[1rem] font-bold text-veryDarkBlue"
                whileHover={{
                  color: "#f15e50",
                }}
                whileTap={{
                  color: "#f15e50",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                Reviving Retro PCs
              </motion.a>
              <p className="leading-5">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 lg:col-auto order-7 lg:order-none lg:mt-6 mt-0">
          <div className="grid grid-cols-[auto,1fr] gap-4 items-center">
            <div
              className="md:h-[100px] h-[120px] md:w-20 w-24"
              style={{
                backgroundImage: `url(${images.imageLaptop})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="flex flex-col gap-2 justify-center">
              <span className="text-[2rem] font-bold text-softRed">02</span>
              <motion.a
                href="/"
                className="text-[1rem] font-bold text-veryDarkBlue"
                whileHover={{
                  color: "#f15e50",
                }}
                whileTap={{
                  color: "#f15e50",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                Top 10 Laptops of 2022
              </motion.a>
              <p className="leading-5">
                Our best picks for various needs and budgets.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 lg:col-auto order-8 lg:order-none lg:mt-6 mt-0">
          <div className="grid grid-cols-[auto,1fr] gap-4 items-center">
            <div
              className="md:h-[100px] h-[120px] md:w-20 w-24"
              style={{
                backgroundImage: `url(${images.imageGaming})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="flex flex-col gap-2 justify-center">
              <span className="text-[2rem] font-bold text-softRed">03</span>
              <motion.a
                href="/"
                className="text-[1rem] font-bold text-veryDarkBlue"
                whileHover={{
                  color: "#f15e50",
                }}
                whileTap={{
                  color: "#f15e50",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                The Growth of Gaming
              </motion.a>
              <p className="leading-5">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
