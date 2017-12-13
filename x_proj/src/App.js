import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

document.addEventListener("DOMContentLoaded", function() {
  fetch("https://www.zipcodeapi.com/rest/XlalQH6kVoPgkQjAkDWKj3JTCESokMN134oprDwrEMItEUtlRWi8WHxHiqS8COyz/info.json/10016/degrees",
    {'Method': "GET",
    'Headers': {
      'Content-Type': 'application/json'
    }})
  .then(resp =>resp.json())
  .then(resp => console.log(resp));
})

async function bad() {
  try {
    await Promise.reject('bad');
  } catch(err) {
    console.log(err);
  }
}

bad();

  // function getCityState() {
  //   let apiUrl = "https://www.zipcodeapi.com/rest/XlalQH6kVoPgkQjAkDWKj3JTCESokMN134oprDwrEMItEUtlRWi8WHxHiqS8COyz/info.json/10016/degrees";
  //   fetch(apiUrl).then(resp => console.log(resp));
  // }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { zipcode: '' };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }




  handleOnSubmit(ev) {
    ev.preventDefault();
    let zip = document.forms["zip-form"]["zip"].value;
    this.setState({ zipcode: zip });
    console.log(this.state);
    // getCityState();
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <div>
      <br /><br />
      <form name="zip-form">
        <input type="text" name="zip"/>
        <br /><br />
        <input onClick={this.handleOnSubmit} type="submit" value="submit"/>
      </form>
      </div>
      </div>
    );
  }
}

export default App;
