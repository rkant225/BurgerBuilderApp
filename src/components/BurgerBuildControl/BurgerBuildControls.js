import React  from 'react';
import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl'
import './BurgerBuildControls.css'

const controls = [
    {label : 'Salad', type : 'Salad'},
    {label : 'Bacon', type : 'Bacon'},
    {label : 'Cheese', type : 'Cheese'},
    {label : 'Meat', type : 'Meat'},
]

const BurgerBuildControls = (props) =>{
    return(
        <div className="BurgerBuildControls">
            <div><strong>Total price : {props.totalPrice.toFixed(2)}</strong></div>
            {
                controls.map((ctrl,index)=>{
                    return <BurgerBuildControl 
                             key={ctrl.label} 
                             label={ctrl.label}
                             addIngridients = {() => props.addIngridients(ctrl.type)}
                             removeIngridients = {() => props.removeIngridients(ctrl.type)}
                             disabled = {props.disabledInfo[ctrl.type]} />
                })
            }
            <button className="OrderButton" onClick = {props.purchaseHandler} disabled={!props.canOrder}>ORDER NOW</button>
        </div>
    );
}

export default BurgerBuildControls;