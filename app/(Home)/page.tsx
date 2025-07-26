import HeroSection from "@/Components/heroSection";
import Navbar from "@/Components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-quicksand flex flex-col items-center min-h-screen  text-dark">
      
      {/* <div className="w-full h-screen absolute -z-10 top-0">
        <div className="relative w-full h-full">
          <Image src={'/Assets/geometric-pattern-grid.webp'} alt="geometric" fill objectFit="cover"/>
        </div>
      </div> */}
      {/* <div className="w-full h-full bg-gradient-to-t -z-20 from-primary to-light absolute top-0 ">

      </div> */}
      <Navbar/>
      <HeroSection/>
      


      
    </main>
  );
}
