"use client";
import React from "react";

import Image from "next/image";
import closeMenu from "@/images/icon-close-menu.svg";
import check from "@/images/icon-check.svg";
import ThankyouCard from "./ThankyouCard";

type SelectAmountType = {
  title: string;
  amount: number;
  targetLeft: number;
  text: string;
};

export default function PaymentPage() {
  return (
    <div className=" z-40 flex w-full bg-slate-500 bg-opacity-50 fixed top-0 left-0 h-screen justify-center  text-black p-4 overflow-auto ml-[10px] ">
      <div className=" flex-col  sm:w-[570px] w-full bg-white  rounded-lg  hidde flex h-fit mt-[85px]">
        <button className="flex justify-end p-4 ">
          <Image
            src={closeMenu}
            className="w-4 h-4  flex  relative bg-black fill-black"
            alt={""}
          ></Image>
        </button>

        <div className="flex flex-col gap-4  p-6">
          {" "}
          <p className="font-bold text-black">Back this project</p>
          <p className="">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <button className="flex flex-col border rounded-lg p-4 text-left focus:border-green-400">
            <div className="flex gap-4">
              <input type="radio" className="w-5 h-5" />
              <p className="font-bold"> Pledge with no reward</p>
            </div>
            <p className="">
              {" "}
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </button>
          <div className="flex flex-col  focus:border-green-400 gap-4">
            <SelectAmount
              title={" Bamboo Stand"}
              amount={25}
              targetLeft={101}
              text={
                "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list. "
              }
            />
            <SelectAmount
              title={"Black Edition Stand"}
              amount={75}
              targetLeft={75}
              text={
                "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              }
            />
            <SelectAmount
              title={" Mahogany Special Edition"}
              amount={200}
              targetLeft={0}
              text={
                " You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              }
            />
          </div>
        </div>
      </div>

      <div className="fle hidden  h-full w-full items-center justify-center">
        <ThankyouCard />
      </div>
    </div>
  );
}

function SelectAmount(props: SelectAmountType) {
  return (
    <button className="flex flex-col  border rounded-lg">
      <div className="flex sm:justify-between p-4 rounded-lg sm:flex-row flex-col gap-4">
        <div className="flex gap-4 flex-col ">
          <div className="flex gap-4 items-center">
            <input type="radio" className="accent-green-400 w-5 h-5  gap-4 " />
            <div className="sm:flex-row flex flex-col gap-2">
              <p className="font-bold text-left"> {props.title}</p>
              <p className="text-green-500 text-left">
                {" "}
                Pledge ${props.amount} or more
              </p>
            </div>
          </div>
          <p className=" text-left">{props.text}</p>
        </div>
        <p className="font-bold text-left">
          {props.targetLeft} <span className="font-normal">left</span>{" "}
        </p>
      </div>

      <div className=" sm:justify-between border-t hiden  p-4 gap-4 flex-col items-center sm:flex-row flex w-full">
        <p>Enter your pledge</p>
        <div className="flex gap-2 ">
          <div className="flex  bg-slate-400 p-2 rounded-3xl items-center ">
            <p className=" border-1 ">$</p>
            <input
              type="number"
              className=" p-1 w-20 bg-slate-400 rounded-3xl border-none outline-none "
            />
          </div>
          <button className="bg-green-500 rounded-full p-4"> Continue</button>
        </div>
      </div>
    </button>
  );
}
