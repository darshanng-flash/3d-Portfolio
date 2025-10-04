// File: app/components/main/About.tsx
"use client";

import React from "react";
import { gridItems } from "@/app/constants";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/BentoGrid";

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        About <span className="text-purple">Me</span>
      </h2>

      <p className="mt-4 text-gray-400 max-w-2xl">
        Software engineering student focused on web development, interactive 3D experiences, and AI-driven simulations.
      </p>

      <div className="mt-10">
        <BentoGrid>
          {gridItems?.map((item) => (
            <BentoGridItem key={item.id}>
              <div className="flex items-center gap-4">
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt={item.label || "icon"}
                    className="h-10 w-10 object-contain"
                  />
                ) : null}
                <p className="text-lg font-semibold">{item.label || "Item"}</p>
              </div>
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default About;
