import React from "react";
import Button from "./Button";

const Card = ({item}) => {

    return (
        <div className="Card">
            <img src={item.image}></img>
            <h3>{item.name}</h3>
            <div>
                <h4>{item.address.street}</h4>
                <p>{item.address.city}, {item.address.state}, {item.address.zip}</p>
            </div>
            <Button url={item.weburl} label="Learn More"/>
        </div>
    )
}

export default Card