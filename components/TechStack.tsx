"use client";
import React, { useState } from "react";
import { companies } from "@/data";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const TechStack = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="techstack" className="py-20">
      <h1 className="heading">
        Tech I&apos;ve used <span className="text-purple"> to build stuff</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10 mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 lg:mt-10">
          <AnimatedTooltip
            items={companies.map((company) => ({
              id: company.id,
              name: company.name,
              designation: company.type,
              image: company.img,
            }))}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
