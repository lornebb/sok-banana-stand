import React from "react"
import { SoMeButton, SoMeList, ISoMeList } from "./components/SoMeButton"
import { SvgBandcamp } from "./icons/svg-bandcamp"
import { SvgSpotify } from "./icons/svg-spotify"
import { SvgYoutube } from "./icons/svg-youtube"
import { SvgAppleMusic } from "./icons/svg-appleMusic"
import { SvgInstagram } from "./icons/svg-instagram"
import { Footer } from "./components/Footer"

export const App = () => {
  return (
    <>
    <main className="grid place-content-center bg-yellow-200 min-h-screen">
      <h1 className="font-sans font-bold text-yellow-500 text-9xl text-center">
        sok
      </h1>
    </main>
    <Footer />
    </>
  )
}
