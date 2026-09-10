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
    <section className="relative w-full min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-10 md:px-16 lg:px-24 z-10 mix-blend-difference text-white">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-6 sm:pb-8 mb-8 sm:mb-16">
        <h2 className="font-brolimo text-[12vw] sm:text-[10vw] md:text-[8vw] leading-none tracking-tighter uppercase">
          The Arsenal
        </h2>

        <p className="font-sans text-xs sm:text-sm md:text-base text-gray-400 max-w-xs mt-4 sm:mt-6 md:mt-0 uppercase tracking-widest">
          Tools & technologies utilized to engineer digital precision.
        </p>
      </div>

      {/* Tech Rows */}
      <div className="w-full flex flex-col">
        {techStack.map((category, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row group border-b border-white/10 py-6 sm:py-10 lg:py-16 hover:bg-orange-600/14 transition-colors duration-300 cursor-default"
          >
            {/* Left Title */}
            <div className="w-full lg:w-1/3 mb-4 sm:mb-6 lg:mb-0">
              <h3 className="font-alexbrush italic text-4xl sm:text-6xl md:text-[6vw] lg:text-[4.5vw] text-white leading-tight sm:leading-none lowercase tracking-tight group-hover:text-orange-700 group-hover:translate-x-2 sm:group-hover:translate-x-3 transition-all duration-300">
                {category.title}
              </h3>
            </div>

            {/* Right Items */}
            <div className="w-full lg:w-2/3 flex flex-wrap gap-x-4 gap-y-2.5 sm:gap-x-8 sm:gap-y-4 md:gap-x-10 md:gap-y-6 items-center">
              {category.items.map((item, i) => (
                <span
                  key={i}
                  className="font-brolimo text-sm sm:text-xl md:text-2xl lg:text-3xl uppercase tracking-tight text-gray-400 sm:text-gray-500 group-hover:text-white transition-colors duration-300 cursor-default"
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
