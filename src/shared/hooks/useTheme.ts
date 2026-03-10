"use client"
import { useEffect, useState } from "react";

const useTheme = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");

        const isDark =
            saved === "dark" ||
            (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);

        setDark(isDark);
        document.documentElement.classList.toggle("dark", isDark);
    }, []);

    const handleToggle = () => {
        const newDark = !dark;

        setDark(newDark);
        document.documentElement.classList.toggle("dark", newDark);

        localStorage.setItem("theme", newDark ? "dark" : "light");
    };

    return { dark, handleToggle };
};

export default useTheme;