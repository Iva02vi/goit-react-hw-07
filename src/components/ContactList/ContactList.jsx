import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

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
