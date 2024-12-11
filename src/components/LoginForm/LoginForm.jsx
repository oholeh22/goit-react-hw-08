import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { login } from '../../redux/auth/operations'; 
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome back, ${res?.user?.name}!`);
        navigate('/dashboard'); 
      })
      .catch(() => {
        toast.error('Invalid email or password. Please try again.');
      });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Email
          <Field name="email" type="email" className={css.input} />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>
        <label className={css.label}>
          Password
          <Field name="password" type="password" className={css.input} />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>
        <button type="submit" className={css.button}>Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

