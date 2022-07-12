import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieSearch } from 'services/moviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { FormMovieSearch } from 'components/FormMovieSearch/FormMovieSearch';
import s from './MovieSearch.module.css';
const MovieSearch = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const movieName = searchParams.get('query');

  const handleSubmit = query => {
    navigate({ search: `query=${query}` });
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    getMovieSearch(movieName)
      .then(data => {
        setSearchMovie(data);
        if (data.length === 0) {
          toast.error(`Sorry, not found`);
        }
      })
      .catch(error => console.log(error));
  }, [movieName]);

  return (
    <main className={s.wrap}>
      <FormMovieSearch onSubmit={handleSubmit} />
      {searchMovie && <MoviesList movies={searchMovie} />}
    </main>
  );
};
export default MovieSearch;
