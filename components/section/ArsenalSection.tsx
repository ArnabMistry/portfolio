"use client";

type TechCategory = {
  title: string;
  items: string[];
};

const techStack: TechCategory[] = [
  {
    title: "Languages",
    items: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

export default function ArsenalSection() {
  return (
    <section className="relative w-full min-h-screen py-32 px-6 sm:px-12 md:px-16 lg:px-24 z-10 mix-blend-difference text-white">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-8 mb-16">
        <h2 className="font-brolimo text-[12vw] md:text-[8vw] leading-none tracking-tighter uppercase">
          The Arsenal
        </h2>

        <p className="font-sans text-sm md:text-base text-gray-400 max-w-xs mt-6 md:mt-0 uppercase tracking-widest">
          Tools & technologies utilized to engineer digital precision.
        </p>
      </div>

      {/* Tech Rows */}
      <div className="w-full flex flex-col">
        {techStack.map((category, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row group border-b border-white/10 py-10 lg:py-16 hover:bg-orange-500/10 transition-colors duration-300 cursor-default"
          >
            {/* Left Title */}
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <h3 className="font-alexbrush italic text-[10vw] sm:text-[8vw] lg:text-[4.5vw] text-white leading-none lowercase tracking-tight group-hover:text-orange-500 group-hover:translate-x-3 transition-all duration-300">
                {category.title}
              </h3>
            </div>

            {/* Right Items */}
            <div className="w-full lg:w-2/3 flex flex-wrap gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-6 items-center">
              {category.items.map((item, i) => (
                <span
                  key={i}
                  className="font-brolimo text-lg md:text-2xl lg:text-3xl uppercase tracking-tight text-gray-500 group-hover:text-white transition-colors duration-300 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
