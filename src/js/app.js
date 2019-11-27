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
        index: null,
        arrowClicked: false,
        userLocated: false,
        arrowLocationClicked: false,
    }

    changeIndex = (newIndex) => {
        this.setState({
            index: newIndex
        })
    }

    clickArrow = () => {
        this.setState({
            arrowClicked: true
        })
    }

    locateUser = () => {
        this.setState({
            userLocated: true
        })
    }

    clickArrowLocation = () => {
        this.setState({
            arrowLocationClicked: true
        })
    }

    render() {
        console.log(this.state.userLocated)
        return (
            <>

                <Header clickArrow={this.clickArrow}/>
                <Introduction arrowClicked={this.state.arrowClicked}/>
                <Location index={this.state.index} changeIndex={this.changeIndex} locateUser={this.locateUser} clickArrowLocation={this.clickArrowLocation}/>
                <Presentation userLocated={this.state.userLocated} arrowLocationClicked={this.state.arrowLocationClicked} index={this.state.index}/>
                <Knowledge/>
                <Weather index={this.state.index}/>
                {/* <Motivation/>
                <MotivationRange/> */}
                <CheckMarks/>
                <Game index={this.state.index}/>
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

