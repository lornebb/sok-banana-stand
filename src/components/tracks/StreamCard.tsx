import { Service, StreamingIds } from "../../data/streamingData";

const logo: Record<Exclude<Service, "bandcamp">, { label: string; color: string }> = {
  spotify: { label: "Spotify", color: "#1db954" },
  apple: { label: "Apple Music", color: "#fa243c" },
};

const StreamCard = ({
  size,
  service,
  ids,
  href,
}: {
  size: number;
  service: Exclude<Service, "bandcamp">;
  ids: StreamingIds;
  href: string;
}) => (
  <a
    href={href}
    target='_blank'
    rel='noreferrer'
    aria-label={`${ids.title} on ${logo[service].label}`}
    className='group relative block overflow-hidden bg-neutral-900'
    style={{ width: `${size}px`, height: `${size}px` }}
  >
    <img
      src={ids.art}
      alt=''
      loading='lazy'
      className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
    />
    <div className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10'>
      <span className='font-semibold leading-tight text-white'>{ids.title}</span>
      <span
        className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-transform group-hover:scale-110'
        style={{ background: logo[service].color }}
      >
        ▶
      </span>
    </div>
    <span className='absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-xs font-semibold text-white'>
      {logo[service].label}
    </span>
  </a>
);

export default StreamCard;
