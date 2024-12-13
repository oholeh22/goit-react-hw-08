import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/SearchBox/SearchBox';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={css.contactsPage}>
      <h1>Contacts</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
