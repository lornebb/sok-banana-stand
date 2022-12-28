import { useProgress } from '@react-three/drei'
import { FloatingBananas } from './components/FloatingBananas'
import { Footer } from './components/Footer'
import { HeroImg } from './components/HeroImg'
import { Tracks } from './components/tracks/Tracks'
import { Wipe } from './components/Wipe'

import { useEffect, useState } from 'react'

export const App = () => {
  const [shrink, setShrink] = useState(false)
  const { progress } = useProgress()

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.pageYOffset >= 200)
    }
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="grid place-content-center bg-transparent min-h-screen relative">
        <div className={`flex justify-center sticky h-screen  ${shrink ? ' top-0 w-44 mx-auto items-start' : 'items-center'}`}>
          <HeroImg />
        </div>
        <Wipe />
        {progress === 100 && (
          <>
            <Tracks />
            {/* <Tracks /> */}
            <Footer />
          </>
        )}
        <div className="absolute w-full h-full top-0 -z-10">
          <FloatingBananas count={100} />
        </div>
      </div>
    </>
  )
}
