import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollVideo = () => {
  const videoRef = useRef();

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    // Run after video metadata loads
    video.addEventListener("loadedmetadata", () => {
      const duration = video.duration;

      gsap.to(video, {
        currentTime: duration,
        ease: "none",
        scrollTrigger: {
          trigger: ".video-section",
          start: "top top",
          end: "+=2500", // scroll distance for playback
          scrub: 7,
          markers: true, // remove later
        },
      });
    });
  });

  return (
    <div className="video-section w-full h-[200vh] bg-black flex justify-center items-center">
      <video
        ref={videoRef}
        src="/Grand Theft Auto VI Trailer 2 - Rockstar Games (1080p, h264) (online-video-cutter.com).mp4"
        className="scroll-video w-[80%]"
        muted
        preload="auto"
        playsInline
      />
    </div>
  );
};

export default ScrollVideo;