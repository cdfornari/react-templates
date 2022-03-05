import { Formik,Form } from 'formik'
import * as Yup from 'yup'
import {CheckboxInput,SelectInput,TextInput} from '../components'
import '../styles/styles.css'

export const FormikAbstractation = () => {
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
                            <TextInput 
                                label='First Name' 
                                name='firstName'
                                placeholder='First Name'
                            />

                            <TextInput 
                                label='Last Name' 
                                name='lastName'
                                placeholder='Last Name'
                            />

                            <TextInput 
                                label='Email Address' 
                                name='email'
                                placeholder='Email'
                                type='email'
                            />

                            <SelectInput
                                label='Job Type'
                                name='jobType'
                            >
                                <option value=''>Select something</option>
                                <option value='developer'>Developer</option>
                                <option value='designer'>Designer</option>
                                <option value='itSenior'>IT Senior</option>
                                <option value='itJunior'>IT Junior</option>
                            </SelectInput>

                            <CheckboxInput 
                                label='Terms & Conditions'
                                name='terms'
                            />

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}