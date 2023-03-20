import React from 'react';
import getSearchMovies from 'Fetch/getSearchMovies.jsx';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesPageList from 'components/MoviesPageList/MoviesPageList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const { search } = useLocation();
   const query = new URLSearchParams(search).get('query') ?? '';
  const [movies, setMovies] = useState(null);
 

 useEffect(() => {
    if (!query) return;
    getSearchMovies(query)
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [query]);

  return (
    <>
     <SearchForm  />
     {movies && (
        <div>
          <MoviesPageList query={query} movies={movies} />
        </div>
      )}
    </>
  );
};

export default Movies;
