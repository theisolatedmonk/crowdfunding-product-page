import Image from 'next/image'
import heroImage from '@/images/image-hero-desktop.jpg'
import logo from '@/images/logo.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="">
        <Image src={heroImage} alt={''}></Image>
        <div className="flex justify-between">
          

        </div>
      </div>
    </main>
  )
}
