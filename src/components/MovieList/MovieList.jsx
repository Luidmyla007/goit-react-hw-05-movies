import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListWrapper, MovTitle, MovItem } from './MovieList.styled';


function MovieList({ movies, location }) {
  return (
    <ListWrapper>
       {movies &&
        movies.map(movie => (
          <MovItem key={movie.id} >
            <Link              
              to={`movies/${movie.id}`}
              state={{ from: location }}
            >
              <MovTitle>{movie.title}</MovTitle>            
                <img                  
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />              
            </Link>
          </MovItem>
        ))}
    </ListWrapper>
  );
}

MovieList.prototype = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      title: propTypes.string,
      poster: propTypes.string,
      voteAverage: propTypes.number,
      voteCount: propTypes.number,
    }),
  ).isRequired,
};

export default MovieList;