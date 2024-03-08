import React, { useState } from 'react';
import UploadImageView from '../../../components/UI Components/UploadImageView';

const AddThumbnail = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(!open);
	};
	return (
		<>
			<div className="my-4 min-h-32">
				<p>
					Add Thumbnail{' '}
					<span
						onClick={handleOpen}
						className="text-sm px-2 bg-orange-400 rounded-full py-1 cursor-pointer"
					>
						select
					</span>
				</p>
			</div>
			<UploadImageView open={open} handleOpen={handleOpen} />
		</>
	);
};

export default AddThumbnail;
