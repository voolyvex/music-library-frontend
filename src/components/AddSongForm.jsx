import React, { useState } from 'react';
import axios from 'axios';
import "../index.css"


const AddSongForm = (props) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
 
    const postNewSong = async({song}) => {
        await axios.post("http://127.0.0.1:8000/api/songs/", song);
      };

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre
        };
        postNewSong(newSong);
    }

    return (
        <div className='form-container'>
            <form className='song-form' onSubmit={handleSubmit} >
                <label>Title:</label>
                <input type='title' maxLength='99' value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Artist:</label>
                <input type='artist' maxLength='99' value={artist} onChange={(e) => setArtist(e.target.value)} />
                <label>Album:</label>
                <input type='album' maxLength='99' value={album} onChange={(e) => setAlbum(e.target.value)} />
                <label>Release Date:</label>
                <input type='release_date' maxLength='10' value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
                <label>Genre:</label>
                <input type='genre' maxLength='99' value={genre} onChange={(e) => setGenre(e.target.value)} />
                <button type='submit'>Save</button>
            </form>
        </div>
    );
}

export default AddSongForm;