import React, { useState } from "react";
import axios from "axios";
import SongsMapper from "./components/SongsMapper";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [songs, setSongs] = useState([
    // {
    //   id: 1,
    //   title: "Pain Makes You Better!",
    //   artist: "Tony and Joe",
    //   album: "In the Iron Maiden",
    //   release_date: "1990-10-10",
    //   genre: "Metal",
    // },
  ]);

  const [userInput, setUserInput] = useState("");

  const getAllSongs = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/songs/")
      .then((resp) => setSongs(resp.data));
  };

  return (
    <div className="App">
      <button onClick={() => getAllSongs()}>Get Songs!</button>
      <SearchBar userInput={userInput} setUserInput={setUserInput} />
      <SongsMapper userInput={userInput} songs={songs} />
    </div>
  );
};

export default App;
