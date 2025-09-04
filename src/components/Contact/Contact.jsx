import React from 'react';
import styles from './Contact.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
      </div>
      <button
        className={styles.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >Delete
      </button>
    </div>
  );
};

export default Contact;