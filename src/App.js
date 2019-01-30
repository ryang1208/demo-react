import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  http from './server'

class App extends Component {

  componentWillMount() {
      this.handleQequest()
  }


  async handleQequest(){
    const res = await http.post('/api/hello')
    console.log(res)
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
