import "./Raindrop.css";
import { Component } from "react";

class Raindrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queuePosition: props.queuePosition,
            startPositionX: Math.floor(Math.random() * window.innerWidth),
            raindropClass: "raindrop show-raindrop",
            yPosition: 0,
            particlesClass: "hide-particles"
        }
    }

    showParticles = () => {
        this.setState({
            ...this.state,
            raindropClass: "raindrop hide-raindrop",
            particlesClass: "show-particles"
        })
    }

    hideParticles = () => {
        this.setState({
            ...this.state,
            particlesClass: "hide-particles",
            raindropClass: "raindrop show-raindrop",
            startPositionX: Math.floor(Math.random() * window.innerWidth)
        })
    }

    render() {
        return (
            <div>
                <div 
                    className={this.state.raindropClass} 
                    style={{marginLeft: this.state.startPositionX, marginTop: this.state.yPosition}}
                    onAnimationEnd={() => this.showParticles()} 
                    onAnimationStart={() => this.setState({...this.state, particlesClass: "hide-particles"})}
                />
                <div className={this.state.particlesClass}>
                    <div className="left-particle" 
                    style={{marginLeft: this.state.startPositionX}} onAnimationEnd={this.hideParticles}/>
                    <div className="middle-particle"  style={{marginLeft: this.state.startPositionX}}/>
                    <div className="right-particle"  style={{marginLeft: this.state.startPositionX}}/>
                </div>
            </div>
        )
    }
}

export default Raindrop;