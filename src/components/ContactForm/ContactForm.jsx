import { useDispatch, useSelector } from 'react-redux';
import {  selectItems } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import style from './ContactForm.module.css';

export default function ContactForm() {


   const dispatch = useDispatch();
   const items = useSelector(selectItems);


   const handleSubmit = evt => {
      evt.preventDefault();
      const form = evt.currentTarget;
      const name = form.elements.name.value;
      const number = form.elements.number.value;
      const nameArray = items.map(item => item.name);
      if (nameArray.includes(name)) {
        return alert(`${name} is already in contacts.`);
      }
      dispatch(addContact({ name, number }));
      form.reset();
    };

  
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={style.label}>
        Number
        <input
          className={style.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={style.submit} type="submit">
        Add contact
      </button>
    </form>
  );
}
