import React, { Component } from 'react';
// import Home from './Home';
// import About from './About';
// import Counter from './Counter';
import Car from './Components/Car';

class App extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       currentPage: 'home'
  //     };
  //   }

  //   updateState = (page) => {
  //     this.setState({ currentPage: page });
  //   };

  //   renderPage = () => {
  //     const { currentPage } = this.state;

  //     if (currentPage === 'home') {
  //       return <Home message="Welcome to the Home Page!" user="Kaushik" />;
  //     } else if (currentPage === 'about') {
  //       return <About message="This is the About Page." team="React Learners" />;
  //     } else {
  //       return <h1>Page Not Found</h1>;
  //     }
  //   };

  //   render() {
  //     return (
  //       <div>
  //         <nav style={{ marginBottom: '20px' }}>
  //           <button onClick={() => this.updateState('home')}>Home</button>
  //           <button onClick={() => this.updateState('about')}>About</button>
  //         </nav>

  //         {this.renderPage()}
  //       </div>
  //     );
  //   }

  render() {
    return (
      <div>
        {/* <Counter />  */}
        <Car />
      </div>
    )
  }
}

export default App;
