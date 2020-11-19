import React from 'react';
import './Burger.css'
import BurgerIngredient from './BurgerIngridient/BurgerIngridient'

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
  .map(value=>{
      return [...Array(props.ingredients[value])].map((_, i)=>{
        return <BurgerIngredient key={value+ i} type={value}/>
      });
  })
  .reduce((arr,el) =>{
    return arr.concat(el);
  } ,[]);

  if(transformedIngredients.length === 0 ){
    transformedIngredients=<p>Please start adding ingredients</p>
  }

  return (
      <div className="Burger">
        <BurgerIngredient type ="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type ="bread-bottom"/>
      </div>
  );
};

export default burger;
