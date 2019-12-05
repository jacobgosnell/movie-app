import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    input: 'Hello'
  }

  updateInput = (event) => {
    console.log(event.target.value)
    this.setState({
      input: event.target.value.trim() // trim() makes it so a user cannot spacebar in an input
    })
  }

  submit = () => {
    console.log(this.state.input)
  }

  //componentMounts()
  render() {
    return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<Welcome text="Welcome to Using Props" />
          <h3>{this.state.input}</h3>
          <input type="text" onChange={this.updateInput} value={this.state.input} />
          <input type="email" ref={(input) => this.email = input } />
					<button onClick={this.submit}>Show Value</button>
				</header>
			</div>
		);
  }
}

class Welcome extends Component {
  render() {
    const { text, toggle } = this.props;
    console.log(toggle);
    return (
      <h1 className="App-title">{text}</h1>
    );
  }
}

export default App;
