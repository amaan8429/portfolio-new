"use client";
import React, { useState } from "react";
import { AllBlogs } from "@/data";
import { Button } from "@/components/ui/MovingBorders";
import MagicButton from "./ui/MagicButton";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaHandPointDown } from "react-icons/fa";

const Blogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(4); // Initial number of blogs to show
  const [showReadMore, setShowReadMore] = useState(AllBlogs.length > 4); // Show "Read More" button if there are more blogs

  const loadMoreBlogs = () => {
    setVisibleBlogs(visibleBlogs + 4); // Load 4 more blogs
    setShowReadMore(AllBlogs.length > visibleBlogs + 4); // Update "Read More" button visibility
  };

  return (
    <div className="py-20 w-full" id="blogs">
      <h1 className="heading">
        Check out my <span className="text-purple">Blogs</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {AllBlogs.slice(0, visibleBlogs).map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <a href={card.url} target="_blank" rel="noopener noreferrer">
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </a>
          </Button>
        ))}
      </div>
      {showReadMore && (
        <div className="mt-10 text-center">
          <MagicButton
            title="More Blogs"
            icon={<FaHandPointDown />}
            position="right"
            handleClick={loadMoreBlogs}
          />
        </div>
      )}
    </div>
  );
};

export default Blogs;
