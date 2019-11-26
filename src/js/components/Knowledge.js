import React, {Component} from "react";
import mountains from "../data/mountains";
import List from './List';
import ListItem from './ListItem';


class Knowledge extends Component {

    state = {
        mountainList: [],
    }

    createMountainList(obj) {
        const newArray = obj.map((element)=> {
            element.random = Math.random();
            return element
        })
        newArray.sort((a,b)=> a.random - b.random);
        const newArrayList = newArray.map(element => <li key={element.name} className="list-item" draggable="true">{element.name}</li>)
        return newArrayList;
    }

    componentDidMount() {
        this.setState({
            mountainList: this.createMountainList(mountains)
        })
    }

    render() {
        return (
            <section className="knowledge">
                <div className="lists-container flex">
                <h2>Let's check out your knowledge - sort from the highest to lowest</h2>
                    {/* <button>Ok!</button> */}
                    <div className="lists flex">
                        <ul className="list">
                            <li className="list-item">1</li>
                            <li className="list-item">2</li>
                            <li className="list-item">3</li>
                            <li className="list-item">4</li>
                            <li className="list-item">5</li>
                            <li className="list-item">6</li>
                            <li className="list-item">7</li>
                        </ul>
                        <ul className="list">{this.state.mountainList}</ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Knowledge;