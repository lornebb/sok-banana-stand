import { streaming } from "../../data/streamingData";
import { useStreaming } from "../../hooks/streamingService";
import Track from "./Track";

function iFrameTrack({ size, trackId }: Track) {
  const { service } = useStreaming();
  const ids = streaming[trackId];
  const style = { border: "0", width: `${size}px`, height: `${size}px` };

  if (service === "spotify" && ids?.spotify) {
    return (
      <iframe
        style={style}
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
        src={`https://open.spotify.com/embed/track/${ids.spotify}?theme=0`}
      ></iframe>
    );
  }

  if (service === "apple" && ids?.apple?.track) {
    const { album, track } = ids.apple;
    return (
      <iframe
        style={style}
        allow='autoplay *; encrypted-media *; fullscreen *'
        loading='lazy'
        src={`https://embed.music.apple.com/us/album/_/${album}?i=${track}`}
      ></iframe>
    );
  }

  const BASE_URL =
    "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=333333/linkcol=e99708/minimal=true/transparent=true/";

  return (
    <iframe style={style} seamless src={`${BASE_URL}track=${trackId}`}></iframe>
  );
}

export default iFrameTrack;
