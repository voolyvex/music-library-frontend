import React from "react";

const SearchBar = ({userInput, setUserInput}) => {
    return (
        <form>
            <input value={userInput} onChange={(e)=>{setUserInput(e.target.value);console.log((e));}}/>
        </form>
    );
}

export default SearchBar;