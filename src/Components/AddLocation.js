import React, { Component } from 'react';
import './AddLocation.css';

class AddLocation extends Component {
    render(){
        return(
            <div className="add-location-btn" id="1" onClick={(e) => this.props.showAddLocation(e.target.id)}>

            </div>
        )
    }
}

export default AddLocation;