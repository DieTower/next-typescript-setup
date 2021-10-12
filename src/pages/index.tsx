import React, { useEffect, useState } from "react"; 

import Image from "next/image";

// Gsap
import gsap from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Screens
import Section from "screens/Section";

// Assets
import logoT from "../assets/logo.jpg";

export default function Home() {

  // Gsap plugin's
  if (typeof window !== "undefined")
    gsap.registerPlugin(ScrollToPlugin);

  // Freeze animations
  const [freeze, setFreeze] = useState(false);

  // Scroll animation trigger function
  const scrollEvent = e => {
    
    setFreeze(true);

    let position = 0;
    
    // All alternatives
    // window.pageYOffset || window.scrollY || document.documentElement.scrollTop

    if(e.deltaY > 0)
      position = window.pageYOffset + window.innerHeight;
    else if(e.deltaY < 0)
      position = window.pageYOffset - window.innerHeight;

    if(!freeze)
      gsap.to(window, {
        scrollTo: { y: position },
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => setFreeze(false)
      });
  }
  
  return (
    <div id="home" onWheel={scrollEvent}>
      {/* <Image src={logoT} layout="responsive" /> */}
      {/*
      <img src={logoT.src} />
      */}
      <Section
        bgColor="pink"
        width="100%"
        height="100vh"/>
        
      <Section
        bgColor="blue"
        width="100%"
        height="100vh"/>

      <Section
        bgColor="yellow"
        width="100%"
        height="100vh"/>
    </div>
  )
}
