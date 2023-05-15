import { TrackData } from "../../data/trackData";
import Album from "./Album";

export const Albums = ({
  tracks,
  year,
}: {
  tracks: TrackData[];
  year: number;
}) => {
  // 170 to 700 range for the size

  return (
    <>
      <div className='my-0 mx-0 overflow-hidden relative'>
        <div className='flex gap-4 overflow-scroll pt-11 pb-3 px-6 sm:px-36 hide-scrollbar'>
          <div className='font-joeseph opacity-60 text-4xl absolute top-1'>
            {year}
          </div>

          {tracks.map((track) => (
            <Album size={300} albumId={track.id} key={track.id} />
          ))}
        </div>
      </div>
    </>
  );
};
