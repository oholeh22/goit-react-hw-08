import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenu}>
      <p className={css.greeting}>Welcome, {user?.name}!</p>
      <button type="button" onClick={handleLogout} className={css.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

