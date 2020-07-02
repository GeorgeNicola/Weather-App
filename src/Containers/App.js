import React, { Component } from 'react';
import './App.css';
import WeatherCardList from './WeatherCardList.js';
import WeatherDetailed from '../Components/WeatherDetailed';
import AddLocationBox from '../Components/AddLocationBox';

class App extends Component {
  constructor(props){
    super(props);
    this.changeDetailedLocation = this.changeDetailedLocation.bind(this);
    this.addLocationName = this.addLocationName.bind(this);
    this.showAddLocation = this.showAddLocation.bind(this);
    this.state = {
      locations: [],
      detailedLocation: 0,
      showAddLocation: 0,
    }
  }

  changeDetailedLocation(id){
    this.setState({detailedLocation: id});
  }
   
  componentDidMount() {
    this.addLocation();

    //this.addLocationName("New York");
    //this.addBg("Tulcea");
  }


  async addLocation(){
    const location = await fetch('http://api.ipstack.com/95.77.243.31?access_key=0b73a0bff2d0819d2917a668b59c2772');
    const locationResp = await location.json();
    const locationName = locationResp.city;

    const link = `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=ff841349aa894a1e73d516cc496a2b25&query=${locationName}`;

    const resp = await fetch(link);
    const nWeather = await resp.json();


    let newLocations = this.state.locations;
    let bgURL = await this.addBg(nWeather.location.region);
    newLocations.push(Object.assign(nWeather, {id: this.state.locations.length, bg: bgURL}));
    
    this.setState({locations: newLocations});
  }


  //, bg: this.addBg(nWeather.location.name)

  async addLocationName(name){
   // console.log('AddLocationName Function');
    const link = `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=ff841349aa894a1e73d516cc496a2b25&query=${name}`;

    const resp = await fetch(link);
    const nWeather = await resp.json();


    let newLocations = this.state.locations;
    let bgURL = await this.addBg(nWeather.location.region);
    newLocations.push(Object.assign(nWeather, {id: this.state.locations.length, bg: bgURL}));
    
    this.setState({locations: newLocations});
  }

  //, bg: bgURL

  async addBg(name){
    try {
        const link = `hettps://app.zenserp.com/api/v2/search?apikey=49537c30-bc2f-11ea-bde9-c778342b1c35&q=${name}&tbm=isch`;
        const resp = await fetch(link);
        const data = await resp.json();

        console.log(data.image_results[0].sourceUrl);
        return data.image_results[0].sourceUrl;
    } catch (error){
        return "https://github.com/GeorgeNicola/Images/blob/master/city-bg.jpg?raw=true";
    }
  }

  showAddLocation(value = 0){
    //console.log(this.state.showAddLocation);
    this.setState({showAddLocation: value});
  }


  render() { 
   //console.log('In render: ', this.state.locations);

    return ( Object.keys(this.state.locations).length === 0 && this.state.locations.constructor === Array ) ? 
          <div className="loader"></div> :
        (
          <div className="wrapp-all">
            <AddLocationBox addLocationName={this.addLocationName} showAddLocation={this.state.showAddLocation} closeBox={this.showAddLocation}/>
            <div className="app"> 
                <WeatherCardList location={this.state.locations} 
                                changeDetailedLocation={this.changeDetailedLocation} 
                                addLocation={this.addLocationTest}
                                showAddLocation={this.showAddLocation}/>  

                <WeatherDetailed 
                    location={this.state.locations[this.state.detailedLocation].location.name}
                    temp={this.state.locations[this.state.detailedLocation].current.temperature}
                    bg={this.state.locations[this.state.detailedLocation].bg}/>
            </div>
          </div>
        )

  }
}
export default App;
