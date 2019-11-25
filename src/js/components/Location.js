import React, {Component} from "react";

class Location extends Component {
    render(){
        return (
            <section className="location">
                <div className="flex">
                    <h2>Let's check your location first</h2>
                    <button id="find-me">Ok!</button>
                    <p id = "status"></p>
                    <a id = "map-link" target="_blank"></a>
                    <h2>The mountain that is closest to you is... </h2>
                    <h2 id="closest-mountain"></h2>
                </div>
            </section>
        )
    }
}
    
    
    const mountains = [
        {name: "Mount Everest",
            latitude: 27.986065,
            longitude: 86.922623
        },
        {name: "Aconaguga",
            latitude:  -32.861243,
            longitude: -68.86795
        },
        {name: "Mt McKinley",
            latitude: 63.540777,
            longitude: -151.723614
        },
        {name: "Kilimanjaro",
            latitude: -3.065274,
            longitude: 37.359076
        },
        {name: "Mt Blanc",
            latitude: 45.832119,
            longitude: 6.865575
        },
        {name: "Mt Vinson",
            latitude: -78.525483,
            longitude: -85.617147
        },
        {name: "Mt Kosciuszko",
            latitude:  -36.45592,
            longitude: 148.263587
        },
    ]


    // The distance function comes from this website: https://www.geodatasource.com
    function distance(lat1, lon1, lat2, lon2, unit) {
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

    function findClosestMountain(array,userLat,userLong){
        const distanceArr = [];
        const nameArr = [];
        let indexOfsmallestDist;
        for (let i=0; i < array.length; i++) {
            let singleDistance = distance(userLat,userLong,array[i].latitude,array[i].longitude);
            distanceArr.push(singleDistance);
            nameArr.push(array[i].name);
        }
        indexOfsmallestDist = distanceArr.indexOf(Math.min.apply(null,distanceArr));
        return indexOfsmallestDist;
    }


    function geoFindMe() {

        $("#find-me").addClass("scale");

        const status = document.querySelector('#status');
        const mapLink = document.querySelector('#map-link');

        mapLink.href = '';
        mapLink.textContent = '';


        function success(position) {
            console.log(position);
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            let index = findClosestMountain(mountains,latitude,longitude);

            status.textContent = '';
            mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
            mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
            $(".where h2").text("You are here:");
            $("#closest-mountain").text(mountains[index].name);
            $("#find-me").hide();
        }

        function error() {
            status.textContent = 'Unable to retrieve your location';
        }

        if (!navigator.geolocation) {
            status.textContent = 'Geolocation is not supported by your browser';
        } else {
            status.textContent = 'Locating…';
            navigator.geolocation.getCurrentPosition(success, error);
        }

    }

    document.querySelector('#find-me').addEventListener('click', geoFindMe);


export default Location;
