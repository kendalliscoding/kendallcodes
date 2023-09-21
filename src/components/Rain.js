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
    return (
        <div className="rain">
            {raindrops}
        </div>
    )
}

export default Rain;