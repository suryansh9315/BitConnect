import { Timeline } from "flowbite-react";
import React from "react";

const Roadmap = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 bg-[#0C052D]">
      <div className="flex flex-col gap-14 items-center">
        <div>
          <h2 className="text-5xl font-semibold text-[#C248FE] font-DMSans">
            roadmap
          </h2>
        </div>
        <div className="w-[60%]">
          <div>
            <Timeline>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>May 2023</Timeline.Time>
                  <Timeline.Title className="text-white">
                    Step : 1
                  </Timeline.Title>
                  <Timeline.Body className="text-gray-300">
                    Get over 100 Telegram members and launch the BITCONNECT
                    presale. Join our presale and let's meme our way to the
                    moon! .
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>May 2023</Timeline.Time>
                  <Timeline.Title className="text-white">Step : 2</Timeline.Title>
                  <Timeline.Body className="text-gray-300">
                    After the presale is done, launch the liquidity pool and
                    BITCONNECT website. We're talking slick design, sharp
                    graphics, and plenty of jokes.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>June 2023</Timeline.Time>
                  <Timeline.Title className="text-white">Step : 3</Timeline.Title>
                  <Timeline.Body className="text-gray-300">
                    Develop our community and marketing initiatives to attract
                    more users and build a dedicated fanbase. And maybe do some
                    TikTok dances while we're at it.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>June 2023</Timeline.Time>
                  <Timeline.Title className="text-white">Step : 4</Timeline.Title>
                  <Timeline.Body className="text-gray-300">
                    Get our token listed on our first exchange, get our
                    contracts audited, and do some KYC to prove we're not a
                    bunch of scammers. (Unlike some other meme tokens we could
                    mention, cough cough.)
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>July 2023</Timeline.Time>
                  <Timeline.Title className="text-white">Step : 5</Timeline.Title>
                  <Timeline.Body className="text-gray-300">
                    Launch our first NFT project, with the top 1000 holders
                    getting the privilege of being whitelisted. Because nothing
                    says "I'm a cool kid" like owning an NFT.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>July 2023</Timeline.Time>
                  <Timeline.Title className="text-white">Step : 6 and beyond</Timeline.Title>
                  <Timeline.Body className="text-gray-300">
                    Keep growing our community, crossing major milestones like a
                    10 million $ market cap, and generally being awesome. The
                    sky's the limit, baby!
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
