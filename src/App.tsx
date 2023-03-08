import { useProgress } from "@react-three/drei";
import { FloatingBananas } from "./components/FloatingBananas";
import { Footer } from "./components/Footer";
import { HeroImg } from "./components/HeroImg";
import { Tracks } from "./components/tracks/Tracks";
import { Wipe } from "./components/Wipe";
import {
  tracks2015,
  tracks2016,
  tracks2018,
  tracks2019,
  tracks2020,
} from "./data/trackData";

export const App = () => {
  const { progress } = useProgress();

  return (
    <>
      <div className='flex flex-col bg-transparent min-h-screen relative'>
        <HeroImg />
        <Wipe />

        {/* page content drops in only after 3d loading completes */}

        {progress === 100 && (
          <div className='flex flex-col space-y-10'>
            <Tracks year={2020} tracks={tracks2020} />
            <Tracks year={2019} tracks={tracks2019} />
            <Tracks year={2018} tracks={tracks2018} />
            <Tracks year={2016} tracks={tracks2016} />
            <Tracks year={2015} tracks={tracks2015} />
            <Footer />
          </div>
        )}
        <FloatingBananas count={100} />
      </div>
    </>
  );
};
