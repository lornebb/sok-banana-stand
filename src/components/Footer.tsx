import { SoMeButton } from "./SoMeButton";

import {
  SiApplemusic,
  SiBandcamp,
  SiInstagram,
  SiSpotify,
  SiTidal,
  SiYoutube,
} from "react-icons/si";

const date = new Date();
const yearToday = date.getFullYear();

const SoMeList = [
  {
    title: "BandCamp",
    href: "https://sonofkong.bandcamp.com/",
    icon: <SiBandcamp />,
  },
  {
    title: "Spotify",
    href: "https://open.spotify.com/artist/14tfZFUIaavTfIOyqBP9Mp",
    icon: <SiSpotify />,
  },
  {
    title: "AppleMusic",
    href: "https://music.apple.com/artist/son-of-kong/1049109342",
    icon: <SiApplemusic />,
  },
  {
    title: "Tidal",
    href: "https://tidal.com/browse/artist/8412421",
    icon: <SiTidal />,
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/channel/UCY5pevqMn98aQClj2TBWkoQ",
    icon: <SiYoutube />,
  },
  {
    title: "Instagram",
    href: "https://instagram.com/sonofkong_?igshid=YmMyMTA2M2Y=",
    icon: <SiInstagram />,
  },
];

const SoMeButtonMap = SoMeList.map((e, index) => {
  return <SoMeButton key={index} title={e.title} href={e.href} icon={e.icon} />;
});

export const Footer = () => {
  return (
    <footer className='grid justify-center'>
      <div
        className=' 
        flex flex-row space-x-3 
        '
      >
        {SoMeButtonMap}
      </div>
      <div className='text-yellow-900 text-center p-4 italic'>
        <p>
          ©{yearToday}{" "}
          <a className='' href='/'>
            SoK
          </a>
        </p>
      </div>
    </footer>
  );
};
