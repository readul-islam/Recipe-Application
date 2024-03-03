import React from 'react';
import { userCurrentToken } from '../../../redux/features/auth/authSlice';
import { useSelector } from 'react-redux';
import { Navigate, redirect } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
	const token = useSelector(userCurrentToken);
	console.log(token);
	if (!token) {
		return <Navigate to="/login" replace={true} />;
	}

	return children;
};

export default ProtectedRoute;
