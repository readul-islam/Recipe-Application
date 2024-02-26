import React from 'react';

const Tag = ({ children }) => {
	return (
		<span className="bg-slate-200 text-gray-900 text-sm font-semibold rounded-full  px-3 shadow py-1.5  cursor-pointer hover:bg-primary-default hover:text-white  text-center">
			{children}
		</span>
	);
};

export default Tag;
