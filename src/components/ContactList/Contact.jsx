import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import style from './ContactList.module.css';

export default  function Contact({ id, name, number }) {
   const dispatch = useDispatch();

   const handleDelete = () => dispatch(deleteContact(id));

   return (
          <div className={style.contacts}>
           <span className={style.contactsText}>
             {name}  :  {number} 
            </span>
             <button
               className={style.deleteBtn}
               type="submit"
               name={name}
               onClick={() => handleDelete(id)}
            >
               Delete
             </button>
          </div>
   );
}

Contact.propTypes = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
 };