import { NavLink } from 'react-router-dom';
import s from './HeaderNav.module.css';
export const HeaderNav = () => {
  return (
    <nav className={s.header}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.active : s.unactive)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? s.active : s.unactive)}
      >
        Movies
      </NavLink>
    </nav>
  );
};
