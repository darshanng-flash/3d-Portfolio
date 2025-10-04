// File: app/components/main/Experience.tsx
"use client";

import React from "react";
import { workExperience } from "@/app/constants";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        My <span className="text-purple">Experience</span>
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {workExperience.map((exp) => (
          <div key={exp.id} className="rounded-lg border border-gray-800 p-6 bg-black-100">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-xl font-semibold">{exp.role}</h2>
                <p className="text-gray-400">{exp.org}</p>
              </div>
              <span className="text-sm text-gray-400">{exp.period}</span>
            </div>

            {exp.points?.length ? (
              <ul className="list-disc ml-5 mt-4 text-gray-300">
                {exp.points.map((pt: string, idx: number) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            ) : null}

            {exp.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((t: string) => (
                  <span key={t} className="text-xxs px-2 py-0.5 rounded-full border border-gray-700 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
