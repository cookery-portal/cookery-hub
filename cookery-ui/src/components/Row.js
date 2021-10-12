import React,{ useEffect, useState } from "react";
import "./Row.css"
import axios from 'axios';
import xtype from 'xtypejs'
const Row=(props)=> {
  const { title, recipeType } = props;

  const leafRoot = 'Recipes';

  useEffect(() => {
    fetchRecipes(recipeType);
  }, []);

  let recipes=[]
  const fetchRecipes = (recipeType) => {
      console.log("entered fetch Recipes...")
      const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
      }; 
      try{
        const body = JSON.stringify({ recipeType });
        const movieRef=axios.get("http://localhost:8000/firstpage/swe", config)
        .then(function (response) {
          console.log("rspns")
          console.log(response.data[0].meals);
          recipes=response.data[0].meals;

          console.log("result")

          //console.log(recipes1)
          console.log(xtype(response.data[0].meals))
          console.log(movieRef)
          this.setState({data: response.data[0].meals})

          /*if (recipes && recipes.length !== 0) {
            setRecipes(() => recipes);
          }*/
        });
        
        
        
      } catch (err) {
          
      }
  }
    
    
  /*
  const recipes1 = [
    
    {
      img: 'https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg',
      title: 'dinner'
    },
    {
        img: 'https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg',
        title: 'Breakfst'
    },
    {
        img: 'https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg',
        title: 'lunch'
    },
    {
      img: 'https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg',
      title: 'dinner'
    },
    {
        img: 'https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg',
        title: 'Breakfst'
    },
    {
        img: 'https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg',
        title: 'lunch'
    },
    {
      img: 'https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg',
      title: 'dinner'
    },
    {
        img: 'https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg',
        title: 'Breakfst'
    },
    ];*/
  
  /*const fetchRecipes = (recipeType) => {
      const recipes = ;
      if (recipes && recipes.length !== 0) {
        setRecipes(() => recipes);
      }
  }*/

  return (
      <div class="basicLayout dark" >
        <div className="row">
      <h2 color='black'>{title}</h2>
      <div className="row__posters">
        {this.state.data.map((recipe) =>(
          <img
            className="row__poster row__posterLarge"
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Row;