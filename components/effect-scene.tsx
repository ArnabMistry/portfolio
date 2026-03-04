"use client"

import { Environment, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { Suspense, useEffect, useRef, useState } from "react"
import { Group, Vector2 } from "three"
import { AsciiEffect } from "./ascii-effect"

const FERRARI_MODEL_URL = "https://threejs.org/examples/models/gltf/ferrari.glb"

function FerrariModel() {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF(FERRARI_MODEL_URL)

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.35
  })

  return (
    <group ref={groupRef} scale={1.5} position={[0, -0.9, 0]}>
      <primitive object={scene} />
    </group>
  )
}

export function EffectScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState(new Vector2(0, 0))
  const [resolution, setResolution] = useState(new Vector2(1920, 1080))

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = rect.height - (e.clientY - rect.top)
      setMousePos(new Vector2(x, y))
    }

    const container = containerRef.current
    if (!container) return

    container.addEventListener("mousemove", handleMouseMove)

    const updateResolution = () => {
      const rect = container.getBoundingClientRect()
      setResolution(new Vector2(rect.width, rect.height))
    }

    updateResolution()
    window.addEventListener("resize", updateResolution)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", updateResolution)
    }
  }, [])

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [0, 0.8, 7], fov: 42 }}
        style={{ background: "#000000" }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#000000"]} />

        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 8, 6]} intensity={2.2} color="#ffd4d4" />
        <directionalLight position={[-6, 2, -4]} intensity={1.0} color="#7fe7ff" />
        <Environment preset="night" />

        <Suspense fallback={null}>
          <FerrariModel />
        </Suspense>

        <EffectComposer>
          <Bloom
            intensity={1.95}
            luminanceThreshold={0.4}
            luminanceSmoothing={0.74}
          />
          <AsciiEffect
            style="minimal"
            cellSize={10}
            invert={false}
            color
            resolution={resolution}
            mousePos={mousePos}
            postfx={{
              scanlineIntensity: 0.15,
              scanlineCount: 200,
              targetFPS: 0,
              jitterIntensity: 0,
              jitterSpeed: 1,
              mouseGlowEnabled: false,
              mouseGlowRadius: 200,
              mouseGlowIntensity: 1.5,
              vignetteIntensity: 0,
              vignetteRadius: 0.8,
              colorPalette: "vaporwave",
              curvature: 0,
              aberrationStrength: 0.004,
              noiseIntensity: 0,
              noiseScale: 1,
              noiseSpeed: 1,
              waveAmplitude: 0,
              waveFrequency: 10,
              waveSpeed: 1,
              glitchIntensity: 0,
              glitchFrequency: 0,
              brightnessAdjust: 0,
              contrastAdjust: 1,
            }}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
