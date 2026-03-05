"use client";

import Image from "next/image";

const projects = [
  "Moirai",
  "Nudge",
  "Chameleon Docs",
  "ASAP Protocol",
  "GlassBox",
];

export default function ProjectsShowcase() {
  return (
    <section className="relative h-screen w-full text-zinc-100 font-sans overflow-hidden py-20 z-10">
      {/* CENTER QUOTE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <div className="flex flex-col items-center opacity-80">
          <h1 className="text-[10vw] md:text-[6vw] lg:text-[4.5vw] font-soria tracking-normal uppercase text-center flex flex-col mix-blend-difference">
            <span>We imagine it,</span>

            <span className="relative">
              Code makes it <span className="text-orange-700">real</span>
            </span>
          </h1>

          <p className="mt-4 md:mt-6 text-[2vw] md:text-[1vw] tracking-[0.3em] italic uppercase text-zinc-400 mix-blend-difference">
            ~ Arnab Mistry
          </p>
        </div>
      </div>

      {/* FLOATING PROJECT IMAGE */}
      <div className="absolute top-16 left-4 sm:top-24 sm:left-8 md:top-12 md:left-12 z-10 w-65 h-45 sm:w-[320px] sm:h-55 md:w-100 md:h-65 lg:w-125 lg:h-80 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/placeholder/shawn.jpg"
            alt="Moirai"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </div>

      {/* PROJECT LIST */}
      <div className="absolute bottom-12 right-4 sm:right-6 md:right-12 z-20 flex flex-col items-end">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-400 mb-4 mr-8">
          MY PROJECTS
        </p>

        <ul className="flex flex-col items-end">
          {projects.map((project, i) => (
            <li
              key={project}
              className={`group relative text-lg sm:text-xl md:text-[2.5rem] uppercase tracking-tighter cursor-pointer transition-colors duration-300 pr-8 ${
                i === 0 ? "text-zinc-100" : "text-zinc-500"
              }`}
            >
              <span className="inline-block relative z-10 py-1 pr-4">
                <span className="inline-block px-1 py-1 leading-normal">
                  {project}
                </span>
              </span>

              {/* HOVER LINE */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1 md:h-1.5 bg-orange-700 rounded-full w-0 opacity-0 group-hover:w-10 group-hover:opacity-100 transition-all duration-300" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
