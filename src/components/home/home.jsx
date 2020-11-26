import React from 'react'; 
import '../../App.css'
import './home.css';
import logo from '../../assets/BL_logo_square_png.png'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      nameError: ''
    }
    this.url = "http://www.bridgelabz.com"
  }

  onClick = ($event) => {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("The value is: " + event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');

    if (nameRegex.test(event.target.value)) {
      this.setState({ userName: event.target.value })
      this.setState({ nameError: '' });
    } else this.setState({ nameError: 'Name is invalid' });
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
          <span className='error-output'>{this.state.nameError}</span>
        </div>
        <div>
          <p>At Bridgelabz, we{'\''}re a techie community of</p>
          <ul>
            <li>technologists</li>
            <li>thinkers</li>
            <li>builders</li>
          </ul>
          <p>Working togather to keep the Tech Employability of Engineers alive and accessible, so Tech Companies worldwide can get contributers and creators for Technology Solutions. We believe that act of human collaboration accross an employability platform
        is essential to individual growth and our collective future</p>

          <p>To know about us, visit <a onClick={this.onClick}>BridgeLabz</a> to learn even more about our mission i.e.
        <strong> Employability to all</strong></p>
        </div>
      </>
    );
  }
}


export default Home;
