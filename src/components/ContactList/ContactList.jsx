import React from 'react';
import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact.jsx";
import styles from './ContactList.module.css'

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const visibleContacts = filter
    ? contacts.filter((c) => c.name.toLowerCase().includes(filter.toLowerCase()))
    : contacts;

  return (
    <div className={styles.list}>
      {visibleContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  );
};

export default ContactList;