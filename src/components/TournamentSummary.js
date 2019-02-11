import React, { Component }from 'react'
import Details from './Details';
import './TournamentSummary.css'


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
            // Clears input boxes
            this.setState({
                date:'',
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

    handleEntered(){
        this.setState({
            entered: true
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
            <p className='date'>{tourney.date}</p>
            <h3 className="name">{tourney.name}</h3>
            <p className='location'>{tourney.location}</p>
          
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
            onChange={ (e) => this.handleDetails(e.target.value)}
            value={this.state.details}
            />
           
            <button className="update-button"
            onClick={ () => this.edit(tourney.id)}>Update</button>
           
            <p className="explainer"> You can update one field or all fields.  To update fields type in the input box and click update.  To delete click delete. </p>
            <button className="delete-button"
            onClick={ () => this.props.deleteTourney(tourney.id)}>Delete</button>
            
            </div>
        )
    }

}

export default TournamentSummary;