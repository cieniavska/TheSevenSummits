import React, {Component} from "react";
import Text from "./Text";


class Introduction extends Component {
    

    render(){
        return (
            <section className="introduction">
                <div className="flex">
                    <p><Text text="Welcome! Thanks for visiting and joining the challenge. Every big hike requires a solid preparation. There are few things that we need to check before we let you climb your summit. Are you ready?"/></p>
                </div>
            </section>
        )
    }
}

export default Introduction;