import React, { useState } from 'react';
import axios from 'axios';

const WikipediaSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchArticles = async () => {
    try {
      const response = await axios.get(
        `https://ru.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&format=json&origin=*`
      );
      console.log(response);
      const results = response.data.query.search;
      const formattedResults = results.map((result) => ({
        pageid: result.pageid,
        title: result.title,
        link: `https://ru.wikipedia.org/wiki/${result.title.replace(/\s/g, '_')}`
      }));

      setSearchResults(formattedResults);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div>
      <h1>Wikipedia Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={searchArticles}>Search</button>

      <h2>Search Results</h2>
      <ul>
        {searchResults.map((result) => (
          <li key={result.pageid}>
            <a href={result.link} target="_blank" rel="noopener noreferrer">
              {result.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WikipediaSearch;