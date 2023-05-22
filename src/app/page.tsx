import Image from "next/image";
import heroImage from "@/images/image-hero-desktop.jpg";
import heroImageMobile from "@/images/image-hero-mobile.jpg";
import logo from "@/images/logo.svg";
import logoMastercraft from "@/images/logo-mastercraft.svg";
import bookmark from "@/images/icon-bookmark.svg";
import CollectionStatus from "./CollectionStatus";
import ContributionTemplate from "./ContributionTemplate";
import AboutSection from "./AboutSection";
import BookMarkCard from "./BookMarkCard";
import NavBar from "./NavBar";
import PaymentPage from "./PaymentPage";
import MenuSection from "./MenuSection";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between sm:w-full min-w-[360px] overflow-auto bg-[hsl(0,0%,48%)]">
     <Image src={heroImage} className=" w-full  sm:flex hidden relative " alt={""}></Image>
      <Image src={heroImageMobile} className="  sm:hidden flex items-center w-full relative " alt={""}></Image>
      <div className="flex   top-4 sm:top-9 absolute w-full items-center">
      <NavBar/>
     
      </div>
      
      <div className="flex flex-col  justify-between items-center  absolute sm:top-64 top-60 sm:w-[600px]   w-full gap-4 px-4 ">
        <BookMarkCard/>
        <CollectionStatus/>   
        <div className="flex flex-col text-black bg-white p-6 gap-4 rounded-lg">
        <AboutSection/> 
          <ContributionTemplate itemName={"Bamboo Stand"} amount={25} leftItem={101} discription={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."}/>
          <ContributionTemplate itemName={"Black Edition Stand "} amount={75} leftItem={64} discription={"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included"}/>
          <ContributionTemplate itemName={" Mahogany Special Edition"} amount={200 } leftItem={ 0} discription={"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included"}/>
        </div>

       
      </div>
     
     <MenuSection/>
     
    
      <PaymentPage />
    
    </main>
  );
}
