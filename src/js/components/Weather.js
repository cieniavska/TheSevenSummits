import React, {Component} from "react";
import mountains from "../data/mountains";

class Weather extends Component {

    state = {
        temperature: '',
        pressure: '',
        humidity: '',
        clouds: '',
        description:'',
        windSpeed: '',
        windDirection: ''
    }

    showWeather = () => {
        const {latitude,longitude} = mountains[this.props.index];
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=cd14ebdf70c261f49a0d7ae648bcd25d&units=metric` ).then(r => r.json())
        .then(data => {
            this.setState({
                temperature: data.main.temp,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                clouds: data.clouds.all,
                description: data.weather[0].description,
                windSpeed: data.wind.speed,
            })
        })
    }

    render() {
        return (
            <section className="weather">
                <div className="flex">
                    <h2>Let's check out the weather</h2>
                    <button onClick={this.showWeather}>Ok!</button>
                    <span>Temperature: {this.state.temperature}</span>
                    <span>Pressure: {this.state.pressure} hPa</span>
                    <span>Humidity: {this.state.humidity} %</span>
                    <span>Clouds: {this.state.clouds}</span>
                    <span>Description: {this.state.description}</span>
                    <span>Wind speed: {this.state.windSpeed} m/s</span>

                </div>
            </section>
        )
    }
}

export default Weather;