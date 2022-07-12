import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviePageInfo } from 'services/moviesApi';
import s from './MoviePageInfo.module.css';

export const MoviePageInfo = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const backHome = location?.state?.from || '/';
  useEffect(() => {
    getMoviePageInfo(movieId)
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <Link to={backHome}>
        <button className={s.btn} type="button">
          GO HOME
        </button>
      </Link>

      {movie && (
        <div className={s.wrap}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
            width="350px"
          />
          <div className={s.info}>
            <h1>
              {movie.original_title} {movie.release_date.slice(0, 4)}
            </h1>
            <p>User score: {movie.vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres.map(item => item.name).join(', ')}</p>
          </div>
        </div>
      )}
      <div className={s.dopInfo}>
        <div className={s.link}>
          <h2>Additional information</h2>
          <ul className={s.list}>
            <li>
              <Link to="cast" state={{ from: location?.state?.from ?? '/' }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location?.state?.from ?? '/' }}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};
