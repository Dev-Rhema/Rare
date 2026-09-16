import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  const { pathname } = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem("rare-theme");
    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("rare-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        darkMode={darkMode}
        onThemeToggle={() => setDarkMode((enabled) => !enabled)}
      />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
