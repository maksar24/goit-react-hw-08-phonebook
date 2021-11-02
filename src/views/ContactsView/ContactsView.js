import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "../../components/Form/Form";
import { ContactList } from "../../components/ContactList/ContactList";
import { Filter } from "../../components/Filter/Filter";
import { CustomLoader } from "../../components/Loader/Loader";
import {
  getFilteredContacts,
  getLoading,
} from "../../redux/contacts/contacts-selectors";
import {
  fetchContactsAction,
  deleteContactAction,
  addContactAction,
} from "../../redux/contacts/contacts-operations(axios)";

export default function ContactsView() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getLoading);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  const deleteContact = (id) => dispatch(deleteContactAction(id));

  const getSearchName = (e) => {
    setFilter(e.target.value);
  };

  function addNewContact(newContact) {
    const similarName = contacts.map((el) => el.name);

    if (similarName.includes(newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addContactAction(newContact));
    }
  }

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={addNewContact} />
      <h2>Contacts</h2>
      <Filter getSearchName={getSearchName} label="Enter contact name" />
      {isLoading && <CustomLoader />}
      {contacts && <ContactList options={contacts} onDelete={deleteContact} />}
    </>
  );
}
