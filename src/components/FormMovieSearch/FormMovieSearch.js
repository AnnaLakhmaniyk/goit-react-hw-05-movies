import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './FormMovieSearch.module.css';

export const FormMovieSearch = ({ onSubmit }) => {
  const [movieSearch, setMovieSearch] = useState('');
  const handleChange = evt => {
    setMovieSearch(evt.target.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (movieSearch.trim() === '') {
      return;
    }
    onSubmit(movieSearch);
    setMovieSearch('');
  };
  return (
    <form onSubmit={handleSubmit} className={s.searchForm}>
      <input
        className={s.input}
        type="text"
        name="query"
        value={movieSearch}
        onChange={handleChange}
      />
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
};

FormMovieSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
