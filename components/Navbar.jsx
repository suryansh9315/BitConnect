import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "How to Buy", href: "#", current: false },
  { name: "Tokenomics", href: "#", current: false },
  { name: "Roadmap", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-[#130741]">
            <div className="relative flex h-24 items-center justify-between">
              <div className="flex items-center justify-center">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-14 w-auto"
                    src="/BitConnect.png"
                    alt="BitConnect"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="hidden lg:block">
                  <div className="flex space-x-5">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-purple-400"
                            : "text-gray-200 hover:text-purple-400 transition duration-300",
                          "px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 sm:gap-5">
                <button
                  type="button"
                  className="flex justify-center items-center rounded-sm px-6 sm:px-7 py-3 sm:py-3 bg-[#C248FE] text-white transition duration-300 hover:text-[#130741] hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="text-xs  font-semibold">Buy Now</span>
                </button>
                <div className="lg:hidden flex items-center">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden bg-gray-100">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-[#C248FE]"
                      : "text-gray-800 hover:text-[#C248FE] transition duration-300",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
