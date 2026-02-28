// this section jwill just return the text for the hero section.
"use client";

export default function Hero() {
  return (
    <section className="pt-12 flex items-center">
      <div className="w-full px-10 md:px-20">
        <h1 className="text-white text-7xl md:text-[10vw] font-chunk leading-none">
          PRECISION
        </h1>
        <div className="flex justify-center my-6">
          <h2 className="text-7xl md:text-[12vw] font-alexbrush text-blue-500">
            and
          </h2>
        </div>
        <div className="flex justify-end">
          <h1 className="text-white text-7xl md:text-[10vw] font-chunk leading-none">
            DEDICATION
          </h1>
        </div>
      </div>
    </section>
  );
}
