import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';
import chefFavicon from './assets/chef-logo-favicon.png';

const apiUrl = import.meta.env.VITE_API_URL;

function HomePage() {
  const [welcome, setWelcome] = useState('');
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 9;
  const [total, setTotal] = useState(0);

  // Fetch welcome message from the API
  useEffect(() => {
    axios.get(`${apiUrl}/`)
      .then(res => setWelcome(res.data || res))
      .catch(() => setWelcome('Welcome!'));
  }, []);

  // Fetch recipes (search or all, paginated)
  useEffect(() => {
    setLoading(true);
    setError('');
    let url = '';
    if (search) {
      url = `${apiUrl}/recipes/search?name=${encodeURIComponent(search)}&page=${page}&per_page=${perPage}`;
    } else {
      url = `${apiUrl}/recipes/?page=${page}&per_page=${perPage}`;
    }
    const timeout = setTimeout(() => {
      axios.get(url)
        .then(res => {
          // Handle both { recipes: [...], total: ... } and array response
          if (Array.isArray(res.data.recipes)) {
            setRecipes(res.data.recipes);
            setTotal(res.data.total || res.data.recipes.length || 0);
          } else if (Array.isArray(res.data)) {
            setRecipes(res.data);
            setTotal(res.data.length);
          } else {
            setRecipes([]);
            setTotal(0);
          }
          setError('');
        })
        .catch(() => setError('Failed to fetch recipes'))
        .finally(() => setLoading(false));
    }, 400);

    return () => clearTimeout(timeout);
  }, [search, page]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1); // Reset to first page on new search
  };

  return (
  <div className="home-root">
    <div className="home-header-container">
      <h2 className="welcome-text">
        {typeof welcome === 'string' ? welcome : 'Welcome to Cookery Portal'}
      </h2>
      <div className="search-bar-fixed">
        <form className="search-form" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            className="search-input"
            placeholder="Search recipes..."
            value={search}
            onChange={handleSearch}
          />
          <button type="submit" className="search-button" aria-label="Search">
            <img
              src={chefFavicon}
              alt="Chef Favicon"
              className="search-logo"
            />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>
      </div>
      {loading && <div style={{ color: '#fff', marginTop: '1rem' }}>Searching...</div>}
      {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
    </div>
    <div className="home-scroll-container">
      <div className="recipes-scroll-area">
        <div className="recipe-tiles">
          {recipes.map(recipe => (
            <Link to={`/recipes/${recipe._id}`} className="recipe-tile" key={recipe._id}>
              <div className="recipe-tile-header">
                <img src={chefFavicon} alt="Recipe" className="recipe-tile-icon" />
                <div className="recipe-title">{recipe.title}</div>
              </div>
              <div className="recipe-desc">{recipe.description}</div>
            </Link>
          ))}
        </div>
        {total > perPage && (
          <div className="pagination-controls">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>
            <span>Page {page} of {Math.ceil(total / perPage)}</span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page >= Math.ceil(total / perPage)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);
}

export default HomePage;