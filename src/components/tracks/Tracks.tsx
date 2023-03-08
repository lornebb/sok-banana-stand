import { TrackData } from "../../data/trackData";
import Track from "./Track";

export const Tracks = ({
  tracks,
  year,
}: {
  tracks: TrackData[];
  year: number;
}) => {
  // 170 to 700 range for the size

  return (
    <>
      <div className='my-0 mx-0 overflow-hidden'>
        <div className='flex gap-4 overflow-scroll py-6 px-6 sm:px-36 hide-scrollbar'>
          <div className='font-sans proportional-nums text-2xl'>{year}</div>
          {tracks.map((track) => (
            <Track size={300} trackId={track.id} key={track.id} />
          ))}
        </div>
      </div>
    </>
  );
};
