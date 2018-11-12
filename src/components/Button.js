import React from "react";

const Button = ({ buttonFunction, buttonClass }) => {
  return (
    <button onClick={buttonFunction}>
      <i className={buttonClass} />
    </button>
  );
};

export default Button;
