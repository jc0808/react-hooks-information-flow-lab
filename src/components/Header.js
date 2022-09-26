import React from "react";

function Header({ onDarkModeClick, mode }) {
    return (<button onClick={onDarkModeClick}>
        {mode ? "Dark" : "Light"} Mode
    </button>)
};

export default Header;