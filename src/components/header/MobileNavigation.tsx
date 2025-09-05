"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { RiMenuFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { navigation } from "@/constants";
import Link from "next/link";
import SocialLinks from "../SocialLinks";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div
        onClick={toggleMenu}
        className="text-2xl md:hidden text-gray-500 hover:text-themeColor duration-200 cursor-pointer"
      >
        <RiMenuFill />
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none md:hidden text-white/80"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/90">
          <Dialog.Panel
            transition
            className="w-[94%] space-y-4 p-6 border border-lightText rounded-md absolute top-10 m-10 bg-black"
          >
            <div className="flex items-center justify-between gap-5">
              <h3 className="font-semibold text-xl">Navigation Menu</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 text-2xl hover:text-red-600 duration-300 border border-white/20 rounded-sm hover:border-white/40"
              >
                <MdClose />
              </button>
            </div>
            <div className="flex flex-col gap-5 pt-5">
              {navigation?.map((item) => (
                <Link
                  key={item?.title}
                  href={item?.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-skyColor relative group flex items-center gap-2"
                >
                  <span className="w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:border-skyColor" />
                  {item?.title}
                  <span className="absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:bg-skyColor duration-200" />
                </Link>
              ))}
            </div>
            <SocialLinks />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileNavigation;
