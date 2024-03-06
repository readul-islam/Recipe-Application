import React from 'react';

const Input = ({ type, name, label, style, ...others }) => {
	return (
		<label>
			<span className="pl-1 uppercase font-semibold text-[12px] text-gray-500">
				{label}
			</span>
			<input
				{...others}
				name={name}
				className={`${style && style} w-full px-3  py-2.5 rounded-lg font-medium  border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
				type={type}
			/>
		</label>
	);
};

export default Input;
