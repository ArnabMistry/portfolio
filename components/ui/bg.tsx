"use client";

import {
  ChromaticAberration,
  CursorRipples,
  FlowField,
  Shader,
  Swirl,
  Vibrance,
} from "shaders/react";

export default function PortfolioBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Shader className="h-screen w-screen">
        <Swirl colorA="#0007a9" colorB="#28193c" speed={2} />
        <ChromaticAberration />
        <CursorRipples intensity={20} />
        <FlowField />
        <Vibrance />
      </Shader>
    </div>
  );
}
