import React, { useState, useEffect } from "react";
import axios from "axios";
import SongsMapper from "./components/SongsMapper";
import SearchBar from "./components/SearchBar";
import AddSongForm from "./components/AddSongForm";

const App = () => {
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "La Vie en rose",
      artist: "Edith Piaf",
      album: "Chansons Parisiennes",
      release_date: "1947-01-01",
      genre: "Traditional Pop",
    },
  ]);

  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    getAllSongs();
  }, []);

  //   const getAllSongs = async () => {
  //   await axios
  //   .get("http://127.0.0.1:8000/api/songs/")
  //   .then((resp) => setSongs(resp.data));
  // };
  async function getAllSongs() {
    const response = await axios.get(`http://127.0.0.1:8000/api/songs/`);
    setSongs(response.data);
    setUserInput("");
  }

  const postNewSong = async (songObject) => {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/songs/",
      songObject
    );
    console.log(response);
    getAllSongs();
  };

  return (
    <div className="background">
      <div className="main-content">
        <h1>React Music Library 🎵</h1>
        <div className="navish">
          <button className="refresh-button" onClick={() => getAllSongs()}>Refresh</button>
          <SearchBar className="searchbar" userInput={userInput} setUserInput={setUserInput} />
        </div>
        <div className="forms">
          <SongsMapper className="box" songs={songs} userInput={userInput} />
          <AddSongForm className="box" postNewSong={postNewSong} />
        </div>
      </div>
    </div>
  );
};

export default App;
