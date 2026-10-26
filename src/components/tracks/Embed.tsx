import { EmbedData } from "../../data/trackData";

const SOUNDCLOUD_BASE = "https://w.soundcloud.com/player/";

const Embed = ({ size, embed }: { size: number; embed: EmbedData }) => {
  if (embed.kind === "soundcloud") {
    const params = new URLSearchParams({
      url: embed.url,
      color: "#e99708",
      visual: "true",
      show_comments: "false",
      show_user: "false",
    });
    return (
      <article className='bg-yellow-50 flex flex-col justify-between'>
        <iframe
          title={embed.title}
          style={{ border: "0", width: `${size}px`, height: `${size}px` }}
          allow='autoplay'
          loading='lazy'
          src={`${SOUNDCLOUD_BASE}?${params}`}
        ></iframe>
      </article>
    );
  }

  // 16:9 video letterboxed inside the same square box as the tracks
  return (
    <article
      className='bg-black flex items-center shrink-0'
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <iframe
        title={embed.title}
        style={{ border: "0", width: "100%", aspectRatio: "16 / 9" }}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        loading='lazy'
        src={`https://www.youtube-nocookie.com/embed/${embed.videoId}`}
      ></iframe>
    </article>
  );
};

export default Embed;
