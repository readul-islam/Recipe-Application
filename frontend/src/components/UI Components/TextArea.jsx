import React from 'react';

const TextArea = ({ label, ...others }) => {
	return (
		<>
			<label className="">
				<span className="pl-l font-semibold text-[12px] text-gray-500  uppercase">
					{label}
				</span>
				<textarea
					{...others}
					placeholder="Enter your short description....."
					className="w-full px-3 mt-1 py-3 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
					col=""
					rows={'4'}
				/>
			</label>
		</>
	);
};

export default TextArea;
