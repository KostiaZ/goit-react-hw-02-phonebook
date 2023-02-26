import css from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.item} key={id}>
        <p>
          {name}.....{number}
        </p>
        <button
          className={css.button}
          type="submit"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
