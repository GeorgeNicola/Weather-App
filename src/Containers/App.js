import React, { Component } from 'react';
import './App.css';
import WeatherCardList from './WeatherCardList.js';
import WeatherDetailed from '../Components/WeatherDetailed';
import AddLocationBox from '../Components/AddLocationBox';

class App extends Component {
  constructor(props){
    super(props);
    this.addLocationTest = this.addLocationTest.bind(this);
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


/*
    const ObjTest = [
     {
       id:0,
       bg:"https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
       current:{
         temperature: 30,
       },
       location:{
         name:"Dubai",
         region: "Dubai",
         country: "United Arab Emirates",
       }
     },

     {
      id:1,
      bg:"https://cdn.britannica.com/67/145367-050-9B32C974/Tulcea-Rom.jpg",
      current:{
        temperature: 26,
      },
      location:{
        name:"Tulcea",
        region: "Tulcea",
        country: "Romania",
      }
    }]

    this.setState({locations: ObjTest});

*/


  }


  async addLocation(){
    const link = 'http://api.weatherstack.com/current?access_key=ff841349aa894a1e73d516cc496a2b25&query=fetch:ip';

    const resp = await fetch(link);
    const nWeather = await resp.json();


    let newLocations = this.state.locations;
    let bgURL = await this.addBg(nWeather.location.region);
    newLocations.push(Object.assign(nWeather, {id: this.state.locations.length, bg: bgURL}));
    
    this.setState({locations: newLocations});
  }


  //, bg: this.addBg(nWeather.location.name)

  async addLocationName(name){
    console.log('AddLocationName Funtion');
    const link = `http://api.weatherstack.com/current?access_key=ff841349aa894a1e73d516cc496a2b25&query=${name}`;

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
        const link = `https://app.zenserp.com/api/v2/search?apikey=49537c30-bc2f-11ea-bde9-c778342b1c35&q=${name}&tbm=isch`;
        const resp = await fetch(link);
        const data = await resp.json();

        console.log(data.image_results[0].sourceUrl);
        return data.image_results[0].sourceUrl;
    } catch (error){
        return "https://github.com/GeorgeNicola/Images/blob/master/city-bg.jpg?raw=true";
    }
  }

  addLocationTest(){
    const addedLocations = {
        current: {
          temperature: "30"
        },
        location: {
          name: "Dubai",
          region: "Dubai",
          country: "United Arab Emirates"
        },
        bg: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg"
      };

    let newLocations = this.state.locations;
    newLocations.push(Object.assign(addedLocations, {id: this.state.locations.length}));
    this.setState({locations: newLocations});
  }//Testing 

  showAddLocation(value = 0){
    console.log(this.state.showAddLocation);
    this.setState({showAddLocation: value});
  }


  render() { 
   console.log('In render: ', this.state.locations);

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
