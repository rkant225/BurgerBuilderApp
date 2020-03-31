import React  from 'react';
import './BurgerBuildControl.css'

const BurgerBuildControl = (props) =>{
    return(
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="Less" onClick={props.removeIngridients} disabled={props.disabled}>Less</button>
            <button className="More" onClick={props.addIngridients}>More</button>
        </div>
    );
}

export default BurgerBuildControl;