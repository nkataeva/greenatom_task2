import React, { useState } from 'react';
import wikiStore from '../data/WikiStore';
import styles from '../styles/SearcherArticle.module.scss';
import search from '../images/search.png'

const WikipediaSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [formattedArticles, setFormattedArticles] = useState([]);

  const searchArticles = async () => {
    await wikiStore.searchArticles(searchQuery);
    const results = wikiStore.searchResults;
    if (results.length === 0) {
      setFormattedArticles([]);
    } else {
      setFormattedArticles(results.map((result) => ({
        id: result.pageid,
        title: result.title,
        link: `https://en.wikipedia.org/wiki/${result.title.replace(/\s/g, '_')}`
      })));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchArticles();
      event.preventDefault();
    }
  }

  return (
    <div className={styles.search}>
      <div className={styles.header}>
        <p id={styles.title}>Wikipedia Search</p>
        <img id={styles.img} src={search} alt='search-img'></img>
      </div>

      <div className={styles['search-form']}>
        <input
          id={styles['search-input']}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button id={styles['search-button']} onClick={searchArticles}>Search</button>
      </div>

      {formattedArticles.length === 0 ? (<p id={styles.nothing}>There were no results matching the query.</p>) :
        (<ul className={styles.list}>
          {formattedArticles.map((result, index) => (
            <li className={styles.el} key={index} onClick={() => window.open(result.link, '_blank')}>
              <p>{result.title}</p>
            </li>
          ))}
        </ul>)}
    </div>
  );
};

export default WikipediaSearch;