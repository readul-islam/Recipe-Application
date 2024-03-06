import React from 'react';
import Input from '../../../components/UI Components/Input';
import { Field } from 'formik';

const TakeBasicInfo = () => {
	return (
		<div className='px-4 bg-gray-50 py-4 rounded-md'>
			<div className='bg-white px-4 py-4 rounded-md'>
			<div className="grid md:grid-cols-2 gap-1 md:gap-6 my-4  ">
				<Field
					as={Input}
					label='title'
					name="Title"
					placeholder="Enter Recipe Title"
					type={'text'}
				/>
				

				<Field as={Input} label="Prepare time" name="PrepTime" placeholder="" type={'text'} />
				<Field as={Input} label='cooking time' name="CookTime" placeholder="" type={'text'} />
				<Field as={Input} label='total time' name="TotalTime" placeholder="" type={'text'} />
				<Field as={Input} label='servings' name="Servings" placeholder="" type={'text'} />
				<Field as={Input} label='calory' name="Calory" placeholder="" type={'text'} />
			</div>

			<label className="">
				<span className="pl-l font-semibold text-sm text-gray-500">
					description
				</span>
				<textarea
					placeholder="Enter your short description....."
					className="w-full px-7 mt-1 py-3 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
					col=""
					rows={'10'}
				/>
			</label>
		</div>
		</div>
	);
};

export default TakeBasicInfo;
