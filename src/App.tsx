import React from "react"
import { SoMeButton } from "./components/SoMeButton"

export const App = () => {
  return (
    <main className="grid place-content-center  bg-yellow-200 min-h-screen">
      <h1 className="font-sans font-bold text-yellow-500 text-9xl text-center">
        sok
      </h1>
      <div className="flex gap-3 mt-4">
        <SoMeButton
          href="https://sonofkong.bandcamp.com/"
          title="BandCamp"
        />
        <SoMeButton
          href="https://open.spotify.com/artist/14tfZFUIaavTfIOyqBP9Mp"
          title="Spotify"
        />
        <SoMeButton
          href="https://www.youtube.com/channel/UCY5pevqMn98aQClj2TBWkoQ"
          title="YouTube"
        />
      </div>
    </main>
  )
}
