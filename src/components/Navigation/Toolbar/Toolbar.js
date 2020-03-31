import React from 'react';
import './Toolbar.css'
import Logo from '../../Logo/Logo'

const Toolbar = (props) =>{
    return(
    <header className="Toolbar">
        <div>Menu</div>
        <Logo/>
        <nav>Navigation</nav>
    </header>
    );
}
export default Toolbar;