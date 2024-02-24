import React from "react";

const ScreenWrapper = ({ className, children }) => {
  return (
    <div className={`${className && className} container mx-auto px-4`}>
    {  children}
    </div>
  );
};

export default ScreenWrapper;
