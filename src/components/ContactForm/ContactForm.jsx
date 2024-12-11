import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';;
import css from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^[0-9-]+$/, "The number must contain only numbers and dashes")
    .min(7, 'Too short number!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values)); 
    resetForm(); 
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" placeholder="Enter your name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        
        <div className={css.field}>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" id="number" placeholder="Enter your phone" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>
        
        <button type="submit" className={css.btn}>Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;