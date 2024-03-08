import React, { useState } from 'react';
import Input from '../../../components/UI Components/Input';
import { TagField } from '../../../components/UI Components/TagField';
import useTag from '../../../hooks/useTag';
import IntergridentsWrapper from './IntergridentWrapper';

export const initialData = {
	name: '',
	quantity: '',
	note: '',
};

const TakeIngredientsAndTags = () => {
	const MAX_TAGS = 5;
	const [intergridents, setIntergridents] = useState([
		{ ...initialData },
		{ ...initialData },
	]);
	const { tags, handleAddTag, handleRemoveTag } = useTag(MAX_TAGS);
	const handler = () => {
		setIntergridents((pre) => [...pre, initialData]);
	};

	return (
		<div>
			<IntergridentsWrapper handler={handler}>
				{intergridents.map((inter, index) => (
					<div key={index} className=" p-4 rounded-lg  bg-white mb-4">
						<div className="ingredients-section grid md:grid-cols-2 md:gap-6 mb-1 ">
							<Input
								onChange={(e) => {
									setIntergridents((prevArr) => {
										const result = [...prevArr];
										result[index]['name'] = e.target.value;
										return result;
									});
								}}
								value={inter.name}
								label="name"
								style="!py-2.5 bg-transparent"
								name="name"
								placeholder="Enter intergridents name"
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
								style="!py-2.5 bg-transparent"
								name="quantity"
								label="quantity"
								placeholder="Ex: 1 pis or 1 kg or 1 gm ..."
								type={'text'}
							/>
						</div>
						<label className="">
							<span className="pl-l  font-semibold text-sm text-gray-500">Note</span>
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
								className="w-full px-3  py-2 rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
								col=""
								rows={'2'}
							/>
						</label>
					</div>
				))}
			</IntergridentsWrapper>

			<div className="min-h-36 overflow-y-scroll  px-4 bg-gray-50 py-6 rounded-md">
				<TagField
					tags={tags}
					addTag={handleAddTag}
					removeTag={handleRemoveTag}
					maxTags={MAX_TAGS}
				/>
			</div>
		</div>
	);
};

export default TakeIngredientsAndTags;
