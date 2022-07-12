import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { getMovieSearch } from 'services/moviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const MovieSearch = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const location = useLocation();
  const movieName = searchParams.get('query');

  const handleSubmit = evt => {
    evt.preventDefault();

    setSearchParams({
      query: evt.target.elements.query.value.toLowerCase().trim(),
    });
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    getMovieSearch(movieName)
      .then(data => {
        console.log(data);
        setSearchMovie(data);
        // if (data.length === 0) {
        //   console.log(`Sorry`);
        //   return;
        // }
      })
      .catch(error => console.log(error));
  }, [movieName]);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <Link to={location?.state?.from ?? '/movie'}></Link>
      {searchMovie && <MoviesList movies={searchMovie} />}
    </main>
  );
};
