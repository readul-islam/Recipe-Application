import React from 'react';
import Input from '../../../components/UI Components/Input';
import { Field } from 'formik';

const TakeBasicInfo = () => {
	return (
		<>
			<div className="grid grid-cols-2 gap-6 my-4">
				<Field as={Input} name="Title" placeholder="Enter Recipe Title" type={'text'} />
				{/* <label htmlFor="">
					<span className="pl-l font-semibold text-sm text-gray-500">Category</span>
					<select
						className="w-full px-2 mt-1 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
						name=""
						id=""
					>
						<option defaultChecked value="">
							Select
						</option>
						<option value="">Noddle</option>
						<option value="">Pasta</option>
						<option value="">Burger</option>
						<option value="">Fry</option>
					</select>
				</label>
				<label htmlFor="">
					<span className="pl-l font-semibold text-sm text-gray-500">Cuisine</span>
					<select
						className="w-full px-2 mt-1 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
						name=""
						id=""
					>
						<option defaultChecked value="">
							Select
						</option>
						<option value="">Italian</option>
						<option value="">Japanese</option>
					</select>
				</label> */}

				<Field as={Input} name="PrepTime" placeholder="" type={'text'} />
				<Field as={Input} name="CookTime" placeholder="" type={'text'} />
				<Field as={Input} name="TotalTime" placeholder="" type={'text'} />
				<Field as={Input} name="Servings" placeholder="" type={'text'} />
				<Field as={Input} name="Calory" placeholder="" type={'text'} />
			</div>

			<label className="">
				<span className="pl-l font-semibold text-sm text-gray-500">
					description
				</span>
				<textarea
					placeholder="Enter your short description....."
					className="w-full px-7 mt-1 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
					col=""
					rows={'4'}
				/>
			</label>
		</>
	);
};

export default TakeBasicInfo;
