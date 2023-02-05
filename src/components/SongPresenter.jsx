import React from "react";

const SongPresenter = ({ song }) => {
    const {title, artist, album, release_date, genre} = song
    return (
        <li>
            <h2>{title}</h2>
            <p>Title: {title}</p>
            <p>Artist: {artist}</p>
            <p>Album: {album}</p>
            <p>Title: {release_date}</p>
            <p>Genre: {genre}</p>
        </li>
    );
};

export default SongPresenter;