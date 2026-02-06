import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './RecipeDetails.css';

const apiUrl = import.meta.env.VITE_API_URL;

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${apiUrl}/recipes/${id}`)
      .then(res => setRecipe(res.data))
      .catch(() => setError('Failed to fetch recipe details'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!recipe) return <div className="error">No recipe found.</div>;

  return (
    <div className="recipe-root">
      {/* Container 1: Fixed Header with App Logo + Recipe Name (no description) */}
      <div className="recipe-header-container">
        <div className="recipe-header-content">
          {/* App Logo area - for future */}
          <div className="app-logo-section">
            {/* Future: App logo will go here */}
          </div>
          
          {/* Recipe Name Section below app logo (only title, no description) */}
          <div className="recipe-name-content">
            <h1 className="recipe-main-title">{recipe.title}</h1>
          </div>
        </div>
      </div>

      {/* Container 2: Scrollable Page Content */}
      <div className="recipe-scroll-container">
        <div className="recipe-content-area">
          <div className="recipe-columns">
            {/* Left: Cooking Steps (swapped from right side) - BIGGER */}
            <div className="recipe-cooking-container">
              <div className="instructions-box">
                <h2 className="instructions-title">Cooking Steps</h2>
                <div className="cooking-steps">
                  <div className="step-placeholder">
                    <p>Detailed cooking steps will be added here in future updates.</p>
                    <p className="step-note">For now, refer to the recipe story on the right for cooking guidance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Recipe Story + Ingredients (swapped from left side) - SMALLER */}
            <div className="recipe-story-ingredients-container">
              {/* Recipe Story - smaller */}
              <div className="recipe-story-container">
                <div className="recipe-story-box">
                  <h2 className="story-title">Recipe Story</h2>
                  <div className="story-content">
                    {/* Description displayed here */}
                    {recipe.description && (
                      <p className="recipe-description">{recipe.description}</p>
                    )}
                    
                    <p>{recipe.instructions || 'This delicious recipe has been carefully crafted to bring you the perfect balance of flavors and textures.'}</p>

                    <div className="recipe-meta">
                      <div className="meta-item">
                        <span className="meta-label">Prep Time:</span>
                        <span className="meta-value">{recipe.prepTime || '15 mins'}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Cook Time:</span>
                        <span className="meta-value">{recipe.cookTime || '30 mins'}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Serves:</span>
                        <span className="meta-value">{recipe.serves || '4 people'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ingredients - smaller */}
              <div className="ingredients-box">
                <h2 className="ingredients-title">Ingredients</h2>
                <div className="ingredients-list">
                  {recipe.ingredients && recipe.ingredients.length > 0 ? (
                    Array.isArray(recipe.ingredients)
                      ? recipe.ingredients.map((ingredient, index) => (
                          <div key={index} className="ingredient-item">
                            <div className="ingredient-bullet"></div>
                            <span className="ingredient-text">
                              {typeof ingredient === 'object' && ingredient !== null
                                ? `${ingredient.amount || ''} ${ingredient.name || ''}`.trim()
                                : ingredient}
                            </span>
                          </div>
                        ))
                      : recipe.ingredients
                          .split('\n')
                          .filter(item => item.trim())
                          .map((ingredient, index) => (
                            <div key={index} className="ingredient-item">
                              <div className="ingredient-bullet"></div>
                              <span className="ingredient-text">{ingredient.trim()}</span>
                            </div>
                          ))
                  ) : (
                    <div className="no-ingredients">
                      <p>Ingredients will be listed here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;