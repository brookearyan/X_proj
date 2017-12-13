import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(ev) {
    ev.preventDefault();
    let zip = document.forms["zip-form"]["zip"].value;
    this.setState({ zipcode: zip });
    console.log(zip);
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://www.zipcodeapi.com/rest/XlalQH6kVoPgkQjAkDWKj3JTCESokMN134oprDwrEMItEUtlRWi8WHxHiqS8COyz/info.json/',
        end = '/degrees'
    fetch(proxyUrl + targetUrl + zip + end)
      .then(blob => blob.json())
      .then(data => {
        console.table(data);
        document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
        return data;
      })
      .catch(e => {
        console.log(e);
        return e;
      });
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
