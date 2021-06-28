import { useState, useRef } from 'react'
import Song from './components/Song'
import Player from './components/Player'
import data from './utils/data'
import Library from './components/Library'

function App() {
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime
        const duration = e.target.duration
        setSongInfo({
            ...songInfo,
            currentTime: current,
            duration,
        })
    }

    return (
        <div>
            <Song currentSong={currentSong} />
            <Player
                currentSong={currentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                audioRef={audioRef}
                setSongInfo={setSongInfo}
                songInfo={songInfo}
            />
            <Library
                songs={songs}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
            />
            <audio
                src={currentSong.audio}
                ref={audioRef}
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
            ></audio>
        </div>
    )
}

export default App
