// this section jwill just return the text for the hero section.
"use client";

export default function Hero() {
  return (
    <>
      <div className="px-4 sm:px-12 md:px-20 pt-6 sm:pt-11 flex items-center justify-between">
        <h1 className="text-white text-xs sm:text-sm font-semibold tracking-widest font-brolimo">
          ARNAB MISTRY
        </h1>
        <h1 className="text-white text-xs sm:text-sm font-semibold tracking-widest font-brolimo">
          SUIII
        </h1>
      </div>
      <section className="pt-8 sm:pt-12 md:pt-16 flex items-center min-h-[80vh] md:min-h-0">
        <div className="w-full px-4 sm:px-10 md:px-20">
          <h1 className="text-white tracking-tight sm:tracking-wide text-[13vw] sm:text-7xl md:text-[10vw] font-chunk leading-none">
            PRECISION
          </h1>
          <div className="flex justify-center my-3 sm:my-6">
            <h2 className="text-[15vw] sm:text-7xl md:text-[12vw] font-alexbrush text-orange-700 leading-none">
              and
            </h2>
          </div>
          <div className="flex justify-end">
            <h1 className="text-white tracking-tight sm:tracking-wide text-[12vw] sm:text-7xl md:text-[10vw] font-chunk leading-none">
              DEDICATION
            </h1>
          </div>
          <div className="pt-10 sm:pt-16 md:pt-24 flex justify-end items-center gap-3 sm:gap-4">
            <div className="w-8 sm:w-12 h-px bg-white" />
            <h1 className="text-white text-xs sm:text-sm font-semibold tracking-widest font-brolimo">
              SCROLL TO EXPLORE
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
