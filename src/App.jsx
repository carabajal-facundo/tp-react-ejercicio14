import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Detalle from './assets/components/pages/Detalle';
import React, { useState, useEffect } from 'react';
function App() {
  const [recipes, setRecipes] = useState([]);

  // Cargar recetas almacenadas en el Local Storage al cargar el componente
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  // Manejar el envío del formulario para agregar una nueva receta
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const title = event.target.elements.title.value;
    const ingredients = event.target.elements.ingredients.value.split(',');

    // Crear una nueva receta
    const newRecipe = {
      id: new Date().getTime(), // Usar una marca de tiempo como identificador único
      title,
      ingredients,
    };

    // Actualizar la lista de recetas
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);

    // Limpiar el formulario
    event.target.reset();
  };

  // Guardar las recetas en el Local Storage cuando cambien
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  // Renderizar las tarjetas de recetas
  const renderRecipeCards = () => {
    return recipes.map((recipe) => (
      <div key={recipe.id} className="recipe-card">
        <h2>{recipe.title}</h2>
        <h3>Ingredientes:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.trim()}</li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <>
    <Detalle></Detalle>
    <div>
      <h1>Recetas de cocina</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Título de la receta:</label>
        <input type="text" id="title" required />
        <label htmlFor="ingredients">Ingredientes (separados por coma):</label>
        <input type="text" id="ingredients" required />
        <button type="submit">Agregar receta</button>
      </form>
      <div className="recipe-cards-container">{renderRecipeCards()}</div>
    </div>
    </>
  )
}

export default App
