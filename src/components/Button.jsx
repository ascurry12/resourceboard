import React from "react";

const Button = (props) => {
    
    function onClick() {
        window.open(props.url, '_blank').focus()
    }

    return (
        <div className="Button">
            <button onClick={onClick}>{props.label}</button>
        </div>
    )
}

export default Button