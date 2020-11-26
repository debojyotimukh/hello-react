import React from 'react';
import './App.css';
import logo from './assets/BL_logo_square_png.png'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'Hello from bridgelabz!'
    }
    this.url = "http://www.bridgelabz.com"
  }

  onClick = ($event) => {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick} alt="Bridbgelabz logo"></img>
      </div>
    );
  }
}


export default App;
