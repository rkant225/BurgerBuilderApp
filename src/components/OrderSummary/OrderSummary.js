import React from 'react';
import Aux from '../../hoc/Auxilary'
import Button from '../UI/Button/Button'
const OrderSummary =(props) =>{
    const ingridientsSummary = Object.keys(props.ingridients)
        .map((igKey,index)=>{
        return <li key={igKey}><strong>{igKey}</strong> : {props.ingridients[igKey]}</li>
        });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>You have added following ingridients :</p>
            <ul>
                {ingridientsSummary}
            </ul>
            <p>Total Price : <strong>{props.totalPrice.toFixed(2)}</strong></p>
            <h4>Continue to checkout?</h4>
            <Button btnType="Danger" onClicked={props.handleCancle}>Cancle</Button>
            <Button btnType="Success" onClicked={props.handleContinue}>Continue</Button>

        </Aux>
    );

}

export default OrderSummary;