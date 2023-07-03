import React from "react";

const Spinner = () => {
  return (
    <div className="spinner-container mt-4 flex justify-center">
      <div className="spinner h-6 w-6 sm:h-8 sm:w-8 animate-spin rounded-full border-4 border-solid border-purple-700 border-r-transparent"></div>
    </div>
  );
};

export default Spinner;
