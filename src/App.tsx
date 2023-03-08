import { useProgress } from "@react-three/drei";
import { FloatingBananas } from "./components/FloatingBananas";
import { Footer } from "./components/Footer";
import { HeroImg } from "./components/HeroImg";
import { Tracks } from "./components/tracks/Tracks";
import { Wipe } from "./components/Wipe";

export type TrackData = {
  title: string;
  id: string;
};

// TODO
// put track data somewhere else?
const tracks2020: TrackData[] = [
  { title: "The New Rock and Roll", id: "1848517437" },
  { title: "Likey Likey", id: "2587741727" },
  { title: "Rise Up", id: "2036553205" },
  { title: "That's Tasty", id: "171503560" },
];

const tracks2019: TrackData[] = [
  { title: "Kong Drop", id: "3545714909" },
  { title: "WTF", id: "2726046130" },
];

const tracks2018: TrackData[] = [
  { title: "Tell Me Daddy", id: "2520571840" },
  { title: "All I Wanna Do", id: "1563626637" },
  { title: "Work It Move It Make It", id: "3855208459" },
  { title: "Leroy Jenkins (Jump & Twist)", id: "359552405" },
  { title: "Mangoes Bananas", id: "447342307" },
];

const tracks2016: TrackData[] = [
  { title: "Never Ever Land", id: "3974639248" },
  { title: "Ju Ju Magik", id: "3974639248" },
];

const tracks2015: TrackData[] = [
  { title: "Club Tropigwana", id: "743691718" },
  { title: "Remember Me", id: "3008176448" },
  { title: "Get Up", id: "4132457639" },
];

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
