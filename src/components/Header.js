import React, {Component} from 'react';
import logo from './com-img/logo.png';
import Login from './Login';

class Header extends Component {

    render() {
        return(
            <div className="header">
            <Login login={this.props.login}/>
            <img src={logo} alt={"Tournament Manager Logo"} />
            <h2>The best way to keep your tournament information organized, easy to access, and close at hand!</h2>
            
            </div>
        );
    }
}

export default Header;