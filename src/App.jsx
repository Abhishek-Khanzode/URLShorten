import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import LinksList from "./components/LinksList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const URLS_KEY = "urls_db";
const DISPLAY_DOMAIN = "urlshorten.vercel.app";

export default function App() {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(URLS_KEY)) || [];
    setLinks(stored);
  }, []);

  useEffect(() => {
    const path = window.location.pathname.replace("/", "");
    if (!path) return;

    const stored = JSON.parse(localStorage.getItem(URLS_KEY)) || [];
    const found = stored.find((l) => l.slug === path);
    if (found) window.location.href = found.original;
  }, []);

  const generateSlug = (inputUrl) => {
    try {
      const u = new URL(inputUrl);
      let domain = u.hostname.replace("www.", "").split(".")[0];
      return domain.toLowerCase().replace(/[^a-z0-9]/g, "");
    } catch {
      return Math.random().toString(36).substring(2, 8);
    }
  };

  const shortenUrl = () => {
    if (!url.trim()) return;
    let slug = generateSlug(url);
    let existingSlugs = links.map((l) => l.slug);
    let suffix = 1;
    while (existingSlugs.includes(slug)) {
      slug = `${slug}${suffix}`;
      suffix++;
    }
    const newLink = {
      slug,
      original: url,
      display: `${DISPLAY_DOMAIN}/${slug}`,
      createdAt: new Date().toLocaleString(),
    };
    const updated = [newLink, ...links];
    localStorage.setItem(URLS_KEY, JSON.stringify(updated));
    setLinks(updated);
    setUrl("");
  };

  const deleteLink = (slug) => {
    const updated = links.filter((l) => l.slug !== slug);
    localStorage.setItem(URLS_KEY, JSON.stringify(updated));
    setLinks(updated);
  };

  const copy = (slug) => {
    const real = `${window.location.origin}/${slug}`;
    navigator.clipboard.writeText(real);
    alert("Copied!");
  };

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${theme === "light" ? "bg-indigo-50 text-gray-800" : "bg-gray-900 text-gray-100"}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero url={url} setUrl={setUrl} shortenUrl={shortenUrl} theme={theme} />
      <Features theme={theme} />
      <LinksList links={links} copy={copy} deleteLink={deleteLink} theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}