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
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter a topic to search"
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input w-72 rounded border border-gray-600 px-2 py-1"
      />
      <button
        type="submit"
        className="search-button ml-2 w-32 rounded bg-purple-700 px-4 py-1 text-white hover:bg-purple-500"
      >
        Search
      </button>
    </form>
  );
};

export default Search;