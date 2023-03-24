import React from 'react';
import getSearchMovies from 'Fetch/getSearchMovies.jsx';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesPageList from 'components/MoviesPageList/MoviesPageList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
 const [movies, setMovies] = useState(null);
 const [searchParams, setSearchParams] = useSearchParams();
 const query = searchParams.get('query') ?? '';
 
  const formSubmit = inputQuery => {
    setMovies([]);
    setSearchParams(inputQuery !== '' ? { query: inputQuery } : {});
  };

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
     <SearchForm  onSubmit={formSubmit} />
     {movies && (
        <div>
          <MoviesPageList query={query} movies={movies} />
        </div>
      )}
    </>
  );
};

export default Movies;
