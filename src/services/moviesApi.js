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
const getCastInfo = async movie_id => {
  const cast = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${KEY}`
  );
  return cast.data.cast;
};
const getReviewsInifo = async movie_id => {
  const reviews = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${KEY}`
  );
  return reviews.data.results;
};
const getMovieSearch = async query => {
  const movie = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return movie.data.results;
};

export {
  getTrendingMovies,
  getMoviePageInfo,
  getCastInfo,
  getReviewsInifo,
  getMovieSearch,
};
