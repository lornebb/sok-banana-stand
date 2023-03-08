// import React, { useState, useEffect } from "react";

// function BandcampSongs() {
//   const [songs, setSongs] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(
//         `https://api.bandcamp.com/api/band/3/discography?key=${YOUR_API_KEY}`
//       );
//       const data = await response.json();
//       setSongs(data.discography);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>My Bandcamp Songs</h1>
//       <ul>
//         {songs.map((song) => (
//           <li key={song.track_id}>
//             <a href={song.url}>{song.title}</a>
//             <iframe
//               title={song.title}
//               width='100%'
//               height='120'
//               scrolling='no'
//               frameBorder='no'
//               src={song.embed_code}
//             ></iframe>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BandcampSongs;
