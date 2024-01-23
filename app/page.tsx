import Camp from "@/components/Sofumer";
import HomeHero from "@/components/HomeHero";
import Image from "next/image";
import Guide from "@/components/Guide";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";

export default function Home() {
  return (
    <>
     <HomeHero/>
     <Camp/>
     <Guide />
      <Features />
      <GetApp />
    </>

   
  );
}
