import React,{ Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuilderControls
  from "../../components/Burger/BuildControls/BuildControls";
import Model from '../../components/UI/Model/model';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery'

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7
};

class BurgerBuilder extends Component{

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseAble: false,
    purchasing: false
  };


  purchaseHandler = () =>{
      this.setState({purchasing: true});
  };

  updatePurchaseState =(updatedIngredients) => {
    const sum = Object.keys(updatedIngredients).map(igKey =>{
      return updatedIngredients[igKey];
    }).reduce((sum, el)=>{
      return sum + el;
    }, 0);
    this.setState({purchaseAble: sum >0});
  };

  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount +1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCounted;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice +priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount -1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCounted;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  };

  render(){
    const disableInfo = {
      ...this.state.ingredients
    };
    for( let key in disableInfo){
      disableInfo[key] = disableInfo[key]<=0;
    }
      return (
        <Aux>
          <Model show ={this.state.purchasing}
                 modelClosed = {this.purchaseCancelHandler}
          >
            <OrderSummery ingredients = {this.state.ingredients}/>
          </Model>
          <Burger ingredients = {this.state.ingredients}/>
          <BuilderControls ingredientsAdded={this.addIngredientsHandler}
                           ingredientsRemoved ={this.removeIngredientsHandler}
                           disabled ={disableInfo}
                           purchaseAble = {this.state.purchaseAble}
                           price ={this.state.totalPrice}
                           ordered = {this.purchaseHandler}
          />
        </Aux>
      );
  }
}

export default BurgerBuilder;
