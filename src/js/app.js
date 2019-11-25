import React, {Component} from "react";
import ReactDOM from 'react-dom';
import './../sass/style.scss';
// import Location from './components/Location'


class Header extends Component {
    render() {
        return (
            <header> 
                <div className="banner">
                    <div>
                        <h1 className="banner__title">The Seven Summits</h1>
                    </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="100 245 1000 540">
                            <path fill="transparent" stroke="black" d="M 100 690 L 220 465 L 345 690 L 470 420 L 600 667 L 730 420 L 855 690 L 980 465 L 1100 690 " />
                            <path fill="transparent" stroke="black" d="M 185 690 L 345 395 L 470 570 L 600 245 L 730 570 L 855 395 L 1015 690"/>
                            <path fill="transparent" stroke="black" d="M 220 750 L 980 750 "/>
                            <path fill="transparent" stroke="black" d="M 220 785 L 980 785 "/>
                        </svg>
                </div>
            </header>
        )
    }
}

let i = 0;
var txt = 'Hello, trooper. Thanks for coming by. Are you ready to climb one of the highest summits on your continent? Every mountain hike requires preparation. That means that we need to check a few things before you will conquer a summit.' 
let speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("welcome-message").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

class Introduction extends Component {
    
    state = {
        txt: 'Hello, trooper! Thanks for coming by. Are you ready to climb the highest mountain of your continent? Every mountain hike requires preparation. That means that we need to check a few things before we start.',
        speed: 70
    }

    typeWriter = () => {
        const {txt,speed} = this.state;
        let txtToInsert =  'Hello, trooper! Thanks for coming by. Are you ready to climb one of the highest summits on your continent? Every mountain hike requires preparation. That means that we need to check a few things before we start.';

        if (0 < txt.length) {
            document.getElementById("welcome-message").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
    }

    render(){
        return (
            <section className="introduction">
                <div className="flex">
                    <p>{this.state.txt}</p>
                </div>
            </section>
        )
    }
}

class Knowledge extends Component {
    render() {
        return (
            <section className="knowledge">
                <div className="flex">
                    <h2>Let's check out your knowledge!</h2>
                    <button>Ok!</button>
                </div>
            </section>
        )
    }
}

class Presentation extends Component {
    render() {
        return (
            <section className="presentation">
                <div className="flex">
                    <h2>Meet your summit</h2>
                    <button>Ok!</button>
                </div>
            </section>
        )
    }
}

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

class Motivation extends Component {
    render() {
        return (
        <section className="motivation">
            <div className="flex">
                <h2>Let's check out your motivation</h2>
                <button>Ok!</button>
            </div>
        </section>
        )
    }
}

class MotivationRange extends Component {
    render() {
        return (
            <section className="motivationRange flex">
                    <div class="container">
                    <h2>How motivated are you?</h2>
                    <div class="slider-container">
                        <div class="track">
                            <div class="progress"></div>
                            <div class="thumb">
                                <div class="thumb-indicator"></div>
                            </div>
                        </div>
                    </div>
                    <div class="percentage-counter"></div>
                    <div class="message"></div>
                    </div>
            </section>
        )
    }
}

class CheckMarks extends Component {
    render() {
        return (
            <section className="checkMarks">
                <div className="flex">
                    <h2>What have we done so far?</h2>
                    <span>Found your summit</span>
                    <span>Checked your knowledge</span>
                    <span>Checked the weather on the top</span>
                    <span>Checked your motivation level</span>
                </div>
            </section>
        )
    }
}

class Game extends Component {
    render() {
        return (
            <section className="game">
                <div className="flex">
                    <h2>We think you're ready. Let's play!</h2>
                    <button>Ok!</button>
                </div>
            </section>
        )
    }
}



class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Introduction/>
                {/* <Location/> */}
                <Presentation/>
                <Knowledge/>
                <Weather/>
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

