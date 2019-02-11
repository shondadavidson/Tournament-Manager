import React, {Component} from 'react';
import "./Login.css"

class Login extends Component {
    
    
    render() {

        return(
            <div className="Login">
{/* 
            // <input type="text"
            // placeholder="User Name"
            // />
            // <input type="text"
            // placeholder="Password"
            // /> */}

            {/* {this.props.login ? (
                <button onClick={ () => this.props.login()}> Login </button>
            ) : (<button onClick={ ()=>this.props.login()}> Logout </button>)} */}

            <button onClick={this.props.login}> Login/ Logout </button>
            
            </div>
        )
}
}

export default Login;