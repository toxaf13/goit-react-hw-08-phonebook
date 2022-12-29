import Contact from './Contact';
import style from './ContactList.module.css';
import { selectItems } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';


export default function  ContactList  () {


   const contactsItem = useSelector(selectItems);

      return (
         <ul className={style.list}>
           {contactsItem.map( ({id,name,number}) => (
            <li key = {id}>
               <Contact id={id} name={name} number={number}/>  
            </li>
             ))}
         </ul>
       );
    }  

