import React, { Component } from 'react';
import './App.css';
import ZipInfo from './ZipInfo'
import User from './User'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="app-logo">taxation</h1>
        </header>

      <table className="container">
        <User />
        <ZipInfo />
      </table>
    </div>
    );
  }
}

export default App;
