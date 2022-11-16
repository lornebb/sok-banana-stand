import { Environment, useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'

type IBanana = {
  z: number,
  key: number,
}

type IFloatingBananas = {
  count: number,
  depth: number,
}

export function Banana({ z }:IBanana ) {
  const ref = useRef()

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
    ref.current.rotation.set((data.rX += 0.001), (data.rY += 0.001), (data.rZ += 0.001))
    ref.current.position.set(data.x * width, (data.y += 0.03), z)
    if (data.y > height) {
      data.y = -height
    }
  })

  return (
    <mesh
      ref={ref}
      geometry={nodes.banana_high.geometry}
      material={materials.skin}
      material-emissive="orange"
    />
  )
}

function FloatingBananas({ count, depth = 80 }: IFloatingBananas) {
  return (
    <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30 }}>
      <color attach='background' args={['#ffe085']}/>
      <spotLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        {Array.from({ length: count }, (_, i) => (
          <Banana key={i} z={-(i / count) * depth - 20} />
          ))}
        <EffectComposer>
          <DepthOfField target={[0,0,depth / 2]} focalLength={0.5} bokehScale={11} height={700}/>
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}

export default FloatingBananas