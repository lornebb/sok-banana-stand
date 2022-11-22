import React from "react"

interface ISoMeButton {
  href: string,
  title: string,
  children: JSX.Element | JSX.Element[],
}

export interface ISoMeList {
  bandcamp: {
    title: string,
    href: string
  },
  spotify: {
    title: string,
    href: string
  },
  appleMusic: {
    title: string,
    href: string
  },
  youtube: {
    title: string,
    href: string
  },
  instagram: {
    title: string,
    href: string
  },
  tidal: {
    title: string,
    href: string
  },
}

export const SoMeList:ISoMeList = {
  bandcamp: { title: "BandCamp", href: "https://sonofkong.bandcamp.com/" },
  spotify: { title: "Spotify", href: "https://open.spotify.com/artist/14tfZFUIaavTfIOyqBP9Mp" },
  appleMusic: { title: "AppleMusic", href: "https://music.apple.com/artist/son-of-kong/1049109342" },
  tidal: { title: "Tidal", href: "https://tidal.com/browse/artist/8412421" },
  youtube: { title: "Youtube", href: "https://www.youtube.com/channel/UCY5pevqMn98aQClj2TBWkoQ" },
  instagram: { title: "Instagram", href: "https://instagram.com/sonofkong_?igshid=YmMyMTA2M2Y=" },
}

export const SoMeButton = ({href, title, children}: ISoMeButton) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      type="button"
      className="
        text-yellow-900
        bg-[#F7BE38]
        hover:bg-[#F7BE38]/90
        dark:focus:ring-[#F7BE38]/50
        focus:ring-[#F7BE38]/50
        focus:ring-4
        focus:outline-none
        font-medium rounded-lg
        text-sm
        px-5
        py-2.5
        text-center
        inline-flex
        items-center
        "
    >
    {children}
    <p>
      {title}
    </p>
  </a>
  )
};
