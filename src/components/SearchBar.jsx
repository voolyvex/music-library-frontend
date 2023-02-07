import React from "react";

const SearchBar = ({userInput, setUserInput}) => {
    return (
        <form>
            <input value={userInput} onChange={(e)=>setUserInput(e.target.value)} placeholder='Search'/>
        </form>
    );
}

export default SearchBar;