import "./Clouds.css";
import Cloud from "./Cloud";
import React from "react";

const Clouds = () => {
    return (
        <div className="clouds">
            <Cloud id="cloud1"/>
            <Cloud id="cloud2" />
            <Cloud />
            <Cloud />
            <Cloud />
            <Cloud />
        </div>
    )
}

export default Clouds;