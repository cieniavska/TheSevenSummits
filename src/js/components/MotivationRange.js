import React, {Component} from "react";

class MotivationRange extends Component {
    render() {
        return (
            <section className="motivationRange flex">
                    <div className="container">
                    <h2>How motivated are you?</h2>
                    <div className="slider-container">
                        <div className="track">
                            <div className="progress"></div>
                            <div className="thumb">
                                <div className="thumb-indicator"></div>
                            </div>
                        </div>
                    </div>
                    <div className="percentage-counter"></div>
                    <div className="message"></div>
                    </div>
            </section>
        )
    }
}

export default MotivationRange;