import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contactsOps';
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts); 
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactList}>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p className={css.error}>Error: {error}</p>}

      {filteredContacts.length > 0 ? (
        <ul className={css.contacts}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={css.contactItem}>
              <span>{name}: {number}</span>
              <button
                onClick={() => dispatch(deleteContact(id))}
                className={css.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && <p>No contacts found</p>
      )}
    </div>
  );
};

export default ContactList;