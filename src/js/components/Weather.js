import React, {Component} from "react";

class Weather extends Component {
    render() {
        return (
            <section className="weather">
                <div className="flex">
                    <h2>Let's check out the weather</h2>
                    <button>Ok!</button>
                </div>
            </section>
        )
    }
}

export default Weather;