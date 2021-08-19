import * as yup from "yup"

const schema = yup.object().shape({
    name: yup.string().trim().required('Name is required.').min(3, 'Name must be at least 3 characters long.'),
    email: yup.string().trim().email('Email address must be valid.').required('Email is required'),
    password: yup.string().trim().required('Password is required.'),
    agree: yup.boolean().oneOf([true], "You must agree to the terms to continue."),
})

export default schema