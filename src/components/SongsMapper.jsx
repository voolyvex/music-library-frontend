import React from "react";
import SongPresenter from "./SongPresenter";

const SongsMapper = ({ songs, userInput }) => {
    return (
        <ul>
            {songs
                .filter(song => song.artist.toLowerCase().includes(userInput.toLowerCase()))
                .map(song => <SongPresenter key={song.id} song={song} />)}
        </ul>
    );
}

export default SongsMapper;