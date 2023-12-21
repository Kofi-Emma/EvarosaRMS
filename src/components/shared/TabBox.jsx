import React from "react";

const TabBox = ({ activeTab, menuCategory, children }) => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center gap-2 p-3 hover:text-neutral-800 transition cursor-pointer  w-24 h-12" +
        (activeTab === menuCategory
          ? "border-solid border-2 border-red-600"
          : "border-transparent")
      }
    >
      {children}
    </div>
  );
};

export default TabBox;
