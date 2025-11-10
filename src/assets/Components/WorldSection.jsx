import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorldSection = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const globeRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      bgRef.current,
      { scale: 1, y: 0 },
      {
        scale: 1.2,
        y: -100,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 40%",
        scrub: 2,
      },
    });

    tl.fromTo(
      globeRef.current,
      { scale: 0.5, rotateZ: 0, opacity: 0 },
      { scale: 1, rotateZ: 360, opacity: 1, duration: 3, ease: "power3.out" }
    );

    tl.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out" },
      "-=1.5"
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[url('https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/grandt-theft-auto-6-release-window-leak.jpg')] bg-cover bg-center will-change-transform"
      />

      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      <div
        ref={globeRef}
        className="relative w-[25vw] h-[25vw] bg-linear-to-r from-blue-500 via-cyan-400 to-blue-700 rounded-full shadow-[0_0_80px_rgba(0,255,255,0.6)]"
      >
        <div className="absolute flex justify-center items-center overflow-hidden inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_70%)]" >
            <img className="w-full" src="https://thumbs.dreamstime.com/b/realistic-earth-high-quality-render-planet-isolated-black-background-40044176.jpg" alt="" />
            </div>
      </div>

      <h1
        ref={textRef}
        className="absolute bottom-[15vh] text-white text-6xl font-extrabold tracking-[0.3em] uppercase"
      >
        The GTR World
      </h1>
    </section>
  );
};

export default WorldSection;