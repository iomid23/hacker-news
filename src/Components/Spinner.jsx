import React from "react";

const Spinner = () => {
  return (
    <div className="spinner-container flex justify-center mt-4">
      <div className="spinner h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-700 border-r-transparent"></div>
    </div>
  );
};

export default Spinner;