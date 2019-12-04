import React, {Component} from "react";
import mountains from "../data/mountains";
import Text from "./Text";

class Knowledge extends Component {

    state = {
        mountainList: [],
        rankingList: [],
        msg: ""
    }

    moveMountains = (item, name) => {

        const newRankingList = [...this.state.rankingList,item];
        this.setState({
            rankingList: newRankingList
        }, () => {
            if (JSON.stringify(this.state.rankingList) === JSON.stringify(mountains)) {
                this.setState({
                    msg: "Impressive! That is correct!"
                })
            } else if (this.state.rankingList.length === 7 && (JSON.stringify(this.state.rankingList) != JSON.stringify(mountains))) {
                this.setState({
                    msg: "Mountains are harsh, there is no toleration for mistakes. Reload and try again"
                })
                }
            }
        );
        this.removeItem(name);
    }

    removeItem = (name) => {
        const newList = this.state.mountainList.filter(item => {
            return item.name != name});
        this.setState({mountainList: newList});
    }

    createMountainList(obj) {
        const newArray = obj.map((element)=> {
            element.random = Math.random();
            return element
        })
        newArray.sort((a,b)=> a.random - b.random);
        return newArray;
    }

    componentDidMount() {
        this.setState({
            mountainList: this.createMountainList(mountains)
        })
    }

    render() {
    
        const newArrayList = this.state.mountainList.map(element => <li className="list-item" id={element.name} key={element.name} onClick={event => this.moveMountains(element, element.name)}>{element.name}</li>)
        return (
            <section className="knowledge">
                <div className="lists-container flex">
                <h2>Let's check out your knowledge - sort from the highest to lowest</h2>
                    <div className="lists flex">
                        <ul className="list">{newArrayList}</ul>
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
                        <p className="message">{this.state.msg}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Knowledge;