import Image from "next/image";
import heroImage from "@/images/image-hero-desktop.jpg";
import logo from "@/images/logo.svg";
import logoMastercraft from "@/images/logo-mastercraft.svg";
import bookmark from "@/images/icon-bookmark.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Image src={heroImage} className="relative" alt={""}></Image>
      
      <div className="flex flex-col absolute justify-between h-80">
        <div className="flex justify-between  top-2 bg-black w-full">
          <Image src={logo} alt={""}></Image>
          <div className="flex gap-2">
            <p>About</p>
            <p>Discover</p>
            <p>GetStarted</p>
          </div>
        </div>

        <div className="flex bg-white rounded-lg text-black flex-col text-center p-4 justify-center items-center">
        <Image src={logoMastercraft} className="relative top-[-40px]" alt={""}></Image>
          <p className="font-bold">Mastercraft Bamboo Monitor Riser</p>
          <p className="">A beautiful & handcrafted monitor stand to reduce neck and strain.</p>
          <div className="flex justify-between w-full">
          <p className="p-2 rounded-3xl text-white bg-green-300 text-center">Back this projectS</p>
          <div className="flex">
          <Image src={bookmark} className="" alt={""}></Image>
            <p className="p-2 rounded-3xl bg-gray-400 text-center ">Bookmark</p>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}
