import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0]?.props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="xl:flex  xl:space-x-8  w-full items-start  ">
      <div className="flex xl:flex-col  items-start xl:w-48 ">
        {children.map((child, index) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? "2xl:border-r-2 border-b-2 2xl:border-b-0   text-primary-default  border-primary-default"
                : ""
            }  font-semibold  md:pr-8 py-4 ${
              index === 0
                ? "xl:pb-9 xl:pt-0"
                : index === children.length - 1
                ? "xl:pt-9"
                : "xl:py-14"
            }  w-full md:text-left xl:flex xl:border-r-2 border-b-2 xl:border-b-0 `}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            <div className="flex items-center space-x-2 justify-center">
              <p className="bg-gray-300 hidden xl:flex p-1 shadow rounded-full">
                {" "}
                {child.props?.icon}
              </p>
              <p className="md:text-lg text-base">{child.props.label}</p>
            </div>
          </button>
        ))}
      </div>
      <div className="py-4 w-full">
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
    <div label={label} className="hidden w-full">
      {children}
    </div>
  );
};
export { Tabs, Tab };
