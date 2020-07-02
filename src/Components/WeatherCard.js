import React, {Component} from "react";
import "./WeatherCard.css"

class WeatherCard extends Component {
    changeHighlightedLocation(id){
        console.log('Id: ', id);
        this.props.changeDetailedLocation(id);
    }

    render(){
        const {element, name, region, country, temp, bg} = this.props;
        return(
            <div className="weather-card" style={{ backgroundImage: `url(${bg})`}}  id={element}  onClick={(e) => this.changeHighlightedLocation(this.props.element)}>
                <div className="location">
                    <span className="city"> {name} </span>
                    <span className="region"> {region}, {country} </span>
                </div>
                <div className="temp">
                    {temp}&#176; 
                </div>
            </div> 
        );
    }

}

export default WeatherCard;