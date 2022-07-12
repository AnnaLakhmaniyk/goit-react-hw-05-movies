import { getTrendingMovies } from 'services/moviesApi';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import s from './Home.module.css';
const Home = () => {
  const [moviesTrend, setMoviesTrend] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(data => setMoviesTrend(data.data.results))
      .catch(error => console.log(error));
  }, []);
  return (
    <main className={s.container}>
      <h2 className={s.title}>Today trend movies</h2>
      <MoviesList movies={moviesTrend} />
    </main>
  );
};
export default Home;
