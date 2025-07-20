import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <p>{this.props.message}</p>
        <p>This is the Home component.</p>
      </div>
    );
  }
}

export default Home;
 