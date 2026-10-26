import { streaming } from "../../data/streamingData";
import { useStreaming } from "../../hooks/streamingService";
import Frame from "./Frame";
import Track from "./Track";

const SPOTIFY_HEIGHT = 232;
const APPLE_TRACK_HEIGHT = 175;

function iFrameTrack({ size, trackId }: Track) {
  const { service } = useStreaming();
  const ids = streaming[trackId];
  const style = { border: "0", width: `${size}px`, height: `${size}px` };

  if (service === "spotify" && ids?.spotify) {
    return (
      <Frame size={size} background="#121212">
        <iframe
          style={{ ...style, height: `${SPOTIFY_HEIGHT}px` }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          src={`https://open.spotify.com/embed/track/${ids.spotify}?theme=0`}
        ></iframe>
      </Frame>
    );
  }

  if (service === "apple" && ids?.apple?.track) {
    const { album, track } = ids.apple;
    return (
      <Frame size={size} background="#f2f2f2">
        <iframe
          style={{ ...style, height: `${APPLE_TRACK_HEIGHT}px` }}
          allow="autoplay *; encrypted-media *; fullscreen *"
          loading="lazy"
          src={`https://embed.music.apple.com/us/album/_/${album}?i=${track}`}
        ></iframe>
      </Frame>
    );
  }

  const BASE_URL =
    "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=333333/linkcol=e99708/minimal=true/transparent=true/";

  return (
    <iframe style={style} seamless src={`${BASE_URL}track=${trackId}`}></iframe>
  );
}

export default iFrameTrack;
