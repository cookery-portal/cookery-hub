import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddRecipe.css';

const apiUrl = import.meta.env.VITE_API_URL;

function AddRecipe() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', amount: '' }]);
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleIngredientChange = (idx, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[idx][field] = value;
    setIngredients(newIngredients);
  };

  const addIngredient = () => setIngredients([...ingredients, { name: '', amount: '' }]);
  const removeIngredient = (idx) => setIngredients(ingredients.filter((_, i) => i !== idx));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await axios.post(`${apiUrl}/recipes/`, {
        title,
        description,
        ingredients,
        instructions,
      });
      setSuccess('Recipe added successfully!');
      setTimeout(() => navigate('/'), 1200);
    } catch (err) {
      setError('Failed to add recipe');
    }
  };

  return (
    <div className="add-recipe-outer">
      <form className="add-recipe-form" onSubmit={handleSubmit}>
        <h2>Add a New Recipe</h2>
        <div className="form-label">Recipe Title</div>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <div className="form-label">Description</div>
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <div className="form-label">Ingredients</div>
        {ingredients.map((ing, idx) => (
          <div className="ingredient-row" key={idx}>
            <input
              type="text"
              placeholder="Name"
              value={ing.name}
              onChange={e => handleIngredientChange(idx, 'name', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Amount"
              value={ing.amount}
              onChange={e => handleIngredientChange(idx, 'amount', e.target.value)}
              required
            />
            {ingredients.length > 1 && (
              <button type="button" className="remove-btn" onClick={() => removeIngredient(idx)} title="Remove Ingredient">×</button>
            )}
          </div>
        ))}
        <button type="button" className="add-btn" onClick={addIngredient}>+ Add Ingredient</button>
        <div className="form-label">Recipe Story</div>
        <textarea
          value={instructions}
          onChange={e => setInstructions(e.target.value)}
          required
          placeholder="Write your recipe as a story"
        />
        {error && <div className="form-error">{error}</div>}
        {success && <div className="form-success">{success}</div>}
        <button type="submit" className="submit-btn">Submit Recipe</button>
      </form>
    </div>
  );
}
export default AddRecipe;