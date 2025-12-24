import React, { useEffect, useRef, useState } from "react";

export default function AudioPlayer({ src = "/audio/voice-note.mp3" }) {
  const audioRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    const onCanPlay = () => setReady(true);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => setPlaying(false);

    a.addEventListener("canplay", onCanPlay);
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    a.addEventListener("ended", onEnded);

    return () => {
      a.removeEventListener("canplay", onCanPlay);
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
      a.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (playing) a.pause();
      else await a.play();
    } catch {
      // Autoplay might be blocked; user can click again.
    }
  };

  return (
    <div className="audioCard">
      <div className="audioRow">
        <div>
          <div className="audioTitle">Voice note</div>
          <div className="audioSub">
            {ready ? "Press play when you’re ready." : "Add your mp3 to /public/audio/voice-note.mp3"}
          </div>
        </div>
        <button className="btn" onClick={toggle}>
          {playing ? "Pause" : "Play"}
        </button>
      </div>

      <audio ref={audioRef} src={src} preload="auto" />
    </div>
  );
}
