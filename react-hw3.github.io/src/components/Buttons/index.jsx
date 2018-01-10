import React from "react";

const Buttons = ({ Top, Up, Popular }) => {
  return (
    <div>
      <button onClick={Popular}>popular</button>
      <button onClick={Top}>Top rated</button>
      <button onClick={Up}>Upcoming</button>
    </div>
  );
};

export default Buttons;
