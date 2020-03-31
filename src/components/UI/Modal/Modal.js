import React from 'react';
import './Modal.css'
import Aux from '../../../hoc/Auxilary'
import BackDrop from '../BackDrop/BackDrop'

const Modal = (props) =>{
    return (
        <Aux>
            <BackDrop show={props.show} handleBackDropClick={props.handleBackDropClick}/>
            <div className="Modal" style={{transform : props.show ? "translateY(0)" : "translateY(-100vh)", opacity : props.show ? '1' : '0'}}>
                {props.children}
            </div>
        </Aux>
    );
}

export default Modal;