import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { macl, macsml } from '../utils'
import { useState } from "react";
import { useEffect } from "react";

const MacPart = () => {

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? macsml : macl)

    const handleVideoSrcSet = () => {
        if(window.innerWidth < 760) {
            setVideoSrc(macsml)
        } else {
            setVideoSrc(macl)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet)

        return () => {
            window.removeEventListener('resize', handleVideoSrcSet);
        }
    })

    // GSAP Opacity Animations!
    useGSAP(() => {
        gsap.to("#hero", {opacity: 1, delay: 2}),
        gsap.to("#herotwo", {opacity: 1, delay: 3.5}),
        gsap.to("#cta", {opacity: 1, delay: 4.5, y: -50})
    }, []);
  return (
    <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">An Act of Nature</p>
        <p className="hero-titletwo mb-8" id="herotwo">Macbook</p>

        <div className="md:w-8/12 w-10/12">
         <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={macl} type="video/mp4" />
         </video>
        </div>
        </div>

        {/* Call to action button :D */}
        <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
        >
            <a href="#highlights" className="btn">Buy</a>
            <p className="font-normal text-xl">From $199/mo or $999</p>
        </div>
    </section>
  )
}

export default MacPart