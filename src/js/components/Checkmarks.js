import React, {Component} from "react";
import Text from "./Text";

class CheckMarks extends Component {

    render() {

        let title;
        let foundSummit;
        let checkedKnowledge;
        let checkedWeather;
        let checkedMotivation;
        if (this.props.sumUp === true) {
            title = ("What have we done so far?");
            foundSummit = ("Found your summit");
            checkedKnowledge = ("Checked your knowledge");
            checkedWeather = ("Checked the weather on top");
            checkedMotivation = ("Checked your motivation level");
        }
        return (
            <section id="checkmarks" className="checkMarks">
                <div className="flex">
                    <h2>{title}</h2>
                    <div className="summit flex">
                        <span>{foundSummit}</span>
                        <span>&#10004;</span>
                    </div>
                    <div className="summit flex">
                        <span>{checkedKnowledge}</span>
                        <span>&#10004;</span>
                    </div>
                    <div className="summit flex">
                        <span>{checkedWeather}</span>
                        <span>&#10004;</span>
                    </div>
                    <div className="summit flex">
                        <span>{checkedMotivation}</span>
                        <span>&#10004;</span>
                    </div>
                </div>
            </section>
        )
    }
}

export default CheckMarks;