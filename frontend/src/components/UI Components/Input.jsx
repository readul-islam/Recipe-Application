import React from "react";

const Input = ({type ,name,...others}) => {
  return (
    <label>
      <span className="pl-1 font-semibold text-sm text-gray-500">{name}</span>
      <input
      {...others}
      name={name}
        class="w-full px-7 mt-1 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type={type}
       
      />
    </label>
  );
};

export default Input;
