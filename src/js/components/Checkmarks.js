import React, {Component} from "react";
import Text from "./Text";

class CheckMarks extends Component {
    render() {
        return (
            <section className="checkMarks">
                <div className="flex">
                    <h2><Text text="What have we done so far?"/></h2>
                    <div className="summit flex">
                        <span>Found your summit</span>
                        <span>&#10004;</span>
                    </div>
                    <div className="summit flex">
                        <span>Checked your knowledge</span>
                        <span>&#10004;</span>
                    </div>
                    <div className="summit flex">
                        <span>Checked the weather on the top</span>
                        <span>&#10004;</span>
                    </div>
                    <div className="summit flex">
                        <span>Checked your motivation level</span>
                        <span>&#10004;</span>
                    </div>
                </div>
            </section>
        )
    }
}

export default CheckMarks;