import React from 'react';
import Input from '../../../components/UI Components/Input';
import { Field } from 'formik';
import TextArea from '../../../components/UI Components/TextArea';

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
						name="calory"
						placeholder="Ex: 128 cal"
						type={'text'}
					/>
				</div>

				<Field as={TextArea} name="description" label="description" />
			</div>
		</div>
	);
};

export default TakeBasicInfo;
