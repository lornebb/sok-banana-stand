import React from "react"
import FloatingBananas from './components/FloatingBananas'
import { SoMeButton } from "./components/SoMeButton"
import { SvgBandcamp } from "./icons/svg-bandcamp"
import { SvgSpotify } from "./icons/svg-spotify"
import { SvgYoutube } from "./icons/svg-youtube"
import { SvgAppleMusic } from "./icons/svg-appleMusic"
import { SvgInstagram } from "./icons/svg-instagram"
import { HeroImg } from "./components/HeroImg"

export const App = () => {
  return (
    <>
      <HeroImg />
      <main className="grid place-content-center bg-yellow-200 min-h-screen">
        <div className="flex gap-3 mt-4 grid grid-flow-col grid-rows-6 md:grid-rows-1 lg:grid-rows-1">
          <SoMeButton
            href="https://sonofkong.bandcamp.com/"
            title="BandCamp"
          >
            <SvgBandcamp/>
          </SoMeButton>
          <SoMeButton
            href="https://open.spotify.com/artist/14tfZFUIaavTfIOyqBP9Mp"
            title="Spotify"
          >
            <SvgSpotify/>
          </SoMeButton>
          <SoMeButton
            href="https://www.youtube.com/channel/UCY5pevqMn98aQClj2TBWkoQ"
            title="Youtube"
          >
            <SvgYoutube/>
          </SoMeButton>
          <SoMeButton
            href="https://music.apple.com/artist/son-of-kong/1049109342"
            title="Apple Music"
          >
            <SvgAppleMusic
            />
          </SoMeButton>
          <SoMeButton
            href="https://instagram.com/sonofkong_?igshid=YmMyMTA2M2Y="
            title="Instagram"
          >
            <SvgInstagram/>
          </SoMeButton>
        </div>
        <div className="absolute w-full h-full top-0 -z-10">
          <FloatingBananas count={100}/>
        </div>
      </main>
    </>
  )
}
