// Components/SearchResults.js
import React from "react";

const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <ul className="mt-4">
      {results.map((result) => (
        <li key={result.objectID}>
          <a href={result.url} className="text-blue-600">
            {result.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
