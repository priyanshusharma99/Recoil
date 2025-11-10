import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Charcard = (props) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    if (!card || !image) return;

    const handleEnter = () => {
      gsap.to(image, { scale: 1.2, duration: 0.4, ease: "power2.out" });
    };

    const handleLeave = () => {
      gsap.to(image, { scale: 1, duration: 0.4, ease: "power2.out" });
    };

    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className='w-[30vw] cardo h-[35vw] flex flex-col items-center justify-around bg-amber-200 rounded-2xl cursor-pointer'
    >
      <img
        ref={imageRef}
        className='image-char rounded-xl w-[80%]'
        src={props.imageLink}
        alt={props.name}
      />
      <h1 className='text-5xl mt-4'>{props.name}</h1>
    </div>
  );
};

export default Charcard;