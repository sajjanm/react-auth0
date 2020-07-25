import React, {Component} from "react";

export default class Main extends Component {
    render(){
        return(
            <div>
                <p>
                    Hello, {this.props.name}!
                    <br/><br/>
                    Do you want to see the secret area? <a href="/secret">Click here</a>
                </p>

                <div>
                    <hr/>
                    Please login first
                    <hr/>
                    <button onClick={this.props.auth.login}>Login</button>
                </div>
            </div>
        );
    }
}