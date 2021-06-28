import { useState } from 'react'
import Song from './components/Song'
import Player from './components/Player'
import data from './utils/data'

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
        </div>
    )
}

export default App
