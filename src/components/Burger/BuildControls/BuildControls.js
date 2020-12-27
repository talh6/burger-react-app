import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label:'Salad' , type:'salad'},
    {label:'Bacon' , type:'bacon'},
    {label:'Cheese' , type:'cheese'},
    {label:'Meat' , type:'meat'}
];


const builderControls = (props) => (
    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
        {controls.map(ctrl =>{
           return  <BuildControl key={ctrl.label}
                                 label={ctrl.label}
                                 added={() => props.ingredientsAdded(ctrl.type)}
                                 removed={ () => props.ingredientsRemoved(ctrl.type)}
                                 disabled={props.disabled[ctrl.type]}/>
        })}
        <button className="OrderButton"
        disabled={!props.purchaseAble}
        >ORDER NOW</button>
    </div>
);

export default builderControls;
