import React from "react"
import { SoMeButton } from "./SoMeButton";
import { SvgBandcamp } from "../icons/svg-bandcamp";
import { SvgSpotify } from "../icons/svg-spotify";
import { SvgAppleMusic } from "../icons/svg-appleMusic";
import { SvgInstagram } from "../icons/svg-instagram";
import { SvgTidal } from "../icons/svg-tidal";
import { SvgYoutube } from "../icons/svg-youtube";

const date = new Date();
const yearToday = date.getFullYear();

const SoMeList = [
  { title: "BandCamp", href: "https://sonofkong.bandcamp.com/", icon:{SvgBandcamp} },
  { title: "Spotify", href: "https://open.spotify.com/artist/14tfZFUIaavTfIOyqBP9Mp", icon:{SvgSpotify} },
  { title: "AppleMusic", href: "https://music.apple.com/artist/son-of-kong/1049109342", icon:{SvgAppleMusic} },
  { title: "Tidal", href: "https://tidal.com/browse/artist/8412421", icon:{SvgTidal} },
  { title: "Youtube", href: "https://www.youtube.com/channel/UCY5pevqMn98aQClj2TBWkoQ", icon:{SvgYoutube} },
  { title: "Instagram", href: "https://instagram.com/sonofkong_?igshid=YmMyMTA2M2Y=", icon:{SvgInstagram} },
]

const SoMeButtonMap = SoMeList.map((e, index) => {
  return (
    <SoMeButton key={index} title={e.title} href={e.href} />
  );
})

export const Footer = () => {

  return (
    <footer className="grid bg-gradient-to-b from-background-yellow text-center place-content-center">
      <div className=" 
        pt-3
        gap-3
        grid
        grid-flow-col
        grid-rows-6
        sm:grid-rows-2
        md:grid-rows-1
        md:grid-cols-2
        "
      >
        { SoMeButtonMap }
      </div>
      <div className="text-yellow-900 text-center p-4 italic">
        <p>
          ©{yearToday} <a className="" href="/">SoK</a>
        </p>
      </div>
    </footer>
  )
};
