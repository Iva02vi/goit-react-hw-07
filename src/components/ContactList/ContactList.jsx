import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
  );

  return filteredContacts.length !== 0 ? (
    <ul className={css.list}>
      {filteredContacts.map((item) => (
        <li key={item.id} className={css.item}>
          <Contact contactInfo={item} />
        </li>
      ))}
    </ul>
  ) : (
    <p>Phonebook is empty!</p>
  );
};

export default ContactList;
