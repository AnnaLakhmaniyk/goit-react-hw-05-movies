import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        value={movieSearch}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
