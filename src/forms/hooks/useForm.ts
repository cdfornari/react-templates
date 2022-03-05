import { useState, ChangeEvent, FormEvent } from 'react';
export const useForm = <T>(initialValues: T) => {
    const [formValues, setFormValues] = useState(initialValues)
    const onChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setFormValues(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(JSON.stringify(formValues))
    }
    const reset = () => {
        setFormValues({
            ...initialValues
        })
    }
    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    return {
        formValues,
        onChange,
        onSubmit,
        reset,
        isValidEmail
    }
}