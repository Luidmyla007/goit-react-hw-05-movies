async function getSearchMovies(query, page = 1) {
  const key = '51114562faac57108ae3113fba230ec4';
  const url = `https://api.themoviedb.org/3/search/movie`;
  const filter = `?api_key=${key}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json(); 
    return data.results;        
}

export default getSearchMovies;