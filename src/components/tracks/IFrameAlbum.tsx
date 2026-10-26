import { streaming } from "../../data/streamingData";
import { useStreaming } from "../../hooks/streamingService";
import Album from "./Album";
import Frame from "./Frame";

function iFrameAlbum({ size, albumId }: Album) {
  const { service } = useStreaming();
  const apple = streaming[albumId]?.apple;
  const style = { border: "0", width: `${size}px`, height: `${size}px` };

  if (service === "apple" && apple) {
    return (
      <Frame size={size} background='#f2f2f2'>
        <iframe
          style={style}
          allow='autoplay *; encrypted-media *; fullscreen *'
          loading='lazy'
          src={`https://embed.music.apple.com/us/album/_/${apple.album}`}
        ></iframe>
      </Frame>
    );
  }

  const BASE_URL = `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/`;

  return <iframe style={style} seamless src={`${BASE_URL}`}></iframe>;
}

export default iFrameAlbum;
