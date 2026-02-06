import { Link } from 'react-router-dom';
import logo from './assets/cookery-logo.png';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <Link to="/">
        <img src={logo} alt="App Logo" className="app-logo" />
      </Link>
      <div className="header-actions">
        <Link to="/add-recipe" className="add-recipe-btn">Add Recipe</Link>
      </div>
    </header>
  );
}
export default Header;