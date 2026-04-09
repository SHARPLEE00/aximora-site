"use client";

import { useRef, useEffect } from "react";

export default function VideoBackground({
  src,
  overlay = 0.5,
  className = "",
  vignette = false,
}: {
  src: string;
  overlay?: number;
  className?: string;
  vignette?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.playbackRate = 0.8;
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${vignette ? "video-vignette" : ""} ${className}`}>
      <video
        ref={ref}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ filter: "saturate(0.85)" }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, rgba(6,6,6,${overlay * 0.6}), rgba(6,6,6,${overlay}))` }} />
    </div>
  );
}
