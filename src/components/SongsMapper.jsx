import React from "react";
import SongPresenter from "./SongPresenter";

const SongsMapper = ({ songs, userInput }) => {
    return (
        <table>
            <colgroup span="5"></colgroup>
            <tbody>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Album</th>
                    <th scope="col">Release Date</th>
                    <th scope="col">Genre</th>
                </tr>
                {songs
                    .filter(song =>
                        (song.title.toLowerCase().includes(userInput.toLowerCase())) ||
                        (song.artist.toLowerCase().includes(userInput.toLowerCase())) ||
                        (song.genre.toLowerCase().includes(userInput.toLowerCase())) ||
                        (song.album.toLowerCase().includes(userInput.toLowerCase())) ||
                        (song.release_date.toString().includes(userInput.toString())))
                    .map(song => <SongPresenter key={song.id} song={song} />)}
            </tbody>
        </table>
    );
}

export default SongsMapper;