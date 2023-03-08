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
    <div className='m-4 justify-center'>
      <div className='font-joeseph opacity-60 text-4xl justify-end'>{year}</div>
      <div className='my-0 mx-0 overflow-hidden flex justify-center'>
        <div className='flex gap-4 overflow-scroll py-6 px-6 sm:px-36 hide-scrollbar'>
          {tracks.map((track) => (
            <Track size={300} trackId={track.id} key={track.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
