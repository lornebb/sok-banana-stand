import { useEffect, useState } from 'react'

export const HeroImg = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset >= 200)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`flex h-screen justify-center mx-auto items-center`}>
      <div
        className={`fixed max-w-xl px-4 ${scrolled ? 'transition scale-50 -top-16 mt-6 sm:mt-0' : 'scale-100 transition'}`}
      >
        <img
          className="w-full"
          src="https://ik.imagekit.io/y6pjjzivw/SoK-Banana-Stand/SOK_Banana_Logo_v8-06.png"
          alt="son of kong logo"
        />
      </div>
    </div>
  )
}
