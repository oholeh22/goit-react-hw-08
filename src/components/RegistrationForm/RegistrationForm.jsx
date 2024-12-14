import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import css from './RegistrationForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res?.user?.name}!`);
        navigate('/contacts'); 
      })
      .catch(() => {
        toast.error('Oops! Something went wrong. Please try again.');
      });
    resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Register</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            name="name"
            placeholder="Enter your name"
          />
          <Field
            className={css.input}
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          <Field
            className={css.input}
            name="password"
            placeholder="Enter your password"
            type="password"
          />
          <button type="submit" className={css.submitButton}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
