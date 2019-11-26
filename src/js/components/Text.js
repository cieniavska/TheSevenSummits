import React, {Component} from "react";

class Text extends Component {

    state = {
        index: 0
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
                index: this.state.index + 1
            })
        },100)
    }
    render() {
        return this.props.text.substr(0,this.state.index)
    }
}

export default Text;