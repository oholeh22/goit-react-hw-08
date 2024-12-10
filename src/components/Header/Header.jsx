import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <div className={css.navLeft}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.activeLink : css.link)}
          >
            Home
          </NavLink>
        </div>
        <div className={css.navRight}>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? css.activeLink : css.link)}
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? css.activeLink : css.link)}
          >
            LogIn
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;

