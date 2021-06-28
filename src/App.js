import { useState } from 'react'
import Song from './components/Song'
import Player from './components/Player'
import data from './utils/data'
import Library from './components/Library'

function App() {
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div>
            <Song currentSong={currentSong} />
            <Player
                currentSong={currentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
            <Library songs={songs} />
        </div>
    )
}

export default App
