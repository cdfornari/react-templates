import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { SelectInput, TextInput } from '../components';
import JSONForm from '../data/custom-form.json'

const initialValues: {[key: string]: any} = {};
const requiredFields: {[key: string]: any} = {};
for (const input of JSONForm) {
    initialValues[input.name] = input.value;
    if(!input.validations) continue;
    let schema = Yup.string()
    for (const validation of input.validations) {
        if(validation.type === "required"){
            schema = schema.required("Required")
        }
        if(validation.type === "minLength"){
            schema = schema.min((validation as any).value || 2, `Minimo ${(validation as any).value || 2} caracteres`);
        }
        if(validation.type === "email"){
            schema = schema.email("Email invalido")
        }
    }
    requiredFields[input.name] = schema;
}
const validationSchema = Yup.object({...requiredFields})

export const DynamicFormikPage = () => {
  return (
    <div>
        <h1>Dynamic Formik Page</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={values  => {
                alert(JSON.stringify(values));
            }}
            validationSchema={validationSchema}
        >
            {
                formik => (
                    <Form noValidate>
                        {
                            JSONForm.map(({type,name,placeholder,label,options}) => {
                                if(type === "text" || type === "email" || type === "password"){
                                    return ( 
                                        <TextInput 
                                            key={name}
                                            type={type as any} 
                                            name={name} 
                                            label={label} 
                                            placeholder={placeholder}
                                        />
                                    )
                                }else if(type === "select"){
                                    return (
                                        <SelectInput
                                            key={name}
                                            name={name} 
                                            label={label}
                                        >
                                            <option value="">Select a game</option>
                                            {
                                                options?.map(({id,label}) => (
                                                    <option key={id} value={id}>{label}</option>
                                                ))
                                            }
                                        </SelectInput>
                                    )
                                }
                                throw new Error(`Type ${type} not supported`)
                            })
                        }
                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}