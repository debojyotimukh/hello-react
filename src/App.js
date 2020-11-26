import React from 'react';
import './App.css';
import logo from './assets/BL_logo_square_png.png'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'Hello from bridgelabz!'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} alt="Bridbgelabz logo"></img>
      </div>
    );
  }
}


export default App;
