import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Lechuga', type: 'salad' },
    { label: 'Salame', type: 'bacon' },
    { label: 'Queso de cabra', type: 'cheese' },
    { label: 'Waygu Patty', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Precio Actual: <strong>{props.price}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>Compre Ya!</button>
    </div>
);

export default buildControls;