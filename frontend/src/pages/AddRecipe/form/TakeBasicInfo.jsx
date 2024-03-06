import React from 'react';
import Input from '../../../components/UI Components/Input';
import { Field } from 'formik';

const TakeBasicInfo = () => {
	return (
		<div className="md:px-4 px-1 bg-gray-50 py-4 rounded-md">
			<div className="bg-white px-4 py-4 rounded-md">
				<div className="grid md:grid-cols-2 gap-1 md:gap-6 my-4  ">
					<Field
						as={Input}
						label="title"
						name="title"
						placeholder="Enter Recipe Title"
						type={'text'}
					/>

					<Field
						as={Input}
						label="Prepare time"
						name="prepTime"
						placeholder="Ex: 10 min"
						type={'text'}
					/>
					<Field
						as={Input}
						label="cooking time"
						name="cookTime"
						placeholder="Ex: 10 min"
						type={'text'}
					/>
					<Field
						as={Input}
						label="total time"
						name="totalTime"
						placeholder="Ex: 20 min"
						type={'text'}
					/>
					<Field
						as={Input}
						label="servings"
						name="servings"
						placeholder="Ex: 4 p"
						type={'text'}
					/>
					<Field
						as={Input}
						label="category"
						name="category"
						placeholder="Ex: Dessert"
						type={'text'}
					/>
					<Field
						as={Input}
						label="cuisine"
						name="cuisine"
						placeholder="Ex: Italian"
						type={'text'}
					/>
					<Field
						as={Input}
						label="Total calory"
						name="cuisine"
						placeholder="Ex: 128 cal"
						type={'text'}
					/>
				</div>

				<label className="">
					<span className="pl-l font-semibold text-[12px] text-gray-500  uppercase">
						description
					</span>
					<textarea
						placeholder="Enter your short description....."
						className="w-full px-7 mt-1 py-3 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
						col=""
						rows={'4'}
					/>
				</label>
			</div>
		</div>
	);
};

export default TakeBasicInfo;
