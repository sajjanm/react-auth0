import React, {Component} from "react";

export default class Main extends Component {
    render(){
        return(
            <div>
                <p>
                Hello, {this.props.name} . Edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}