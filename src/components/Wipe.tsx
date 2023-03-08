import { useProgress } from '@react-three/drei'

export const Wipe = () => {
  const { progress } = useProgress()

  return (
    <div
      className="wipe absolute w-screen h-screen bg-gray-900"
      transition-style={`${progress === 100 ? 'out:circle:center' : ''}`}
    >
      <h1
        className={`text-white grid justify-center items-center h-full ${
          progress >= 90 ? 'hidden' : ''
        }`}
      >
        preparing bananas...
      </h1>
    </div>
  )
}
