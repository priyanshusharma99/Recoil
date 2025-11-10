import { useGSAP } from '@gsap/react'
import React, { useState } from 'react'
import gsap from 'gsap'
import "remixicon/fonts/remixicon.css"
import Grand from './assets/Components/Grand'
import Lower from './assets/Components/Lower'
import Footer from './assets/Components/Footeer'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollVideo from './assets/Components/Scrollvideo'
import Characters from './assets/Components/Characters'
import { StickyCard002 } from './assets/Components/skiper17'
import Trailer from './assets/Components/Trailer'
import WorldSection from './assets/Components/WorldSection'
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [showContent, setShowContent] = useState(false)
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.to(".vimaskgroup",{
      rotate:10,
      transformOrigin:"50% 50%",
      duration:2,
      ease:"power4.inOut"
    })
    .to(".vimaskgroup", {
      scale:10,
      duration:2,
      ease:"expo.inOut",
      delay:-1.8,
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate:function(){
        if(this.progress()>=0.9){
          document.querySelector(".svg").remove()
          setShowContent(true)
          this.kill();
        }
      }
    })
  })
  useGSAP(()=>{
    if(!showContent) return;

    gsap.to(".main",{
      scale:1,
     rotate:0,
     duration:2,
     delay:-0.8,
     ease:"expo.inOut" 
    })
    gsap.to(".sky",{
      scale:1.2,
     rotate:0,
     duration:1,
     delay:-0.8,
     ease:"expo.inOut" 
    })
    gsap.to(".bg",{
      scale:1.2,
     rotate:0,
     duration:2.2,
     delay:-0.9,
     ease:"expo.inOut" 
    })
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function(dets){
      const xMove = (dets.clientX/window.innerWidth-0.5)*40;
      gsap.to(".main .text",{
        x: `${xMove*0.5}%`
      })
      gsap.to(".sky",{
        x: xMove
      })
      gsap.to(".bg",{
        x: xMove*2.1
      })
    })
  }, [showContent])
  useGSAP(()=>{
    if(!showContent) return;
    gsap.from(".lower .imag",{
      opacity:0,
      y:10,
      scrollTrigger:{
        trigger:".lower",
        start: "10%",
      }
    })
  }, [showContent])
  useGSAP(()=>{
    if(!showContent) return;
    gsap.from(".lower .text1",{
      opacity:0,
      y:10,
      scrollTrigger:{
        trigger:".lower",
        start:"10%"
      }
    })
  }, [showContent])
  
  
  return (
    <>
    <div className='w-full h-full bg-black svg fixed top-0 left-0 z-100 overflow-hidden'>
      <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
        <defs>
          <mask id='vimask'>
            <rect width="100%" height="100%" fill="black"/>
            <g className='vimaskgroup'>
              <text
              x="50%"
              y="50%"
              fontSize="250"
              textAnchor='middle'
              fill='white'
              dominantBaseline='middle'
              fontFamily='Arial Black'
              >
                VI
              </text>

            </g>

          </mask>
        </defs>
        <image
          xlinkHref="bg.png"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#vimask)"
        />
      </svg>
    </div>
    {showContent && (
      <div className='main w-full rotate-[-10deg] scale-[1.7]'>
        <div className="landing relative overflow-hidden bg-black h-screen w-full">
          <div className="navbar absolute top-0 w-full py-10 px-10 z-10">
            <div className="logo flex items-center gap-4">
              <div className="lines flex flex-col gap-1">
                <div className="w-12 h-1 bg-white"></div>
                <div className="w-8 h-1 bg-white"></div>
                <div className="w-5 h-1 bg-white"></div>
              </div>
              <h3 className='text-4xl text-white -mt-1.5'>RockStar</h3>
            </div>
          </div>
          
          <div className="image w-full h-screen relative overflow-hidden">
            <img src="sky.png" className='scale-[1.7] rotate-[-20deg]  sky absolute top-0 left-0 w-full h-full object-cover' alt="" />
            <img src="bg.png" className='bg scale-[1.8] rotate-[-30deg] absolute top-0 left-0 w-full h-full object-cover' alt="" />
            <Grand/>
            <img src="girlbg.png" className='char absolute -bottom-[52%] scale-[0.9] left-1/2 -translate-x-1/2 object-cover' alt="" />
            
          </div>
          <div className="btmbar absolute bottom-0 left-0 w-full py-10 px-10 bg-linear-to-t from-black to-transparent">
            <div className="flex gap-4 text-white items-center">
              <i className="ri-arrow-down-line text-4xl font-semibold" ></i>
              <h3 className='text-xl'>Scroll Down</h3>

            </div>
            <img src="/ps5.png" className='h-[65px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
          </div>

        </div>
        <div className="lower">
        <Lower/>
        </div>
        <WorldSection/>
        <div className="h-screen w-full justify-center flex items-center bg-gray-900">
          <Characters/>
    </div>
    <Trailer/>
    
        <Footer/>
      </div>
    )}
    </>
  )
}

export default App
