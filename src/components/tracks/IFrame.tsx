import Track from "./Track"

function IFrame({ size, trackId }: Track) {
  const BASE_URL =
    'https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/'

  return (
    <iframe
      style={{ border: '0', width: `${size}px`, height: `${size}px` }}
      src={`${BASE_URL}track=${trackId}`}
    ></iframe>
  )
}

export default IFrame