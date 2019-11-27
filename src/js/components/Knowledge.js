import React, {Component} from "react";
import mountains from "../data/mountains";
import Text from "./Text";


class Knowledge extends Component {

    state = {
        mountainList: [],
        rankingList: []
    }

    moveMountains = (e,item, name) => {
        e.preventDefault();
        const newRankingList = [...this.state.rankingList,item];
        console.log(newRankingList);
        this.setState({
            rankingList: newRankingList
        });
        this.removeItem(name);
    }

    removeItem = (itemIndex) => {
        this.state.mountainList.splice(itemIndex, 1);
        this.setState({mountainList: this.state.mountainList});
    }

    createMountainList(obj) {
        const newArray = obj.map((element)=> {
            element.random = Math.random();
            return element
        })
        newArray.sort((a,b)=> a.random - b.random);
        const newArrayList = newArray.map(element => <li className="list-item" id={element.name} key={element.name} onClick={event => this.moveMountains(event,element, element.name)}>{element.name}</li>)
        return newArrayList;
    }

    componentDidMount() {
        this.setState({
            mountainList: this.createMountainList(mountains)
        })
        console.log(this.state.mountainList)
    }

    render() {
        return (
            <section className="knowledge">
                <div className="lists-container flex">
                <h2><Text text="Let's check out your knowledge - sort from the highest to lowest"/></h2>
                    {/* <button>Ok!</button> */}
                    <div className="lists flex">
                        <ul className="list">{this.state.mountainList}</ul>
                        <ul className="list">
                            <li id="1" className="list-item">1</li>
                            <li id="2"className="list-item">2</li>
                            <li id="3" className="list-item">3</li>
                            <li id="4"className="list-item">4</li>
                            <li id="5"className="list-item">5</li>
                            <li id="6"className="list-item">6</li>
                            <li id="7"className="list-item">7</li>
                        </ul>
                        <ul className="list">{this.state.rankingList.map((element)=> <li className="list-item" id={element.name} key={element.name}>{element.name}</li>)}</ul>

                    </div>
                </div>
            </section>
        )
    }
}

export default Knowledge;