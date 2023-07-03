import React, { useState } from "react";
import Search from "./Components/Search";
import SearchResults from "./Components/SearchResults";
import Spinner from "./Components/Spinner";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (searchTerm) => {
    setLoading(true);
    setError(null);

    fetch(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setResults(data.hits);
      })
      .catch((error) => {
        setLoading(false);
        setError("An error occurred. Please try again later.");
        console.error(error);
      });
  };

  return (
    <div className="mx-auto mt-8 max-w-md">
      <h1 className="mb-4 text-3xl font-bold">Hacker News Search</h1>
      <Search onSearch={handleSearch} />
      {loading ? (
        <Spinner />
      ) : error ? (
        <p className="mt-4 text-red-500">{error}</p>
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
};

export default App;
