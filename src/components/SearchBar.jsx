import React from "react";
import "../index.css";

const SearchBar = ({userInput, setUserInput}) => {
    return (
        <form className="searchbar-form">
            <input className="searchbar" value={userInput} onChange={(e)=>setUserInput(e.target.value)} placeholder='Search'/>
        </form>
    );
}

export default SearchBar;