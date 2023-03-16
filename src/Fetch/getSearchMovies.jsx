async function getSearchMovies(query, page = 1) {
  const key = 'd783920aea034ba2adae6031a0bf96c0';
  const url = `https://api.themoviedb.org/3/search/movie`;
  const filter = `?api_key=${key}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const response = await fetch(`${url}${filter}`).then(response => {
      if (!response.ok) {
        throw new Error('Oops, there is no movie with that name');
      }
      return response.json();
    }) ;  
}

export default getSearchMovies;