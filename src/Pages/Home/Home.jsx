import { useState, useEffect } from 'react';
import getTrending from 'Fetch/getTrending.jsx';
import MoviesList from 'components/MovieList/MovieList';
import { MainTitle } from './Home.styled';

function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending()
      .then(setMovies)
        .catch(function (error){
          console.log('Error:' + error);
        });    
  }, []);

  return (
     <>
      <MainTitle>Trending today</MainTitle>        
      <MoviesList movies={movies} />       
      </>
  );
}

export default Home;