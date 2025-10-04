"use client";

import React from "react";

const GitHubStats = () => {
  return (
    <section id="github-stats" className="py-20">
      <h1 className="heading text-center">
        My <span className="text-purple">GitHub</span> Activity
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
        <img
          src="https://github-readme-stats.vercel.app/api?username=darshan-ng&show_icons=true&theme=radical"
          alt="GitHub Stats"
          className="max-w-xs w-full rounded-lg shadow-lg"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=darshan-ng&theme=radical"
          alt="GitHub Streak"
          className="max-w-xs w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default GitHubStats;
