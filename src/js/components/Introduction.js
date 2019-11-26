import React, {Component} from "react";
import Text from "./Text";


class Introduction extends Component {
    

    render(){
        return (
            <section className="introduction">
                <div className="flex">
                    <p><Text text="Welcome to the website"/></p>
                </div>
            </section>
        )
    }
}

export default Introduction;