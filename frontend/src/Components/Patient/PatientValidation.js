import * as Yup from 'yup'

const phoneNumberRule = /^(?:\+92|0)[1-9]\d{8}$/
export const PatientValidation = Yup.object().shape(
    {
        name: Yup.string().required("Name is required"),
        city: Yup.string().required("City is required"),
        email : Yup.string().email("Please enter a valid email").required("Email is required"),
        age : Yup.number().positive().integer().required("Age is required"),
        phone_no : Yup.string()
                    .matches(phoneNumberRule, 'Invalid phone number')
                    .required('Phone number is required'),
        password : Yup.string().min(5, 'Password must be at least 5 characters').required('Password is required')
    }
)