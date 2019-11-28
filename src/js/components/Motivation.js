import React, {Component} from "react";

class Motivation extends Component {

    state = {
        msg: ''
    }    

    render() {
        return (
        <section className="motivation">
            <div className="motivation__container flex">
                <h2>Let's check out your motivation</h2>
                <div className="rangeContainer">
                    <input className="slider" type="range" min="1" max="100"></input>
                </div>
                <div>{this.state.msg}</div>
            </div>
        </section>
        )
    }
}

export default Motivation;