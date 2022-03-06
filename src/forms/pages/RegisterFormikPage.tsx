import { Form, Formik } from 'formik';
import '../styles/styles.css'
import * as Yup from 'yup';
import { TextInput } from '../components';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: ''
        }}
        onSubmit={values  => {
          alert(JSON.stringify(values));
        }}
        validationSchema={
          Yup.object({
            name: Yup.string()
              .required('Required')
              .min(2,'Min 2 characters')
              .max(15,'Max 15 characters')
            ,
            email: Yup.string()
              .required('Required')
              .email('Enter a valid email address')
            ,
            password1: Yup.string()
              .required('Required')
              .min(6,'Min 6 characters')
            ,
            password2: Yup.string()
              .required('Required')
              .min(6,'Min 6 characters')
              .oneOf([Yup.ref('password1')], 'Passwords must match')
          })
        }
      >
        {
          ({handleReset}) => (
            <Form>
              <TextInput 
                label='Name' 
                name='name'
                placeholder='enter your name'
                type='text'              
              />
              <TextInput 
                label='Email Address' 
                name='email'
                placeholder='enter your email'
                type='email'              
              />
              <TextInput 
                label='Password' 
                name='password1'
                placeholder='secret password'
                type='password'              
              />
              <TextInput 
                label='Confirm Password' 
                name='password2'
                placeholder='repeat your password'
                type='password'              
              />
              <button type='submit'>Create</button>
              <button type='button' onClick={handleReset}>Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}