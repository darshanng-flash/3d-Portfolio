"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/app/constants";

const FloatingNav = () => {
const [visible, setVisible] = useState(false);

useEffect(() => {
let last = window.scrollY;
const onScroll = () => {
const curr = window.scrollY;
setVisible(curr < 80 || curr < last);
last = curr;
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
return () => window.removeEventListener("scroll", onScroll);
}, []);

return (
<AnimatePresence mode="wait">
{visible && (
<motion.nav
initial={{ y: -16, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
exit={{ y: -16, opacity: 0 }}
transition={{ duration: 0.18 }}
className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit"
>
<div className="bg-black-100/80 backdrop-blur-md rounded-full border border-gray-800 px-6 py-2">
<ul className="flex items-center gap-4">
{navItems.map((item) => (
<li key={item.title}>
<a href={item.target} className="text-sm text-gray-300 hover:text-purple transition-colors">
{item.title}
</a>
</li>
))}
</ul>
</div>
</motion.nav>
)}
</AnimatePresence>
);
};

export default FloatingNav;