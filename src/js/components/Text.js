import React, {Component} from "react";

class Text extends Component {

    state = {
        index: 0
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            console.log("dziala");
            parseFloat(this.state.index) >= this.props.text.length ? clearInterval(this.interval) : this.setState({index: this.state.index + 1})
        },85)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return this.props.text.substr(0,this.state.index)
    }
}

export default Text;