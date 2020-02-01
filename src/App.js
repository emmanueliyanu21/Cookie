import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'

const App = () => {

  const APP_ID = '20c64e2c';
  const APP_KEY = '3115a505fcf4699012cdae18caa4d2f8';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    // console.log(data.hits);
    setRecipes(data.hits);

    // fetch('')
    //   .then(response => {
    //   response.json
    // })
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log((search))
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" onChange={updateSearch} value={search} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredient={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
