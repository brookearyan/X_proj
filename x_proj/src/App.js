import React, { Component } from 'react';
import './App.css';
import ZipInfo from './ZipInfo'
import User from './User'



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to TaxPax</h1>
        </header>
      <div>
        <br /><br />
        <ZipInfo />
        <User />
      </div>
      </div>
    );
  }
}

export default App;
