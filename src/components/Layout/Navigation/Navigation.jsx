import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

