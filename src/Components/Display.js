// Display.js
import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div>
                <h1>Number:{this.props.number}</h1>
            </div>
        );
    }
}

export default Display;