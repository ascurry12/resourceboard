import React from "react";

const Header = (props) => {
    
    return (
        <div className="Header">
            <img src={props.image}></img>
            <h1>Local Gardens</h1>
        </div>
        
    )
}

export default Header