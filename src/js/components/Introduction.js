import React, {Component} from "react";
import Text from "./Text";


class Introduction extends Component {

    render(){
        let displayText = null;
        if (this.props.arrowClicked === true) {
            displayText = (<p><Text text="Welcome! Thanks for visiting and joining the challenge :) Every big hike requires a solid preparation. There are few things that we need to check before we let you climb your summit. Scroll down if you think you are ready..."/></p>);
        }
        return (
            <section id="introduction" className="introduction">
                <div className="flex">
                    {displayText}
                </div>
            </section>
        )
    }
}

export default Introduction;