import { useState } from 'react'
import Song from './components/Song'
import Player from './components/Player'
import data from './utils/data'

function App() {
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])

    return (
        <div>
            <Song currentSong={currentSong} />
            <Player />
        </div>
    )
}

export default App
