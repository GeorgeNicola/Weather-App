import React, {Component} from 'react';
import './WeatherCardList.css';
import WeatherCard from '../Components/WeatherCard';
import AddLocation from '../Components/AddLocation.js';

class WeatherCardList extends Component {
    render(){
        return(
            <div className="weather-card-list">
                {
                    this.props.location.map( (place, i) =>{
                        return (
                            <WeatherCard 
                                key={i}
                                element={place.id} 
                                name={place.location.name}
                                region={place.location.region}
                                country={place.location.country}
                                temp={place.current.temperature}
                                changeDetailedLocation={this.props.changeDetailedLocation}
                                bg={place.bg}/>
                        )
                    } )
                }

                <AddLocation showAddLocation={this.props.showAddLocation}/>
            </div>
        )
    }
}

export default WeatherCardList;
