import { useProgress } from '@react-three/drei'
import { FloatingBananas } from './components/FloatingBananas'
import { Footer } from './components/Footer'
import { HeroImg } from './components/HeroImg'
import { Tracks } from './components/tracks/Tracks'
import { Wipe } from './components/Wipe'

export type TrackData = {
  title: string,
  id: string
}


// put track data somewhere else?
const tracks2021: TrackData[] = [
  { title: 'Never Ever Land', id: '614336722' },
  { title: 'Get Up', id: '4132457639' },
  { title: 'Club Tropigwana', id: '743691718' },
  { title: 'Remember Me', id: '3008176448' },
  { title: 'Never Ever Land', id: '3974639248' },
]

const tracks2022: TrackData[] = [
  { title: 'Never Ever Land', id: '614336722' },
  { title: 'Get Up', id: '4132457639' },
  { title: 'Club Tropigwana', id: '743691718' },
  { title: 'Remember Me', id: '3008176448' },
  { title: 'Never Ever Land', id: '3974639248' },
]

export const App = () => {
  const { progress } = useProgress()

  return (
    <>
      <div className="flex flex-col bg-transparent min-h-screen relative">
        <HeroImg />
        <Wipe />

        {/* page content drops in only after 3d loading completes */}
        {progress === 100 && (
          <div className="flex flex-col space-y-10">
            <Tracks tracks={tracks2022} />
            <Tracks tracks={tracks2021} />
            <Footer />
          </div>
        )}
        <FloatingBananas count={100} />
      </div>
    </>
  )
}
