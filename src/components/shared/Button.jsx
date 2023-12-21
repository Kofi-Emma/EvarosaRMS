import React from "react";

const Button = ({
  color,
  bgColor,
  size,
  borderRadius,
  text,
}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color,
        borderRadius,
      }}
      className={`text-${size} px-6 py-2 mt-6 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
