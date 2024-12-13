import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value)); 
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="filter">Find contacts by name:</label>
      <input
        type="text"
        id="filter"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
