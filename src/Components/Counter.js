import React, { Component } from 'react'
import Display from './Display';

class Counter extends Component {

    constructor(props) { // To initialize the values
        super(props);
        // The use case is we will create a button and then increment the count.
        this.state = {
            count: 0
        }

    }
    // Lifecycle Method : Three phases , mounting phase, updating phase & 
    // unmounting phase
    componentDidMount() { // this method is called after the component is rendered on the screen for the first time
        console.log("componentDidMount : When component is rendered for the first time");
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() { // render is also a lifecycle method.
        return (
            <div>
                <Display number={this.state.count} />
                <button onClick={() => this.incrementCount()}>Click me</button>
            </div>
        )
    }
}
export default Counter;
// rcc - shortcut to create react class component
// JSX - JavaScript XML , we can write html in javascript, browser doesn't understand that
// for that we have transpiler like babel, then it will convert it to html the way browser can understand.
//we will have to use this if we are using class component
// State is mutable but props is immutable.
