'use client'

import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

type Theme = "dark" | "light";

export default function ToggleThemeButton() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme;
    if (stored) {
      // set the html element's data-theme to opposite theme
      document.documentElement.setAttribute("data-theme", stored);
      // save theme to local storage
      localStorage.setItem("theme", stored);
      // set theme state to opposite theme
      setTheme(stored);
    }
  }, [])

  const toggleTheme = () => {
    // get the opposite theme from the current one
    const oppositeTheme = theme === "dark" ? "light" : "dark";
    // set the html element's data-theme to opposite theme
    document.documentElement.setAttribute("data-theme", oppositeTheme);
    // save theme to local storage
    localStorage.setItem("theme", oppositeTheme);
    // set theme state to opposite theme
    setTheme(oppositeTheme);
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full p-1 transition-colors duration-300 cursor-pointer inset-shadow-sm"
      style={{ background: isDark ? "#1e293b" : "#cbd5e1" }}
      aria-label="Toggle theme"
    >
      {/* Track icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <Moon size={12} color="#94a3b8" />
        <Sun size={12} color="#94a3b8" />
      </div>

      {/* Sliding knob */}
      <motion.div
        className="relative z-10 w-5 h-5 rounded-full flex items-center justify-center"
        style={{ background: isDark ? "#e2e8f0" : "#020618" }}
        animate={{ x: isDark ? 0 : 28 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark
          ? <Moon size={11} color="#020618" />
          : <Sun size={11} color="#e2e8f0" />
        }
      </motion.div>
    </button>
  );
}