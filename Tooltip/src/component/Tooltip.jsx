import { useState } from "react";

const Tooltip = () => {
//   creating a state to store the data
  const [data, setData] = useState(false);

  const handleMouseEnter = () => {
    setData(true)
  }

  const handleMouseLeave = () => {
    setData(false)
  }

  return (
    <div className="tooltip_sec" onMouseLeave={handleMouseLeave}>
      <h3 onMouseEnter={handleMouseEnter} >Hover over me!</h3>
      {data && (
        <div className="hover">
         <div className="tooltip_box">
         <p className="hoverData">Thanks for hovering! I'm a tooltip</p>
        </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
