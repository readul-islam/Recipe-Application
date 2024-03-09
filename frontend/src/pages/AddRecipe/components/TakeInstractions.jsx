import React, { useState } from 'react';
import UploadImageView from '../../../components/UI Components/UploadImageView';
import AddThumbnail from './AddThumbnail';
import IntergridentsWrapper from './IntergridentWrapper';
import TextArea from '../../../components/UI Components/TextArea';

export const initialInt = {
	instruction: '',
	img: '',
};

const TakeInstructions = ({
	instructions,
	setInstructions,
	thumbnail,
	setThumbnail,
}) => {
	const [open, setOpen] = React.useState(false);

	const [selectedCard, setSelectedCard] = useState('');
	const handler = () => {
		setInstructions((pre) => [...pre, initialInt]);
	};
	const handleOpen = () => {
		setOpen(!open);
	};
	const imageHandler = (img) => {
		setInstructions((prevArr) => {
			const result = [...prevArr];
			result[selectedCard]['img'] = img;
			return result;
		});
	};
	return (
		<>
			<div className="md:px-4 bg-gray-50  rounded-md">
				<IntergridentsWrapper handler={handler}>
					{instructions.map((inst, index) => (
						<div
							key={index}
							className="bg-white relative md:px-4 py-2 rounded-md mb-4"
						>
							<span className="absolute top-2 right-[50%] text-gray-600 font-extrabold">
								Step {index + 1}
							</span>

							<button
								onClick={() => {
									handleOpen();
									setSelectedCard(index);
								}}
								className="bg-orange-400 py-1 px-2 block rounded-lg mb-2 text-xs"
							>
								Add Image
							</button>
							{inst.img && (
								<div className="md:w-14 absolute left-24 top-2  md:h-[52px]   ">
									{
										<img
											className="w-full rounded-md h-full object-cover"
											src={inst.img}
											alt="thumbnail"
										/>
									}
								</div>
							)}

							{/* <label className="">
								<span className="  font-semibold text-sm text-gray-500">
									Instruction
								</span>
								<textarea
									onChange={(e) => {
										setInstructions((prevArr) => {
											const result = [...prevArr];
											result[index]['instruction'] = e.target.value;
											return result;
										});
									}}
									value={inst.note}
									placeholder="Enter your short description....."
									className="w-full px-3  py-2 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
									col=""
									rows={'4'}
								/>
							</label> */}
							<TextArea
								onChange={(e) => {
									setInstructions((prevArr) => {
										const result = [...prevArr];
										result[index]['instruction'] = e.target.value;
										return result;
									});
								}}
								value={inst.note}
								label={'Instruction'}
							/>
						</div>
					))}
				</IntergridentsWrapper>
			</div>
			<AddThumbnail thumbnail={thumbnail} setThumbnail={setThumbnail} />

			{open && (
				<UploadImageView
					imageHandler={imageHandler}
					open={open}
					handleOpen={handleOpen}
				/>
			)}
		</>
	);
};

export default TakeInstructions;
