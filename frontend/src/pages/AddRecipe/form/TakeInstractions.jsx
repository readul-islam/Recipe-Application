import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import UploadImageView from '../../../components/UI Components/UploadImageView';
import IntergridentsWrapper from '../components/IntergridentWrapper';

const initialInt = {
	instruction: '',
	img: '',
};

const TakeInstructions = () => {
	const [open, setOpen] = React.useState(false);
	const [instructions, setInstructions] = useState([{ ...initialInt }]);
	const handler = () => {
		setInstructions((pre) => [...pre, initialInt]);
	};
	const handleOpen = () => {
		setOpen(!open);
	};
	return (
		<>
			<div className="md:px-4 bg-gray-50  rounded-md">
				<IntergridentsWrapper handler={handler}>
					{instructions.map((inst, index) => (
						<div className="bg-white relative md:px-4 py-2 rounded-md mb-4">
							<span className="absolute top-2 right-[50%] text-gray-600 font-extrabold">
								No {index + 1}
							</span>
							<button onClick={handleOpen} className="bg-orange-400 py-1 px-2 block rounded-lg mb-2 text-xs">
								Add Image
							</button>
							<label className="">
								<span className="  font-semibold text-sm text-gray-500">
									Instruction
								</span>
								<textarea
									// onChange={(e) => {
									// 	setIntergridents((prevArr) => {
									// 		const result = [...prevArr];
									// 		result[index]['note'] = e.target.value;
									// 		return result;
									// 	});
									// }}
									// value={inter.note}
									placeholder="Enter your short description....."
									className="w-full px-3  py-2 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
									col=""
									rows={'4'}
								/>
							</label>
						</div>
					))}
				</IntergridentsWrapper>

			
			</div>
			<UploadImageView open={open} handleOpen={handleOpen} />
		</>
	);
};

export default TakeInstructions;
