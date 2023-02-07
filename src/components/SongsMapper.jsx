import React from "react";
import SongPresenter from "./SongPresenter";

const SongsMapper = ({ songs, userInput }) => {
    return (
        <table>
            <colgroup span="5"></colgroup>
            <tbody>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
            </tbody>
            {songs
                .filter(song => 
                    (song.title.toLowerCase().includes(userInput.toLowerCase())) || 
                    (song.artist.toLowerCase().includes(userInput.toLowerCase())) ||
                    (song.genre.toLowerCase().includes(userInput.toLowerCase())) ||
                    (song.album.toLowerCase().includes(userInput.toLowerCase())) ||
                    (song.release_date.toString().includes(userInput.toString())))
                .map(song => <SongPresenter key={song.id} song={song} />)}
        </table>
    );
}

export default SongsMapper;