import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import RecipeDetails from './RecipeDetails';
import AddRecipe from './AddRecipe';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
export default App;