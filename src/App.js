import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TournamentManager from './components/TournamentManager';
import Footer from './components/Footer'


class App extends Component {
  constructor(){
    super()
    this.state = {
      authenticated: true,  //turned off so I could edit
      isHidden: false
    }
  }

 login = () => {
   this.setState({authenticated:true, isHidden:true })
 }

 toggleHidden = () => {
   this.setState({
     isHidden: !this.state.isHidden
   })
 }

  render() {
    return (
      <div className="App">
        <Header login={this.login}/>
        {this.state.authenticated && <TournamentManager />}
        
          
        {/* <TournamentManager /> */}
        <Footer />
      </div>
    );
  }
}


export default App;
