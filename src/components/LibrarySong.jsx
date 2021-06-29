import { playAudio } from '../utils/playAudio'

const LibrarySong = ({
    song,
    songs,
    setCurrentSong,
    id,
    audioRef,
    isPlaying,
    setSongs,
}) => {
    const selectedSonghandler = () => {
        setCurrentSong(song)

        // add active state
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        })

        setSongs(newSongs)
        // check if the song is playing
        playAudio(isPlaying, audioRef)
    }
    return (
        <div
            className={`library-song ${song.active ? 'selected' : ''}`}
            onClick={selectedSonghandler}
        >
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3 className={song.active ? 'selected-color' : ''}>
                    {song.name}
                </h3>
                <h4 className={song.active ? 'selected-color' : ''}>
                    {song.artist}
                </h4>
            </div>
        </div>
    )
}

export default LibrarySong
