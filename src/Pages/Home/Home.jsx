import { useState, useEffect } from 'react';
import getTrending from 'Fetch/getTrending.jsx';
import  MoviesList  from 'components/MovieList/MovieList';

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
    movies && (     
        <MoviesList movies={movies} />     
    )
  );
}

export default Home;