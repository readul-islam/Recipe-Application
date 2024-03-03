import { object, ref, string } from 'yup';

const loginValidationSchema = object({
	email: string().email('Invalid Email !').required('Please Enter Email!'),
});
const registerValidationSchema = object({
	email: string().email('Invalid Email !').required('Please Enter Email!'),
	password: string()
		.required()
		.min(6)
		.matches(RegExp('(.*[a-z].*)'), 'Minimum one Lowercase Letter')
		.matches(RegExp('(.*[A-Z].*)'), 'Minimum one Uppercase Letter')
		.matches(RegExp('(.*\\d.*)'), 'Minimum one Number')
		.matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), 'Minimum one Special character'),
	confirmPassword: string().oneOf(
		[ref('password'), null],
		'Passwords must match'
	),
});

export { loginValidationSchema, registerValidationSchema };
