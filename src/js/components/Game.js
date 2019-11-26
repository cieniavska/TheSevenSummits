import React, {Component} from "react";

class Game extends Component {
    render() {
        return (
            <section className="game">
                <div className="flex">
                    <h2>We think you're ready. Let's play!</h2>
                    <section class="game__box"></section>
                </div>
            </section>
        )
    }
}

export default Game;