import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    toggle: true
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
						<Welcome text="Welcome to Using Props" toggle={this.state.toggle}/>
					</p>

					{this.state.toggle && <p>This should show and hide</p>}
					<button onClick={this.toggle}>Show / Hide</button>
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
