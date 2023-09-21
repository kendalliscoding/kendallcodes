import Raindrop from "./Raindrop"
import "./Rain.css";
import { useState } from "react";

const Rain = () => {
    const [raindrops, setRaindrops] = useState([]);

    const createRaindrops = (queuePosition) => {
        setRaindrops([...raindrops, <Raindrop key={queuePosition} queuePosition={queuePosition} />])
    }
    if (raindrops.length < 50) {
        setTimeout(() => createRaindrops(raindrops.length + 1), 300);
    }

    const resetRain = () => {
        setRaindrops([]);
    }
    return (
        <div className="rain" onFocus={resetRain}>
            {raindrops}
        </div>
    )
}

export default Rain;