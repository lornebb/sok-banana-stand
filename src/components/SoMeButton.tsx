import React from "react"
import { SvgTypes } from "../icons/types";

interface ISoMeButton {
  href: string,
  title: string,
  icon: any,
}

// SvgTypes | JSX.Element | JSX.Element[],
// children?: JSX.Element | JSX.Element[],
// SVGElement

// export interface ISoMeList {
//   bandcamp: {
//     title: string,
//     href: string
//   },
//   spotify: {
//     title: string,
//     href: string
//   },
//   appleMusic: {
//     title: string,
//     href: string
//   },
//   youtube: {
//     title: string,
//     href: string
//   },
//   instagram: {
//     title: string,
//     href: string
//   },
//   tidal: {
//     title: string,
//     href: string
//   },
// }

export const SoMeButton = ({href, title, icon}: ISoMeButton) => {
  return (
    <>
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
          px-3
          py-2.5
          text-center
          inline-flex
          items-center
          gap-2
          "
      >
        <>
          {icon}
          <p className="hidden md:inline-block">
            {title}
          </p>
        </>
      </a>
    </>
  )
};
