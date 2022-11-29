import React from "react"
import { FloatingBananas } from "./components/FloatingBananas"
import { Footer } from "./components/Footer"
import { HeroImg } from "./components/HeroImg"

export const App = () => {
  return (
    <>
      <main className="grid place-content-center bg-transparent min-h-screen relative">
      <HeroImg />
      <Footer />
      <div className="absolute w-full h-full top-0 -z-10">
        <FloatingBananas count={100}/>
      </div>
      </main>
    </>
  )
}
