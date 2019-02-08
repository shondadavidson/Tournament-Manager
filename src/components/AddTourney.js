import React, { Component }from 'react'
import './AddTourney.css'

class AddTourney extends Component {
    constructor(props){
        super(props);

        this.state = {
            editing: false,
            date: '',
            name: '',
            location: '',
            details: ''
        }
    }
    handleDate(val) {
        console.log(`date worked`)
        this.setState({
            date: val
        })
    }

    handleName(val) {
        this.setState({
            name: val
        })
    }

    handleLocation(val) {
        this.setState({
            location: val
        })
    }

    handleEntered(val){
        this.setState({
            entered: val
        })
    }

    handleDetails(val) {
        this.setState({
            details: val
        })
    }

    

    render() {
    

        return(
            <div className="AddTourney" > 
            {/* {this.props.tourney ? <p>Date: {tourney.date}</p> : null }
            {this.props.tourney ? <h3>Name: {tourney.name}</h3> : null }
            {this.props.tourney ? <p>Location: {tourney.location}</p> : null } */}
        
            <input type="text" 
            placeholder="date"
            onChange={ (e) => this.handleDate(e.target.value)}
            value={this.state.date}
            />
            < input type="text"
            placeholder="name"
            onChange={ (e) => this.handleName(e.target.value)}
            value={this.state.name}
            />
            <input type="text"
            placeholder="location"
            onChange={ (e) => this.handleLocation(e.target.value)}
            value={this.state.location}
            />
            <input type="text"
            placeholder="details"
            onChange={ (e) => this.handleDetails(e.target.value)}
            />
            <button onClick={ () => this.props.createTourney(this.state.date, this.state.name, this.state.location, this.state.details)}>Create Tournament</button>
            
        
            
            </div>
        )
    }

}

export default AddTourney;