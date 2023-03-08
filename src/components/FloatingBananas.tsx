import { Environment, useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { Mesh } from 'three'

type IBanana = {
  z: number
  key: number
}

type IFloatingBananas = {
  count: number
  depth?: number
}

export function Banana({ z }: IBanana) {
  const ref = useRef<Mesh>(null!)

  const { nodes, materials } = useGLTF('/banana-v1-transformed.glb')

  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
  })

  useFrame((state) => {
    ref.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.001),
      (data.rZ += 0.001)
    )
    ref.current.position.set(data.x * width, (data.y += 0.03), z)
    if (data.y > height) {
      data.y = -height
    }
  })

  // Property 'geometry' does not exist on type 'Object3D<Event>'
  return (
    <mesh
      ref={ref}
      // @ts-ignore
      geometry={nodes.banana_high.geometry}
      material={materials.skin}
      material-emissive="orange"
    />
  )
}

export function FloatingBananas({ count, depth = 80 }: IFloatingBananas) {
  return (
    <div className="absolute w-full h-full top-0 -z-10">
      <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30 }}>
        <color attach="background" args={['#ffe085']} />
        <spotLight position={[10, 10, 10]} intensity={1.8} />
        <Suspense fallback={null}>

          {Array.from({ length: count }, (_, i) => (
            <Banana key={i} z={-(i / count) * depth - 20} />
          ))}
          <EffectComposer>
            <DepthOfField
              target={[0, 0, depth / 2]}
              focalLength={0.5}
              bokehScale={11}
              height={700}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}
