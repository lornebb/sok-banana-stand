import Track from './Track'

export const Tracks = () => {
  // 170 to 700 range for the size

  const tracks = [
    { title: 'Never Ever Land', id: '614336722' },
    { title: 'Get Up', id: '4132457639' },
    { title: 'Club Tropigwana', id: '743691718' },
    { title: 'Remember Me', id: '3008176448' },
    { title: 'Never Ever Land', id: '3974639248' },
  ]

  return (
    <div className="w-11/12 my-0 mx-auto max-w-7xl overflow-hidden" >
      <div className="flex gap-4 overflow-scroll py-6">
        {tracks.map((track) => (
          <Track size="300" trackId={track.id} />
        ))}
      </div>
    </div>
  )
}


