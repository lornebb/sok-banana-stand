import Album from "./Album";

function iFrameAlbum({ size, albumId }: Album) {
  const BASE_URL = `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/`;

  return (
    <iframe
      style={{ border: "0", width: `${size}px`, height: `${size}px` }}
      seamless
      src={`${BASE_URL}`}
    ></iframe>
  );
}

export default iFrameAlbum;
