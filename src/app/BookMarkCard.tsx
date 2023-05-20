import React from 'react'
import Image from "next/image";
import logoMastercraft from "@/images/logo-mastercraft.svg";
import bookmark from "@/images/icon-bookmark.svg";


export default function BookMarkCard() {
  return (
    <div className="flex bg-white rounded-lg text-black flex-col text-center  justify-center items-center gap-4 p-4">
        <Image src={logoMastercraft} className="relative top-[-30px]" alt={""}></Image>
          <p className="font-bold">Mastercraft Bamboo Monitor Riser</p>
          <p className="">A beautiful & handcrafted monitor stand to reduce neck and strain.</p>
          <div className="flex justify-between w-full ">
          <p className="p-4 rounded-3xl text-white bg-green-300 items-center flex">Back this projectS</p>
          <div className="flex rounded-3xl bg-gray-400 items-center">
          <Image src={bookmark} className="" alt={""}></Image>
            <p className="p-4 rounded-3xl bg-gray-400 text-center ">Bookmark</p>
          </div>
          </div>
        </div>
  )
}