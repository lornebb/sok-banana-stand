// Spotify / Apple Music ids keyed by the Bandcamp id used in trackData.
// Anything missing here falls back to the Bandcamp player.
export type Service = "bandcamp" | "spotify" | "apple";

export type StreamingIds = {
  spotify?: string;
  apple?: { album: string; track?: string };
};

export const streaming: Record<string, StreamingIds> = {
  // tracks
  "2171418411": { spotify: "2HUPb5FNJNxnVIqvBcOWcY", apple: { album: "6769725448", track: "6769725455" } },
  "1848517437": { spotify: "2n3gtubVIwaZzTxuH9nUBi", apple: { album: "1539382640", track: "1539382646" } },
  "2587741727": { spotify: "1BhPtMGGkDZenDkGg8bIM0", apple: { album: "1539382640", track: "1539382652" } },
  "2036553205": { spotify: "592SZo3LTKcbAmWKyBIpIS", apple: { album: "1509452927", track: "1509453068" } },
  "171503560": { spotify: "6KajDzjWcF2XZGugwTAPUO", apple: { album: "1673140656", track: "1673140663" } },
  "3545714909": { spotify: "54jI25UPiJRA5RuzAY7XxM", apple: { album: "1486545747", track: "1486545975" } },
  "2726046130": { spotify: "65b65aZO8SOrGCLohi4WUw", apple: { album: "1480088522", track: "1480088526" } },
  "2520571840": { spotify: "6QB2wphpMbKqXXDdFxjmWQ", apple: { album: "1445768155", track: "1445768156" } },
  "1563626637": { spotify: "6eOnqRpgtj09BBRwjWhHDH", apple: { album: "1413124073", track: "1413124078" } },
  "3855208459": { spotify: "3O62vCDocNohJMb4cfwy8H", apple: { album: "1412995349", track: "1412995700" } },
  "359552405": { spotify: "3mlUw4Ytlz2SMMgC2tVY9Q", apple: { album: "1361346185", track: "1361347448" } },
  "447342307": { spotify: "4A73l3yPbskIwJTOvzXH4F", apple: { album: "1348563397", track: "1348563642" } },
  "3974639248": { spotify: "7zqVu2nSIB6Jb4O9bu711P", apple: { album: "1166170879", track: "1166171129" } },
  "743691718": { spotify: "0U9KenS6MxLrZtOyL8ncsS", apple: { album: "1049109338", track: "1049109345" } },
  // albums
  "1202973041": { spotify: "4O2N0Kfv3OEj43DjpEKvLq", apple: { album: "1684186408" } },
};
