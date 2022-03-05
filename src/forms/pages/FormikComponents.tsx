import { Formik,Form,Field, ErrorMessage, } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Components</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={values  => {
                    alert(JSON.stringify(values));
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15,'Maximo 15 caracteres')
                            .required('Required')
                        ,
                        lastName: Yup.string()
                            .max(10,'Maximo 10 caracteres')
                            .required('Required')
                        ,
                        email: Yup.string()
                            .email('Email invalido')
                            .required('Required')
                        ,
                        terms: Yup.boolean()
                            .oneOf([true], 'Should accept terms')
                        ,
                        jobType: Yup.string()
                            .required('Required')
                            .notOneOf(['itJunior'], 'Not available')
                    })

                }
            >
                {
                    formik => (
                        <Form>
                            <label htmlFor='firstName'>First Name</label>
                            <Field name='firstName' type='text'/>
                            <ErrorMessage name='firstName'component='span' />

                            <label htmlFor='lastName'>Last Name</label>
                            <Field name='lastName' type='text' />
                            <ErrorMessage name='lastName'component='span' />

                            <label htmlFor='email'>Email Address</label>
                            <Field name='email' type='text' />
                            <ErrorMessage name='email'component='span' />

                            <label htmlFor='jobType'>Job Type</label>
                            <Field name='jobType' as='select' >
                                <option value=''>Select something</option>
                                <option value='developer'>Developer</option>
                                <option value='designer'>Designer</option>
                                <option value='itSenior'>IT Senior</option>
                                <option value='itJunior'>IT Junior</option>
                            </Field>
                            <ErrorMessage name='jobType'component='span' />

                            <label>
                                <Field name='terms' type='checkbox' />
                                Terms & Conditions
                            </label>
                            <ErrorMessage name='terms'component='span' />

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}