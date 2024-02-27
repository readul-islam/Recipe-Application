import { ConnectedFocusError } from 'focus-formik-error';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import { useLoginMutation } from '../../../redux/features/auth/authApi';
import {
	setUser,
	userCurrentToken,
} from '../../../redux/features/auth/authSlice';
import { loginValidationSchema } from '../../../utils/validation/authValidation';
import GoogleAuth from '../GoogleAuth';
import ErrorMessage from '../../../components/Errors/ErrorMessage';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
const Login = () => {
	const dispatch = useDispatch();
	const formId = useId();
	const token = useSelector(userCurrentToken);
	const navigate = useNavigate();
	const [cookies, setCookie] = useCookies(['refresh-token']);
	const [remember, setRemember] = useState(true);
	const [addUser, { data, isError, error, isLoading }] = useLoginMutation();

	useEffect(() => {
		token && navigate('/app');
		// if (error) {
		// 	toast.error(error.data.message, {
		// 		position: 'top-right',
		// 		autoClose: 5000,
		// 		hideProgressBar: false,
		// 		closeOnClick: true,
		// 		pauseOnHover: true,
		// 		draggable: true,
		// 		progress: undefined,
		// 		theme: 'light',
		// 		transition: "Bounce",
		// 	});
		// }
	}, [token, error]);

	const submitHandler = async ({ email, password }) => {
		const res = await addUser({
			email,
			password,
		}).unwrap();

		if (res?.data) {
			console.log('inside =>', res.data);
			dispatch(
				setUser({ userInfo: res.data.userInfo, token: res.data.token.accessToken })
			);
			setCookie('refresh-token', res.data.token.accessToken);
		}
	};

	console.log(isError);

	return (
		<>
			<div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
				<div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
					<div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
						<div>
							<img src={Logo} className="w-mx-auto" />
						</div>
						<div className="mt-12 flex flex-col items-center">
							<div className="w-full flex-1 mt-8">
								<GoogleAuth />

								<div className="my-12 border-b text-center">
									<div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
										OR
									</div>
								</div>

								<Formik
									initialValues={{ email: '', password: '', remember: false }}
									onSubmit={submitHandler}
									enableReinitialize={true}
									validationSchema={loginValidationSchema}
								>
									{({ handleSubmit, setFieldValue, isSubmitting }) => (
										<Form
											id={formId}
											onSubmit={handleSubmit}
											className="mx-auto max-w-md"
										>
											<ConnectedFocusError />
											<div className="relative">
												<Field
													name="email"
													className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
													type="email"
													placeholder="Email"
												/>
												<ErrorMessage name="email" />
											</div>
											<Field
												name="password"
												className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
												type="password"
												placeholder="Password"
											/>

											<div className="flex items-center justify-between mt-5">
												<div className="inline-flex items-center">
													<div
														className="relative flex items-center  rounded-full cursor-pointer"
														htmlFor="remember"
													>
														<input
															onChange={(e) => {
																setRemember((pre) => !pre);
																setFieldValue('remember', remember);
															}}
															type="checkbox"
															name="remember"
															className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-amber-500 checked:bg-amber-500 checked:before:bg-amber-500 hover:before:opacity-10"
															id="remember"
														/>
														<span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="h-3.5 w-3.5"
																viewBox="0 0 20 20"
																fill="currentColor"
																stroke="currentColor"
																strokeWidth="1"
															>
																<path
																	fillRule="evenodd"
																	d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																	clipRule="evenodd"
																></path>
															</svg>
														</span>
													</div>
													<div className="ml-1 text-sm">
														<label
															htmlFor="remember"
															className="text-gray-500 dark:text-gray-300 cursor-pointer"
														>
															Remember me
														</label>
													</div>
												</div>
												<a
													href="#"
													className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
												>
													Forgot password?
												</a>
											</div>

											<button
												disabled={isSubmitting}
												type="submit"
												className="mt-5 tracking-wide font-semibold bg-primary-default text-white-500 w-full py-3 rounded-md hover:bg-primary-light/70 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
											>
												<span className=" text-white">Sign In</span>
											</button>

											<p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
												Don’t have an account yet?{' '}
												<Link
													to="/register"
													className="font-medium text-primary-600 hover:underline dark:text-primary-500"
												>
													Sign up
												</Link>
											</p>
										</Form>
									)}
								</Formik>
							</div>
						</div>
					</div>
					<div className="flex-1 bg-green-100 text-center hidden lg:flex">
						<div
							className="w-full relative bg-cover bg-center  bg-no-repeat"
							style={{
								backgroundImage: 'url(https://i.ibb.co/m8fr6L4/3739244.jpg)',
								backgroundSize: 'cover',
							}}
						>
							<div className="absolute w-full h-full bg-black/5"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
