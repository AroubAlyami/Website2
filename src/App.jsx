import React, { useEffect, useMemo, useState } from "react";
import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SITE } from "./data";
import Nav from "./components/Nav";
import ThemeToggle from "./components/ThemeToggle";
import useKonami from "./hooks/useKonami";
import useTypeEasterEgg from "./hooks/useTypeEasterEgg";
import Cats from "./pages/Cats";
import Compliments from "./pages/Compliments";
import ArtGallery from "./pages/ArtGallery";
import YesNo from "./pages/YesNo";
import Home from "./pages/Home";
import About from "./pages/About";
import Texts from "./pages/Texts";
import Gift from "./pages/Gift";
import Secret from "./pages/Secret";
  import StickerLayer from "./components/StickerLayer";


function ScrollToTopOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [pathname]);
  return null;
}

function AppShell() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "sunset");
  const [secretUnlocked, setSecretUnlocked] = useState(() => localStorage.getItem("secret") === "true");
  const [catsUnlocked, setCatsUnlocked] = useState(
  () => localStorage.getItem("cats") === "true");

  const toggleTheme = () => {
    setTheme((t) => (t === "sunset" ? "moon" : "sunset"));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Console easter egg
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("Happy birthday. You’re loved. No bugs here. (Scratch that...more like bugs gallore. Consider it practice for when you get stranded on the island)");
  }, []);

  // Konami unlocks secret page
  useKonami(() => {
    setSecretUnlocked(true);
    localStorage.setItem("secret", "true");
  });

useTypeEasterEgg({
  onSunset: () => setTheme("sunset"),
  onMoon: () => setTheme("moon"),
  onWe: () => {
    const el = document.querySelector(".we-pill");
    if (el) {
      el.classList.add("pop");
      setTimeout(() => el.classList.remove("pop"), 350);
    }
  },
  onCats: () => {
    setCatsUnlocked(true);
    localStorage.setItem("cats", "true");
  },
});

  const pillText = useMemo(() => {
    if (theme === "sunset") return "🌅 sunset mode";
    return "🌙 moon mode";
  }, [theme]);

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="logo" aria-hidden>⌁</div>
          <div className="brandText">
            <div className="title">{SITE.title}</div>
            <div className="subtitle">{SITE.heroLine}</div>
          </div>
        </div>

        <div className="topbarRight">
          <div className="we-pill" title="Try typing: we">
            {pillText}
          </div>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      <Nav secretUnlocked={secretUnlocked} catsUnlocked={catsUnlocked} />

      <StickerLayer enabled density={1} />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/texts" element={<Texts />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/compliments" element={<Compliments />} />
          <Route path="/art-gallery" element={<ArtGallery />} />
          <Route path="/yesno" element={<YesNo />} />



          <Route
            path="/secret"
            element={secretUnlocked ? <Secret /> : <Navigate to="/" replace />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="footer">{SITE.footerLine}</footer>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTopOnRoute />
      <AppShell />
    </HashRouter>
  );
}
