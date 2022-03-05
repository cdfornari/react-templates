import { FormikErrors, FormikValues, useFormik } from 'formik'
import '../styles/styles.css'

export const FormikBasicPage = () => {
    const {handleChange,values,handleSubmit,errors,touched,handleBlur} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values  => {
          alert(JSON.stringify(values))  
        },
        validate: values => {
            const errors: FormikErrors<FormikValues> = {}
            if(!values.firstName.trim()){
                errors.firstName = 'Required'
            }else if(values.firstName.trim().length > 15){
                errors.firstName = 'The max is 15 characters'
            }
            if(!values.lastName.trim()){
                errors.lastName = 'Required'
            }else if(values.lastName.trim().length > 10){
                errors.lastName = 'The max is 10 characters'
            }
            if (!values.email.trim()) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        }
    });
    return (
        <div>
            <h1>Formik Basic Page</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input 
                    type='text'
                    name='firstName'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                <label htmlFor='lastName'>Last Name</label>
                <input 
                    type='text'
                    name='lastName'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                <label htmlFor='email'>Email Address</label>
                <input 
                    type='email'
                    name='email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}