import { Service } from "../data/streamingData";
import { useStreaming } from "../hooks/streamingService";

const options: { id: Service; label: string }[] = [
  { id: "bandcamp", label: "Bandcamp" },
  { id: "spotify", label: "Spotify" },
  { id: "apple", label: "Apple Music" },
];

export const ServiceToggle = () => {
  const { service, setService } = useStreaming();

  return (
    <div
      role='group'
      aria-label='Music service'
      className='fixed top-3 left-1/2 -translate-x-1/2 z-50 flex gap-1 rounded-full bg-neutral-800/90 p-1 shadow-lg backdrop-blur'
    >
      {options.map((o) => (
        <button
          key={o.id}
          onClick={() => setService(o.id)}
          aria-pressed={service === o.id}
          className={`rounded-full px-3 py-1 text-sm font-semibold transition-colors ${
            service === o.id
              ? "bg-yellow-400 text-neutral-900"
              : "text-yellow-50 hover:text-yellow-300"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
};
