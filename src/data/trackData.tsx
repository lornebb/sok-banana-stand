export type TrackData = {
  title: string;
  id: string;
};

export type AlbumData = {
  title: string;
  id: string;
};

export type EmbedData =
  | { kind: "soundcloud"; title: string; url: string }
  | { kind: "youtube"; title: string; videoId: string };

export const embeds2026: EmbedData[] = [
  { kind: "youtube", title: "Son of Kong video", videoId: "PcnZuuUrqjk" },
];

export const embeds2024: EmbedData[] = [
  {
    kind: "soundcloud",
    title: "Live at Fieldview Festival 2024",
    url: "https://soundcloud.com/sonofkongcrew/live-at-fieldview-festival-2024",
  },
];

export const albums2023: AlbumData[] = [
  { title: "Early Mid Thirties", id: "1202973041" },
];

export const tracks2026: TrackData[] = [
  { title: "Let That Monkey Go (Le Ballade De Freddie Scaramouche)", id: "2171418411" },
];

export const tracks2020: TrackData[] = [
  { title: "The New Rock and Roll", id: "1848517437" },
  { title: "Likey Likey", id: "2587741727" },
  { title: "Rise Up", id: "2036553205" },
  { title: "That's Tasty", id: "171503560" },
];

export const tracks2019: TrackData[] = [
  { title: "Kong Drop", id: "3545714909" },
  { title: "WTF", id: "2726046130" },
];

export const tracks2018: TrackData[] = [
  { title: "Tell Me Daddy", id: "2520571840" },
  { title: "All I Wanna Do", id: "1563626637" },
  { title: "Work It Move It Make It", id: "3855208459" },
  { title: "Leroy Jenkins (Jump & Twist)", id: "359552405" },
  { title: "Mangoes Bananas", id: "447342307" },
];

export const tracks2016: TrackData[] = [
  { title: "Never Ever Land", id: "614336722" },
  { title: "Ju Ju Magik", id: "3974639248" },
];

export const tracks2015: TrackData[] = [
  { title: "Club Tropigwana", id: "743691718" },
];
