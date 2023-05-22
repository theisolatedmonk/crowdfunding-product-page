import React from "react";
import Image from "next/image";
import logo from "@/images/logo.svg";
import menu from "@/images/icon-hamburger.svg";
import closeMenu from "@/images/icon-close-menu.svg";

export default function NavBar() {
  return (
    <div className="flex justify-between  items-center  sm:w-[76%] w-full relative z-40">
      <Image src={logo} alt={""}></Image>
      <div className=" sm:gap-4 hidden sm:flex ">
        <p>About</p>
        <p>Discover</p>
        <p>GetStarted</p>
      </div>
      <Image src={menu} className=" flex sm:hidden hidden" alt={""}></Image>

      <Image
        src={closeMenu}
        className="w-4 h-4  flex bg-black fill-black"
        alt={""}
      ></Image>
    </div>
  );
}


