"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STORIES } from "@/data/mockData";

const CATEGORIES = ["ALL", ...Array.from(new Set(STORIES.map(s => s.category.toUpperCase())))];

export default function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredStories = STORIES.filter(s => activeCategory === "ALL" || s.category.toUpperCase() === activeCategory);
  
  const featuredStory = STORIES[0];
  const gridStories = filteredStories.filter(s => s.id !== featuredStory.id);

  return (
    <main className="flex-grow pt-[100px] md:pt-[120px]">
      {/* Hero Featured Story */}
      <section className="relative w-full h-[716px] md:h-[870px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('${featuredStory.image}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end px-margin-mobile md:px-margin-desktop pb-12 md:pb-24 max-w-container-max mx-auto w-full">
          <span className="font-label-caps text-label-caps text-primary border border-primary px-4 py-1 rounded-full w-max mb-6 backdrop-blur-md bg-surface/30">FEATURED STORY</span>
          <h1 className="font-display-xl text-display-xl md:text-[100px] leading-none mb-6 text-on-surface text-neon-glow uppercase">
            {featuredStory.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">
            {featuredStory.excerpt}
          </p>
          <button className="bg-on-surface text-background font-label-caps text-label-caps px-8 py-4 rounded hover:scale-105 transition-all duration-300 neon-glow w-max">
            READ FULL STORY
          </button>
        </div>
      </section>

      {/* Magazine Masonry Layout */}
      <section className="px-margin-mobile md:px-margin-desktop py-20 max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">LATEST DISPATCHES</h2>
          <div className="hidden md:flex space-x-4 font-label-caps text-label-caps">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={
                  activeCategory === cat 
                    ? "text-primary border-b border-primary pb-1" 
                    : "text-on-surface-variant hover:text-on-surface transition-colors pb-1"
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <AnimatePresence mode="popLayout">
            {gridStories.length > 0 && (
              <motion.article 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="md:col-span-8 group relative h-[500px] rounded-xl overflow-hidden ghost-border bg-surface-container/50 backdrop-blur-xl"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60" 
                  style={{ backgroundImage: `url('${gridStories[0].image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="font-label-caps text-label-caps bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full text-secondary uppercase">{gridStories[0].category}</span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">schedule</span> {gridStories[0].date}</span>
                  </div>
                  <div>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface mb-3 group-hover:text-primary transition-colors">{gridStories[0].title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-md">{gridStories[0].excerpt}</p>
                  </div>
                </div>
              </motion.article>
            )}
          </AnimatePresence>

          <div className="md:col-span-4 flex flex-col gap-gutter">
            <AnimatePresence mode="popLayout">
              {gridStories.slice(1).map((story) => (
                <motion.article 
                  key={story.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group relative flex-1 rounded-xl overflow-hidden ghost-border bg-surface-container/50 backdrop-blur-xl min-h-[238px]"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50" 
                    style={{ backgroundImage: `url('${story.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="font-label-caps text-label-caps text-primary mb-2 uppercase">{story.category}</span>
                    <h3 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">{story.title}</h3>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
