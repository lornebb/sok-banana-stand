// Spotify / Apple Music ids keyed by the Bandcamp id used in trackData.
// Anything missing here falls back to the Bandcamp player.
export type Service = "bandcamp" | "spotify" | "apple";

export type StreamingIds = {
  title: string;
  art: string;
  spotify?: string;
  apple?: { album: string; track?: string };
};

export const streaming: Record<string, StreamingIds> = {
  // tracks
  "2171418411": { title: "Let That Monkey Go (Le Ballade De Freddie Scaramouche)", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/11/fa/9d/11fa9d3a-71ac-df6f-537a-932066d02bbf/859738152112_cover.jpg/600x600bb.jpg", spotify: "2HUPb5FNJNxnVIqvBcOWcY", apple: { album: "6769725448", track: "6769725455" } },
  "1848517437": { title: "The New Rock and Roll", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/1f/a0/97/1fa097e6-b2ce-afc7-7b48-d8abb3b399a6/859743510655_cover.jpg/600x600bb.jpg", spotify: "2n3gtubVIwaZzTxuH9nUBi", apple: { album: "1539382640", track: "1539382646" } },
  "2587741727": { title: "Likey Likey", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/1f/a0/97/1fa097e6-b2ce-afc7-7b48-d8abb3b399a6/859743510655_cover.jpg/600x600bb.jpg", spotify: "1BhPtMGGkDZenDkGg8bIM0", apple: { album: "1539382640", track: "1539382652" } },
  "2036553205": { title: "Rise Up", art: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/27/79/8c/27798c4b-3de4-8f1c-5fb5-438623060409/859738709514_cover.jpg/600x600bb.jpg", spotify: "592SZo3LTKcbAmWKyBIpIS", apple: { album: "1509452927", track: "1509453068" } },
  "171503560": { title: "That's Tasty", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/bc/72/fc/bc72fca2-4ceb-7082-77ed-e59706339ced/859770815112_cover.jpg/600x600bb.jpg", spotify: "6KajDzjWcF2XZGugwTAPUO", apple: { album: "1673140656", track: "1673140663" } },
  "3545714909": { title: "Kong Drop", art: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/8c/cd/aa/8ccdaaee-1cc2-eed4-cecf-4d2aa5cad835/859735551338_cover.jpg/600x600bb.jpg", spotify: "54jI25UPiJRA5RuzAY7XxM", apple: { album: "1486545747", track: "1486545975" } },
  "2726046130": { title: "WTF", art: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/0a/b1/10/0ab11099-413c-fc7d-a38e-6985f016c614/859734677602_cover.jpg/600x600bb.jpg", spotify: "65b65aZO8SOrGCLohi4WUw", apple: { album: "1480088522", track: "1480088526" } },
  "2520571840": { title: "Tell Me Daddy", art: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/6f/1e/70/6f1e70b9-50f8-2660-d8fa-13c82de9fcd4/859729866608_cover.jpg/600x600bb.jpg", spotify: "6QB2wphpMbKqXXDdFxjmWQ", apple: { album: "1445768155", track: "1445768156" } },
  "1563626637": { title: "All I Wanna Do", art: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/fb/20/e6/fb20e6d1-5246-bab2-cf77-46a45ee02322/859727689940_cover.jpg/600x600bb.jpg", spotify: "6eOnqRpgtj09BBRwjWhHDH", apple: { album: "1413124073", track: "1413124078" } },
  "3855208459": { title: "Work It Move It Make It", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/19/a3/91/19a39186-16f2-3545-4df6-5bb8e86538ba/859727689827_cover.jpg/600x600bb.jpg", spotify: "3O62vCDocNohJMb4cfwy8H", apple: { album: "1412995349", track: "1412995700" } },
  "359552405": { title: "Leroy Jenkins (Jump & Twist)", art: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/a3/a0/dc/a3a0dc7a-9f57-a8f2-e22d-507739dc6e90/859725860686_cover.jpg/600x600bb.jpg", spotify: "3mlUw4Ytlz2SMMgC2tVY9Q", apple: { album: "1361346185", track: "1361347448" } },
  "447342307": { title: "Mangoes Bananas", art: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/3b/fc/74/3bfc74a3-cd84-4889-2fb4-a37f271fc52b/859725339540_cover.jpg/600x600bb.jpg", spotify: "4A73l3yPbskIwJTOvzXH4F", apple: { album: "1348563397", track: "1348563642" } },
  "3974639248": { title: "Ju Ju Magik", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d6/bc/85/d6bc85b2-3c1c-6762-0854-b189b849d508/5054960163843_cover.jpg/600x600bb.jpg", spotify: "7zqVu2nSIB6Jb4O9bu711P", apple: { album: "1166170879", track: "1166171129" } },
  "743691718": { title: "Club Tropigwana", art: "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/3c/b9/24/3cb924cf-e221-501a-c161-0b79949b0d03/cover.jpg/600x600bb.jpg", spotify: "0U9KenS6MxLrZtOyL8ncsS", apple: { album: "1049109338", track: "1049109345" } },
  // albums
  "1202973041": { title: "Early Mid Thirties", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/be/79/e7/be79e7f5-f179-9346-5a47-b923b1341629/859773087349_cover.jpg/600x600bb.jpg", spotify: "4O2N0Kfv3OEj43DjpEKvLq", apple: { album: "1684186408" } },
};
