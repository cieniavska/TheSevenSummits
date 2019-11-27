import React, {Component} from "react";
import mountains from "../data/mountains";

class Location extends Component {

    state = {
        latitude: '',
        longitude: '',
        msg: ''
    }

    // The distance function comes from this website: https://www.geodatasource.com
    distance(lat1, lon1, lat2, lon2, unit) {
        if ((lat1 === lat2) && (lon1 === lon2)) {
            return 0;
        }
        else {
            let radlat1 = Math.PI * lat1/180;
            let radlat2 = Math.PI * lat2/180;
            let theta = lon1-lon2;
            let radtheta = Math.PI * theta/180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit==="K") { dist = dist * 1.609344 }
            if (unit==="N") { dist = dist * 0.8684 }
            return dist;
        }
    }

    findClosestMountain = (array,userLat,userLong) => {
        const distanceArr = [];
        const nameArr = [];
        let indexOfsmallestDist;
        for (let i=0; i < array.length; i++) {
            let singleDistance = this.distance(userLat,userLong,array[i].latitude,array[i].longitude);
            distanceArr.push(singleDistance);
            nameArr.push(array[i].name);
        }
        indexOfsmallestDist = distanceArr.indexOf(Math.min.apply(null,distanceArr));
        return indexOfsmallestDist;
    }

    success = (position) => {
        const {latitude, longitude} = position.coords;
        let newIndex = this.findClosestMountain(mountains,latitude,longitude);
        this.props.changeIndex(newIndex);
        this.setState({
            latitude,
            longitude,
            // index: newIndex,
            msg: 'Found your location'
        })
        this.props.locateUser();
    }

    error = () => {
        this.setState({
            msg: 'Unable to retrieve your location'
        })
    }

    geoFindMe = () => {
        if (!navigator.geolocation) {
            this.setState({
                msg: 'Geolocation is not supported by your browser'
            })
        } else {
            this.setState({
                msg: 'Finding your location...'
            })
            navigator.geolocation.getCurrentPosition(this.success, this.error);
        }

    }

    render(){
        let successDisplay = null;
        if (this.props.index !== null) {
            successDisplay = (<>
            <p id = "status">{this.state.msg}</p>
            <a id = "map-link">Your Latitude: {this.state.latitude}°, Your Longitude: {this.state.longitude}°</a>
            <h3>The mountain you're going to climb from the mighty seven is ... </h3>
            <a href="#presentation" className="arrowLocation" onClick={e => this.props.clickArrowLocation(e)}>&darr;</a>
            </>)
        }
        return (
            <section className="location">
                <div className="flex">
                    <h2>Let's check your location first</h2>
                    <button id="find-me" onClick={this.geoFindMe}>Ok!</button>
                    {successDisplay}
                </div>
            </section>
        )
    }
}

export default Location;
