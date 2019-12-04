import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
					<Welcome />
				</p>
			</header>
		</div>
	);
}

const Welcome = () => {
  return (
    <h1 className="App-title">Welcome</h1>
  );
}

export default App;
