import React from 'react';
import './model.css';
import Aux from'../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop'

const  model = (props) => (
    <Aux>
        <Backdrop show ={props.show} modelClosed={props.modelClosed}/>
        <div className="Modal"
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
    </Aux>
);

export default model;