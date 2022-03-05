import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikYupPage = () => {
    const {
        handleSubmit,errors,touched,getFieldProps
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values  => {
          alert(JSON.stringify(values))  
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15,'Maximo 15 caracteres')
                .required('Requerido')
            ,
            lastName: Yup.string()
                .max(10,'Maximo 10 caracteres')
                .required('Requerido')
            ,
            email: Yup.string()
                .email('Email invalido')
                .required('Requerido')
        })
    });
    return (
        <div>
            <h1>Formik Yup Page</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                <label htmlFor='email'>Email Address</label>
                <input type='email' {...getFieldProps('email')} />
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}