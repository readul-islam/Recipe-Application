import React, { useState } from 'react';
import uploadCloudinary from '../../utils/uploadCloudinary';
import { ModalWrapper } from './ModalWrapper';
import { DialogBody, DialogHeader } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import { userCurrentUser } from '../../redux/features/auth/authSlice';
import { useGetImagesQuery, useImageUploadMutation } from '../../Api/commonApi';
import { CheckIcon } from '@heroicons/react/24/solid';
import selectIcon from '../../assets/checkIcon.svg';

const UploadImageView = ({ handleOpen, imageHandler, open }) => {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [link, setLinks] = useState([]);
	const [selected, setSelected] = useState('');
	const user = useSelector(userCurrentUser);
	console.log(user);

	const { data } = useGetImagesQuery({ userId: user._id });
	const [addImage, { isLoading }] = useImageUploadMutation();
	console.log(data);

	const uploadImageHandler = async (e) => {
		const images = e.target.files;
		console.log(images);
		if (images.length > 0) {
			console.log('upload');
			let arr = [];
			setLoading(true);
			for (let i = 0; i < images.length; i++) {
				const data = await uploadCloudinary(images[i]);
				if (data?.url) {
					const uploadDB = await addImage({
						img: data.url,
						userId: user._id,
					});
					console.log(uploadDB);
				}
				console.log(data);
				arr.push(data);
			}
			setLoading(false);
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
						{data?.data &&
							data.data.map(({ img }, index) => (
								<div
									onClick={() => {
										setSelected(img);
										imageHandler(img);
									}}
									key={index}
									className=" relative md:w-32 md:h-32 h-28 w-28 border"
								>
									{selected === img && (
										<div className="absolute bg-gray-500/50 md:w-32 md:h-32 h-28 w-28 flex flex-col justify-center items-center">
											<img
												width="36"
												height="36"
												src="https://img.icons8.com/fluency/48/verified-account--v2.png"
												alt="verified-account--v2"
											/>
										</div>
									)}
									<img className="w-full h-full object-cover" src={img} alt="" />
								</div>
							))}

						{loading && (
							<div className="md:w-32 md:h-32 h-28 w-28  flex flex-col justify-center items-center border">
								<svg
									aria-hidden="true"
									class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary-default"
									viewBox="0 0 100 101"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
										fill="currentColor"
									/>
									<path
										d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
										fill="currentFill"
									/>
								</svg>
								<span class="sr-only">Loading...</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</ModalWrapper>
	);
};

export default UploadImageView;
