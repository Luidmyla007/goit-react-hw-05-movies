import axios from 'axios';
const TOKEN = '51114562faac57108ae3113fba230ec4';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

async function getTrending(page) {
    const  result =  await axios('trending/movie/day', {
    params: {
      api_key: TOKEN,
      page,
    },
    }); 
     const trendsMov = result.data.results.map(
    ({ id, title, poster_path, vote_average }) => {
      return { id, title, poster_path, vote_average };
    }
  );
    return trendsMov;
};

export default getTrending;