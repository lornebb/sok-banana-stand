import React from "react"
import { SvgAppleMusic } from "../icons/svg-appleMusic";
import { SvgBandcamp } from "../icons/svg-bandcamp";
import { SvgInstagram } from "../icons/svg-instagram";
import { SvgSpotify } from "../icons/svg-spotify";
import { SvgTidal } from "../icons/svg-tidal";
import { SvgYoutube } from "../icons/svg-youtube";
import { SoMeButton, SoMeList } from "./SoMeButton";

const date = new Date();
const yearToday = date.getFullYear();

export const Footer = () => {
  return (
    <footer className="grid bg-yellow-200 text-center place-content-center">
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
        <SoMeButton
          title={SoMeList.bandcamp.title}
          href={SoMeList.bandcamp.href}
        >
          <SvgBandcamp/>
        </SoMeButton>
        <SoMeButton
          title={SoMeList.spotify.title}
          href={SoMeList.spotify.href}
        >
          <SvgSpotify/>
        </SoMeButton>
        <SoMeButton
          title={SoMeList.youtube.title}
          href={SoMeList.youtube.href}
        >
          <SvgYoutube/>
        </SoMeButton>
        <SoMeButton
          title={SoMeList.appleMusic.title}
          href={SoMeList.appleMusic.href}
        >
          <SvgAppleMusic/>
        </SoMeButton>
        <SoMeButton
          title={SoMeList.instagram.title}
          href={SoMeList.instagram.href}
        >
          <SvgInstagram/>
        </SoMeButton>
        <SoMeButton
          title={SoMeList.tidal.title}
          href={SoMeList.tidal.href}
        >
          <SvgTidal/>
        </SoMeButton>
      </div>
      <div className="text-yellow-900 text-center p-4 italic">
        <p>
          ©{yearToday} <a className="" href="/">SoK</a>
        </p>
      </div>
    </footer>
  )
};
