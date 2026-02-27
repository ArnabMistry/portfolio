"use client";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center">
        <div className="w-full px-10 md:px-20">
          {/* Top line */}
          <h1 className="text-white text-7xl md:text-[10vw] font-chunk leading-none">
            PRECISION
          </h1>

          {/* Middle word */}
          <div className="flex justify-center my-6">
            <h2 className="text-7xl md:text-9xl font-alexbrush text-blue-500">
              and
            </h2>
          </div>

          {/* Bottom line */}
          <div className="flex justify-end">
            <h1 className="text-white text-7xl md:text-[10vw] font-chunk leading-none">
              DEDICATION
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
