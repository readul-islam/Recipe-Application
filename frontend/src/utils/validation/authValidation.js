import { object, string, } from 'yup';

const loginValidationSchema = object({
    email: string().email("Invalid Email !").required("Please Enter Email!"),
})



export {
    loginValidationSchema
}