import { streaming } from "../../data/streamingData";
import { useStreaming } from "../../hooks/streamingService";
import StreamCard from "./StreamCard";
import Track from "./Track";


function iFrameTrack({ size, trackId }: Track) {
  const { service } = useStreaming();
  const ids = streaming[trackId];
  const style = { border: "0", width: `${size}px`, height: `${size}px` };

  if (service === "spotify" && ids?.spotify) {
    return (
      <StreamCard
        size={size}
        service='spotify'
        ids={ids}
        href={`https://open.spotify.com/track/${ids.spotify}`}
      />
    );
  }

  if (service === "apple" && ids?.apple?.track) {
    const { album, track } = ids.apple;
    return (
      <StreamCard
        size={size}
        service='apple'
        ids={ids}
        href={`https://music.apple.com/us/album/_/${album}?i=${track}`}
      />
    );
  }

  const BASE_URL =
    "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=333333/linkcol=e99708/minimal=true/transparent=true/";

  return (
    <iframe style={style} seamless src={`${BASE_URL}track=${trackId}`}></iframe>
  );
}

export default iFrameTrack;
