import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlay,
    faAngleLeft,
    faAngleRight,
} from '@fortawesome/free-solid-svg-icons'

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    const audioRef = useRef(null)
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null,
    })

    // Event handlers
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

    const getTime = (time) => {
        return (
            Math.floor(time / 60) +
            ':' +
            ('0' + Math.floor(time % 60)).slice(-2)
        )
    }
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
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    className="skip-back"
                    icon={faAngleLeft}
                    size="2x"
                />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="play"
                    icon={faPlay}
                    size="2x"
                />
                <FontAwesomeIcon
                    className="skip-forward"
                    icon={faAngleRight}
                    size="2x"
                />
            </div>
            <audio
                src={currentSong.audio}
                ref={audioRef}
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
            ></audio>
        </div>
    )
}

export default Player
