// A pure component only renders when a 1st level
// prop has been changed.  A component's render
// cycle only renders again when the state has changed
// or when the props coming in to a component
// has changed.  A normal component does deep checking
// if your prop has a data structure, the components
// will know when anything nested in that data has changed
// if you have nested data, and everytime the component
// props check if something has changed, you can
// imagine that deep checking is a little more
// expensive performance wise.

// The only time this component needs to refresh
// is when there is a state change, therefore it
// can be a pure component.

// A pure component does not do deep checking in
// complex data structures.  A pure component checks
// for changes in primitive data sets.
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Movie from './Movie';

class MoviesList extends PureComponent {
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
