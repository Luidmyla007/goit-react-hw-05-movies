async function getMovieCast(movieId) {
  const key = '51114562faac57108ae3113fba230ec4';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const filter = `?api_key=${key}&language=en-US`;
 
  const response = await fetch(`${url}${filter}`);
  const data = await response.json();  
  return data.cast;
}

export default getMovieCast;