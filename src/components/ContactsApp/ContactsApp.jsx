// import React, { useEffect } from 'react';
// import ContactsForm from '../ContactsForm/ContactsForm';
// import ContactsList from '../ContactsList/ContactsList';
// import Filter from '../Filter/Filter';
// import css from './ContactsApp.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import { getError, getIsLoading } from 'redux/contacts/selectors';

// export const ContactsApp = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.section}>
//       <h1 className={css.sectionTitel}>Phonebook</h1>
//       <ContactsForm />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <h2 className={css.sectionTitel}>Contacts</h2>
//       <Filter />
//       <ContactsList />
//     </div>
//   );
// };
