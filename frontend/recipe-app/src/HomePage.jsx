import { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

function HomePage() {
  const [welcome, setWelcome] = useState('');
  const [search, setSearch] = useState('');

  // Fetch welcome message
  useEffect(() => {
    axios.get(`${apiUrl}/`)
      .then(res => setWelcome(res.data || res))
      .catch(() => setWelcome('Welcome!'));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h2>{typeof welcome === 'string' ? welcome : 'Welcome to Cookery Portal'}</h2>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={handleSearch}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '60%' }}
      />
    </div>
  );
}
export default HomePage;