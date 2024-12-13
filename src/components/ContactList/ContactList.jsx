import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters); 

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (!contacts) {
      return [];
    }
    const normalizedFilter = filter ? filter.toLowerCase() : '';
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (!contacts.length) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <span className={css.name}>{name}</span>
          <span className={css.number}>{number}</span>
          <button
            className={css.button}
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;


