import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    desc: PropTypes.string
  }

  static defaultProps = {
    desc: 'Description not available'
  }

  render() {
    const { movie, desc } = this.props;
    return (
      <div>
        <h3>{movie.title}</h3>
        <p>{desc}</p>
      </div>
    );
  }
}