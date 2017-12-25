import React, { Component } from 'react';
import './App.css';
import ZipInfo from './ZipInfo'
import User from './User'



class App extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to TaxPax</h1>
        </header>

        <table className="container">
        <ZipInfo />
        <User />
      </table>
    </div>
    );
  }
}

export default App;
