"use client";

import { motion } from "framer-motion";

export default function MagicButton({
title,
icon,
href,
position = "left"
}: {
title: string;
icon?: React.ReactNode;
href?: string;
position?: "left" | "right";
}) {
return (
<motion.a
href={href}
className={inline-flex items-center px-5 py-3 border border-purple text-purple rounded-full hover:bg-purple hover:text-black transition ${ position === "left" ? "flex-row" : "flex-row-reverse" }}
initial={{ opacity: 0, y: 12 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4 }}
>
{icon && <span className="text-lg">{icon}</span>}
<span className="mx-2">{title}</span>
</motion.a>
);
}