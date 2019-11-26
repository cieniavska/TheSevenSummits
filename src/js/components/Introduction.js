import React, {Component} from "react";

class Introduction extends Component {
    
    state = {
        txt: '',
        speed: 70
    }

    type = () => {
        let txtToInsert =  'Hello, trooper! Thanks for coming by. Are you ready to climb one of the highest summits on your continent? Every mountain hike requires preparation. That means that we need to check a few things before we start.';
        for (let i=0; i < txtToInsert.length;i++) {
            this.setState({
                txt:  this.state.txt + txtToInsert[i]
            })
            setTimeout(type, this.state.speed);
        }
    }

    render(){
        return (
            <section className="introduction">
                <div className="flex">
                    <p>{this.type}</p>
                </div>
            </section>
        )
    }
}

export default Introduction;