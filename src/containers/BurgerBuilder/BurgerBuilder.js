import React from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger'
import BurgerBuildControls from '../../components/BurgerBuildControl/BurgerBuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
const INGRIDIENT_PRICES = {
    Salad : 0.5,
    Bacon : 1.3,
    Cheese : 1.1,
    Meat : 2.5
}

class BurgerBuilder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ingredients : { Salad : 0, Bacon : 0, Cheese : 0, Meat : 0 },
            totalPrice : 4,
            canOrder : false,
            purchasing : false
        }
    }

    purchaseHandler = () =>{
        this.setState({purchasing : true});
    }

    updatecanOrderFlag =(ingredients) =>{
        const sum = Object.values(ingredients)
                    .reduce((total,curElement)=> {return total + curElement},0)
        this.setState({canOrder : sum > 0})            
    }

    addIngridients = (type) =>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newIngridients = {...this.state.ingredients} 
        newIngridients[type] = newCount;

        let oldTotalPrice = this.state.totalPrice;
        let newTotalPrice = oldTotalPrice + INGRIDIENT_PRICES[type];

        this.setState({ingredients : newIngridients, totalPrice : newTotalPrice});
        this.updatecanOrderFlag(newIngridients);
    }
    removeIngridients = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const newCount = oldCount - 1;
        const newIngridients = {...this.state.ingredients} 
        newIngridients[type] = newCount;

        let oldTotalPrice = this.state.totalPrice;
        let newTotalPrice = oldTotalPrice - INGRIDIENT_PRICES[type];

        this.setState({ingredients : newIngridients, totalPrice : newTotalPrice});
        this.updatecanOrderFlag(newIngridients);
    }

    handleBackDropClick = () =>{
        this.setState({purchasing : false});
    }

    handleContinue = () =>{
        alert("You can Continue!!!")
    }

    render(){
        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Aux>
                
                <Modal show={this.state.purchasing} handleBackDropClick={this.handleBackDropClick}>
                    <OrderSummary 
                    ingridients = {this.state.ingredients}
                    handleCancle = {this.handleBackDropClick}
                    handleContinue = {this.handleContinue}
                    totalPrice = {this.state.totalPrice}/>
                </Modal>
               
                <Burger ingredients={this.state.ingredients}/>
                <BurgerBuildControls
                    addIngridients = {this.addIngridients}
                    removeIngridients = {this.removeIngridients}
                    totalPrice = {this.state.totalPrice}
                    disabledInfo = {disabledInfo}
                    canOrder ={this.state.canOrder}
                    purchaseHandler = {this.purchaseHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;