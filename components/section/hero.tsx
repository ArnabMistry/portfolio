// this section jwill just return the text for the hero section.
"use client";

export default function Hero() {
  return (
    <>
      <div className="px-6 sm:px-12 md:px-20 pt-11 flex items-center justify-between">
        <h1 className="text-white text-sm font-semibold tracking-widest font-brolimo">
          ARNAB MISTRY
        </h1>
        <h1 className="text-white text-sm font-semibold tracking-widest font-brolimo">
          SUIII
        </h1>
      </div>
      <section className="pt-12 flex items-center">
        <div className="w-full px-6 sm:px-10 md:px-20">
          <h1 className="text-white tracking-wide text-5xl sm:text-7xl md:text-[10vw] font-chunk leading-none">
            PRECISION
          </h1>
          <div className="flex justify-center my-6">
            <h2 className="text-6xl sm:text-7xl md:text-[12vw] font-alexbrush text-orange-700">
              and
            </h2>
          </div>
          <div className="flex justify-end">
            <h1 className="text-white tracking-wide text-5xl sm:text-7xl md:text-[10vw] font-chunk leading-none">
              DEDICATION
            </h1>
          </div>
          <div className="pt-16 sm:pt-27 flex justify-end items-center gap-4">
            <div className="w-12 h-px bg-white" />
            <h1 className="text-white text-sm font-semibold tracking-widest font-brolimo">
              SCROLL TO EXPLORE
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
