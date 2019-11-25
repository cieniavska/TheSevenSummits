import React, {Component} from "react";
import ReactDOM from 'react-dom';

import './../sass/style.scss'; // adres do głównego pliku SASS


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


class App extends Component {
    render() {
        return <Header/>
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

