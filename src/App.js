import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TournamentManager from './components/TournamentManager';
import Footer from './components/Footer'


class App extends Component {
  constructor(){
    super()
    this.state = {
      authenticated: false, 
      
     
    }
  }

 login = () => {
   this.setState({
     authenticated: !this.state.authenticated

   })
   console.log('login', this.state.authenticated)
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
