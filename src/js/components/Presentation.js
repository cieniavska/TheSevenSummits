import React, {Component} from "react";
import mountains from "../data/mountains";

class Presentation extends Component {
    render() {
        return (
            <section className="presentation">
                <div className="flex">
                    <h2>Meet your summit</h2>

                    <svg className="mountain"xmlns="http://www.w3.org/2000/svg" width="360" height="360" viewBox="420 245 360 445">
                    <path fill="transparent" stroke="black" d="M 600 690 L 780 690 L 670 395 C 670 395 535 690 535 690 C 535 690 420 690 420 690 L 600 245 L 645 355"/>
                    </svg>
                    <h2>{mountains[this.props.index].name}</h2>
                    <h2>{mountains[this.props.index].altitude} meters above sea level</h2>
                </div>
            </section>
        )
    }
}

export default Presentation;