import React from "react";

const Row = ({children}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {children}
    </div>
  );
};

export default Row;
