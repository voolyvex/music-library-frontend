import React from "react";

const SongPresenter = ({ song }) => {
    const {title, artist, album, release_date, genre} = song
    return (
            <tr>
                <td>{title}</td>
                <td>{artist}</td>
                <td>{album}</td>
                <td>{release_date}</td>
                <td>{genre}</td>
            </tr>
    );
};

export default SongPresenter;