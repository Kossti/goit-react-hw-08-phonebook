import React, { useEffect } from 'react';
import ContactsForm from '../components/ContactsForm/ContactsForm';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import css from '../components/ContactsApp/ContactsApp.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { Helmet } from 'react-helmet';

export const ContactsApp = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.section}>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <h1 className={css.sectionTitel}>Phonebook</h1>
      <ContactsForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <h2 className={css.sectionTitel}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
