import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.userMenu}>
      <p className={css.greeting}>Welcome, {user?.name}!</p>
      <button type="button" onClick={handleLogOut} className={css.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

