import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="search-form flex flex-col items-center sm:flex-row"
    >
      <input
        type="text"
        placeholder="Enter a text to search"
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input mt-2 w-full rounded border border-gray-600 px-2 py-1 sm:mr-2 sm:w-72"
      />
      <button
        type="submit"
        className="search-button mt-2 w-full rounded bg-purple-700 px-4 py-1 text-white hover:bg-purple-500 sm:w-auto"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
