import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

// dummy data
// const movies = [
//   {
//     id: 1,
//     title: 'Star Wars',
//     desc: 'Space Western'
//   },
//   {
//     id: 2,
//     title: 'Spider-Man',
//     desc: 'default'
//   },
//   {
//     id: 3,
//     title: '36th Chamber of Shaolin',
//     desc: 'default'
//   }
// ];

class App extends Component {
  // needs initial state
	state = {
	  movies: [],
	};

	// real data
	async componentDidMount() {
	  try {
	    const response = await fetch(
	      'https://api.themoviedb.org/3/discover/movie?api_key=e71760c36ffdf0f10ed5e0db6873ceb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
	    );
	    const movies = await response.json();
	    this.setState({
	      movies: movies.results,
	    });
	  } catch (e) {
	    console.log(e);
	  }
	}

	updateInput = (event) => {
	  console.log(event.target.value);
	  this.setState({
	    input: event.target.value.trim(), // trim() makes it so a user cannot spacebar in an input
	  });
	};

	submit = () => {
	  console.log(this.state.input);
	};

	// componentMounts()
	render() {
	  return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    {this.state.movies.map((movie) => (
      <Movie key={movie.id} movie={movie} />
    ))}
  </div>
	  );
	}
}

export default App;
