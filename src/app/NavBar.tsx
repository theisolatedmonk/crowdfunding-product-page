'use client'
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.svg";
import menuImg from "@/images/icon-hamburger.svg";
import closeMenu from "@/images/icon-close-menu.svg";


// const [menu, setMenu] = useState(false);

export default function NavBar() {
  return (
    <div className="flex justify-between  items-center  sm:w-[76%] w-full relative z-40">
      <Image src={logo} alt={""}></Image>
      <div className=" sm:gap-4 hidden sm:flex ">
        <p>About</p>
        <p>Discover</p>
        <p>GetStarted</p>
      </div>
      <button>
      <Image src={menuImg} className="sm:hidden  flex hidden
       " />
      
      {/* <Image src={menuImg} className={`sm:hidden ${
        menu ? "flex" : "hidden"
      } `} alt={""}  onClick={() => setMenu(true)}/> */}
      

      <Image
        src={closeMenu}
        className="w-4 h-4  flex bg-black fill-black  sm:hidden"
        alt={""}
        />
      </button>
      {/* <Image
        src={closeMenu}
        className="w-4 h-4  flex bg-black fill-black  sm:hidden"
        alt={""}
        onClick={() => setMenu(false)}/>
      </button> */}
    </div>
  );
}





// export function MenuSection() {
//   return (
    
   


//     <div className={' flex  w-full bg-black bg-opacity-50 p-6 fixed left-0 h-screen justify-center z-20 '}>

// <div className="flex  flex-col bg-white w-full text-black   rounded-lg font-semibold sm:hidden z-20 item-center shadow-lg h-fit mt-16 ">
//   <p className="bord  p-7 "> About</p>
//   <p className="border-y p-7">Discover</p>
//   <p className=" p-7">Get Started</p>
// </div>
    
//     </div>

    

//   )
// }

