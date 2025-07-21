import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "BMW",
            model: "550i",
            color: "black",
            year: "2022"
        };
    };
    changeColour = () => {
        this.setState({
            color: "Violet"
        })
    }

    render() {
        return (
            <div>
                <h1>My car is a {this.state.brand}</h1>
                <p>It is a {this.state.color} {this.state.model}
                    from {this.state.year}
                </p>
                <button onClick={this.changeColour}>Change Colour</button>
            </div>
        )
    }
}
export default Car;
