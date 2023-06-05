"use client";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "use-hooks";
const SwitchTheme = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "dracula"
  );
  const toggleTheme = () => {
    setTheme(theme === "dracula" ? "cyberpunk" : "dracula");
  };

  //modify data-theme when theme changes
  useEffect(() => {
    const body = document.documentElement;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button className="btn gap-2" onClick={toggleTheme}>
      {theme === "dracula" ? (
        <div className="w-5 h-5">🧛‍♂️</div>
      ) : (
        <div className="w-5 h-5">🧙‍♀️</div>
      )}
      Switch Theme
    </button>
  );
};

export default SwitchTheme;
