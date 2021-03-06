import React, {Component} from "react";

class Number extends Component {

    state = {
        num: 0
    }

    componentDidMount(){
        this.interval = setInterval(() => { this.state.num >= parseFloat(this.props.number) ? clearInterval(this.interval) :  this.setState({num: this.state.num + 10})
        },15);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return this.state.num;
    }
}

export default Number;