import { FaPhoneAlt, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contactInfo: { id, name, number } }) => {
  const dispatch = useDispatch();

  const formatNumber = (inputNumber) => {
    const pattern = /(\d{3})(\d{2})(\d{2})/;
    const formatedNumber = inputNumber.replace(pattern, "$1-$2-$3");
    return formatedNumber;
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.item}>
      <div className={css.info}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {formatNumber(number)}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;
