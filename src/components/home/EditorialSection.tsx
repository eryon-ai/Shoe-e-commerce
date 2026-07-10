"use client";

import Link from "next/link";
import Image from "next/image";
import { STORIES } from "@/data/mockData";

export default function EditorialSection() {
  const mainStory = STORIES[0];
  const sideStories = STORIES.slice(1, 3);

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-white/5">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface uppercase">The Journal</h2>
          <p className="font-body-md text-on-surface-variant mt-2 max-w-lg">Culture, innovation, and the stories behind the silhouettes.</p>
        </div>
        <Link className="hidden md:flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-primary-fixed transition-colors" href="#">
          READ ALL <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Featured Story */}
        <div className="lg:col-span-8 group cursor-pointer">
          <div className="relative w-full aspect-video md:aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-surface-container-high ghost-border">
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10 opacity-50"></div>
            <Image
              src={mainStory.image}
              alt={mainStory.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-6 left-6 z-20">
               <span className="inline-block px-3 py-1 rounded-full bg-surface/50 backdrop-blur-md border border-white/10 font-label-caps text-[10px] text-primary">{mainStory.category}</span>
            </div>
          </div>
          <div>
            <p className="font-label-caps text-xs text-on-surface-variant mb-2">{mainStory.date}{' // BY '}{mainStory.author.toUpperCase()}</p>
            <h3 className="font-display-sm text-3xl md:text-5xl text-on-surface mb-4 uppercase group-hover:text-primary transition-colors">{mainStory.title}</h3>
            <p className="font-body-lg text-on-surface-variant line-clamp-2 max-w-2xl">{mainStory.excerpt}</p>
          </div>
        </div>

        {/* Side Stories List */}
        <div className="lg:col-span-4 flex flex-col gap-8 md:gap-12 lg:gap-8 justify-center lg:border-l lg:border-white/5 lg:pl-8">
          {sideStories.map((story) => (
            <div key={story.id} className="group cursor-pointer flex flex-row lg:flex-col gap-6 lg:gap-4 items-center lg:items-start">
              <div className="relative w-32 h-32 lg:w-full lg:h-48 rounded-xl overflow-hidden shrink-0 bg-surface-container-high ghost-border">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="flex-grow">
                <p className="font-label-caps text-[10px] text-secondary mb-2">{story.category}</p>
                <h4 className="font-title-md text-xl text-on-surface uppercase group-hover:text-primary transition-colors line-clamp-2">{story.title}</h4>
                <p className="font-label-caps text-[10px] text-on-surface-variant mt-2 hidden md:block">{story.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
