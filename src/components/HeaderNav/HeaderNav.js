import { NavLink } from 'react-router-dom';
import s from './HeaderNav.module.css';
export const HeaderNav = () => {
  return (
    <nav className={s.header}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Movies
      </NavLink>
    </nav>
  );
};
