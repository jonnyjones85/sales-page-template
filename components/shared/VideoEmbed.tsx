"use client";

import { useState } from "react";

/**
 * VideoEmbed — Vimeo thumbnail with click-to-play iframe loading.
 * Shows a thumbnail image first, loads the Vimeo player on click.
 */
export default function VideoEmbed({
  vimeoId,
  thumbnailSrc,
  title = "Video",
}: {
  vimeoId: string;
  thumbnailSrc?: string;
  title?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="absolute top-0 left-0 w-full h-full rounded"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="relative w-full cursor-pointer group block"
      style={{ paddingBottom: "56.25%" }}
      aria-label={`Play ${title}`}
    >
      {thumbnailSrc ? (
        <img
          src={thumbnailSrc}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover rounded"
          loading="lazy"
        />
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-navy-dark rounded flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
            <div className="w-0 h-0 border-l-[24px] border-l-white border-y-[14px] border-y-transparent ml-1.5" />
          </div>
        </div>
      )}
      {thumbnailSrc && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-black/60 transition">
            <div className="w-0 h-0 border-l-[24px] border-l-white border-y-[14px] border-y-transparent ml-1.5" />
          </div>
        </div>
      )}
    </button>
  );
}
