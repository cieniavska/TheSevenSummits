import React, {Component} from "react";
import mountains from "../data/mountains";
import { create } from "domain";

class Knowledge extends Component {

    state = {
        mountainList: [],
        rankingList: []
    }

    createList(obj) {
        const newArray = obj.map((element)=> {
            element.random = Math.random();
            return element
        })
        newArray.sort((a,b)=> a.random - b.random);
        const newArrayList = newArray.map(element => <li key={element.name} className="list-item">{element.name}</li>)
        return newArrayList;
    }

    componentDidMount() {
        this.setState({
            mountainList: this.createList(mountains)
        })
    }

    render() {
        return (
            <section className="knowledge">
                <div className="flex">
                    <h2>Let's check out your knowledge!</h2>
                    {/* <button>Ok!</button> */}
                    <div className="lists flex">
                        <ul className="list">{this.state.mountainList}</ul>
                        <ul className="list">
                            <li className="list-item">1</li>
                            <li className="list-item">2</li>
                            <li className="list-item">3</li>
                            <li className="list-item">4</li>
                            <li className="list-item">5</li>
                            <li className="list-item">6</li>
                            <li className="list-item">7</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Knowledge;