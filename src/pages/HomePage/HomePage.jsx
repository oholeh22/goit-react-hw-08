import { useSelector } from 'react-redux';
import css from './HomePage.module.css';

const HomePage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className={css.home}>
      {isLoggedIn ? (
        <p className={css.message}>Go to the <span className={css.highlight}>Contacts</span></p>
      ) : (
        <h1 className={css.title}>Welcome to our service!<p className={css.par}>Register or Log in</p></h1>
      )}
    </div>
  );
};

export default HomePage;

