import React from 'react';
import burger_logo from '../../assets/Images/burger_logo.png'
import './Logo.css'

const Logo =(props)=>{
    return(
        <div className="Logo">
            <img src={burger_logo} alt={"MYBurgerLogo"}/>
        </div>
    );
}

export default Logo;