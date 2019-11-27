import React, {Component} from "react";
import Text from "./Text";
import mountains from "../data/mountains";

class Weather extends Component {

    state = {
        temperature: '',
        pressure: '',
        humidity: '',
        clouds: '',
        description:'',
        windSpeed: '',
        windDirection: '',
        buttonClicked: false
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
                buttonClicked: this.state.buttonClicked === false? true : false
            })
        })
    }

    render() {
        let weatherDisplay = null
        if (this.state.buttonClicked === true) {
                weatherDisplay = ( <>
                <div className="prognosis flex">
                        <div className="temperature flex">
                            <span>Temperature</span>
                            <span className="weatherArrow">&#8680;</span> 
                            <span>{this.state.temperature}</span>          
                        </div>
                        <div className="pressure flex">
                            <span>Pressure</span>
                            <span className="weatherArrow">&#8680;</span>   
                            <span>{this.state.pressure} hPa</span>          
                        </div>
                        <div className="humidity flex">
                            <span>Humidity</span> 
                            <span className="weatherArrow">&#8680;</span>  
                            <span>{this.state.humidity} %</span>          
                        </div>
                        <div className="clouds flex">
                            <span>Clouds</span>
                            <span className="weatherArrow">&#8680;</span>   
                            <span>{this.state.clouds}</span>          
                        </div>
                        <div className="windSpeed flex">
                            <span>Wind speed</span>
                            <span className="weatherArrow">&#8680;</span>   
                            <span>{this.state.windSpeed} m/s</span>          
                        </div>
                        <div className="description flex">
                            <span>Description</span>
                            <span className="weatherArrow">&#8680;</span>   
                            <span>{this.state.description}</span>          
                        </div>
                </div>
                </>)
        }
        return (
            <section className="weather">
                <div className="flex">
                    <h2><Text text="Let's check out the weather"/></h2>
                    <button onClick={this.showWeather}>Ok!</button>
                     {weatherDisplay}   
                </div>
            </section>
        )
    }
}

export default Weather;