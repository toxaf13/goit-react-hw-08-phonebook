import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" required title='Tom Hanks' />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" title='example@email.com' required/>
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" title='Minimum 7 characters' minLength='7' required/>
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
