import { TrackData } from '../../App'
import Track from './Track'


export const Tracks = ({ tracks }: {tracks: TrackData[]}) => {
  // 170 to 700 range for the size

  return (
    <div className=" my-0 mx-0 overflow-hidden" >
      <div className="flex gap-4 overflow-scroll py-6 px-6 sm:px-36 hide-scrollbar">
        {tracks.map((track) => (
          <Track size={300} trackId={track.id} key={track.id}/>
        ))}
      </div>
    </div>
  )
}


