import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map(({ id, original_title }) => (
        <li key={id} className={s.item}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      original_title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
