import React, { useState } from "react";

import "../../styles/VerticalTab.css"
import VTlist from "./VTlist";
import VTcontent from "./VTcontent";



function VerticalTab(props) {
  const [activeTabId, setActiveTabId] = useState(0);

  function btnClick(id) {
    setActiveTabId(id);
  }

  return (
    <div className="section__Jobs-container">
      <div className="flex space-x-5">
        <div>
          <div className="section__Jobs-styledTab">
            <ul className="section__Jobs-styledTabList space-y-3">
              {props.data.map((job, index) => (
                <VTlist
                  key={index}
                  onClick={btnClick}
                  data={job}
                  index={index}
                  activeTabId={activeTabId}
                />
              ))}
            </ul>
          </div>
        </div>
        <div >
          {props.data.map((job, index) => (
            <VTcontent
              data={job}
              key={index}
              index={index}
              activeTabId={activeTabId}
            />
          ))}
        </div>
      </div>
      <span
        className={
          activeTabId === 0
            ? "index1-chosen"
            : activeTabId === 1
            ? "index2-chosen"
            : "index3-chosen"
        }
      >
        &nbsp;
      </span>
    </div>
  );
}

export default VerticalTab;
