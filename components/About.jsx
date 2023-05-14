import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const About = () => {
  return (
    <div className="mx-auto max-w-7xl bg-white">
      <div className="flex items-center justify-center gap-1 py-10 lg:flex-row flex-col">
        <div className="flex-[0.55] flex items-center justify-center">
          <img src="/about.png" className="h-[80%] w-[80%]" alt="" />
        </div>
        <div className="flex-[0.45] items-center justify-center flex">
          <div className="flex flex-col justify-center gap-5 items-center lg:items-start">
            <h2 className="text-5xl font-semibold text-[#C248FE] font-DMSans">
              about us
            </h2>
            <p className="w-[75%] font-DMSans text-lg text-gray-500">
              Introducing BITCONNECT - the meme token that's all about building
              a strong community. Sure, meme tokens may be known for their
              short-term gains and high volatility.<br />But we're not just here for
              a quick profit. We're here to create a sustainable ecosystem that
              will continue to grow and evolve over time.
            </p>
            <div>
              <button
                type="button"
                className="flex justify-center items-center rounded-sm px-6 sm:px-7 py-3 sm:py-3 bg-[#C248FE] text-white transition duration-300 hover:bg-[#880fc5] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="text-sm font-semibold">
                  <a
                    className={`${inter.className}`}
                    href="https://docs.google.com/document/d/1V3TWfIzXuvgz65f1YnReMcZn0XzW1UBCYNhEWxHi13g/edit?usp=drivesdk"
                    target="_blank"
                  >
                    Whitepaper
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
