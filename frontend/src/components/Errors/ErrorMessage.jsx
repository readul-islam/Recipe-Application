import React from 'react';
import { ErrorMessage as FormikErrorMessage } from 'formik';
const ErrorMessage = ({ name }) => {
	return (
		<div className="absolute -bottom-5 left-1">
			<FormikErrorMessage name={name}>
				{(errorMessage) => (
					<span className="text-red-900 text-[11px] font-serif">{errorMessage}</span>
				)}
			</FormikErrorMessage>
		</div>
	);
};

export default ErrorMessage;
