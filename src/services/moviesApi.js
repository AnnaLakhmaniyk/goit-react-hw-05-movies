import axios from 'axios';

const KEY = '29f2b26971cec73ce1bc0467b59149a2';

const getTrendingMovies = async () => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
  );
  return data;
};

const getMoviePageInfo = async movie_id => {
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY}`
  );
  return movie.data;
};

export { getTrendingMovies, getMoviePageInfo };
