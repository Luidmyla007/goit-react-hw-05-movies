import React from 'react';
import PropTypes from 'prop-types';
import no_image from '../../Images/no_image.png';
import { Link } from 'react-router-dom';
import { SearchMoviesList, SearchMovItem, SearchMovTitle } from './MoviespageList.styled';

function MoviesPageList ({query,  movies })  {
  return (
    <SearchMoviesList>
      {movies &&
        movies.map(movie => (
          <SearchMovItem key={movie.id} >
            <Link
              to={`/movies/${movie.id}`}              
              state={{ from: `/movies?name=${query}` }}
            >
              <SearchMovTitle>{movie.title}</SearchMovTitle>              
              {movie.poster_path === null ? (
                <img                  
                  src={no_image }
                  alt={movie.title}
                />
              ) : (
                <img                  
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              )}      
            </Link>
          </SearchMovItem>
        ))}
    </SearchMoviesList>
  );
};

MoviesPageList.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.array,
};


export default MoviesPageList;