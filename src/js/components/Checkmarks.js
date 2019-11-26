import React, {Component} from "react";

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

export default CheckMarks;