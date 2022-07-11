import { useParams } from 'react-router-dom';
import { getCastInfo } from 'services/moviesApi';
import { useState, useEffect } from 'react';
import s from './Cast.module.css';

export const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  //   console.log(casts);
  useEffect(() => {
    getCastInfo(movieId).then(data => setCasts(data));
  }, [movieId]);
  return (
    <div className={s.wrap}>
      <ul className={s.list}>
        {casts.map(({ id, name, profile_path }) => (
          <li key={id} className={s.item}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : 'https://sd.keepcalms.com/i-w600/sorry-poster-is-missing.jpg'
              }
              alt={name}
              width="150"
              height="200"
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
