import { IoPersonSharp, IoCallSharp } from 'react-icons/io5';
import css from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.contactItem}>
      <div className={css.contactInfo}>
        <p className={css.user}>
          <IoPersonSharp className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <IoCallSharp className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;