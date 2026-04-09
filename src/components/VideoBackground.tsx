"use client";

import { useRef, useEffect } from "react";
import { CDN_BASE } from "../lib/cdn";

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

  // If src starts with /videos/, prepend CDN base
  const videoSrc = src.startsWith("/videos/") ? `${CDN_BASE}${src}` : src;

  return (
    <div className={`absolute inset-0 overflow-hidden ${vignette ? "video-vignette" : ""} ${className}`}>
      <video
        ref={ref}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ filter: "saturate(0.85)" }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, rgba(6,6,6,${overlay * 0.6}), rgba(6,6,6,${overlay}))` }} />
    </div>
  );
}
