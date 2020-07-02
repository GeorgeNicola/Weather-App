import React, {Component} from 'react';
import './AddLocationBox.css';

class AddLocationBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchBox: ""
        }
    }

    updateSearchBox(value){
        this.setState({searchBox: value});
    }

    addLocationName(){
        this.props.closeBox(0);

        console.log('AddLocation', this.state.searchBox);
        let location = this.state.searchBox;
        this.props.addLocationName(location);
    }

    render(){
        return  (this.props.showAddLocation) ?
            (
            <div className="search-box">
                <input className="text-input" type="text" onChange={(e) => this.updateSearchBox(e.target.value)}/>
                <div className="button" onClick={() => this.addLocationName()}>
                    Search
                </div>
            </div>
            ) : ("");

        
    }
}

export default AddLocationBox;