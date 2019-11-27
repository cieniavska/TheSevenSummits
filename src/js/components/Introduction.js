import React, {Component} from "react";
import Text from "./Text";


class Introduction extends Component {

    state = {
        showBtn: false
    }

    render(){
        let displayText = null;
        let readyBtn = null;
        if (this.props.arrowClicked === true) {
            displayText = (<p><Text text="Welcome! Thanks for visiting and joining the challenge :) Every big hike requires a solid preparation. There are few things that we need to check before we let you climb your summit. Are you ready?"/></p>);
            setTimeout(() => {
                this.setState({
                    showBtn: true
                })
                readyBtn = (<button className="readybtn">Yes!</button>)
                console.log("Hi button")
            }, 3000);
        }
        return (
            <section id="introduction" className="introduction">
                <div className="flex">
                    {displayText}
                    {readyBtn}
                </div>
            </section>
        )
    }
}

export default Introduction;