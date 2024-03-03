import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Field } from 'formik';
import React, { useState } from 'react';
import Input from '../../../components/UI Components/Input';
import IntergridentsWrapper from '../components/IntergridentWrapper';

const TakeIngredientsAndTags = () => {
	const [intergridents, setIntergridents] = useState([{}]);
	const TextArea = () => {
		return (
			<label className="">
				<span className="pl-l font-semibold text-sm text-gray-500">Note</span>
				<textarea
					placeholder="Enter your short description....."
					className="w-full px-7 mt-1 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
					col=""
					rows={'2'}
				/>
			</label>
		);
	};
	var container = document.getElementById('Intergridents');

	return (
		<div>
			<h3 className="px-1  text-md font-semibold ">Intergridents</h3>
			<IntergridentsWrapper>
				<div className="border p-4 rounded-lg mb-2">
					<div className="ingredients-section grid md:grid-cols-2 md:gap-6 ">
						<Field
							as={Input}
							className="bg-white"
							name="name"
							placeholder=""
							type={'text'}
						/>
						<Field as={Input} name="quantity" placeholder="" type={'text'} />
					</div>
					<Field name="firstName" component={TextArea} placeholder="First Name" />
				</div>
			</IntergridentsWrapper>
			<h3 className="px-1 pb-2 text-md font-semibold mb-">Tags</h3>
			<div className="max-h-72 overflow-y-scroll ">
				<div className="border p-4 rounded-xl mb-2">
					<div className="ingredients-section grid md:grid-cols-2 md:gap-6 ">
						<Field as={Input} name="name" placeholder="" type={'text'} />
						<Field as={Input} name="quantity" placeholder="" type={'text'} />
					</div>
					<Field name="firstName" component={TextArea} placeholder="First Name" />
				</div>
				{/* <div className="border p-4 rounded-xl mb-2">
					<div className="ingredients-section grid grid-cols-2 gap-6 ">
						<Field as={Input} name="name" placeholder="" type={'text'} />
						<Field as={Input} name="quantity" placeholder="" type={'text'} />
					</div>
					<Field name="firstName" component={TextArea} placeholder="First Name" />
				</div> */}
				{/* <div className="border p-4 rounded-xl mb-2">
					<div className="ingredients-section grid grid-cols-2 gap-6 ">
						<Field as={Input} name="name" placeholder="" type={'text'} />
						<Field as={Input} name="quantity" placeholder="" type={'text'} />
					</div>
					<Field name="firstName" component={TextArea} placeholder="First Name" />
				</div> */}
			</div>
		</div>
	);
};

export default TakeIngredientsAndTags;
