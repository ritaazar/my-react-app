import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Increment from './Increment';

class App extends Component {

  constructor() {
    super();

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={this.handleClick}>Click me</button>
        {this.state.clicked ? <NewComponent /> : null}
        {this.state.clicked ? <Increment /> : null}
      </div>
    );
  }
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class NewComponent extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Rita" />
        <Welcome name="You" />
      </div>
    );
  }  
}

export default App;
