import React, { useState } from 'react';
import UploadImageView from '../../../components/UI Components/UploadImageView';

const AddThumbnail = ({ thumbnail, setThumbnail }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};
	const imageHandler = (image) => {
		setThumbnail(image);
	};
	return (
		<>
			<div className="my-4 min-h-32">
				<p className="font-semibold flex items-center gap-2">
					Add Thumbnail
					<p
						onClick={handleOpen}
						className="text-sm px-4 bg-gray-400 text-center rounded-full py-1 cursor-pointer"
					>
						select
					</p>
				</p>
				<div className="md:w-32 md:h-32 h-28 w-28  my-2 ">
					{thumbnail && (
						<img
							className="w-full h-full object-cover rounded-md"
							src={thumbnail}
							alt="thumbnail"
						/>
					)}
				</div>
			</div>
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

export default AddThumbnail;
