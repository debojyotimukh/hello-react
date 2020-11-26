import React from 'react';
import './App.css';
import logo from './assets/BL_logo_square_png.png'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: ''
    }
    this.url = "http://www.bridgelabz.com"
  }

  onClick = ($event) => {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("The value is: " + event.target.value);
    this.setState({ userName: event.target.value })
  }
  render() {
    return (
      <>
        <div>
          <h1>Hello {this.state.userName} from bridgelabz</h1>
          <img src={logo} onClick={this.onClick} alt="Bridbgelabz logo"></img>
        </div>
        <div>
            <input onChange={this.onNameChange}></input>
        </div>
      </>
    );
  }
}


export default App;
