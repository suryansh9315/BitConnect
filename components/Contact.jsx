import React from "react";
import { Footer } from "flowbite-react";
import GithubIcon from '../public/github.svg'
import InstagramIcon from '../public/instagram.svg'
import TelegramIcon from '../public/telegram.svg'
import TwitterIcon from '../public/twitter.svg'
import Image from "next/image";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Footer container={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="/"
                src="/BitConnect.png"
                alt="BitConnect Logo"
                name="BitConnect"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">BitConnect</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Twitter</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="BitConnect™" year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Image src={TwitterIcon} className="cursor-pointer" alt="twitter" />
              <Image src={TelegramIcon} className="cursor-pointer" alt="telegram" />
              <Image src={GithubIcon} className="cursor-pointer" alt="github" />
              <Image src={InstagramIcon} className="cursor-pointer" alt="instagram" />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Contact;
