import React, {Component} from "react";

class Text extends Component {

    state = {
        index: 0
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.state.index > this.props.text ? clearInterval(this.interval) :  this.setState({index: this.state.index + 1})
        },70)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return this.props.text.substr(0,this.state.index)
    }
}

export default Text;