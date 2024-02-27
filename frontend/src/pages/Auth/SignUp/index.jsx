import React, { useEffect } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import GoogleAuth from '../GoogleAuth';
import { Field, Form, Formik } from 'formik';
import { registerValidationSchema } from '../../../utils/validation/authValidation';
import { ConnectedFocusError } from 'focus-formik-error';
import ErrorMessage from '../../../components/Errors/ErrorMessage';
import { useRegisterMutation } from '../../../redux/features/auth/authApi';
import { userCurrentToken } from '../../../redux/features/auth/authSlice';
import { useSelector } from 'react-redux';
const SignUp = () => {
	const navigate = useNavigate()
	const token = useSelector(userCurrentToken)
	const [addUser, {isError, error, isLoading}] = useRegisterMutation()
	const submitHandler = async ({password, email}) => {
		const res = await addUser({email, password, provider:"local"}).unwrap();
		res.code ==201 && navigate("/login")
	};
	useEffect(()=>{
		token && navigate("/app")
	},[token])
	return (
		<>
			{/* <!-- source:https://codepen.io/owaiswiz/pen/jOPvEPB --> */}
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
									initialValues={{ email: '', password: '', confirmPassword: '' }}
									onSubmit={submitHandler}
									enableReinitialize={true}
									validationSchema={registerValidationSchema}
								>
									{({ handleSubmit, isSubmitting, setFieldValue }) => (
										<Form autoComplete='true' onSubmit={handleSubmit}>
											<ConnectedFocusError />
											<div className="mx-auto max-w-md">
												<div className="relative">
													<Field
														name="email"
														className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
														type="email"
														placeholder="Email"
													/>
													<ErrorMessage name="email"/>
												</div>
												<div className="relative">
													<Field
													
														name="password"
														className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
														type="password"
														placeholder="Password"
													/>
														<ErrorMessage name="password"/>
												</div>
												<div className="relative">
													<Field
													
														name="confirmPassword"
														className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
														type="password"
														placeholder="Confirm Password"
													/>
														<ErrorMessage name="confirmPassword"/>
												</div>

												<div className="flex items-center justify-between mt-5">
													<div className="inline-flex items-center">
														<div
															className="relative flex items-center  rounded-full cursor-pointer"
															htmlFor="remember"
														>
															<input
																type="checkbox"
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
														<div className="ml-3 text-sm">
															<label
																htmlFor="remember"
																className="text-gray-500 dark:text-gray-300 cursor-pointer"
															>
																I accept the{' '}
																<a
																	className="font-medium text-primary-600 hover:underline dark:text-primary-500"
																	href="#"
																>
																	Terms and Conditions
																</a>
															</label>
														</div>
													</div>
												</div>

												<button
													type="submit"
													disabled={isSubmitting}
													className="mt-5 tracking-wide font-semibold bg-primary-default text-white-500 w-full py-3 rounded-md hover:bg-primary-light/70 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
												>
													<span className=" text-white">Sign Up</span>
												</button>

												<p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
													Already have an account?{' '}
													<Link
														to="/login"
														className="font-medium text-primary-600 hover:underline dark:text-primary-500"
													>
														Login here
													</Link>
												</p>

												{/*  */}

												<div className="flex gap-4 w-max"></div>
												{/*  */}
											</div>
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

export default SignUp;
