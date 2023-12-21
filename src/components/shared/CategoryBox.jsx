import React from "react";

const CategoryBox = ({ label, icon: Icon }) => {
  return (
    <>
      <div>
        <Icon />
      </div>
      <div>{label}</div>
    </>
  );
};

export default CategoryBox;
