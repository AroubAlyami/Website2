import React, { useEffect, useMemo, useState } from "react";
import { ART_GALLERY } from "../data";

export default function ArtGallery() {
  const items = useMemo(() => ART_GALLERY ?? [], []);

  const [index, setIndex] = useState(0);

  const safeIndex = items.length ? ((index % items.length) + items.length) % items.length : 0;
  const current = items[safeIndex];

  const prev = () => setIndex((i) => i - 1);
  const next = () => setIndex((i) => i + 1);

  // Keyboard controls (nice touch): ← → to navigate
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!items.length) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  if (!items.length) {
    return (
      <div className="page">
        <h1 className="pageTitle">Art gallery</h1>
        <p className="muted">No art added yet. Add files in /images and list them in ART_GALLERY in data.js.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="pageTitle">Art gallery</h1>
      <p className="muted">Use the side buttons or your arrow keys.</p>

      <div className="galleryShell">
        {/* Left controls */}
        <div className="gallerySide">
          <button className="galleryBtn" onClick={prev} aria-label="Previous artwork">
            ‹
          </button>

          <div className="galleryCount">
            {safeIndex + 1} / {items.length}
          </div>

          <button className="galleryBtn" onClick={next} aria-label="Next artwork">
            ›
          </button>
        </div>

        {/* Main frame */}
        <div className="galleryFrame">
          <div className="galleryImageWrap">
            <img
              className="galleryImage"
              src={current.src}
              alt={current.title || `Artwork ${safeIndex + 1}`}
              loading="lazy"
            />
          </div>

          <div className="galleryMeta">
            <div className="galleryTitle">{current.title ?? "Untitled"}</div>
            {current.note ? <div className="galleryNote">{current.note}</div> : null}
          </div>
        </div>

        {/* Right thumbnails (optional but nice) */}
        <div className="galleryThumbs" aria-label="Artwork thumbnails">
          {items.map((it, i) => {
            const active = i === safeIndex;
            return (
              <button
                key={`${it.src}-${i}`}
                className={`thumb ${active ? "thumbActive" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to ${it.title ?? `Artwork ${i + 1}`}`}
                title={it.title ?? `Artwork ${i + 1}`}
              >
                <img src={it.src} alt="" loading="lazy" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
