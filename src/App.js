import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

const movies = [
  {
    id: 1,
    title: 'Star Wars',
    desc: 'Space Western'
  },
  {
    id: 2,
    title: 'Spider-Man',
    desc: 'default'
  },
  {
    id: 3,
    title: '36th Chamber of Shaolin',
    desc: 'default'
  }
];

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
				</header>
				{movies.map(movie => ( <Movie key={movie.id} movie={movie} desc={movie.desc}/> ))}
			</div>
		);
  }
}

export default App;
