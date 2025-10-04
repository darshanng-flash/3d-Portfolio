"use client";
import { useState, useEffect } from "react";
export default function ThemeToggle() {
const [dark, setDark] = useState(true);
useEffect(() => {
document.documentElement.classList.toggle("dark", dark);
}, [dark]);
return (
<button
onClick={() => setDark(!dark)}
className="fixed bottom-8 right-8 p-3 bg-gray-800 text-white rounded-full"
aria-label="Toggle theme"
>
{dark ? "🌞" : "🌙"}
</button>
);
}