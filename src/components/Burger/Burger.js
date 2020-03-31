import React from 'react';
import BurgerIngridient from '../BurgerIngridient/BurgerIngridient';
import './Burger.css';

const Burger = (props) =>{
    let ingridientComponents = Object.keys(props.ingredients)
    .map((igKey,index)=>{return [...Array(props.ingredients[igKey])]
        .map((_,i)=>{return <BurgerIngridient key={igKey + i} type={igKey}/>
        });
    }).reduce((prev,curr)=>{return prev.concat(curr)},[]);
    if(ingridientComponents.length === 0){
        ingridientComponents = <h1>Please start adding some ingridients!!!</h1>
    }
    return(
        <div className="Burger">
            <BurgerIngridient type={"BreadTop"}/>
                {ingridientComponents}
            <BurgerIngridient type={"BreadBottom"}/>
        </div>
    );
}

export default Burger;