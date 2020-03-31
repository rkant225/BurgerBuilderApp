import React from 'react';
import Aux from '../../hoc/Auxilary'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => {
    return(
        <Aux>
            <Toolbar/>
            <main className="MainContent">
                {props.children}
            </main>
        </Aux>
    );

}

export default layout;