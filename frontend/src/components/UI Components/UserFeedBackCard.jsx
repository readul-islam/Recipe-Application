import React from 'react';

const UserFeedBackCard = () => {
	return (
		<>
			<div className="bg-white/90 max-w-44 m-4 p-4 rounded-2xl shadow">
				<p className="text-gray-900 text-xs text- font-serif ">
					The menu provided is very varied and made by skilled chefs Perfect.
				</p>
				<div className="flex mt-2 space-x-2">
					<div className="w-8 h-8 r">
						{' '}
						<img
							className="rounded-full"
							src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
							alt=""
						/>
					</div>
					<div className="font-semibold text-xs font-serif">
						<h3 className="">jessica Owen</h3>
						<p className="text-gray-400 text-[10px]">Food Blogger</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserFeedBackCard;
