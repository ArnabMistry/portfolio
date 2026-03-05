"use client";

import { Suspense, lazy } from "react";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({
    default: mod.Dithering,
  })),
);

export default function BackgroundShader() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <div className="absolute inset-0 opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen">
          <Dithering
            colorBack="#00000000"
            colorFront="#EC4E02"
            shape="warp"
            type="4x4"
            speed={0.2}
            className="w-full h-full"
            minPixelRatio={1}
          />
        </div>
      </Suspense>
    </div>
  );
}
