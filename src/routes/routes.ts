import {RegisterPage,FormikBasicPage,FormikYupPage,FormikComponents,FormikAbstractation, RegisterFormikPage} from '../forms/pages'
import { DynamicFormikPage } from '../forms/pages/DynamicFormikPage';

interface Route {
    to: string;
    path: string;
    name: string;
    Component?: ()=> JSX.Element;
}

export const routes: Route[] = [
    {
        to: '/register',
        path: 'register',
        name: 'Register',
        Component: RegisterPage
    },
    {
        to: '/formik-basic',
        path: 'formik-basic',
        name: 'Formik Basic',
        Component: FormikBasicPage
    },
    {
        to: '/formik-yup',
        path: 'formik-yup',
        name: 'Formik Yup',
        Component: FormikYupPage
    },
    {
        to: '/formik-components',
        path: 'formik-components',
        name: 'Formik Components',
        Component: FormikComponents
    },
    {
        to: '/formik-abstractation',
        path: 'formik-abstractation',
        name: 'Formik Abstractation',
        Component: FormikAbstractation
    },
    {
        to: '/register-formik',
        path: 'register-formik',
        name: 'Register Formik',
        Component: RegisterFormikPage
    },
    {
        to: '/dynamicForm-formik',
        path: 'dynamicForm-formik',
        name: 'Dynamic Form with Formik',
        Component: DynamicFormikPage
    },
    {
        to: '/about',
        path: 'about',
        name: 'About'
    },
    {
        to: '/users',
        path: 'users',
        name: 'Users'
    },
];