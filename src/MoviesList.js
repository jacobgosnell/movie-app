import React, { Component } from 'react';
import styled from 'styled-components';

import Movie from './Movie';

class MoviesList extends Component {
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
    <MovieGrid>
      {this.state.movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
    </MovieGrid>
	  );
	}
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
