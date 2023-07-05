import './App.css';
import WikipediaSearch from './components/SearcherArticle';
import RandomArticle from './components/RandomArticle';

function App() {
  return (
    <div className='App'>
      <WikipediaSearch />
      <RandomArticle />
    </div>
  );
}

export default App;
