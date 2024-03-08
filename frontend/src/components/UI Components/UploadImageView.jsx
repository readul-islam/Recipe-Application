import React, { useState } from 'react';
import uploadCloudinary from '../../utils/uploadCloudinary';
import { ModalWrapper } from './ModalWrapper';
import { DialogBody, DialogHeader } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import { userCurrentUser } from '../../redux/features/auth/authSlice';
import { useGetImagesQuery } from '../../Api/commonApi';

const UploadImageView = ({ handleOpen, open }) => {
	const [images, setImages] = useState([]);
	const [link, setLinks] = useState([]);
	const user = useSelector(userCurrentUser);
	console.log(user)

	const {data:addData} = useGetImagesQuery();
	
	const uploadImageHandler = async (e) => {
		const images = e.target.files;
		console.log(images);
		if (images.length > 0) {
			console.log('upload');
			let arr = [];
			for (let i = 0; i < images.length; i++) {
				const data = await uploadCloudinary(images[i]);
				console.log(data);
				arr.push(data);
			}
			setLinks(arr);
		}
	};

	return (
		<ModalWrapper open={open} handleOpen={handleOpen}>
			<div className="py-4 px-4 border-b  flex items-center justify-between">
				<h3 className="font-semibold font-sans py-1.5">
					Select Image from your Gallery
				</h3>
				<label className="bg-orange-800 cursor-pointer text-white px-4 py-1.5 rounded-md">
					Upload
					<input
						onChange={uploadImageHandler}
						className="hidden"
						multiple={true}
						type="file"
					/>
				</label>
			</div>

			<div className="border  rounded-md">
				<div className="min-h-96 px-4 py-4">
					<div className="grid grid-cols-2 md:grid-cols-5 justify-items-center xl:grid-cols-7 2xl:grid-cols-10 gap-x-2 gap-y-3">
						{link &&
							link.map(({ url }) => (
								<div className="md:w-32 md:h-32 h-28 w-28 border">
									<img className="w-full h-full object-cover" src={url} alt="" />
								</div>
							))}
					</div>
				</div>
			</div>
		</ModalWrapper>
	);
};

export default UploadImageView;
