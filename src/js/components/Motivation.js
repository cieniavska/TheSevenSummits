import React, {Component} from "react";

class Motivation extends Component {

    state = {
        range: 50,
    } 
    
    handleRange = (e) => {
        this.setState({
            range: e.target.value
        })
    }

    render() {
        let message;
        if (parseFloat(this.state.range) === 100) {
            message = (<div className="motivation__container__msg">Wow! that is a lot!</div>)
        }
        else if (parseFloat(this.state.range) === 1) {
            message = (<div className="motivation__container__msg">We need a little bit more from you!</div>)
        }
        return (
        <section className="motivation">
            <div className="motivation__container flex">
                <h2>Let's check out your motivation</h2>
                <div className="rangeContainer">
                    <input onChange={this.handleRange} name="range" value={this.state.range} className="slider" type="range" min="1" max="100"></input>
                </div>
                {message}
            </div>
        </section>
        )
    }
}

export default Motivation;