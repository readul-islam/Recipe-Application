import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0]?.props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="md:flex md:space-x-8 items-baseline  ">
      <div className="flex md:flex-col  items-start md:w-48 ">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? "md:border-r-2 border-b-2 md:border-b-0   text-primary-default  border-primary-default"
                : ""
            }  font-semibold  md:pr-8 py-4 w-full md:text-left md:flex md:border-r-2 border-b-2 md:border-b-0 `}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            <div className="flex items-center space-x-2 justify-center">
              <p className="bg-gray-300 hidden md:flex p-1 shadow rounded-full">
                {" "}
                {child.props?.icon}
              </p>
              <p className="md:text-lg text-base">{child.props.label}</p>
            </div>
          </button>
        ))}
      </div>
      <div className="py-4">
        {children?.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };
