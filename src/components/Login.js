import React, {Component} from 'react';
import "./Login.css"

class Login extends Component {
    render() {
        return(
            <div className="Login">
            <input type="text"
            placeholder="User Name"
            />
            <input type="text"
            placeholder="Password"/>

            <button onClick={this.props.login}> Login </button>
            
            </div>
        )
}
}

export default Login;