import '../styles/styles.css'
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
  const {formValues,onChange,onSubmit,reset,isValidEmail} = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
});
  const {name,email,password1,password2} = formValues;
  return (
    <div>
      <h1>RegisterPage</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='name'
          value={name}
          onChange={onChange}
          name='name'
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>El nombre es obligatorio</span>}
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={onChange}
          name='email'
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>El email no es correcto</span>}
        <input
          type='password'
          placeholder='password'
          value={password1}
          onChange={onChange}
          name='password1'
        />
        {password1.trim().length <= 0 && <span>El password 1 es obligatorio</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && <span>El password 1 tiene que tener minimo 6 caracteres</span>}
        <input
          type='password'
          placeholder='confirm password'
          value={password2}
          onChange={onChange}
          name='password2'
        />
        {password2.trim().length <= 0 && <span>El password 2 es obligatorio</span>}
        {password2.trim().length > 0 && password2 !== password1 && <span>El password 2 tiene que ser igual al password 1</span>}
        <button type="submit">Register</button>
        <button type="button" onClick={reset}>Reset</button>
      </form>
    </div>
  )
}