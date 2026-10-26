import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { SiApplemusic, SiBandcamp, SiSpotify } from "react-icons/si";
import { Service } from "../data/streamingData";
import { useStreaming } from "../hooks/streamingService";

const options: { id: Service; label: string; Icon: IconType }[] = [
  { id: "bandcamp", label: "Bandcamp", Icon: SiBandcamp },
  { id: "spotify", label: "Spotify", Icon: SiSpotify },
  { id: "apple", label: "Apple Music", Icon: SiApplemusic },
];

export const ServiceToggle = () => {
  const { service, setService } = useStreaming();
  const [visible, setVisible] = useState(false);

  // hidden over the landing logo; appears once the visitor scrolls into the music
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      role='group'
      aria-label='Music service'
      className={`fixed top-3 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full bg-neutral-800/90 p-1 shadow-lg backdrop-blur transition-all duration-300 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-4 opacity-0'
      }`}
    >
      {options.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={() => setService(id)}
          aria-pressed={service === id}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold transition-colors ${
            service === id
              ? "bg-yellow-400 text-neutral-900"
              : "text-yellow-50 hover:text-yellow-300"
          }`}
        >
          <Icon aria-hidden />
          {label}
        </button>
      ))}
    </div>
  );
};
