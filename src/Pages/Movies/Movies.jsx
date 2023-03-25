import React from 'react';
import getSearchMovies from 'Fetch/getSearchMovies.jsx';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import no_image from '../../Images/no_image.png';
import { SearchContainer, SearchBar, SearchButton, SearchFormInput } from './Movies.styled';
import { SearchMoviesList, SearchMovItem, MyLink, SearchMovTitle } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const query = searchParams.get('query') ?? ''; 

 useEffect(() => {
    if (!query) return;
    getSearchMovies(query)
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
 }, [query]);
  
  const onSubmitForm = e => {
    if (!inputValue) {
      setMovies([]);
      return;
    };
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams(
      inputValue !== '' ? { query: form.elements.query.value } : {}
    );
    setInputValue('');
    form.reset();
  };

   const onChangeInput = value => {
    setInputValue(value);
  };
    if (!movies) {
    return null;
  }; 
  

  return (
    <>
     <SearchContainer>
        <SearchBar  autoComplete="off" onSubmit={onSubmitForm}>
          <SearchButton type="submit" >
            <span >
              <AiOutlineSearch width="12px" height="12px"/>              
            </span>
          </SearchButton>

          < SearchFormInput            
            type="text"
            name="query" 
            value={inputValue}
            onChange={e => onChangeInput(e.currentTarget.value.toLowerCase())}
            autoFocus
            placeholder="Search movie"  
            size={40}
          />
        </SearchBar>
      </SearchContainer>  
      
      {movies.length > 0 && (
        <SearchMoviesList>
          {movies.map(({ id, title, poster_path }) => (
            <SearchMovItem key={id} >
              <MyLink to={`/movies/${id}`} state={{ from: location }}>
              <SearchMovTitle>{title}</SearchMovTitle>
              {poster_path === null ? (
                <img src={no_image} alt={title} />
              ) : (
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
              )}
              </MyLink>
            </SearchMovItem>
          ))}
        </SearchMoviesList>
      )}
    </>
  );
};

export default Movies;

