import React, { useId } from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from './ContactForm.module.css'
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const fieldId = useId()
  const dispatch = useDispatch();

  const userSchema = object({
    name: string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required!'),
    number: string()
      .trim()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/, 'Invalid phone format! Example: 645-17-79')
      .required('Required!')
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: Date.now().toString(), ...values }));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{
        name: '',
        number: ''
      }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label htmlFor={`${fieldId}-name`}>Name</label>
        <Field
          type='text'
          name='name'
          placeholder='Enter your name...'
          id={`${fieldId}-name`}
        />
        <ErrorMessage
          name='name'
          component='span'
          className={styles.error}
        />

        <label htmlFor={`${fieldId}-number`}>Number</label>
        <Field
          type='phone'
          name='number'
          placeholder='Enter your number...'
          id={`${fieldId}-number`}
        />
        <ErrorMessage
          name='number'
          component='span'
          className={styles.error}
        />

        <button
          type='submit'
          className={styles.button}
        >Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;