"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "ISF",
    image: "/placeholder/shawn.jpg",
    desc: "AI parsing system that converts unstructured project documents into clean structured datasets.",
    github: "#",
    live: "#",
  },
  {
    title: "Fix My Street",
    image: "/placeholder/shawn.jpg",
    desc: "Civic tech platform that helps citizens report urban infrastructure problems.",
    github: "#",
    live: "#",
  },
  {
    title: "ISL Translator",
    image: "/placeholder/shawn.jpg",
    desc: "Computer vision system translating Indian Sign Language into readable text.",
    github: "#",
    live: "#",
  },
  {
    title: "Hotwheels",
    image: "/placeholder/shawn.jpg",
    desc: "Experimental car-tracking visualization platform.",
    github: "#",
    live: "#",
  },
  {
    title: "Travel Sathi",
    image: "/placeholder/shawn.jpg",
    desc: "Smart travel planning assistant with route intelligence.",
    github: "#",
    live: "#",
  },
];

type Project = (typeof projects)[number];

export default function ProjectsShowcase() {
  const [hoveredProject, setHoveredProject] = useState<Project>(projects[0]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="relative min-h-[90vh] md:h-screen w-full text-zinc-100 font-sans overflow-hidden py-12 md:py-20 z-10 flex flex-col justify-between md:block">
      {/* CENTER QUOTE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <div className="flex flex-col items-center opacity-30 md:opacity-80 px-4">
          <h1 className="text-[8.5vw] sm:text-[6vw] lg:text-[4.5vw] font-soria uppercase text-center flex flex-col mix-blend-difference leading-tight">
            <span>We imagine it,</span>
            <span>
              Code makes it <span className="text-orange-700">real</span>
            </span>
          </h1>

          <p className="mt-3 md:mt-6 text-[2.5vw] sm:text-[2vw] md:text-[1vw] tracking-[0.25em] md:tracking-[0.3em] italic uppercase text-zinc-400 mix-blend-difference">
            ~ Arnab Mistry
          </p>
        </div>
      </div>

      {/* FLOATING PREVIEW IMAGE */}
      {!activeProject && (
        <motion.div
          layoutId="project-image"
          className="relative md:absolute top-0 md:top-12 left-0 md:left-12 mx-auto md:mx-0
            z-10 w-[86vw] max-w-[340px] aspect-[16/10] md:w-105 md:h-65 md:aspect-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src={hoveredProject.image}
            alt={hoveredProject.title}
            fill
            sizes="(max-width: 768px) 86vw, 420px"
            className="object-cover opacity-90 md:opacity-80"
          />
        </motion.div>
      )}

      {/* PROJECT LIST */}
      <div className="relative md:absolute md:bottom-12 md:right-12 z-20 flex flex-col items-end mt-8 md:mt-0 px-6 md:px-0">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-400 mb-3 sm:mb-4 mr-6 sm:mr-8">
          MY PROJECTS
        </p>

        <ul className="flex flex-col items-end">
          {projects.map((project) => {
            const isSelected = hoveredProject.title === project.title;
            return (
              <li
                key={project.title}
                onMouseEnter={() => setHoveredProject(project)}
                onClick={() => {
                  setHoveredProject(project);
                  setActiveProject(project);
                }}
                className={`group relative text-lg sm:text-xl md:text-[2.5rem] uppercase tracking-tighter cursor-pointer transition-colors duration-300 pr-6 sm:pr-8 py-1 ${
                  isSelected ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-100"
                }`}
              >
                <span className="inline-block relative z-10 pr-3 sm:pr-4">
                  {project.title}
                </span>

                <div
                  className={`absolute right-0 top-1/2 -translate-y-1/2 h-1 md:h-1.5 bg-orange-700 rounded-full transition-all duration-300 ${
                    isSelected
                      ? "w-6 sm:w-10 opacity-100"
                      : "w-0 opacity-0 group-hover:w-10 group-hover:opacity-100"
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* MODAL VIEW */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeProject.title}
            className="fixed inset-0 bg-black/80 md:bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-4 md:p-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            {/* Modal wrapper: on mobile, a neat dialog card with scroll if needed; on desktop md:contents lets elements position freely */}
            <div
              className="relative w-full max-w-sm flex flex-col items-center max-h-[90vh] overflow-y-auto px-4 py-5 rounded-3xl bg-zinc-950/90 border border-white/10 backdrop-blur-md shadow-2xl md:contents"
              onClick={(e) => e.stopPropagation()}
            >
              {/* TITLE */}
              <motion.h1
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                className="text-2xl sm:text-3xl md:text-[6vw] font-brolimo font-bold tracking-normal uppercase text-center mb-3 md:mb-0 md:absolute md:top-10"
              >
                {activeProject.title}
              </motion.h1>

              {/* IMAGE (shared layout animation) */}
              <motion.div
                layoutId="project-image"
                className="relative w-full aspect-[16/10] md:w-225 md:h-112.5 md:aspect-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shrink-0"
              >
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 900px"
                  className="object-cover"
                />
              </motion.div>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                className="mt-3 md:mt-0 text-xs sm:text-sm md:text-base md:max-w-xl text-center font-brolimo tracking-wider md:tracking-widest text-zinc-200 md:text-zinc-100 md:absolute md:bottom-32 px-2"
              >
                {activeProject.desc}
              </motion.p>

              {/* LINKS */}
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 60, opacity: 0 }}
                className="mt-5 md:mt-0 flex flex-col sm:flex-row gap-2.5 sm:gap-6 w-full sm:w-auto md:absolute md:bottom-12 items-center justify-center"
              >
                <a
                  href={activeProject.live}
                  className="cursor-target group flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-orange-700 text-white rounded-full font-sans uppercase text-xs sm:text-sm tracking-wider font-bold transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white hover:text-black"
                >
                  LIVE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                    <path d="M5 5h6v2H7v10h10v-4h2v6H5z" />
                  </svg>
                </a>

                <a
                  href={activeProject.github}
                  className="cursor-target group flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white rounded-full font-sans uppercase text-xs sm:text-sm tracking-wider font-bold transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white hover:text-black"
                >
                  SOURCE CODE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.65.5.5 5.78.5 12.28c0 5.2 3.44 9.6 8.2 11.16.6.11.82-.27.82-.6v-2.13c-3.34.75-4.04-1.64-4.04-1.64-.55-1.43-1.34-1.81-1.34-1.81-1.1-.77.08-.76.08-.76 1.22.09 1.86 1.28 1.86 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.81.42-1.35.76-1.66-2.67-.31-5.47-1.37-5.47-6.1 0-1.35.46-2.46 1.22-3.33-.12-.31-.53-1.56.11-3.26 0 0 .99-.32 3.25 1.27a11.1 11.1 0 0 1 5.92 0C17.54 4.3 18.53 4.62 18.53 4.62c.64 1.7.23 2.95.11 3.26.76.87 1.22 1.98 1.22 3.33 0 4.74-2.81 5.78-5.49 6.09.43.38.82 1.12.82 2.26v3.35c0 .33.21.72.83.6 4.76-1.56 8.2-5.96 8.2-11.16C23.5 5.78 18.35.5 12 .5z" />
                  </svg>
                </a>
              </motion.div>

              {/* CLOSE BUTTON */}
              <button
                type="button"
                aria-label="Close project details"
                className="absolute top-3 right-3 md:top-6 md:right-6 w-9 h-9 md:w-auto md:h-auto flex items-center justify-center text-sm md:text-2xl bg-white/10 md:bg-transparent hover:bg-white/20 active:bg-white/30 rounded-full md:rounded-none transition-colors cursor-pointer text-white z-30"
                onClick={() => setActiveProject(null)}
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
