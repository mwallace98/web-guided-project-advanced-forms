// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username Required')
    .min(3, 'Username must be 3 Characters'),
    email: yup
    .string()
    .email('must be a valid email')
    .required('must have a valid email'),
    role: yup
    .string()
    .oneOf(['instructor','student','alumni'], 'Role is required'),
    civil: yup
    .string()
    .oneOf(['married', 'single'],' Status is Required'),
    coding: yup.boolean(),
    reading: yup.boolean(),
    hiking: yup.boolean()
})

export default formSchema
