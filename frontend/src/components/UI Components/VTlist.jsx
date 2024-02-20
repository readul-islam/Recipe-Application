import React from "react";

import "../../styles/VTlist.css";

function VTlist(props) {
  const Clicked = () => {
    props.onClick(props.index);
  };

  return (
    <li onClick={()=> props.setActiveIndex(props.index)} key={props.index} style={{ listStyle: "none", textAlign: "left" }}>
      <button
        className={`${props.activeTabId === props.index?"text-primary-default font-semibold":""}`}
        onClick={Clicked}
        // style={
        //   props.activeTabId === props.index
        //     ? { color: "#64ffda" }
        //     : { color: "#8892b0" }
        // }
      >
        {props.data.expData.company}
      </button>
    </li>
  );
}

export default VTlist;
