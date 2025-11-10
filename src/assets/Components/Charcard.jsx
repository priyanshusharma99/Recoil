import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Charcard = (props) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const heading = headingRef.current;
    if (!card || !image || !heading) return;

    const handleEnter = () => {
      gsap.to(image, { scale: 1.2, duration: 0.4, ease: "power2.out" });
    };

    const handleLeave = () => {
      gsap.to(image, { scale: 1, duration: 0.4, ease: "power2.out" });
    };

    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    // Scroll animation for card & heading
    gsap.fromTo(
      card,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      heading,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className='w-[30vw] cardo h-[32vw] flex flex-col items-center justify-around bg-amber-200 rounded-2xl cursor-pointer opacity-0'
    >
      <img
        ref={imageRef}
        className='image-char rounded-xl w-[80%] shadow-[0_0_40px_rgba(0,255,255,0.8)]'
        src={props.imageLink}
        alt={props.name}
      />
      <h1
        ref={headingRef}
        className='text-5xl mt-4 opacity-0'
      >
        {props.name}
      </h1>
    </div>
  );
};

export default Charcard;