import Image from "next/image";
import heroImage from "@/images/image-hero-desktop.jpg";
import logo from "@/images/logo.svg";
import logoMastercraft from "@/images/logo-mastercraft.svg";
import bookmark from "@/images/icon-bookmark.svg";
import CollectionStatus from "./CollectionStatus";
import ContributionTemplate from "./ContributionTemplate";
import AboutSection from "./AboutSection";
import BookMarkCard from "./BookMarkCard";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Image src={heroImage} className="relative w-full" alt={""}></Image>
      <div className="flex flex-col items-center  top-4 gap-64 absolute w-full">
      <NavBar/>
        <div className="flex flex-col  justify-between h-80 w-[50%] gap-4">
        <BookMarkCard/>
        <CollectionStatus/>   
        <div className="flex flex-col text-black bg-white p-6 gap-4 rounded-lg">
        <AboutSection/> 
          <ContributionTemplate itemName={"Bamboo Stand"} amount={25} leftItem={101} discription={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."}/>
          <ContributionTemplate itemName={"Black Edition Stand "} amount={75} leftItem={64} discription={"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included"}/>
          <ContributionTemplate itemName={" Mahogany Special Edition"} amount={200 } leftItem={ 0} discription={"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included"}/>
        </div>
      </div>
      </div>
  
   
    
    </main>
  );
}
