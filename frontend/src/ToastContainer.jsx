import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer as Container } from 'react-toastify';
const ToastContainer = () => {
	return (
		<>
			<Container
				position="top-right"
				autoClose={300}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition="Slide"
			/>
		</>
	);
};

export default ToastContainer;
