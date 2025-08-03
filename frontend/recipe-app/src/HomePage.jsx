import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css'; // Import the CSS file
import chefFavicon from './assets/chef-logo-favicon.png';

const apiUrl = import.meta.env.VITE_API_URL;

function HomePage() {
  const [welcome, setWelcome] = useState('');
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 10; // or make this state if you want to let users change it
  const [total, setTotal] = useState(0);

  // Fetch welcome message from the API
  useEffect(() => {
    axios.get(`${apiUrl}/`)
      .then(res => setWelcome(res.data || res))
      .catch(() => setWelcome('Welcome!'));
  }, []);

  // Fetch recipes when search changes (debounced)
  useEffect(() => {
    if (!search) {
      setRecipes([]);
      setError('');
      setTotal(0);
      return;
    }
    setLoading(true);
    const timeout = setTimeout(() => {
      axios.get(`${apiUrl}/recipes/search?name=${encodeURIComponent(search)}&page=${page}&per_page=${perPage}`)
        .then(res => {
          setRecipes(res.data.recipes);
          setTotal(res.data.total);
          setError('');
        })
        .catch(() => setError('Failed to fetch recipes'))
        .finally(() => setLoading(false));
    }, 400);

    return () => clearTimeout(timeout);
  }, [search, page]);

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <div className="home-container">
      <h2 className="welcome-text">
        {typeof welcome === 'string' ? welcome : 'Welcome to Cookery Portal'}
      </h2>
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

      {loading && <div style={{ color: '#fff', marginTop: '1rem' }}>Searching...</div>}
      {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}

      <div className="recipe-tiles">
        {recipes.map(recipe => (
          <Link to={`/recipes/${recipe._id}`} className="recipe-tile" key={recipe._id}>
            <div className="recipe-title">{recipe.title}</div>
            {/* Optionally add image, description, etc. */}
          </Link>
        ))}
      </div>

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
    </div>
  );
}
export default HomePage;
