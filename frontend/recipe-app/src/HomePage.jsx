import { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css'; // Import the CSS file

const apiUrl = import.meta.env.VITE_API_URL;

function HomePage() {
  const [welcome, setWelcome] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`${apiUrl}/`)
      .then(res => setWelcome(res.data || res))
      .catch(() => setWelcome('Welcome!'));
  }, []);

  const handleSearch = (e) => setSearch(e.target.value);

  // Optional: Implement actual search on submit, e.g., calling an API

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
          {/* SVG search icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>
    </div>
  );
}
export default HomePage;
