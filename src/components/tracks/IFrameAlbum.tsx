import { streaming } from "../../data/streamingData";
import { useStreaming } from "../../hooks/streamingService";
import Album from "./Album";
import StreamCard from "./StreamCard";

function iFrameAlbum({ size, albumId }: Album) {
  const { service } = useStreaming();
  const style = { border: "0", width: `${size}px`, height: `${size}px` };

  const ids = streaming[albumId];

  if (service === "spotify" && ids?.spotify) {
    return (
      <StreamCard
        size={size}
        service='spotify'
        ids={ids}
        href={`https://open.spotify.com/album/${ids.spotify}`}
      />
    );
  }

  if (service === "apple" && ids?.apple) {
    return (
      <StreamCard
        size={size}
        service='apple'
        ids={ids}
        href={`https://music.apple.com/us/album/_/${ids.apple.album}`}
      />
    );
  }

  const BASE_URL = `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/`;

  return <iframe style={style} seamless src={`${BASE_URL}`}></iframe>;
}

export default iFrameAlbum;
