import React from "react";

export default function ImageCard({ src, alt, title, subtitle }) {
  return (
    <div className="imageCard">
      <div className="imageWrap">
        {/* If the path is wrong/missing, browser shows broken image icon, which is fine while you’re adding assets */}
        <img src={src} alt={alt || title || "image"} loading="lazy" />
      </div>

      {(title || subtitle) && (
        <div className="imageMeta">
          {title && <div className="imageTitle">{title}</div>}
          {subtitle && <div className="imageSubtitle">{subtitle}</div>}
        </div>
      )}
    </div>
  );
}
