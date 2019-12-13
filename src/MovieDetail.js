import React, { Component } from 'react';
import styled from 'styled-components';
import { Poster } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
	// needs initial state
	state = {
	  movie: {},
	};

	// real data
	async componentDidMount() {
	  try {
	    const response = await fetch(
	      `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=e71760c36ffdf0f10ed5e0db6873ceb8&language=en-US`,
	    );
	    const movie = await response.json();
	    this.setState({
	      movie,
	    });
	  } catch (e) {
	    console.log(e);
	  }
	}

	// componentMounts()
	render() {
	  const { movie } = this.state;
	  return (
			<MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
			</MovieWrapper>
	  );
	}
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
