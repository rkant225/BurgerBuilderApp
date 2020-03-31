import React from 'react';
import './BurgerIngridient.css';
import PropTypes from 'prop-types';


const BurgerIngridient = (props) =>{
    let ingridient = null;
    switch(props.type){
        case('BreadBottom'):
            ingridient = <div className="BreadBottom"></div>;
            break;
        case('BreadTop'):
            ingridient = (
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div> );
            break;   
        case('Meat'):
            ingridient = <div className="Meat"></div>;
            break;
        case('Cheese'):
            ingridient = <div className="Cheese"></div>;
            break;
        case('Salad'):
            ingridient = <div className="Salad"></div>;
            break;
        case('Bacon'):
            ingridient = <div className="Bacon"></div>;
            break;
        default:
            ingridient = null;
    }

    return ingridient;
}

BurgerIngridient.propTypes = {
    type : PropTypes.string.isRequired
}

export default BurgerIngridient;