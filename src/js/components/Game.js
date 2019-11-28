import React, {Component} from "react";
import mountains from "../data/mountains";

class Game extends Component {

  state = {
      altitude: 0,
      goClicked: false,
      backgroundPositionX: -50,
      backgroundPositionY: 76
  }

  handleKeyUp = () => {
      let newAltitudeValue = parseFloat(this.state.altitude) - 100;
      let newBackgroundPositionX = parseFloat(this.state.backgroundPositionX) + .5;
      if (newAltitudeValue >= 0 && newAltitudeValue < parseFloat(mountains[this.props.index].altitude)) {
        this.setState({
            altitude: newAltitudeValue,
            backgroundPositionX: newBackgroundPositionX
        })
      }
      console.log(this.state.altitude)
  }

//   handleEnter = (e) => {
//       if (e.key === "Enter" && parseFloat(this.state.altitude) == 10) {
//         let newAltitudeValue = parseFloat(this.state.altitude) - 1;
//         let newBackgroundPositionX = parseFloat(this.state.backgroundPositionX) + .2;
//         if (newAltitudeValue >= 0 && newAltitudeValue < parseFloat(mountains[this.props.index].altitude)) {
//           this.setState({
//               altitude: newAltitudeValue,
//               backgroundPositionX: newBackgroundPositionX
//           })
//         }}
//         console.log("enter")
//   }

  setAltitude = (e) => {
      if (this.props.index != null && e.key !== "Enter") {
          this.setState({
              altitude: mountains[this.props.index].altitude,
              goClicked: true
          })
      }
      console.log(this.state.altitude)
  }

 



    render() {
        let viewStyle = null;
        let playerStyle = null;
        let countdown = null;
        if (this.props.index !== null && this.state.goClicked === true) {
            countdown = (<div className="game__box__countdown">Meters left: {this.state.altitude}</div>
            );
            viewStyle = {
                backgroundImage: "url(../images/game2.jpg)",
                backgroundSize: "auto",
                backgroundPositionX: this.state.backgroundPositionX + "%",
                backgroundPositionY: this.state.backgroundPositionY + "%"
            };
            playerStyle = {
                animation: "makeHikerBigger 4s forwards, centralize 1s linear infinite"
            }
        }
        return (
            <section className="game">
                <div className="flex">
                    <h2>We think you're ready. Let's play!</h2>
                    <button onKeyUp={this.handleKeyUp} onClick={this.setAltitude}>Go!</button>
                    <p>Click any key to climb | each click is equal to 100 m.a.s.l </p>
                    <section style={viewStyle}className="game__box">
                        {countdown}
                        <div className="game__box__player">
                        <svg style={playerStyle} aria-hidden="true"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z"></path></svg>
                        <div className="game__box__mountain"></div>
                        </div>
                    </section>
                </div>
            </section>
        )
    }
}

export default Game;