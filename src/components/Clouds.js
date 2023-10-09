import "./Clouds.css";
import Cloud from "./Cloud";
import React from "react";

const Clouds = () => {
    return (
        <div className="clouds">
            <div className="left-clouds">
                <Cloud cloudId="1"/>
                <Cloud cloudId="2" />
                <Cloud cloudId="3"/>
                <Cloud cloudId="4"/>
                <Cloud cloudId="5"/>
                <Cloud cloudId="6"/>
            </div>
            <div className="right-clouds">
                <Cloud cloudId="7"/>
                <Cloud cloudId="8" />
                <Cloud cloudId="9"/>
                <Cloud cloudId="10"/>
                <Cloud cloudId="11"/>
                <Cloud cloudId="12"/>
            </div>
        </div>
    )
}

export default Clouds;