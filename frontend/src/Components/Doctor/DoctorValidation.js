import * as Yup from 'yup'

const phoneNumberRule = /^(\+92)?(0092)?(92)?(0)?(3)([0-9]{2})([0-9]{7})$/;

export const DoctorValidation = Yup.object().shape(
    {
        name: Yup.string().required("Name is required"),
        age : Yup.number().positive().integer().required("Age is required"),
        email : Yup.string().email("Please enter a valid email").required("Email is required"),
        city: Yup.string().required("City is required"),
        phone_no : Yup.string()
                    .matches(phoneNumberRule, 'Invalid phone number')
                    .required('Phone number is required'),
        password : Yup.string().min(5, 'Password must be at least 5 characters').required('Password is required'),
        gender: Yup.string().required('Gender is required').oneOf(['male', 'Male', 'Female', 'female'], 'Invalid gender'),
      speciality: Yup.string().required('Specialty is required'),
      experience: Yup.number().positive().required('Experience is required'),
      hospital_name: Yup.string().required('Hospital/Clinic name is required')
    }
)


