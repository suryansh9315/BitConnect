import { Carousel } from "flowbite-react";
import React from "react";

const HowtoBuy = () => {
  return (
    <div className="bg-[#0C052D] max-w-7xl mx-auto  py-16">
      <div className="flex items-center justify-center flex-col">
        <div>
          <h2 className="text-5xl font-semibold text-[#C248FE] font-DMSans">
            how to buy
          </h2>
        </div>
        <div className="w-[100%] lg:w-[80%] flex items-center justify-center">
          <div className="h-72 sm:h-72 xl:h-[350px] 2xl:h-96 w-full">
            <Carousel>
              <div className="flex h-full items-center justify-center text-white">
                <div className="flex items-center justify-center">
                  <div className="sm:flex items-center justify-center flex-[0.35] hidden">
                    <img
                      className="h-[60%] w-[60%]"
                      src="https://static.wixstatic.com/media/1f3f2b_af81019501c549d5b192536bb8680fc5~mv2.png/v1/fill/w_217,h_217,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T212906_738.png"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center flex-col gap-3 flex-[0.7] sm:flex-[0.45]">
                    <h3 className="text-3xl md:text-4xl font-semibold font-DMSans text-center sm:text-left">
                      create a wallet
                    </h3>
                    <p className="font-DMSans text-base md:text-lg text-gray-300 text-justify sm:text-left">
                      download metamask or your wallet of choice from the app
                      store or google play store for free. Desktop users,
                      download the google chrome extension by going to
                      metamask.io.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex h-full items-center justify-center text-white">
                <div className="flex items-center justify-center">
                  <div className="sm:flex items-center justify-center flex-[0.35] hidden">
                    <img
                      className="h-[50%] w-[50%]"
                      src="https://static.wixstatic.com/media/1f3f2b_48f30828b7d740d98efb1a2f8febc010~mv2.png/v1/fill/w_217,h_217,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T213620_680.png"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center flex-col gap-3 flex-[0.7] sm:flex-[0.45]">
                    <h3 className="text-3xl md:text-4xl font-semibold font-DMSans text-center sm:text-left">
                      get some eth
                    </h3>
                    <p className="font-DMSans text-base md:text-lg text-gray-300 text-justify sm:text-left">
                      have ETH in your wallet to switch to $PEPE. If you don’t
                      have any ETH, you can buy directly on metamask, transfer
                      from another wallet, or buy on another exchange and send
                      it to your wallet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex h-full items-center justify-center text-white">
                <div className="flex items-center justify-center">
                  <div className="sm:flex items-center justify-center flex-[0.35] hidden">
                    <img
                      className="h-[50%] w-[50%]"
                      src="https://static.wixstatic.com/media/1f3f2b_9d0d4341170c4640b3663065417b3700~mv2.png/v1/fill/w_217,h_217,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/uniswap%20(2).png"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center flex-col gap-3 flex-[0.7] sm:flex-[0.45]">
                    <h3 className="text-3xl sm:text-4xl font-semibold font-DMSans text-center sm:text-left">
                      go to uniswap
                    </h3>
                    <p className="font-DMSans text-base md:text-lg text-gray-300 text-justify sm:text-left">
                      connect to Uniswap. Go to app.uniswap.org in google chrome
                      or on the browser inside your Metamask app. Connect your
                      wallet. Paste the $PEPE token address into Uniswap, select
                      Pepe, and confirm. When Metamask prompts you for a wallet
                      signature, sign.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex h-full items-center justify-center text-white">
                <div className="flex items-center justify-center">
                  <div className="sm:flex items-center justify-center flex-[0.35] hidden">
                    <img
                      className="h-[60%] w-[60%]"
                      src="https://static.wixstatic.com/media/1f3f2b_af81019501c549d5b192536bb8680fc5~mv2.png/v1/fill/w_217,h_217,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T212906_738.png"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center flex-col gap-3 flex-[0.7] sm:flex-[0.45]">
                    <h3 className="text-3xl sm:text-4xl font-semibold font-DMSans text-center sm:text-left">
                      switch eth for bitc
                    </h3>
                    <p className="font-DMSans text-base md:text-lg text-gray-300 text-justify sm:text-left">
                      switch ETH for $BITC. We have ZERO taxes so you don’t need
                      to worry about buying with a specific slippage, although
                      you may need to use slippage during times of market
                      volatility.
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowtoBuy;
