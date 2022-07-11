import { Link, useLocation } from 'react-router-dom';
import s from './MoviesListTrend.module.css';

export const MoviesListTrend = ({ moviesTrend }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {moviesTrend.map(({ id, original_title }) => (
        <li key={id} className={s.item}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
