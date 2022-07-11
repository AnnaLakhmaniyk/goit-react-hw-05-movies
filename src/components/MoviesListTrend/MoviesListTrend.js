import s from './MoviesListTrend.module.css';

export const MoviesListTrend = ({ moviesTrend }) => {
  return (
    <ul className={s.list}>
      {moviesTrend.map(({ id, original_title }) => (
        <li key={id} className={s.item}>
          {original_title}
        </li>
      ))}
    </ul>
  );
};
