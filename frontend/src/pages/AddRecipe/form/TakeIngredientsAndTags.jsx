import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Field } from 'formik';
import React, { useState } from 'react';
import Input from '../../../components/UI Components/Input';
import IntergridentsWrapper from '../components/IntergridentWrapper';

export const initialData = {
	name: '',
	quantity: 0,
	note: '',
};

const TakeIngredientsAndTags = () => {
	const [intergridents, setIntergridents] = useState([{ ...initialData }]);
	const handler = () => {
		setIntergridents((pre) => [...pre, initialData]);
	};

	return (
		<div>
			<h3 className="px-1  text-md font-semibold ">Intergridents</h3>

			<IntergridentsWrapper handler={handler}>
				{intergridents.map((inter, index) => (
					<div key={index} className="border p-4 rounded-lg mb-2">
						<div className="ingredients-section grid md:grid-cols-2 md:gap-6 ">
							<Input
								onChange={(e) => {
									setIntergridents((prevArr) => {
										const result = [...prevArr];
										result[index]['name'] = e.target.value;
										return result;
									});
								}}
								value={inter.name}
								style="!py-2"
								name="name"
								placeholder=""
								type={'text'}
							/>
							<Input
								onChange={(e) => {
									setIntergridents((prevArr) => {
										const result = [...prevArr];
										result[index]['quantity'] = e.target.value;
										return result;
									});
								}}
								value={inter.quantity}
								style="!py-2"
								name="quantity"
								placeholder=""
								type={'text'}
							/>
						</div>
						<label className="">
							<span className="pl-l font-semibold text-sm text-gray-500">Note</span>
							<textarea
								onChange={(e) => {
									setIntergridents((prevArr) => {
										const result = [...prevArr];
										result[index]['note'] = e.target.value;
										return result;
									});
								}}
								value={inter.note}
								placeholder="Enter your short description....."
								className="w-full px-3 mt-1 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
								col=""
								rows={'2'}
							/>
						</label>
					</div>
				))}
			</IntergridentsWrapper>
			<h3 className="px-1 pb-2 text-md font-semibold mb-">Tags</h3>


			
			{/* <div className="max-h-72 overflow-y-scroll ">
				<div className="border p-4 rounded-xl mb-2">
					<div className="ingredients-section grid md:grid-cols-2 md:gap-6 ">
						<Field as={Input} name="name" placeholder="" type={'text'} />
						<Field as={Input} name="quantity" placeholder="" type={'text'} />
					</div>
					<Field name="firstName" component={TextArea} placeholder="First Name" />
				</div>
				
			</div> */}
		</div>
	);
};

export default TakeIngredientsAndTags;
//const TextArea = () => {
// 	return (
// 		<label className="">
// 			<span className="pl-l font-semibold text-sm text-gray-500">Note</span>
// 			<textarea
// 				placeholder="Enter your short description....."
// 				className="w-full px-7 mt-1 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
// 				col=""
// 				rows={'2'}
// 			/>
// 		</label>
// 	);
// };
