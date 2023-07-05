import axios from 'axios';
import { makeAutoObservable } from 'mobx';

class WikiStore {
  searchResults = [];
  randomArticle = null;

  constructor() {
    makeAutoObservable(this);
  }

  searchArticles = async (searchQuery) => {
    if (!searchQuery) {
      this.searchResults = [];
    } else {
      try {
        const response = await axios.get(
          `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&format=json&origin=*`
        );
        this.searchResults = response.data.query.search;
      } catch (error) {
        console.error(error);
      }
    }
  };

  getRandomArticle = async () => {
    try {
      const response = await axios.get(
        'https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=info&inprop=url&format=json&origin=*'
      );

      const pages = response.data.query.pages;
      const randomPageId = Object.keys(pages)[0];
      this.randomArticle = pages[randomPageId];

    } catch (error) {
      console.error(error);
    }
  };
}

const wikiStore = new WikiStore();

export default wikiStore;