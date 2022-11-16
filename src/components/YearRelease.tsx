import React, { FC } from "react";

interface IYearRelease {
  year: number,
  tracks: JSX.Element | JSX.Element[],
}

export const YearRelease = ({year, tracks}: IYearRelease) => {
  return (
    <div>
      <div className="flex place-content-center">
        <h2>
          {year}
        </h2>
      </div>
      <div className="flex place-content-center grid-rows-1 gap-4">
        {tracks}
      </div>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  )
}
