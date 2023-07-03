// Components/SearchResults.js
import React from "react";

const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return <p className="text-white">No results found</p>;
  }

  return (
    <ul className="mt-8 flex flex-col items-center justify-center font-sans">
      {results.map((result) => (
        <li key={result.objectID}>
          <a
            href={result.url}
            className="hover-sm:text-slate-50 hover-sm:bg-purple-300 cursor-pointer text-slate-50 hover:text-purple-300"
          >
            {result.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
