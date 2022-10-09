import React from "react"
import {SoMeIcon} from "./SoMeIcon"

interface ISoMeButton {
  href: string,
  title: string,
  icon: React.FC,
}

export const SoMeButton = ({href, title}: ISoMeButton) => {

  return (
  <a
    // href="https://sonofkong.bandcamp.com/"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    type="button"
    className="text-yellow-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50"
  >
    <SoMeIcon />
    <text>
      {title}
    </text>
  </a>
  )
}