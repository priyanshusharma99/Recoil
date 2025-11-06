import React from 'react'
import Hero from './assets/Components/Hero'
import News from './assets/Components/News'
import ProfileCard from './assets/Components/ProfileCard'
import { faL } from '@fortawesome/free-solid-svg-icons'
import { gsap } from "gsap";
import Footer from './assets/Components/Footer'

const App = () => {
  return (
    <div className='relative' onMouseMove={function(dets){
      gsap.to(".cursoro", {
        x: dets.clientX,
      y: dets.clientY,
      duration: 0.2,
      ease: "power2.out"
      })
    }}>
      <Hero />
      <div className='w-full bg-black py-6 px-4'>

        <h1 className='text-4xl text-white flex w-full justify-center font-extrabold'>THE OG's</h1>
        <div className=' w-[27vw] bg-clip-padding flex p-10 gap-30'>
          <ProfileCard
            name="Vex"
            title="Every shadow hides his name"
            handle="@priyanshu_codes"
            status="Online"
            contactText="Say Hello"
            avatarUrl="/public/Gemini_Generated_Image_g8ybmug8ybmug8yb (1).png"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked!")}
          />
          <ProfileCard
            name="Bardok"
            //  yelena vex
            title="courage either rises or dies"
            handle="@priyanshu_codes"
            status="Online"
            contactText="Say Hello"
            avatarUrl="public/Gemini_Generated_Image_7vn1kn7vn1kn7vn1-removebg-preview.png"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked!")}
          />
          <ProfileCard
            name="Yelena"
            title="beauty in focus, death in silence"
            handle="@priyanshu_codes"
            status="Online"
            contactText="Say Hello"
            avatarUrl="public/Gemini_Generated_Image_wazqhmwazqhmwazq.png"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked!")}
          />
        </div>
      </div>
      <News />
      <Footer/>
      <div className='w-3 h-3 z-50 bg-cyan-600 rounded-full fixed top-0 left-0 pointer-events-none cursoro'>

      </div>
    </div>
  )
}

export default App
