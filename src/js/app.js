import React, {Component} from "react";
import ReactDOM from 'react-dom';
import './../sass/style.scss';
import Header from './components/Header';
import Knowledge from './components/Knowledge';
import Introduction from './components/Introduction';
import Location from './components/Location';
import Presentation from './components/Presentation';
import Weather from './components/Weather';
import Motivation from './components/Motivation';
import MotivationRange from './components/MotivationRange';
import CheckMarks from './components/Checkmarks';
import Game from './components/Game';



class App extends Component {

    state = {
        index: 0
    }

    changeIndex = (newIndex) => {
        this.setState({
            index: newIndex
        })
    }

    render() {
        return (
            <>
                <Header/>
                <Introduction/>
                <Location index={this.state.index} changeIndex={this.changeIndex}/>
                <Presentation index={this.state.index}/>
                <Knowledge/>
                <Weather index={this.state.index}/>
                <Motivation/>
                <MotivationRange/>
                <CheckMarks/>
                <Game/>
            </>
        )
    }
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <>
            <App />
        </>,
        document.getElementById('app')
    )
})

