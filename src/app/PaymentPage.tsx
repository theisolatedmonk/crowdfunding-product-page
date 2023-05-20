import React from 'react'
import Image from "next/image";
import closeMenu from "@/images/icon-close-menu.svg";

type PaymentPage = {
title:string,
amount:number,
targetLeft:number,
text: string
}

export default function PaymentPage(props:PaymentPage) {
  return (
    <div className="flex w-full bg-slate-500 bg-opacity-50 absolute top-0 min-h-screen justify-center  text-black">
    <div className="flex flex-col gap-4 w-[50%] bg-white p-4 rounded-lg mt-36">
    <button className=' flex justify-end'><Image src={closeMenu} className="w-4 h-4  sm:flex hidden relative bg-black fill-black" alt={""}></Image></button>

    <div className="flex flex-col gap-4  p-8"> <p className="font-bold text-black">Back this project</p>
      <p className="">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
      <div className="flex flex-col border">
        <div className="flex">
          <input type="radio" />
          <p className="font-bold"> Pledge with no reward</p>
        </div>
        <p className=""> Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
      </div>
      <div className="flex flex-col border focus:border-green-400">
        <div className="flex justify-between">
        <div className="flex">
          <input type="radio"  className="text-green-400"/>
          <p className="font-bold"> {props.title}</p>
          <p className="text-green-500"> Pledge ${props.amount} or more</p>
        </div>
        <p className="font-bold">{props.targetLeft} <span className="font-normal">left</span> </p>
        </div>
        <p className="">{props.text}</p>
        <div className="flex justify-between border-t hiden">
          <p>Enter your pledge</p>
          <div className="flex gap-2 border">
            <div className="flex  bg-slate-400 p-2 rounded-3xl items-center"><p className=" border-1 ">$</p>
            <input type="number" className=" p-1 w-20 bg-slate-400 rounded-3xl border-none outline-none " /></div>
            <p className="bg-green-500 rounded-full p-2"> Continue</p>
          </div>
        </div>
      </div></div>
      
    </div>
   </div>
  )
}