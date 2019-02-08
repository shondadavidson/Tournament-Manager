import React, { Component }from 'react'
import Details from './Details';

class TournamentSummary extends Component {
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
    edit(id) {
        this.setState({
            editing: true
        })
        this.props.setEdit(
            this.state.date, 
            this.state.name, 
            this.state.location, 
            this.state.details,
            id)
            this.setState(
                {date:'',
                name: '',
                location: '',
                details: '',
            }
            )
           
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
        // let {date, name, location, entered, details} 
        const {tourney} = this.props;
        // console.log(this.props.tourney)

        return(
            <div className="TournamentSummary" > 
            <p>Date: {tourney.date}</p>
            <h3>Name: {tourney.name}</h3>
            <p>Location: {tourney.location}</p>
            <Details tourney={this.props.tourney} />
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
            value={this.state.details}
            onChange={ (e) => this.handleDetails(e.target.value)}
            />
            {/* <button onClick={ () => this.props.createTourney(this.state.date, this.state.name, this.state.location, this.state.details)}>Create Tournament</button> */}
            <button onClick={ () => this.edit(tourney.id)}>Update</button>
            <button onClick={ () => this.props.deleteTourney(tourney.id)}>Delete</button>
        
            <p>- - - - - - - - - - - - </p>
            
            
            </div>
        )
    }

}

export default TournamentSummary;