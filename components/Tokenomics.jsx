import React from "react";
import { Tokenomicspie } from "./Tokenomicspie";

const Tokenomics = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white">
      <div className="flex items-center justify-center flex-col py-10 gap-14">
        <div>
          <h2 className="text-5xl font-semibold text-[#C248FE] font-DMSans">
            tokenomics
          </h2>
        </div>
        <div className="flex flex-col-reverse lg:flex-row w-[75%]">
          <div className="flex-[0.5] flex flex-col gap-5">
            <div>
              <h3 className="text-3xl font-semibold font-DMSans mb-2">token supply</h3>
              <p className="text-4xl font-semibold font-DMSans text-gray-400">1,000,000,000</p>
            </div>
            <div className="font-DMSans text-lg text-gray-500">
            - 50% of the tokens are going straight into the liquidity pool, ensuring that trading can happen with 0 tax.<br />
            - 30% will be sold in the presale before launch, and any unsold tokens will be sent straight to the burn ward.<br />
            - 10% is being set aside for the development team to fund ongoing ops like exchange listings and celebrity collaborations.<br />
            - And the last 10% is for rewarding the community for their support - think meme competitions, tweets, and other fun stuff.
            </div>
          </div>
          <div className="flex-[0.5] flex items-center justify-center">
            <Tokenomicspie />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
